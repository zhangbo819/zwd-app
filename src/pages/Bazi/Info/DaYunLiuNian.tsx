import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {JQ_12, JZ_60, TG, TG_10} from '../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../util/paipan';
import NaYin from '../../../util/Nayin';
import Shensha from '../../../util/shensha';
import WuxingText from './WuxingText';
import {PillarItem, PillarTitle} from '.';
import {COLOR_THEME_COMMON} from '../../../constant/UI';

const DaYunLiuNian: FC<{
  paipanInfo: PaipanInfo;
  setPillarData: React.Dispatch<React.SetStateAction<PillarItem[]>>;
}> = ({paipanInfo, setPillarData}) => {
  // 当前的大运
  const [activeDyIndex, setActiveDyIndex] = useState(0);
  const [activeLnIndex, setActiveLnIndex] = useState(0);
  const [activeLyIndex, setActiveLyIndex] = useState(0);
  const [activeLrIndex, setActiveLrIndex] = useState(0);
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
  const isInit = useRef(true);
  const refLists = useRef<Record<'dy' | 'ln' | 'ly' | 'lr', FlatList | null>>({
    dy: null,
    ln: null,
    ly: null,
    lr: null,
  });

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
        zhuxing: paipanInfo.tenMap[dyZhuxingIndex],
        tg: dy.name[0],
        dz: dy.name[1],
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
        s[dyIndex] = dyItem;
      }
      // 流年
      const LnIndex = s.findIndex(i => i.title === PillarTitle.流年);
      const LnZhuxingIndex = TG_10.findIndex(j => j === ln.name[0]);
      const LnItem = {
        title: PillarTitle.流年,
        zhuxing: paipanInfo.tenMap[LnZhuxingIndex],
        tg: ln.name[0],
        dz: ln.name[1],
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
        s[LnIndex] = LnItem;
      }
      // 流月
      if (lyData) {
        const activeLyData = lyData[activeLyIndex];
        const activeLrData = activeLyData.days[activeLrIndex];
        const ly_tgdz = activeLyData.name;
        const lr_tgdz = activeLrData.name;

        const {dzcg, dzcg_text} = paipan.getDzcgText(
          [ly_tgdz, lr_tgdz].map(item =>
            paipan.cdz.findIndex(j => j === item?.[1]),
          ),
        );

        const lyIndex = s.findIndex(i => i.title === PillarTitle.流月);
        const LyZhuxingIndex = TG_10.findIndex(j => j === ly_tgdz[0]);
        const lyItem = {
          title: PillarTitle.流月,
          zhuxing: paipanInfo.tenMap[LyZhuxingIndex],
          tg: ly_tgdz[0],
          dz: ly_tgdz[1],
          dzcg: dzcg_text[0],
          fx: dzcg[0],
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
          s[lyIndex] = lyItem;
        }

        const lrIndex = s.findIndex(i => i.title === PillarTitle.流日);
        const LrZhuxingIndex = TG_10.findIndex(j => j === lr_tgdz[0]);
        const lrItem = {
          title: PillarTitle.流日,
          zhuxing: paipanInfo.tenMap[LrZhuxingIndex],
          tg: lr_tgdz[0],
          dz: lr_tgdz[1],
          dzcg: dzcg_text[0],
          fx: dzcg[0],
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
          s[lrIndex] = lrItem;
        }
      }

      return [...s];
    });
  }, [
    activeDyIndex,
    activeLnIndex,
    activeLrIndex,
    activeLyIndex,
    lyData,
    paipanInfo,
    setPillarData,
  ]);
  // console.log('render in');

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
      mouth_max.setMonth(last_day.mouth - 1);
      mouth_max.setDate(last_day.day);
      return mouth_max.getTime() > new Date().getTime();
    });
    setActiveLyIndex(newLyIndex);
    // 流日
    const newLrIndex = newLiuYueData[newLyIndex].days.findIndex(
      i =>
        i.mouth === new Date().getMonth() + 1 && i.day === new Date().getDate(),
    );
    setActiveLrIndex(newLrIndex);

    // 自动跳转
    refLists.current.dy?.scrollToIndex?.({
      index: activeDyIndex,
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
    }, 800); // todo 800ms
  };

  //   useEffect(() => {
  //     handleNow();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [paipanInfo]);

  const handleHiddenDy = () => {
    setPillarData(s => {
      const dyIndex = s.findIndex(i => i.title === PillarTitle.大运);
      dyIndex !== -1 && s.splice(dyIndex, 1);
      const lnIndex = s.findIndex(i => i.title === PillarTitle.流年);
      lnIndex !== -1 && s.splice(lnIndex, 1);
      const lyIndex = s.findIndex(i => i.title === PillarTitle.流月);
      lyIndex !== -1 && s.splice(lyIndex, 1);
      const lrIndex = s.findIndex(i => i.title === PillarTitle.流日);
      lrIndex !== -1 && s.splice(lrIndex, 1);
      return [...s];
    });
  };

  // 大运
  const renderDayun = () => {
    const activeDyData = paipanInfo.big.data[activeDyIndex];

    return (
      <View style={styles.dayunGrid}>
        <View style={styles.dayunTools}>
          <Text>起运：出生后{paipanInfo.big.start_desc}</Text>
          {activeDyData.years[activeLnIndex] && (
            <Text>{`${
              activeDyData.years[activeLnIndex].year - paipanInfo.yy
            }岁`}</Text>
          )}
          <TouchableOpacity style={styles.toolNowBtn} onPress={handleHiddenDy}>
            <Text style={styles.toolNowText}>关闭</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolNowBtn} onPress={handleNow}>
            <Text style={styles.toolNowText}>今</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rowList}>
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'大\n运'}</Text>
          </View>
          <FlatList
            ref={r => (refLists.current.dy = r)}
            data={paipanInfo.big.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={i => 'dayun_' + i.name}
            renderItem={({item, index}) => {
              const isActive = activeDyIndex === index;
              const color = isActive ? '#000' : '#404040';
              const isXiaoYun = item.name === '小运';
              return (
                <TouchableOpacity
                  style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                  onPress={() => setActiveDyIndex(index)}>
                  <Text style={[styles.itemText, {color}]}>
                    {isXiaoYun ? paipanInfo.yy : item.start_time[0]}
                  </Text>
                  <Text style={[styles.itemText, {color}]}>
                    {isXiaoYun
                      ? `1~${item.years.length}`
                      : item.start_time[0] - paipanInfo.yy + 1}
                    岁
                  </Text>
                  <WuxingText text={item.name[0]} size="mini">
                    {/* {!isXiaoYun && (
                    <Text style={{color: '#000'}}>
                      {paipan.}
                    </Text>
                  )} */}
                  </WuxingText>
                  <WuxingText text={item.name[1]} size="mini" />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  };

  // 流年
  const renderLiunian = () => {
    const activeDyData = paipanInfo.big.data[activeDyIndex];

    return (
      <View style={styles.rowList}>
        <View style={styles.dayunItem}>
          <Text style={styles.listTitleText}>{'流\n年'}</Text>
        </View>
        <FlatList
          ref={r => (refLists.current.ln = r)}
          data={activeDyData.years}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'liunian_' + i.year}
          renderItem={({item, index}) => {
            const isActive = activeLnIndex === index;
            const color = isActive ? '#000' : '#404040';
            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setLyData(paipan.getLiuYueByYear(item.year, item.name));
                  setActiveLnIndex(index);
                }}>
                <Text style={[styles.itemText, {color}]}>{item.year}</Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流月
  const renderLiuyue = () => {
    return (
      <View style={styles.rowList}>
        {lyData !== null && (
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'流\n月'}</Text>
          </View>
        )}
        <FlatList
          ref={r => (refLists.current.ly = r)}
          data={lyData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'Liuyue_' + i.year + i.mouth + i.day}
          renderItem={({item, index}) => {
            const isActive = activeLyIndex === index;
            const color = isActive ? '#000' : '#404040';

            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => setActiveLyIndex(index)}>
                <Text>{JQ_12[index]}</Text>
                <Text style={[styles.itemText, {color}]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  // 流日
  const renderLiuri = () => {
    return (
      <View style={styles.rowList}>
        {lyData !== null && (
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'流\n日'}</Text>
          </View>
        )}
        <FlatList
          ref={r => (refLists.current.lr = r)}
          data={lyData === null ? [] : lyData[activeLyIndex].days}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={i => 'Liuri_' + i.mouth + i.day + i.name}
          renderItem={({item, index}) => {
            const isActive = activeLrIndex === index;
            const color = isActive ? '#000' : '#404040';

            return (
              <TouchableOpacity
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => setActiveLrIndex(index)}>
                {/* <Text>{JQ_12[index]}</Text> */}
                <Text style={[styles.itemText, {color}]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };
  return (
    <View>
      {renderDayun()}
      {renderLiunian()}
      {renderLiuyue()}
      {renderLiuri()}
    </View>
  );
};

const styles = StyleSheet.create({
  dayunGrid: {
    marginTop: 12,
  },
  rowList: {
    marginTop: 12,
    flexDirection: 'row',
  },
  dayunTools: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 16,
  },
  toolNowBtn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  toolNowText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLOR_THEME_COMMON,
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
  listTitleText: {
    fontSize: 18,
    // fontWeight: '400',
  },
  dayunItemActive: {
    backgroundColor: '#EEEEEE',
  },
});

export default DaYunLiuNian;
