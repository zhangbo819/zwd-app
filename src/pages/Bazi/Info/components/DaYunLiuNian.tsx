import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Row} from '../../../../components/Layout';
import WuxingText from '../../components/WuxingText';
import {COLOR_THEME_COMMON} from '../../../../constant/UI';
import {DZ, JQ_12, JZ_60, TG, TG_10} from '../../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../../util/paipan';
import NaYin from '../../../../util/Nayin';
import Shensha from '../../../../util/shensha';
import {PillarItem, PillarTitle} from '..';

const getListDataItem = (
  name: JZ_60,
  title: PillarTitle,
  paipanInfo: PaipanInfo,
) => {
  const {dzcg, dzcg_text} = paipan.getDzcgText(
    [name].map(item => {
      const i = paipan.cdz.findIndex(j => j === item?.[1]);
      return i;
    }),
  );
  const dyZhuxingIndex = TG_10.findIndex(j => j === name[0]);

  const dyItem = {
    title,
    isShow: false,
    zhuxing: paipanInfo.tenMap[dyZhuxingIndex],
    tg: name[0] as TG,
    dz: name[1] as DZ,
    dzcg: dzcg_text[0],
    fx: dzcg[0],
    xingyun: NaYin.getXingYun(name, paipanInfo.bazi[2][0] as TG),
    zizuo: NaYin.getXingYun(name, name[0] as TG),
    nayin: NaYin.getNayin(name),
    ss: Shensha.getData(
      paipanInfo.bazi,
      name,
      paipanInfo.yinli,
      paipanInfo.gender,
    ),
  };
  return dyItem;
};

