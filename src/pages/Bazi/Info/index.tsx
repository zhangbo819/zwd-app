import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import MyModal from '../../../components/MyModal';
import {RootStackParamList, StackPages} from '../../../types/interface';
import {isiOS} from '../../../constant/config';
import {
  DZ,
  getWuxing,
  JQ_12,
  JZ_60,
  Ten,
  TG,
  TG_10,
  WuXing,
  ZhangSheng,
} from '../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import Shensha, {ShenshaItem} from '../../../util/shensha';
import NaYin from '../../../util/Nayin';
import textJSON from '../../../util/text';

const init_Data = paipan.GetInfo(1, Date.now());
enum PillarTitle {
  年柱 = '年柱',
  月柱 = '月柱',
  日柱 = '日柱',
  时柱 = '时柱',
  大运 = '大运',
  流年 = '流年',
  流月 = '流月',
  流日 = '流日',
}

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [paipanInfo, setPaipanInfo] = useState<PaipanInfo>(init_Data);
  // 所有柱数据
  const [pillarData, setPillarData] = useState<
    {
      title: string;
      zhuxing: Ten;
      tg: string;
      dz: string;
      dzcg: string[];
      fx: number[];
      xingyun: ZhangSheng | null;
      zizuo: ZhangSheng | null;
      nayin: string;
      ss: ShenshaItem[];
    }[]
  >([]);
  const [ytgcgData, setYtgcgData] = useState({
    weight_text: '',
    comment: '',
    weight_y: 0,
    weight_m: 0,
    weight_d: 0,
    weight_h: 0,
  });

  // 公共弹窗
  const [isShowModal, setIsShowMoal] = useState(false);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    const {gender, date} = props.route.params;

    const newPaiInfo = paipan.GetInfo(gender, date);
    setPaipanInfo(newPaiInfo);

    setPillarData(
      [
        PillarTitle.年柱,
        PillarTitle.月柱,
        PillarTitle.日柱,
        PillarTitle.时柱,
      ].map((title, i) => {
        let zhuxing = newPaiInfo.tenMap[newPaiInfo.tg[i]];
        if (title === PillarTitle.日柱) {
          zhuxing = gender === 0 ? Ten.元男 : Ten.元女;
        }
        return {
          title,
          zhuxing: zhuxing,
          tg: newPaiInfo.bazi[i][0],
          dz: newPaiInfo.bazi[i][1],
          dzcg: newPaiInfo.dzcg_text[i],
          fx: newPaiInfo.dzcg[i],
          xingyun: NaYin.getXingYun(
            newPaiInfo.bazi[i],
            newPaiInfo.bazi[2][0] as TG,
          ),
          zizuo: NaYin.getXingYun(
            newPaiInfo.bazi[i],
            newPaiInfo.bazi[i][0] as TG,
          ),
          nayin: NaYin.getNayin(newPaiInfo.bazi[i]),
          ss: Shensha.getData(
            newPaiInfo.bazi,
            newPaiInfo.bazi[i],
            newPaiInfo.yinli,
            newPaiInfo.gender,
          ),
        };
      }),
    );
    const newYtgcgData = Ytgcg.getData(
      newPaiInfo.bazi,
      newPaiInfo.yinli[1],
      newPaiInfo.yinli[2],
    );
    // console.log('newYtgcgData', newYtgcgData)
    setYtgcgData(newYtgcgData);
  }, [props.route.params]);

  const setModal = (text: string) => {
    setModalText(text);
    setIsShowMoal(true);
  };

  // 阴阳历日期
  const renderDateText = (isYang = false) => {
    const arr = (isYang ? paipanInfo.yangli : paipanInfo.yinli) || [];
    let res = `${isYang ? '阳历' : '阴历'}：${arr[0]}年${arr[1]}月${arr[2]}日 `;
    res += isYang
      ? `${paipanInfo.hh}:${paipanInfo.mt}`
      : `${paipanInfo.bazi?.[3]?.[1]}时`;
    return <Text style={styles.yinyangText}>{res}</Text>;
  };

  //  柱关系表格
  const renderPillarGrid = () => {
    // 找到藏干中最大的个数，来渲染藏干有几行
    const cgMaxLength = pillarData.reduce((r, i) => {
      if (i.dzcg.length > r) {
        r = i.dzcg.length;
      }
      return r;
    }, 0);
    const ssMaxLength = pillarData.reduce((r, i) => {
      if (i.ss.length > r) {
        r = i.ss.length;
      }
      return r;
    }, 0);

    return (
      <View style={styles.pillarGrid}>
        {/* 标题 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>日期</Text>
          </Col>
          {pillarData.map(item => {
            return (
              <Col key={item.title}>
                <Text style={styles.subheading}>{item.title}</Text>
              </Col>
            );
          })}
        </Row>
        {/* 十神 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>主星</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'主星_' + item + index}>
                <TouchableOpacity
                  onPress={() => setModal(textJSON[item.zhuxing as Ten])}>
                  <Text style={styles.tenText}>{item.zhuxing}</Text>
                </TouchableOpacity>
              </Col>
            );
          })}
        </Row>
        {/* 天干 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>天干</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'tg' + item.tg + index}>
                <TouchableOpacity
                  onPress={() => setModal(textJSON[item.tg as TG])}>
                  <WuxingText text={item.tg} />
                </TouchableOpacity>
              </Col>
            );
          })}
        </Row>
        {/* 地支 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>地支</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'dz' + item.dz + index}>
                <TouchableOpacity
                  onPress={() => setModal(textJSON[item.dz as DZ])}>
                  <WuxingText text={item.dz} />
                </TouchableOpacity>
              </Col>
            );
          })}
        </Row>
        {/* 藏干 */}
        {new Array(cgMaxLength).fill(0).map((_, index) => {
          return (
            <Row key={'cg_row_' + index}>
              <Col>
                {index === 0 && <Text style={styles.subheading}>藏干</Text>}
              </Col>
              {pillarData.map((item, y) => {
                const dzcg = item.dzcg[index];
                return (
                  <Col key={'dzcg' + dzcg + index + y}>
                    <TouchableOpacity
                      onPress={() => setModal(textJSON[dzcg[0] as DZ])}>
                      <WuxingText text={dzcg} size="mini" />
                    </TouchableOpacity>
                  </Col>
                );
              })}
            </Row>
          );
        })}
        {/* 副星 */}
        {new Array(cgMaxLength).fill(0).map((_, index) => {
          return (
            <Row key={'fx_row_' + index}>
              <Col>
                {index === 0 && <Text style={styles.subheading}>副星</Text>}
              </Col>
              {pillarData.map((item, y) => {
                const cg_index = item.fx[index];
                return (
                  <Col key={'fx_' + cg_index + index + y}>
                    <TouchableOpacity
                      onPress={() =>
                        setModal(textJSON[paipanInfo.tenMap[cg_index] as Ten])
                      }>
                      <Text style={styles.tenText}>
                        {paipanInfo.tenMap[cg_index]}
                      </Text>
                    </TouchableOpacity>
                  </Col>
                );
              })}
            </Row>
          );
        })}
        {/* 12长生 星运 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>星运</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'xingyun' + item.xingyun + index}>
                <TouchableOpacity
                  onPress={() =>
                    item.xingyun !== null && setModal(textJSON[item.xingyun])
                  }>
                  <Text style={styles.tenText}>{item.xingyun}</Text>
                </TouchableOpacity>
              </Col>
            );
          })}
        </Row>
        {/* 12长生 自坐 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>自坐</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'zizuo' + item.zizuo + index}>
                <TouchableOpacity
                  onPress={() =>
                    item.zizuo !== null && setModal(textJSON[item.zizuo])
                  }>
                  <Text style={styles.tenText}>{item.zizuo}</Text>
                </TouchableOpacity>
              </Col>
            );
          })}
        </Row>
        {/* 纳音 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>纳音</Text>
          </Col>
          {pillarData.map((item, index) => {
            return (
              <Col key={'nayin' + item.nayin + index}>
                <Text style={styles.tenText}>{item.nayin}</Text>
              </Col>
            );
          })}
        </Row>
        {/* 神煞 */}
        {new Array(ssMaxLength).fill(0).map((_, index) => {
          return (
            <Row key={'ss_row_' + index}>
              <Col>
                {index === 0 && <Text style={styles.subheading}>神煞</Text>}
              </Col>
              {pillarData.map((item, y) => {
                const ss_text = item.ss[index];
                return (
                  <Col key={'ss_' + ss_text + index + y}>
                    {ss_text && (
                      <TouchableOpacity
                        onPress={() => setModal(Shensha.getDetails(ss_text))}>
                        <Text style={styles.shenshaText}>{ss_text}</Text>
                      </TouchableOpacity>
                    )}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </View>
    );
  };

  // TODO split Comp
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
  const renderDayunGrid = () => {
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
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>今</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={{fontSize: 18}}>{'大\n运'}</Text>
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
            <Text style={{fontSize: 18}}>{'流\n年'}</Text>
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
            <Text style={{fontSize: 18}}>{'流\n月'}</Text>
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
            <Text style={{fontSize: 18}}>{'流\n日'}</Text>
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
    <View style={[styles.container, isiOS && {paddingTop: 60}]}>
      <ScrollView style={styles.pagesScrollView}>
        {/* 基础信息 */}
        <View style={styles.topInfo}>
          <Row>
            <Col>
              <Text style={styles.yinyangText}>
                {props.route.params.name || '未命名'}{' '}
              </Text>
            </Col>
            <Col>
              <Text style={styles.yinyangText}>
                {paipanInfo.gender ? '女' : '男'}
              </Text>
            </Col>
          </Row>
          {/* 阴历阳历 */}
          {renderDateText(false)}
          {renderDateText(true)}
          <Row>
            <Col>
              <Text style={styles.yinyangText}>属相：{paipanInfo.sx}</Text>
            </Col>
            <Col>
              <Text style={styles.yinyangText}>星座：{paipanInfo.xz}</Text>
            </Col>
          </Row>
        </View>

        {/* 四柱表 */}
        {renderPillarGrid()}

        {/* 大运表 */}
        {renderDayunGrid()}
        {renderLiunian()}
        {renderLiuyue()}
        {renderLiuri()}

        {/* 袁天罡称骨： */}
        <View style={{marginVertical: 16}}>
          <Row>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  ytgcgData.weight_text,
                  `年${ytgcgData.weight_y} + 月${ytgcgData.weight_m} + 日${ytgcgData.weight_d} + 时${ytgcgData.weight_h}`,
                )
              }>
              <Text style={styles.yinyangText}>
                袁天罡称骨：{ytgcgData.weight_text}
              </Text>
            </TouchableOpacity>
          </Row>
          <Row>
            <Text style={styles.yinyangText}>{ytgcgData.comment}</Text>
          </Row>
        </View>

        {/* <Text>{JSON.stringify(paipanInfo, null, 4)}</Text> */}
        {/* <Text>{JSON.stringify(pillarData, null, 4)}</Text> */}
        {/* 弹窗 */}
        <MyModal isShow={isShowModal} onClose={() => setIsShowMoal(false)}>
          <Text style={{fontSize: 20}}>{modalText}</Text>
        </MyModal>
      </ScrollView>
    </View>
  );
};

const Row: FC<{
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({style, children}) => {
  return <View style={[styles.row, style]}>{children}</View>;
};
const Col: FC<{
  children?: ReactNode;
}> = ({children}) => {
  return <View style={[styles.col]}>{children}</View>;
};
const WuxingText: FC<{
  text: TG | DZ | string;
  children?: ReactNode;
  size?: 'default' | 'mini';
}> = ({text = '', children, size = 'default'}) => {
  // 五行颜色
  const ColorsMap: Record<WuXing | string, any> = {
    [WuXing.木]: '#4CAF50',
    [WuXing.火]: '#F44336',
    [WuXing.土]: '#795548',
    [WuXing.金]: '#FDD835',
    [WuXing.水]: '#2196F3',
  };
  const color_text = text.length > 1 ? text[0] : text;

  return (
    <View style={[styles.col]}>
      <Text
        style={[
          styles.wuxing,
          size === 'mini' && styles.wuxing_mini,
          {color: ColorsMap[getWuxing(color_text)]},
        ]}>
        {text || ' '}
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  pagesScrollView: {
    paddingHorizontal: 8,
    // paddingBottom: 16,
  },
  topInfo: {
    padding: 8,
    backgroundColor: '#fff',
  },
  yinyangText: {
    fontSize: 16,
  },
  row: {
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  col: {
    flex: 1,
    // backgroundColor: '#ff0',
  },
  pillarGrid: {
    marginTop: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  subheading: {
    fontSize: 16,
    color: '#9F9F9F',
    textAlign: 'center',
  },
  wuxing: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wuxing_mini: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  tenText: {
    fontSize: 16,
    color: '#4B4B4B',
    textAlign: 'center',
  },
  shenshaText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },

  // 大运
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
  dayunItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
    padding: 8,
    backgroundColor: '#fff',
  },
  dayunItemActive: {
    backgroundColor: '#EEEEEE',
  },
});

export default BaziInfo;
