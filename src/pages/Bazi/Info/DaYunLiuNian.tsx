import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
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

const DaYunLiuNian: FC<{
  paipanInfo: PaipanInfo;
  setPillarData: React.Dispatch<React.SetStateAction<PillarItem[]>>;
}> = ({paipanInfo, setPillarData}) => {
  // 当前的大运
  const [activeDyIndex, setActiveDyIndex] = useState(0);
  const [activeLnIndex, setActiveLnIndex] = useState(0);
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
  const [activeLyIndex, setActiveLyIndex] = useState(0);
  const [activeLrIndex, setActiveLrIndex] = useState(0);

  const handleNow = () => {
    const data = paipanInfo.big.data;
    const nowYears = new Date().getFullYear();
    let lnIndex = -1;
    const index = data.findIndex(i => {
      return i.years.find((j, yearsIndex) => {
        if (j.year === nowYears) {
          lnIndex = yearsIndex;
          return true;
        }
        return false;
      });
    });
    if (index < 0 || lnIndex < 0) return;
    setActiveDyIndex(index);
    setActiveLnIndex(lnIndex);

    // 流月
    const ln_item = paipanInfo.big.data[activeDyIndex].years[lnIndex];
    const newLiuYueData = paipan.getLiuYueByYear(ln_item.year, ln_item.name);
    setLyData(newLiuYueData);
    const newActiveLyIndex = newLiuYueData.findIndex(i => {
      const last_day = i.days[i.days.length - 1];
      const mouth_max = new Date();
      mouth_max.setMonth(last_day.mouth - 1);
      mouth_max.setDate(last_day.day);
      return mouth_max.getTime() > new Date().getTime();
    });
    setActiveLyIndex(newActiveLyIndex);
    // 流日
    const newAcstiveLrIndex = newLiuYueData[newActiveLyIndex].days.findIndex(
      i =>
        i.mouth === new Date().getMonth() + 1 && i.day === new Date().getDate(),
    );
    setActiveLrIndex(newAcstiveLrIndex);
  };

  // 大运流年流月等切换后自动更新四柱表
  useEffect(() => {
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
            <Text>关闭</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolNowBtn} onPress={handleNow}>
            <Text style={styles.toolNowText}>今</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'大\n运'}</Text>
          </View>
          {paipanInfo.big.data.map((item, index) => {
            const isActive = activeDyIndex === index;
            const color = isActive ? '#000' : '#404040';
            const isXiaoYun = item.name === '小运';
            return (
              <TouchableOpacity
                key={'dayun_' + item.name + index}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => setActiveDyIndex(index)}>
                <Text style={[{fontSize: 14, color}]}>
                  {isXiaoYun ? paipanInfo.yy : item.start_time[0]}
                </Text>
                <Text
                  style={[
                    {
                      marginBottom: 4,
                      fontSize: 14,
                      color,
                    },
                  ]}>
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
          })}
        </ScrollView>
      </View>
    );
  };

  // 流年
  const renderLiunian = () => {
    const activeDyData = paipanInfo.big.data[activeDyIndex];
    return (
      <View style={styles.dayunGrid}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'流\n年'}</Text>
          </View>
          {activeDyData.years.map((item, index) => {
            const isActive = activeLnIndex === index;
            return (
              <TouchableOpacity
                key={'liunian_' + item.year}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveLnIndex(index);
                  setLyData(paipan.getLiuYueByYear(item.year, item.name));
                }}>
                <Text
                  style={[
                    {
                      marginBottom: 4,
                      fontSize: 14,
                      color: isActive ? '#000' : '#404040',
                    },
                  ]}>
                  {item.year}
                </Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  // 流月
  const renderLiuyue = () => {
    if (lyData === null) return null;
    return (
      <View style={styles.dayunGrid}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'流\n月'}</Text>
          </View>
          {lyData.map((item, index) => {
            const isActive = activeLyIndex === index;
            return (
              <TouchableOpacity
                key={'liuyue_' + item.year + item.mouth}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => setActiveLyIndex(index)}>
                <Text>{JQ_12[index]}</Text>
                <Text
                  style={[
                    {
                      marginBottom: 4,
                      fontSize: 14,
                      color: isActive ? '#000' : '#404040',
                    },
                  ]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  // 流日
  const renderLiuri = () => {
    if (lyData === null) return null;
    return (
      <View style={styles.dayunGrid}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={styles.listTitleText}>{'流\n日'}</Text>
          </View>
          {lyData[activeLyIndex].days.map((item, index) => {
            const isActive = activeLrIndex === index;
            return (
              <TouchableOpacity
                key={'liuri_' + item.mouth + index}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => setActiveLrIndex(index)}>
                {/* <Text>{JQ_12[index]}</Text> */}
                <Text
                  style={[
                    {
                      marginBottom: 4,
                      fontSize: 14,
                      color: isActive ? '#000' : '#404040',
                    },
                  ]}>
                  {`${item.mouth}/${item.day}`}
                </Text>
                <WuxingText text={item.name[0]} size="mini" />
                <WuxingText text={item.name[1]} size="mini" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
  toolNowText: {fontSize: 16, fontWeight: 'bold'},
  dayunItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    padding: 8,
    backgroundColor: '#fff',
  },
  listTitleText: {fontSize: 18},
  dayunItemActive: {
    backgroundColor: '#EEEEEE',
  },
});

export default DaYunLiuNian;