const DaYunLiuNian: FC<{
  paipanInfo: PaipanInfo;
  pillarShowData: PillarItem[];
  setPillarData: React.Dispatch<React.SetStateAction<PillarItem[]>>;
  handleScrollToEnd: () => void;
}> = ({paipanInfo, pillarShowData, setPillarData, handleScrollToEnd}) => {
  // 当前的大运
  const [activeDyIndex, setActiveDyIndex] = useState(0);
  const [activeLnIndex, setActiveLnIndex] = useState(0);
  const [activeLyIndex, setActiveLyIndex] = useState(0);
  const [activeLrIndex, setActiveLrIndex] = useState(0);
  const [activeLsIndex, setActiveLsIndex] = useState(0);
  const [lyData, setLyData] = useState<
    | null
    | {
        name: JZ_60;
        year: number;
        mouth: number;
        day: number;
        days: {name: JZ_60; mouth: number; day: number; week: string}[];
      }[]
  >(null);
  const [lsData, setLsData] = useState<
    | null
    | {
        name: JZ_60;
        hh: number;
        time_text: string;
      }[]
  >(null);
  const isInit = useRef(true);
  const refLists = useRef<
    Record<'dy' | 'ln' | 'ly' | 'lr' | 'ls', FlatList | null>
  >({
    dy: null,
    ln: null,
    ly: null,
    lr: null,
    ls: null,
  });

  const refLyLsData = useRef({ly_Data: lyData, ls_Data: lsData});
  useEffect(() => {
    refLyLsData.current = {ly_Data: lyData, ls_Data: lsData};
  }, [lyData, lsData]);

  // 大运流年流月等切换后自动更新四柱表
  useEffect(() => {
    // 初始化时不展示大运流年表
    if (isInit.current) {
      isInit.current = false;
      return;
    }

    const dy = paipanInfo.big.data[activeDyIndex];
    let ln = dy.years[activeLnIndex];
    if (!ln) {
      if (activeLnIndex !== 0) {
        const lnIndex = 0;
        ln = dy.years[lnIndex];
        setActiveLnIndex(lnIndex);
      } else {
        // 变成0仍然没有, 这种情况一般是点到了小运
        if (!ln) {
          // 这种情况一般是出生不到一年就起大运，无小运
          Alert.alert('该命主无小运');
        }
      }
      return;
    }

    const {ly_Data, ls_Data} = refLyLsData.current;
    const activeLyData = ly_Data?.[activeLyIndex];
    const activeLrData = activeLyData?.days?.[activeLrIndex];
    if (ly_Data) {
      if (!activeLyData) {
        // console.log('activeLyData', activeLyData);
        setActiveLyIndex(0);
        return;
      }
      if (!activeLrData) {
        // console.log('activeLrData', activeLrData);
        setActiveLrIndex(0);
        return;
      }
    }
    const activeLsData = ls_Data?.[activeLsIndex];
    if (ls_Data && !activeLsData) {
      // console.log('activeLsData', activeLsData);
      setActiveLsIndex(0);
      return;
    }

    setPillarData(s => {
      // 大运
      const dyIndex = s.findIndex(i => i.title === PillarTitle.大运);
      const dyItem = getListDataItem(
        dy.name === '小运' ? dy.xiaoyuns[activeLnIndex] : dy.name,
        PillarTitle.大运,
        paipanInfo,
      );
      if (dyIndex < 0) {
        s.push(dyItem);
      } else {
        dyItem.isShow = s[dyIndex].isShow;
        s[dyIndex] = dyItem;
      }
      // 流年
      const LnIndex = s.findIndex(i => i.title === PillarTitle.流年);
      const LnItem = getListDataItem(ln.name, PillarTitle.流年, paipanInfo);

      if (LnIndex < 0) {
        s.push(LnItem);
      } else {
        LnItem.isShow = s[LnIndex].isShow;
        s[LnIndex] = LnItem;
      }

      // 流月
      if (ly_Data) {
        // 流月
        const ly_tgdz = activeLyData!.name;
        const lyIndex = s.findIndex(i => i.title === PillarTitle.流月);
        const lyItem = getListDataItem(ly_tgdz, PillarTitle.流月, paipanInfo);
        if (lyIndex < 0) {
          s.push(lyItem);
        } else {
          lyItem.isShow = s[lyIndex].isShow;
          s[lyIndex] = lyItem;
        }

        // 流日
        const lr_tgdz = activeLrData!.name;
        const lrIndex = s.findIndex(i => i.title === PillarTitle.流日);
        const lrItem = getListDataItem(lr_tgdz, PillarTitle.流日, paipanInfo);
        if (lrIndex < 0) {
          s.push(lrItem);
        } else {
          lrItem.isShow = s[lrIndex].isShow;
          s[lrIndex] = lrItem;
        }

        // 流时
        if (ls_Data) {
          const ls_tgdz = ls_Data[activeLsIndex]?.name;
          const lsIndex = s.findIndex(i => i.title === PillarTitle.流时);
          const lsItem = getListDataItem(ls_tgdz, PillarTitle.流时, paipanInfo);

          if (lrIndex < 0) {
            s.push(lsItem);
          } else {
            lsItem.isShow = s[lsIndex].isShow;
            s[lsIndex] = lsItem;
          }
        }
      }

      return [...s];
    });
  }, [
    activeDyIndex,
    activeLnIndex,
    activeLrIndex,
    activeLsIndex,
    activeLyIndex,
    paipanInfo,
    setPillarData,
  ]);
  // console.log('render in');

  const getLsDate = ({
    newLiuYueData = lyData,
    newLyIndex = activeLyIndex,
    newLrIndex = activeLrIndex,
  }: {
    newLiuYueData?: any;
    newLyIndex?: number;
    newLrIndex?: number;
  }) => {
    if (newLiuYueData === null) {
      return new Date().getTime();
    }
    const ls_year = newLiuYueData[newLyIndex].year;
    const ls_mouth = newLiuYueData[newLyIndex].days[newLrIndex].mouth;
    const ls_day = newLiuYueData[newLyIndex].days[newLrIndex].day;
    const ls_date = new Date(`${ls_year}-${ls_mouth}-${ls_day}`);
    ls_date.setHours(0);
    // console.log('ls_date', ls_date.toLocaleString(), new Date().getHours());
    return ls_date.getTime();
  };

  // 点击当前
  const handleNow = () => {
    const data = paipanInfo.big.data;

    // 流年、流月
    function _findYearMouthIndex(targetYear: number) {
      let newlnIndex = -1;
      let newDyIndex = data.findIndex(i => {
        return i.years.find((j, yearsIndex) => {
          if (j.year === targetYear) {
            newlnIndex = yearsIndex;
            return true;
          }
          return false;
        });
      });

      // console.log('targetYear', targetYear);

      if (newDyIndex < 0 || newlnIndex < 0) {
        return null;
      }

      const ln_item = paipanInfo.big.data[newDyIndex].years[newlnIndex];
      const newLiuYueData = paipan.getLiuYueByYear(ln_item.year, ln_item.name);
      const nowTime = new Date().getTime();
      let newLyIndex = newLiuYueData.findIndex(i => {
        const last_day = i.days[i.days.length - 1];
        const mouth_max = new Date();
        mouth_max.setFullYear(last_day.year);
        mouth_max.setMonth(last_day.mouth - 1);
        mouth_max.setDate(last_day.day);
        mouth_max.setHours(23, 59, 59);
        return mouth_max.getTime() > nowTime;
      });
      if (newLyIndex === -1) {
        newLyIndex = 0;
      } else if (newLyIndex === 0) {
        const first_day = newLiuYueData[0].days[0];
        const mouth_max = new Date();
        mouth_max.setFullYear(first_day.year);
        mouth_max.setMonth(first_day.mouth - 1);
        mouth_max.setDate(first_day.day);
        mouth_max.setHours(0, 0, 0);
        if (mouth_max.getTime() > nowTime) {
          // 当前年的所有月份小于当前时间，则向前一年找
          // 这种情况一般发生在公历1月至立春前之间
          console.log('整体过大, 向前一年找', targetYear - 1);
          return _findYearMouthIndex(targetYear - 1);
        }
      }

      return {newDyIndex, newlnIndex, newLiuYueData, newLyIndex};
    }

    const YearMouthData = _findYearMouthIndex(new Date().getFullYear());
    if (YearMouthData === null) {
      return;
    }
    const {newDyIndex, newlnIndex, newLiuYueData, newLyIndex} = YearMouthData;

    // console.log('newLiuYueData', JSON.stringify(newLiuYueData, null, 4), newLyIndex);

    setActiveDyIndex(newDyIndex);
    setActiveLnIndex(newlnIndex);
    setLyData(newLiuYueData);
    setActiveLyIndex(newLyIndex);

    // 流日
    // TODO 23点时就到下一天了
    let newLrIndex = newLiuYueData[newLyIndex].days.findIndex(
      i =>
        i.mouth === new Date().getMonth() + 1 && i.day === new Date().getDate(),
    );
    if (newLrIndex === -1) {
      newLrIndex = 0;
    }
    setActiveLrIndex(newLrIndex);

    // 流时
    const ls_date = getLsDate({newLiuYueData, newLyIndex, newLrIndex});
    // console.log('ls_date', ls_date.toLocaleString(), new Date().getHours());
    const newLsData = paipan.getLiuShi(ls_date);
    setLsData(newLsData);
    const newLsIndex = Math.floor((new Date().getHours() + 1) / 2);
    setActiveLsIndex(newLsIndex);

    // 延迟50ms 等待列表数据先更新完再跳转到底部
    setTimeout(() => {
      // 全部显示大运流年
      triggerPillarDataShow(true);
    }, 50);

    // 自动跳转
    refLists.current.dy?.scrollToIndex?.({
      index: newDyIndex,
      viewOffset: 150,
    });
    setTimeout(() => {
      if (refLists.current.ln?.props.data?.[newlnIndex]) {
        refLists.current.ln?.scrollToIndex?.({
          index: newlnIndex,
          viewOffset: 150,
        });
      }
      if (refLists.current.ly?.props.data?.[newLyIndex]) {
        refLists.current.ly?.scrollToIndex?.({
          index: newLyIndex,
          viewOffset: 150,
        });
      }
      if (refLists.current.lr?.props.data?.[newLrIndex]) {
        refLists.current.lr?.scrollToIndex?.({
          index: newLrIndex,
          viewOffset: 150,
        });
      }
      if (refLists.current.ls?.props.data) {
        refLists.current.ls?.scrollToIndex?.({
          index: newLsIndex,
          viewOffset: 150,
        });
      }
    }, 500); // todo 500ms
  };

  //   useEffect(() => {
  //     handleNow();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [paipanInfo]);

  // 显示隐藏表中的大运流年等
  const triggerPillarDataShow = (
    isShow: boolean,
    targets = [
      PillarTitle.大运,
      PillarTitle.流年,
      PillarTitle.流月,
      PillarTitle.流日,
      PillarTitle.流时,
    ],
  ) => {
    setPillarData(s => {
      s.forEach(i => {
        if (targets.includes(i.title as PillarTitle)) {
          i.isShow = isShow;
        }
      });
      return [...s];
    });
    handleScrollToEnd();
  };

  // 大运
  const renderDayun = () => {
    const title_active = pillarShowData.find(i => i.title === PillarTitle.流年); // 为了兼容小运临时处理

    return (
      <View style={styles.rowList}>
        <TouchableOpacity
          style={[styles.listTilte, title_active && styles.activeListTitle]}
          onPress={() => {
            if (title_active) {
              triggerPillarDataShow(false);
            } else {
              triggerPillarDataShow(true, [PillarTitle.大运, PillarTitle.流年]);
            }
          }}>
          <Text
            style={[
              styles.listTitleText,
              title_active && styles.activeListTitle,
            ]}>
            {'大\n运'}
          </Text>
        </TouchableOpacity>
        <FlatList
          ref={r => (refLists.current.dy = r)}
          data={paipanInfo.big.data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'dayun_' + i.name}
          onScrollToIndexFailed={async info => {
            // console.log('dy onScrollToIndexFailed', info);
            refLists.current.ln?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }}
          renderItem={({item, index}) => {
            const isActive = activeDyIndex === index;
            const color = isActive ? '#000' : '#404040';
            const isXiaoYun = item.name === '小运';
            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveDyIndex(index);
                  if (title_active) {
                    triggerPillarDataShow(true, [
                      PillarTitle.大运,
                      PillarTitle.流年,
                    ]);
                    triggerPillarDataShow(false, [
                      PillarTitle.流月,
                      PillarTitle.流日,
                      PillarTitle.流时,
                    ]);
                  }
                  setLyData(null);
                  setLsData(null);
                  handleScrollToEnd();
                }}>
                <Text style={[styles.itemText, {color}]}>
                  {isXiaoYun ? paipanInfo.yy : item.start_time[0]}
                </Text>
                <Text style={[styles.itemText, {color}]}>
                  {isXiaoYun
                    ? `1~${item.years.length}`
                    : item.start_time[0] - paipanInfo.yy + 1}
                  岁
                </Text>
                <WuxingText disabled text={item.name[0]} size="mini">
                  {/* {!isXiaoYun && (
                    <Text style={{color: '#000'}}>
                      {paipan.}
                    </Text>
                  )} */}
                </WuxingText>
                <WuxingText disabled text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流年
  const renderLiunian = () => {
    const activeDyData = paipanInfo.big.data[activeDyIndex];
    const title_active = pillarShowData.find(i => i.title === PillarTitle.流年);

    return (
      <View style={styles.rowList}>
        <TouchableOpacity
          style={[styles.listTilte, title_active && styles.activeListTitle]}
          onPress={() => {
            if (title_active) {
              triggerPillarDataShow(false);
            } else {
              triggerPillarDataShow(true, [PillarTitle.大运, PillarTitle.流年]);
            }
          }}>
          <Text
            style={[
              styles.listTitleText,
              title_active && styles.activeListTitle,
            ]}>
            {'流\n年'}
          </Text>
        </TouchableOpacity>
        <FlatList
          ref={r => (refLists.current.ln = r)}
          data={activeDyData.years}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'liunian_' + i.year}
          onScrollToIndexFailed={async info => {
            // console.log('ln onScrollToIndexFailed', info);
            await new Promise(resolve => setTimeout(resolve, 200));
            refLists.current.ln?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }}
          renderItem={({item, index}) => {
            const isActive = activeLnIndex === index;
            const color = isActive ? '#000' : '#404040';
            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setLyData(paipan.getLiuYueByYear(item.year, item.name));
                  setActiveLnIndex(index);
                  setLsData(null);
                  if (title_active || !lyData) {
                    handleScrollToEnd();
                    // triggerPillarDataShow(true);
                    // triggerPillarDataShow(false, [PillarTitle.流时]);
                  }
                }}>
                <Text style={[styles.itemText, {color}]}>{item.year}</Text>
                <WuxingText disabled text={item.name[0]} size="mini" />
                <WuxingText disabled text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流月
  const renderLiuyue = () => {
    const title_active = pillarShowData.find(i => i.title === PillarTitle.流月);

    return (
      <View style={styles.rowList}>
        {lyData !== null && (
          <TouchableOpacity
            style={[styles.listTilte, title_active && styles.activeListTitle]}
            onPress={() => {
              if (title_active) {
                triggerPillarDataShow(false, [
                  PillarTitle.流月,
                  PillarTitle.流日,
                  PillarTitle.流时,
                ]);
              } else {
                triggerPillarDataShow(true, [
                  PillarTitle.大运,
                  PillarTitle.流年,
                  PillarTitle.流月,
                ]);
              }
            }}>
            <Text
              style={[
                styles.listTitleText,
                title_active && styles.activeListTitle,
              ]}>
              {'流\n月'}
            </Text>
          </TouchableOpacity>
        )}
        <FlatList
          ref={r => (refLists.current.ly = r)}
          data={lyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'Liuyue_' + i.year + i.mouth + i.day}
          onScrollToIndexFailed={async info => {
            // console.log('ly onScrollToIndexFailed', info);
            await new Promise(resolve => setTimeout(resolve, 200));
            refLists.current.ly?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }}
          renderItem={({item, index}) => {
            const isActive = activeLyIndex === index;
            const color = isActive ? '#000' : '#404040';

            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveLyIndex(index);
                  setLsData(null);
                  if (title_active) {
                    handleScrollToEnd();
                    // triggerPillarDataShow(true);
                    // triggerPillarDataShow(false, [PillarTitle.流时]);
                  }
                }}>
                <Text>{JQ_12[index]}</Text>
                <Text style={[styles.itemText, {color}]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText disabled text={item.name[0]} size="mini" />
                <WuxingText disabled text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流日
  const renderLiuri = () => {
    const title_active = pillarShowData.find(i => i.title === PillarTitle.流日);

    return (
      <View style={styles.rowList}>
        {lyData !== null && (
          <TouchableOpacity
            style={[styles.listTilte, title_active && styles.activeListTitle]}
            onPress={() => {
              if (title_active) {
                triggerPillarDataShow(false, [
                  PillarTitle.流日,
                  PillarTitle.流时,
                ]);
              } else {
                triggerPillarDataShow(true, [
                  PillarTitle.大运,
                  PillarTitle.流年,
                  PillarTitle.流月,
                  PillarTitle.流日,
                ]);
              }
            }}>
            <Text
              style={[
                styles.listTitleText,
                title_active && styles.activeListTitle,
              ]}>
              {'流\n日'}
            </Text>
          </TouchableOpacity>
        )}
        <FlatList
          ref={r => (refLists.current.lr = r)}
          data={
            lyData === null || !lyData[activeLyIndex]
              ? []
              : lyData[activeLyIndex].days
          }
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'Liuri_' + i.mouth + i.day + i.name}
          onScrollToIndexFailed={async info => {
            // console.log('lr onScrollToIndexFailed', info);
            await new Promise(resolve => setTimeout(resolve, 200));
            refLists.current.lr?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }}
          renderItem={({item, index}) => {
            const isActive = activeLrIndex === index;
            const color = isActive ? '#000' : '#404040';

            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  const newLsData = paipan.getLiuShi(
                    getLsDate({newLrIndex: index}),
                  );
                  setLsData(newLsData);
                  setActiveLrIndex(index);
                  if (title_active || !lsData) {
                    handleScrollToEnd();
                    // triggerPillarDataShow(true);
                  }
                }}>
                <Text>{item.week}</Text>
                <Text style={[styles.itemText, {color}]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText disabled text={item.name[0]} size="mini" />
                <WuxingText disabled text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流时
  const renderLiushi = () => {
    const title_active = pillarShowData.find(i => i.title === PillarTitle.流时);

    return (
      <View style={styles.rowList}>
        {lsData !== null && (
          <TouchableOpacity
            style={[styles.listTilte, title_active && styles.activeListTitle]}
            onPress={() => {
              if (title_active) {
                triggerPillarDataShow(false, [PillarTitle.流时]);
              } else {
                triggerPillarDataShow(true);
              }
            }}>
            <Text
              style={[
                styles.listTitleText,
                title_active && styles.activeListTitle,
              ]}>
              {'流\n时'}
            </Text>
          </TouchableOpacity>
        )}
        <FlatList
          ref={r => (refLists.current.ls = r)}
          data={lsData === null ? [] : lsData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'Liushi_' + i.name}
          onScrollToIndexFailed={async info => {
            // console.log('lr onScrollToIndexFailed', info);
            await new Promise(resolve => setTimeout(resolve, 200));
            refLists.current.ls?.scrollToIndex({
              index: info.index,
              animated: true,
            });
          }}
          renderItem={({item, index}) => {
            const isActive = activeLsIndex === index;
            const color = isActive ? '#000' : '#404040';

            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveLsIndex(index);
                  if (title_active) {
                    handleScrollToEnd();
                    // triggerPillarDataShow(true);
                  }
                }}>
                <Text style={[styles.itemText, {color}]}>{item.name[1]}时</Text>
                <Text style={[styles.itemText, {color}]}>{item.time_text}</Text>
                <WuxingText disabled text={item.name[0]} size="mini" />
                <WuxingText disabled text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  const activeDyData = paipanInfo.big.data[activeDyIndex];

  return (
    <View style={styles.container}>
      <View style={styles.tools}>
        <Text>起运：出生后{paipanInfo.big.start_desc}</Text>
        {activeDyData.years[activeLnIndex] && (
          <Text>{`${
            activeDyData.years[activeLnIndex].year - paipanInfo.yy
          }岁`}</Text>
        )}
        <Row>
          <TouchableOpacity
            style={styles.toolNowBtn}
            onPress={() => {
              triggerPillarDataShow(false);
              handleScrollToEnd();
            }}>
            <Text style={styles.toolNowText}>关闭</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolNowBtn} onPress={handleNow}>
            <Text style={styles.toolNowText}>今</Text>
          </TouchableOpacity>
        </Row>
      </View>
      {renderDayun()}
      {renderLiunian()}
      {renderLiuyue()}
      {renderLiuri()}
      {renderLiushi()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  tools: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 16,
  },
  rowList: {
    marginTop: 12,
    flexDirection: 'row',
  },
  toolNowBtn: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  toolNowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_THEME_COMMON,
  },
  listTilte: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderColor: COLOR_THEME_COMMON,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    opacity: 0.8,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  activeListTitle: {
    backgroundColor: COLOR_THEME_COMMON,
    color: '#fff',
    opacity: 1,
  },
  listTitleText: {
    fontSize: 18,
    color: COLOR_THEME_COMMON,
    fontWeight: 'bold',
  },
  dayunItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    padding: 8,
    backgroundColor: '#fff',
  },
  itemText: {
    marginBottom: 4,
    fontSize: 14,
  },
  dayunItemActive: {
    backgroundColor: '#EEEEEE',
  },
});

export default DaYunLiuNian;
