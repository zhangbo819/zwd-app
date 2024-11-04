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
import Spin from '../../../components/Spin';
import ShowColors from '../../../components/ShowColors';
import {isiOS} from '../../../constant/config';
import { NAV_COMMON_HEIGHT } from '../../../constant/UI';
import {RootStackParamList, StackPages} from '../../../types/interface';
import {DZ, Ten, TG, ZhangSheng} from '../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import Shensha, {ShenshaItem} from '../../../util/shensha';
import NaYin from '../../../util/Nayin';
import textJSON from '../../../util/text';
import WuxingText from './WuxingText';
import DaYunLiuNian from './DaYunLiuNian';

// const init_Data = paipan.GetInfo(1, Date.now());
export enum PillarTitle {
  年柱 = '年柱',
  月柱 = '月柱',
  日柱 = '日柱',
  时柱 = '时柱',
  大运 = '大运',
  流年 = '流年',
  流月 = '流月',
  流日 = '流日',
}

export type PillarItem = {
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
};

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [paipanInfo, setPaipanInfo] = useState<PaipanInfo | null>(null);
  // 所有柱数据
  const [pillarData, setPillarData] = useState<PillarItem[]>([]);
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
    if (paipanInfo === null) {
      return null;
    }
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
                        paipanInfo !== null &&
                        setModal(textJSON[paipanInfo.tenMap[cg_index] as Ten])
                      }>
                      <Text style={styles.tenText}>
                        {paipanInfo === null ? '' : paipanInfo.tenMap[cg_index]}
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

  return (
    <View style={[styles.container, isiOS && {paddingTop: NAV_COMMON_HEIGHT}]}>
      <Spin spinning={paipanInfo === null}>
        {paipanInfo !== null && (
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
            <DaYunLiuNian
              paipanInfo={paipanInfo}
              setPillarData={setPillarData}
            />

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

            <ShowColors />
          </ScrollView>
        )}
      </Spin>
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
});

export default BaziInfo;
