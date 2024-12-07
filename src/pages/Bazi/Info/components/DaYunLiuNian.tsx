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
        days: {name: JZ_60; mouth: number; day: number}[];
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
      // 这种情况一般是点到了小运
      const lnIndex = 0;
      ln = dy.years[lnIndex];
      setActiveLnIndex(lnIndex);
      if (!ln) {
        // 这种情况一般是出生不到一年就起大运，无小运
        Alert.alert('该命主无小运');
        return;
      }
    }

    const {dzcg, dzcg_text} = paipan.getDzcgText(
      [dy.name, ln.name].map(item => {
        const i = paipan.cdz.findIndex(j => j === item?.[1]);
        return i;
      }),
    );

    setPillarData(s => {
      // 大运
      const dyIndex = s.findIndex(i => i.title === PillarTitle.大运);
      const dyZhuxingIndex = TG_10.findIndex(j => j === dy.name[0]);
      const dyItem = {
        title: PillarTitle.大运,
        isShow: true,
        zhuxing: paipanInfo.tenMap[dyZhuxingIndex],
        tg: dy.name[0] as TG,
        dz: dy.name[1] as DZ,
        dzcg: dzcg_text[0],
        fx: dzcg[0],
        xingyun:
          dy.name === '小运'
            ? null
            : NaYin.getXingYun(dy.name, paipanInfo.bazi[2][0] as TG),
        zizuo:
          dy.name === '小运'
            ? null
            : NaYin.getXingYun(dy.name, dy.name[0] as TG),
        nayin: dy.name === '小运' ? '' : NaYin.getNayin(dy.name),
        ss:
          dy.name === '小运'
            ? []
            : Shensha.getData(
                paipanInfo.bazi,
                dy.name,
                paipanInfo.yinli,
                paipanInfo.gender,
              ),
      };
      if (dyIndex < 0) {
        s.push(dyItem);
      } else {
        dyItem.isShow = s[dyIndex].isShow;
        s[dyIndex] = dyItem;
      }
      // 流年
      const LnIndex = s.findIndex(i => i.title === PillarTitle.流年);
      const LnZhuxingIndex = TG_10.findIndex(j => j === ln.name[0]);
      const LnItem = {
        title: PillarTitle.流年,
        isShow: true,
        zhuxing: paipanInfo.tenMap[LnZhuxingIndex],
        tg: ln.name[0] as TG,
        dz: ln.name[1] as DZ,
        dzcg: dzcg_text[1],
        fx: dzcg[1],
        xingyun: NaYin.getXingYun(ln.name, paipanInfo.bazi[2][0] as TG),
        zizuo: NaYin.getXingYun(ln.name, ln.name[0] as TG),
        nayin: NaYin.getNayin(ln.name),
        ss: Shensha.getData(
          paipanInfo.bazi,
          ln.name,
          paipanInfo.yinli,
          paipanInfo.gender,
        ),
      };
      if (LnIndex < 0) {
        s.push(LnItem);
      } else {
        LnItem.isShow = s[LnIndex].isShow;
        s[LnIndex] = LnItem;
      }
      const {ly_Data, ls_Data} = refLyLsData.current;
      // 流月
      if (ly_Data) {
        const activeLyData = ly_Data[activeLyIndex];
        const activeLrData = activeLyData.days[activeLrIndex]; // TODO err activeLrIndex
        const ly_tgdz = activeLyData.name;
        const lr_tgdz = activeLrData?.name;
        const ls_tgdz =
          ls_Data === null ? JZ_60.甲子 : ls_Data[activeLsIndex]?.name;

        const {dzcg: lyr_dzcg, dzcg_text: lyr_dzcg_text} = paipan.getDzcgText(
          [ly_tgdz, lr_tgdz, ls_tgdz].map(item =>
            paipan.cdz.findIndex(j => j === item?.[1]),
          ),
        );
        // 流月
        const lyIndex = s.findIndex(i => i.title === PillarTitle.流月);
        const LyZhuxingIndex = TG_10.findIndex(j => j === ly_tgdz[0]);
        const lyItem = {
          title: PillarTitle.流月,
          isShow: true,
          zhuxing: paipanInfo.tenMap[LyZhuxingIndex],
          tg: ly_tgdz[0] as TG,
          dz: ly_tgdz[1] as DZ,
          dzcg: lyr_dzcg_text[0],
          fx: lyr_dzcg[0],
          xingyun: NaYin.getXingYun(ly_tgdz, paipanInfo.bazi[2][0] as TG),
          zizuo: NaYin.getXingYun(ly_tgdz, ly_tgdz[0] as TG),
          nayin: NaYin.getNayin(ly_tgdz),
          ss: Shensha.getData(
            paipanInfo.bazi,
            ly_tgdz,
            paipanInfo.yinli,
            paipanInfo.gender,
          ),
        };
        if (lyIndex < 0) {
          s.push(lyItem);
        } else {
          lyItem.isShow = s[lyIndex].isShow;
          s[lyIndex] = lyItem;
        }
        // 流日
        const lrIndex = s.findIndex(i => i.title === PillarTitle.流日);
        const LrZhuxingIndex = TG_10.findIndex(j => j === lr_tgdz[0]);
        const lrItem = {
          title: PillarTitle.流日,
          isShow: true,
          zhuxing: paipanInfo.tenMap[LrZhuxingIndex],
          tg: lr_tgdz[0] as TG,
          dz: lr_tgdz[1] as DZ,
          dzcg: lyr_dzcg_text[1],
          fx: lyr_dzcg[1],
          xingyun: NaYin.getXingYun(lr_tgdz, paipanInfo.bazi[2][0] as TG),
          zizuo: NaYin.getXingYun(lr_tgdz, lr_tgdz[0] as TG),
          nayin: NaYin.getNayin(lr_tgdz),
          ss: Shensha.getData(
            paipanInfo.bazi,
            lr_tgdz,
            paipanInfo.yinli,
            paipanInfo.gender,
          ),
        };
        if (lrIndex < 0) {
          s.push(lrItem);
        } else {
          lrItem.isShow = s[lrIndex].isShow;
          s[lrIndex] = lrItem;
        }

        // 流时
        const lsIndex = s.findIndex(i => i.title === PillarTitle.流时);
        const LsZhuxingIndex = TG_10.findIndex(j => j === ls_tgdz[0]);
        const lsItem = {
          title: PillarTitle.流时,
          isShow: true,
          zhuxing: paipanInfo.tenMap[LsZhuxingIndex],
          tg: ls_tgdz[0] as TG,
          dz: ls_tgdz[1] as DZ,
          dzcg: lyr_dzcg_text[2],
          fx: lyr_dzcg[2],
          xingyun: NaYin.getXingYun(ls_tgdz, paipanInfo.bazi[2][0] as TG),
          zizuo: NaYin.getXingYun(ls_tgdz, ls_tgdz[0] as TG),
          nayin: NaYin.getNayin(ls_tgdz),
          ss: Shensha.getData(
            paipanInfo.bazi,
            ls_tgdz,
            paipanInfo.yinli,
            paipanInfo.gender,
          ),
        };
        if (lrIndex < 0) {
          s.push(lsItem);
        } else {
          lsItem.isShow = s[lsIndex].isShow;
          s[lsIndex] = lsItem;
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
    const nowYears = new Date().getFullYear();
    let newlnIndex = -1;
    const newDyIndex = data.findIndex(i => {
      return i.years.find((j, yearsIndex) => {
        if (j.year === nowYears) {
          newlnIndex = yearsIndex;
          return true;
        }
        return false;
      });
    });
    if (newDyIndex < 0 || newlnIndex < 0) {
      return;
    }
    setActiveDyIndex(newDyIndex);
    setActiveLnIndex(newlnIndex);

    // 流月
    const ln_item = paipanInfo.big.data[newDyIndex].years[newlnIndex];
    const newLiuYueData = paipan.getLiuYueByYear(ln_item.year, ln_item.name);
    setLyData(newLiuYueData);
    const newLyIndex = newLiuYueData.findIndex(i => {
      const last_day = i.days[i.days.length - 1];
      const mouth_max = new Date();
      mouth_max.setFullYear(last_day.year);
      mouth_max.setMonth(last_day.mouth - 1);
      mouth_max.setDate(last_day.day);
      mouth_max.setHours(23, 59, 59);
      return mouth_max.getTime() > new Date().getTime();
    });
    setActiveLyIndex(newLyIndex);

    // 流日
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
            await new Promise(resolve => setTimeout(resolve, 500));
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
                  if (title_active) {
                    triggerPillarDataShow(true);
                    triggerPillarDataShow(false, [PillarTitle.流时]);
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
                    triggerPillarDataShow(true);
                    triggerPillarDataShow(false, [PillarTitle.流时]);
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
                  if (title_active) {
                    triggerPillarDataShow(true);
                  }
                }}>
                {/* <Text>{JQ_12[index]}</Text> */}
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
                    triggerPillarDataShow(true);
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
