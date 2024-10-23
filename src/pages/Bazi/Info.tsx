import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import paipan, {PaipanInfo, Ten} from '../../util/paipan';
import ytgcg from '../../util/ytgcg';
import {RootStackParamList, StackPages} from '../../types/interface';
import {isiOS} from '../../constant/config';

const init_Data = paipan.GetInfo(1, Date.now());

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [paipanInfo, setPaipanInfo] = useState<PaipanInfo>(init_Data);
  const [gridData, setGridData] = useState<{
    title: string[];
    zhuxing: Ten[];
    tg: string[];
    dz: string[];
    dzcg: string[][];
    fx: number[][];
  }>({
    title: ['日期', '年柱', '月柱', '日柱', '时柱'],
    zhuxing: [],
    tg: [],
    dz: [],
    dzcg: [],
    fx: [],
  });
  const [ytgcgData, setYtgcgData] = useState({
    weight_text: '',
    comment: '',
  });

  useEffect(() => {
    const {gender, date} = props.route.params;

    const newPaiInfo = paipan.GetInfo(gender, date);
    setPaipanInfo(newPaiInfo);
    setGridData({
      title: ['日期', '年柱', '月柱', '日柱', '时柱'],
      zhuxing: newPaiInfo.tg.map((item: number) => newPaiInfo.tenMap[item]),
      tg: newPaiInfo.bazi,
      dz: newPaiInfo.bazi,
      dzcg: newPaiInfo.dzcg_text,
      fx: newPaiInfo.dzcg,
    });
    const newYtgcgData = ytgcg.getData(
      newPaiInfo.bazi,
      newPaiInfo.yinli[1],
      newPaiInfo.yinli[2],
    );
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
    // const {length} = data;
    // 找到藏干中最大的个数，来渲染藏干有几行
    const cgMaxLength = gridData.dzcg.reduce((r, i) => {
      if (i.length > r) {
        r = i.length;
      }
      return r;
    }, 0);

    return (
      <View style={styles.pillarGrid}>
        {/* 标题 */}
        <Row>
          {gridData.title.map(item => {
            return (
              <Col key={item}>
                <Text style={styles.subheading}>{item}</Text>
              </Col>
            );
          })}
        </Row>
        {/* 十神 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>主星</Text>
          </Col>
          {gridData.zhuxing.map((item, index) => {
            return (
              <Col key={'主星_' + item + index}>
                <Text style={styles.tenText}>{item}</Text>
              </Col>
            );
          })}
        </Row>
        {/* 天干 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>天干</Text>
          </Col>
          {gridData.tg.map((item: any, index: number) => {
            return (
              <Col key={'tg' + item?.[0] + index}>
                <WuxingText text={item?.[0]} />
              </Col>
            );
          })}
        </Row>
        {/* 地支 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>地支</Text>
          </Col>
          {gridData.dz.map((item: any, index: number) => {
            return (
              <Col key={'dz' + item?.[1] + index}>
                <WuxingText text={item?.[1]} />
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
              {gridData.dzcg.map((item, y) => {
                const dzcg = item[index];
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
              {gridData.fx.map((item, y) => {
                const cg_index = item[index];
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
      </View>
    );
  };

  // TODO split Comp
  // 当前的大运
  const [activeDyIndex, setActiveDyIndex] = useState(0);
  const [activeLnIndex, setActiveLnIndex] = useState(0);

  const handleNow = (data = paipanInfo.big.data) => {
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
    const ln = dy.years[lnIndex];
    // console.log(dy.name, ln);
    setGridData(s => {
      // TODO .slice(0, 4).concat, use new data render

      s.zhuxing = s.zhuxing.slice(0, 4).concat(
        [dy.name, ln.name].map((item: any) => {
          const i = paipan.ctg.findIndex(j => j === item?.[0]);
          return paipanInfo.tenMap[i];
        }),
      );
      s.title = s.title.slice(0, 5).concat(['大运', '流年']);
      s.tg = s.tg.slice(0, 4).concat([dy.name, ln.name]);
      s.dz = s.dz.slice(0, 4).concat([dy.name, ln.name]);

      const {dzcg, dzcg_text} = paipan.getDzcgText(
        [dy.name, ln.name].map(item => {
          const i = paipan.cdz.findIndex(j => j === item?.[1]);
          return i;
        }),
      );

      s.dzcg = s.dzcg.slice(0, 4).concat(dzcg_text);
      s.fx = s.fx.slice(0, 4).concat(dzcg);
      return s;
    });
  };

  useEffect(() => {
    handleNow(paipanInfo.big.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paipanInfo]);

  // 大运表
  const renderDayunGrid = () => {
    return (
      <View style={styles.dayunGrid}>
        <View style={styles.dayunTools}>
          <Text>起运：出生后{paipanInfo.big.start_desc}</Text>
          <TouchableOpacity
            style={styles.toolNowBtn}
            onPress={() => handleNow()}>
            <Text style={{fontSize: 18}}>今</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.dayunItem}>
            <Text style={{fontSize: 18}}>大</Text>
            <Text style={{fontSize: 18}}>运</Text>
          </View>
          {paipanInfo.big.data.map((item, index) => {
            const isActive = activeDyIndex === index;
            return (
              <TouchableOpacity
                key={'dayun_' + item.name + index}
                style={[styles.dayunItem, isActive && styles.dayunItemActive]}
                onPress={() => {
                  setActiveDyIndex(index);
                  updateList(index, activeLnIndex);
                }}>
                <Text
                  style={[
                    {fontSize: 14, color: isActive ? '#000' : '#404040'},
                  ]}>
                  {item.start_time[0]}
                </Text>
                <Text
                  style={[
                    {fontSize: 14, color: isActive ? '#000' : '#404040'},
                  ]}>
                  {item.start_time[0] - paipanInfo.yinli[0] + 1}岁
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 18,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}>
                  {item.name[0]}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}>
                  {item.name[1]}
                </Text>
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
                    {fontSize: 14, color: isActive ? '#000' : '#404040'},
                  ]}>
                  {item.year}
                </Text>
                <Text
                  style={{
                    marginTop: 4,
                    fontSize: 18,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}>
                  {item.name[0]}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}>
                  {item.name[1]}
                </Text>
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
        {/* {renderGrid()} */}
        {renderPillarGrid()}

        {/* 大运表 */}
        {renderDayunGrid()}
        {renderLiunian()}

        {/* 袁天罡称骨： */}
        <View style={{marginVertical: 16}}>
          <Row>
            <Text style={styles.yinyangText}>
              袁天罡称骨：{ytgcgData.weight_text}
            </Text>
          </Row>
          <Row>
            <Text style={styles.yinyangText}>{ytgcgData.comment}</Text>
          </Row>
        </View>
        <Text>{JSON.stringify(paipanInfo, null, 4)}</Text>
        {/* <Text>{JSON.stringify(gridData, null, 4)}</Text> */}
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
  text: string;
  children?: ReactNode;
  size?: 'default' | 'mini';
}> = ({text = '', children, size = 'default'}) => {
  const Colors5 = ['#4CAF50', '#F44336', '#795548', '#FFEB3B', '#2196F3'];
  const ColorsMap: Record<string, any> = {
    甲: Colors5[0],
    乙: Colors5[0],
    丙: Colors5[1],
    丁: Colors5[1],
    戊: Colors5[2],
    己: Colors5[2],
    庚: Colors5[3],
    辛: Colors5[3],
    壬: Colors5[4],
    癸: Colors5[4],
    子: Colors5[4],
    丑: Colors5[2],
    寅: Colors5[0],
    卯: Colors5[0],
    辰: Colors5[2],
    巳: Colors5[1],
    午: Colors5[1],
    未: Colors5[2],
    申: Colors5[3],
    酉: Colors5[3],
    戌: Colors5[2],
    亥: Colors5[4],
  };
  const color_text = text.length > 1 ? text[0] : text;
  return (
    <View style={[styles.col]}>
      <Text
        style={[
          styles.wuxing,
          size === 'mini' && styles.wuxing_mini,
          {color: ColorsMap[color_text]},
        ]}>
        {text || ' '}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 20,
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
