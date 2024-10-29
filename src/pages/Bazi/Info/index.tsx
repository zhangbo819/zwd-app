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

import paipan, {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import {RootStackParamList, StackPages} from '../../../types/interface';
import {isiOS} from '../../../constant/config';
import {DZ, getWuxing, NaYin, Ten, TG, WuXing} from '../../../util/wuxing';
import Shensha, {ShenshaItem} from '../../../util/shensha';
import MyModal from '../../../components/MyModal';

const init_Data = paipan.GetInfo(1, Date.now());
enum PillarTitle {
  年柱 = '年柱',
  月柱 = '月柱',
  日柱 = '日柱',
  时柱 = '时柱',
  大运 = '大运',
  流年 = '流年',
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
                <Text style={styles.tenText}>{item.zhuxing}</Text>
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
                <WuxingText text={item.tg} />
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
                <WuxingText text={item.dz} />
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
                    <WuxingText text={dzcg} size="mini" />
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
                    <Text style={styles.tenText}>
                      {paipanInfo.tenMap[cg_index]}
                    </Text>
                  </Col>
                );
              })}
            </Row>
          );
        })}
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
                        onPress={() => {
                          setModalText(Shensha.getDetails(ss_text));
                          setIsShowMoal(true);
                        }}>
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
    updateList(index, lnIndex);
  };

  const updateList = (index: number, lnIndex: number) => {
    const dy = paipanInfo.big.data[index];
    let ln = dy.years[lnIndex];
    if (!ln) {
      // 这种情况一般是点到了小运
      lnIndex = 0;
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
      const dyZhuxingIndex = paipan.ctg.findIndex(j => j === dy.name[0]);
      const dyItem = {
        title: PillarTitle.大运,
        zhuxing: paipanInfo.tenMap[dyZhuxingIndex],
        tg: dy.name[0],
        dz: dy.name[1],
        dzcg: dzcg_text[0],
        fx: dzcg[0],
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
      const LnZhuxingIndex = paipan.ctg.findIndex(j => j === ln.name[0]);
      const LnItem = {
        title: PillarTitle.流年,
        zhuxing: paipanInfo.tenMap[LnZhuxingIndex],
        tg: ln.name[0],
        dz: ln.name[1],
        dzcg: dzcg_text[1],
        fx: dzcg[1],
        nayin: NaYin.getNayin(ln.name),
        ss:
          dy.name === '小运'
            ? []
            : Shensha.getData(
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

      return [...s];
    });
  };

  //   useEffect(() => {
  //     handleNow(paipanInfo.big.data);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, [paipanInfo]);

  const handleHiddenDy = () => {
    setPillarData(s => {
      const dyIndex = s.findIndex(i => i.title === PillarTitle.大运);
      dyIndex !== -1 && s.splice(dyIndex, 1);
      const lnIndex = s.findIndex(i => i.title === PillarTitle.流年);
      lnIndex !== -1 && s.splice(lnIndex, 1);
      return [...s];
    });
  };

  // 大运表
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
          <TouchableOpacity style={styles.toolNowBtn} onPress={handleNow}>
            <Text style={{fontSize: 18}}>今</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.dayunItem} onPress={handleHiddenDy}>
            <Text style={{fontSize: 18}}>大</Text>
            <Text style={{fontSize: 18}}>运</Text>
          </TouchableOpacity>
          {paipanInfo.big.data.map((item, index) => {
            const isActive = activeDyIndex === index;
            const color = isActive ? '#000' : '#404040';
            const isXiaoYun = item.name === '小运';
            return (
              <TouchableOpacity
                key={'dayun_' + item.name + index}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveDyIndex(index);
                  updateList(index, activeLnIndex);
                }}>
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
          {/* <Row>
          <Text>{JSON.stringify(paipanInfo.big_start_time)}</Text>
        </Row> */}
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
            <Text style={{fontSize: 18}}>流</Text>
            <Text style={{fontSize: 18}}>年</Text>
          </View>
          {activeDyData.years.map((item, index) => {
            const isActive = activeLnIndex === index;
            return (
              <TouchableOpacity
                key={'liunian_' + item.year}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveLnIndex(index);
                  updateList(activeDyIndex, index);
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

        <Text>{JSON.stringify(paipanInfo, null, 4)}</Text>
        {/* <Text>{JSON.stringify(pillarData, null, 4)}</Text> */}
        {/* 弹窗 */}
        <MyModal isShow={isShowModal} onClose={() => setIsShowMoal(false)}>
          <Text>{modalText}</Text>
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
