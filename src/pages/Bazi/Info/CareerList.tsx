import React, {FC, useEffect, useMemo, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MyModal from '../../../components/MyModal';
import {Col, Row} from '../../../components/Layout';
import {COLOR_THEME_COMMON} from '../../../constant/UI';
import {DZ, Ten, TG, WuXing} from '../../../util/wuxing';
import {PaipanInfo} from '../../../util/paipan';
import Shensha from '../../../util/shensha';
import NaYin from '../../../util/Nayin';
import textJSON from '../../../util/text';
import WuxingText from '../components/WuxingText';
import DaYunLiuNian from './components/DaYunLiuNian';
import {PillarItem, PillarTitle} from '.';

const CareerList: FC<{
  name: string;
  paipanInfo: PaipanInfo;
}> = props => {
  const {paipanInfo} = props;
  // 所有柱数据
  const [pillarData, setPillarData] = useState<PillarItem[]>([]);
  const pillarShowData = useMemo(
    () => pillarData.filter(i => i.isShow),
    [pillarData],
  );

  // 公共弹窗
  const [isShowModal, setIsShowMoal] = useState(false);
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    setPillarData(
      [
        PillarTitle.年柱,
        PillarTitle.月柱,
        PillarTitle.日柱,
        PillarTitle.时柱,
      ].map((title, i) => {
        let zhuxing = paipanInfo.tenMap[paipanInfo.tg[i]];
        if (title === PillarTitle.日柱) {
          zhuxing = paipanInfo.gender === 0 ? Ten.元男 : Ten.元女;
        }
        return {
          title,
          isShow: true,
          zhuxing: zhuxing,
          tg: paipanInfo.bazi[i][0] as TG,
          dz: paipanInfo.bazi[i][1] as DZ,
          dzcg: paipanInfo.dzcg_text[i],
          fx: paipanInfo.dzcg[i],
          xingyun: NaYin.getXingYun(
            paipanInfo.bazi[i],
            paipanInfo.bazi[2][0] as TG,
          ),
          zizuo: NaYin.getXingYun(
            paipanInfo.bazi[i],
            paipanInfo.bazi[i][0] as TG,
          ),
          nayin: NaYin.getNayin(paipanInfo.bazi[i]),
          ss: Shensha.getData(
            paipanInfo.bazi,
            paipanInfo.bazi[i],
            paipanInfo.yinli,
            paipanInfo.gender,
          ),
        };
      }),
    );
  }, [paipanInfo]);

  const setModal = (text: string) => {
    if (text === '' || typeof text === 'undefined') {
      return;
    }
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
    const cgMaxLength = pillarShowData.reduce((r, i) => {
      if (i.dzcg.length > r) {
        r = i.dzcg.length;
      }
      return r;
    }, 0);
    const ssMaxLength = pillarShowData.reduce((r, i) => {
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
          {pillarShowData.map(item => {
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
          {pillarShowData.map((item, index) => {
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
          {pillarShowData.map((item, index) => {
            return (
              <Col key={'tg' + item.tg + index}>
                <TouchableOpacity onPress={() => setModal(textJSON[item.tg])}>
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
          {pillarShowData.map((item, index) => {
            return (
              <Col key={'dz' + item.dz + index}>
                <TouchableOpacity onPress={() => setModal(textJSON[item.dz])}>
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
              {pillarShowData.map((item, y) => {
                const dzcg = item.dzcg[index];
                return (
                  <Col key={'dzcg' + dzcg + index + y}>
                    <TouchableOpacity
                      onPress={() => setModal(textJSON[dzcg?.[0] as DZ])}>
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
              {pillarShowData.map((item, y) => {
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
          {pillarShowData.map((item, index) => {
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
          {pillarShowData.map((item, index) => {
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
          {pillarShowData.map((item, index) => {
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
              {pillarShowData.map((item, y) => {
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

  // 天干地支关系
  const renderTgDzRelation = () => {
    const relation_tg = WuXing.getTgRelation(pillarShowData.map(i => i.tg));
    const relation_dz = WuXing.getDzRelation(pillarShowData.map(i => i.dz));
    return (
      <View style={styles.tgDzRelation}>
        <Row>
          <Text style={styles.tgDzRelationTitle}>天干留意：</Text>
          <View style={styles.tgGxRow}>
            {relation_tg.length ? (
              relation_tg.map(i => {
                return i.relation.map(j => {
                  return (
                    <Text
                      key={'relation_tg' + i.index + j.index}
                      style={styles.tgGxItem}>
                      {j.text}
                    </Text>
                  );
                });
              })
            ) : (
              <Text style={styles.tgGxItem}>无</Text>
            )}
          </View>
        </Row>
        <Row>
          <Text style={styles.tgDzRelationTitle}>地支留意：</Text>
          <View style={styles.tgGxRow}>
            {relation_dz.length ? (
              relation_dz.map(i => {
                return i.relation.map(j => {
                  return (
                    <Text
                      key={'relation_dz' + i.index + j.index + j.text}
                      style={styles.tgGxItem}>
                      {j.text}
                    </Text>
                  );
                });
              })
            ) : (
              <Text style={styles.tgGxItem}>无</Text>
            )}
          </View>
        </Row>
      </View>
    );
  };

  return (
    <ScrollView style={styles.pagesScrollView}>
      {/* 基础信息 */}
      <View style={styles.topInfo}>
        <Row>
          <Col>
            <Text style={styles.yinyangText}>{props.name || '未命名'} </Text>
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
      </View>

      {/* 四柱表 */}
      {renderPillarGrid()}

      {/* 天干地支关系 */}
      {renderTgDzRelation()}

      {/* 大运表 */}
      <DaYunLiuNian paipanInfo={paipanInfo} setPillarData={setPillarData} />

      {/* <Text>{JSON.stringify(paipanInfo, null, 4)}</Text> */}
      {/* <Text>{JSON.stringify(pillarShowData, null, 4)}</Text> */}

      {/* 弹窗 */}
      <MyModal isShow={isShowModal} onClose={() => setIsShowMoal(false)}>
        <Text style={{fontSize: 20}}>{modalText}</Text>
      </MyModal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  pagesScrollView: {
    paddingHorizontal: 8,
    // paddingBottom: 24,
  },
  topInfo: {
    padding: 8,
    backgroundColor: '#fff',
  },
  yinyangText: {
    fontSize: 16,
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

  tgDzRelation: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tgDzRelationTitle: {
    fontSize: 16,
    color: COLOR_THEME_COMMON,
    fontWeight: 'bold',
  },
  tgGxRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tgGxItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});

export default CareerList;
