import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Icon5 from 'react-native-vector-icons/Ionicons';

import ShowColors from '../../../components/ShowColors';
import {Col, Row} from '../../../components/Layout';
import paipan, {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import {
  DZ_12,
  Ten,
  TG_10,
  WuXing5,
  WuXing,
  WX,
  sizhuDetailsItem,
} from '../../../util/wuxing';
import WuxingText from '../components/WuxingText';
import {
  COLOR_LINEGRAY,
  COLOR_THEME_COMMON,
  viewportWidth,
} from '../../../constant/UI';
import TabWuXingLi from './components/TabWuXingLi';
import {TouchModal} from './components/BaziModal';

const SHOW_DZ_12 = [
  [DZ_12[11]].concat(DZ_12.slice(0, 2)),
  DZ_12.slice(2, 5),
  DZ_12.slice(5, 8),
  DZ_12.slice(8, 11),
];

export type PageDataType = {
  dzcg: number[][];
  dzcg_text: string[][];
  rizhuWuxing: WX;
  wuxingNumber: {name: WX; number: number; ten2: string}[];
  wuxingCgNumber: {name: WX; number: number; ten2: string}[];
  yueling: WX;
  bazi: sizhuDetailsItem[];
  wu_numbs_text: string;
  cg_numbs_text: string;
};

const BaseInfo: FC<{
  name: string;
  paipanInfo: PaipanInfo;
}> = props => {
  const {paipanInfo} = props;

  const [pageData, setPageData] = useState<PageDataType>({
    dzcg: [],
    dzcg_text: [],
    rizhuWuxing: WX.土,
    wuxingNumber: [],
    wuxingCgNumber: [],
    yueling: WX.土,
    // isDeLing: false,
    // isDedi: false,
    bazi: [],
    wu_numbs_text: '',
    cg_numbs_text: '',
  });
  const [ytgcgData, setYtgcgData] = useState({
    weight_text: '',
    comment: '',
    weight_y: 0,
    weight_m: 0,
    weight_d: 0,
    weight_h: 0,
  });
  const [isShowDzcg, setIsShowDzcg] = useState(false);
  const [isShowTgdz, setIsShowTgdz] = useState(false);

  useEffect(() => {
    const infoBazi = paipanInfo.bazi;
    // 称骨数据
    const newYtgcgData = Ytgcg.getData(
      infoBazi,
      paipanInfo.yinli[1],
      paipanInfo.yinli[2],
    );
    // console.log('newYtgcgData', newYtgcgData)
    setYtgcgData(newYtgcgData);

    // 页面数据
    const {dzcg, dzcg_text} = paipan.getDzcgText(
      [11].concat(new Array(11).fill(0).map((_, i) => i)),
    );
    // console.log('dzcg, dzcg_text', dzcg, dzcg_text);
    const yueling = WuXing.getWuxing(infoBazi[1][1]) as WX;
    const rizhuWuxing = WuXing.getWuxing(infoBazi[2][0]) as WX;
    // const yuelingIndex = YueLinByWuxing[yueling].findIndex(
    //   i => i === rizhuWuxing,
    // );

    // console.log(JSON.stringify(paipanInfo, null, 4));
    // 各五行对应十神关系
    const wxTenMap = paipanInfo.tenMap.reduce((r, i, index) => {
      const tg10Wuxing = [WX.木, WX.火, WX.土, WX.金, WX.水];
      const halfIndex = Math.floor(index / 2);

      const map = {
        [Ten.正官]: '官杀',
        [Ten.七杀]: '官杀',
        [Ten.正印]: '印绶',
        [Ten.偏印]: '印绶',
        [Ten.正财]: '财才',
        [Ten.偏财]: '财才',
        [Ten.食神]: '食伤',
        [Ten.伤官]: '食伤',
        [Ten.比肩]: '比劫',
        [Ten.劫财]: '比劫',
        [Ten.元男]: '日元',
        [Ten.元女]: '日元',
      };

      r[tg10Wuxing[halfIndex]] = map[i];
      return r;
    }, {} as Record<WX, string>);

    // 五行数量
    const wuxingNumber = infoBazi.reduce(
      (r, i) => {
        r.forEach(j => {
          if (
            j.name === WuXing.getWuxing(i[0]) ||
            j.name === WuXing.getWuxing(i[1])
          ) {
            j.number++;
          }
          j.ten2 = wxTenMap[j.name];
        });

        return r;
      },
      WuXing5.map(i => ({name: i, number: 0, ten2: ''})),
    );

    // 藏干数量
    const wuxingCgNumber = infoBazi
      .map(i => i[0])
      .concat(
        paipanInfo.dzcg_text.reduce((r, i) => {
          i.forEach(j => r.push(j[0]));
          return r;
        }, []),
      )
      .reduce(
        (r, i) => {
          r.forEach(j => {
            if (j.name === WuXing.getWuxing(i)) {
              j.number++;
            }
            j.ten2 = wxTenMap[j.name];
          });

          return r;
        },
        WuXing5.map(i => ({name: i, number: 0, ten2: ''})),
      );

    // console.log('wuxingCgNumber', wuxingCgNumber);

    const pageBazi = WuXing.getSiZhuDetails(infoBazi);

    // WuXing.getDzPower(infoBazi, paipanInfo.tenMap);

    // console.log(JSON.stringify(pageBazi, null, 4))

    setPageData({
      dzcg,
      dzcg_text,
      rizhuWuxing,
      wuxingNumber,
      wuxingCgNumber,
      yueling,
      // isDeLing: yuelingIndex === 0 || yuelingIndex === 1,
      // isDedi: pageBazi[2].tg_is_qg,
      bazi: pageBazi,
      wu_numbs_text: _getWXNumbText(wuxingNumber),
      cg_numbs_text: _getWXNumbText(wuxingCgNumber, true),
    });
  }, [paipanInfo]);

  // 阴阳历日期
  const renderDateText = (isYang = false) => {
    if (paipanInfo === null) {
      return null;
    }
    const arr = (isYang ? paipanInfo.yangli : paipanInfo.yinli) || [];
    let res = `${isYang ? '阳历' : '阴历'}：${arr[0]}年${arr[1]}月${arr[2]}日 `;
    res += isYang
      ? `${paipanInfo.hh}:${paipanInfo.mt}`
      : `${pageData.bazi[3]?.dz}时`;
    return (
      <Row>
        <Text style={styles.commonText}>{res}</Text>
      </Row>
    );
  };

  // 天干地支关系表
  const renderTgDzModlue = () => {
    const rizhu_tg = pageData.bazi[2]?.tg;
    const color_rizhu = WuXing.getColorByWuxing(rizhu_tg);
    return (
      <View style={styles.topInfo}>
        <Row alignItems="center">
          <Text style={styles.commonText}>天干地支关系表</Text>
          <Switch
            style={{marginLeft: 8}}
            trackColor={{false: '#474749', true: COLOR_THEME_COMMON}}
            // thumbColor={isShowTgdz ? '#f5dd4b' : '#FFC0CB'}
            ios_backgroundColor="#474749"
            onValueChange={() => setIsShowTgdz(g => !g)}
            value={isShowTgdz}
          />
        </Row>

        {/* <Text>{JSON.stringify(paipanInfo.tenMap, null, 4)}</Text> */}
        <Row style={[styles.tgdzList, {display: isShowTgdz ? 'flex' : 'none'}]}>
          <Text style={styles.tgdzTitle}>十天干对应日主</Text>
          {TG_10.map((item, index) => {
            const isRizhu = item === rizhu_tg;
            return (
              <View key={item} style={styles.tgItem}>
                <TouchModal text={paipanInfo.tenMap[index]}>
                  <Text style={styles.tenText}>{paipanInfo.tenMap[index]}</Text>
                </TouchModal>
                <WuxingText
                  style={
                    isRizhu && [styles.isRizhu, {borderColor: color_rizhu}]
                  }
                  text={item}
                />
              </View>
            );
          })}
        </Row>
        <Row style={[styles.tgdzList, {display: isShowTgdz ? 'flex' : 'none'}]}>
          <Text style={styles.tgdzTitle}>十二地支对应日主</Text>
          {SHOW_DZ_12.map((items, i) => {
            const fw_map = ['北方水', '东方木', '南方火', '西方金'];
            return (
              <View key={'title_' + i}>
                <Text style={styles.tgdzTitle}>{fw_map[i]}</Text>

                <Row>
                  {items.map((item, index) => {
                    const key = i * 3 + index;
                    return (
                      <View key={item} style={styles.dzItem}>
                        <WuxingText text={item} />

                        <Row>
                          {pageData.dzcg_text &&
                            Array.isArray(pageData.dzcg_text[key]) &&
                            pageData.dzcg_text[key].map((j, k) => {
                              // const isRizhu = j[0] === pageData.bazi[2]?.tg;

                              const cg_shishen =
                                paipanInfo.tenMap[pageData.dzcg[key][k]];
                              return (
                                <View key={item + j} style={styles.dzcgItem}>
                                  <WuxingText
                                    style={[
                                      styles.notRizhu,
                                      // isRizhu && [
                                      //   styles.isRizhu,
                                      //   {borderColor: color_rizhu},
                                      // ],
                                    ]}
                                    size="mid"
                                    text={j}
                                    touchModalText={j[0]}
                                  />
                                  <TouchModal text={cg_shishen}>
                                    <Text style={styles.tenText}>
                                      {cg_shishen}
                                    </Text>
                                  </TouchModal>
                                </View>
                              );
                            })}
                        </Row>
                      </View>
                    );
                  })}
                </Row>
              </View>
            );
          })}
        </Row>
      </View>
    );
  };

  // 袁天罡称骨
  const renderYtgcg = () => {
    return (
      <View style={styles.topInfo}>
        <Row>
          <Text style={[styles.commonText]}>袁天罡称骨：</Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                ytgcgData.weight_text,
                `年${ytgcgData.weight_y}两 + 月${ytgcgData.weight_m}两 + 日${ytgcgData.weight_d}两 + 时${ytgcgData.weight_h}两`,
              )
            }>
            <Text style={[styles.commonText, {color: COLOR_THEME_COMMON}]}>
              {ytgcgData.weight_text}
            </Text>
          </TouchableOpacity>
        </Row>
        <Row>
          <Text style={styles.commonText}>{ytgcgData.comment}</Text>
        </Row>
        <Text style={styles.hint}>
          称骨法作为扩展有一定的参考作用，但具体情况还是要结合全局分析
        </Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.contentContainer}>
      {/* 顶部基本信息 */}
      <View style={[styles.topInfo, {marginTop: 0}]}>
        <Row>
          <Col>
            <Text style={styles.commonText}>{props.name || '未命名'} </Text>
          </Col>
          <Col>
            <Text style={styles.commonText}>
              {paipanInfo.gender ? '女' : '男'}
            </Text>
          </Col>
        </Row>
        {/* 阴历阳历 */}
        {renderDateText(false)}
        {renderDateText(true)}
        <Row>
          <Col>
            <Text style={styles.commonText}>属相：{paipanInfo.sx}</Text>
          </Col>
          <Col>
            <Text style={styles.commonText}>星座：{paipanInfo.xz}</Text>
          </Col>
        </Row>
        <Row>
          <Text style={[styles.commonText]}>
            阴阳：
            <Text>{paipanInfo.tg[2] % 2 === 0 ? '阳' : '阴'}</Text>
          </Text>
        </Row>
      </View>

      <View style={styles.topInfo}>
        <Text style={styles.wuxingTitle1}>五行力量分析</Text>
        {/* 五行数量，整体阴阳 */}
        <Text style={styles.wuxingTitle2}>一、五行数量</Text>
        <View style={styles.wuxingView}>
          <Row alignItems="center">
            <Text style={styles.commonText}>是否计算藏干</Text>
            <Switch
              style={{marginLeft: 8}}
              trackColor={{false: '#474749', true: COLOR_THEME_COMMON}}
              ios_backgroundColor="#474749"
              onValueChange={() => setIsShowDzcg(g => !g)}
              value={isShowDzcg}
            />
          </Row>
          {(isShowDzcg ? pageData.wuxingCgNumber : pageData.wuxingNumber).map(
            i => {
              const nowWuxingColor = WuXing.getColorByWuxing(i.name);
              return (
                <Row key={'wuxingNumber_' + i.name} alignItems="center">
                  <WuxingText
                    disabled
                    size="mid"
                    fontWeight="bold"
                    text={i.name}
                  />
                  <Col style={{marginHorizontal: 4}}>
                    <Progress.Bar
                      progress={i.number / 8}
                      width={viewportWidth - 100} // todo 100
                      height={8}
                      color={nowWuxingColor}
                      borderColor="#fff"
                    />
                  </Col>
                  <Text style={[styles.commonText, {color: nowWuxingColor}]}>
                    {i.number}个 {i.ten2}
                  </Text>
                </Row>
              );
            },
          )}
          <TouchModal
            text="五行数量总数为8（8字4天干4地支本气，不加藏干）3个及以上为多，1个及以下为少。"
            title="提示">
            <Row alignItems="center">
              <Icon5
                name="star"
                style={{
                  fontSize: 18,
                  marginRight: 4,
                  color: COLOR_THEME_COMMON,
                }}
              />
              <Text style={[{color: '#000', fontSize: 18, fontWeight: 'bold'}]}>
                {isShowDzcg ? pageData.cg_numbs_text : pageData.wu_numbs_text}
              </Text>
            </Row>
          </TouchModal>
        </View>

        {/* <Text style={styles.wuxingTitle2}>二、五行力量</Text>
        <View style={styles.wuxingView}>
          <Row>
            <Text>同党</Text>
            <Col alignItems="center" justifyContent="center">
              <Progress.Bar
                // style={{flex:1,backgroundColor:'blue'}}
                width={viewportWidth - 116}
                progress={0.9}
                height={8}
                color={'red'}
                unfilledColor={'blue'}
                borderColor="#fff"
              />
            </Col>
            <Text>异党</Text>
          </Row>
        </View> */}

        <Text style={styles.wuxingTitle2}>二、各柱天干</Text>
        <TabWuXingLi pageData={pageData} />

        {/* <Text style={styles.wuxingTitle2}>三、格局</Text>
        <View style={styles.wuxingView}>
          <Text style={styles.commonText}>润下格</Text>
        </View> */}
      </View>

      {/* 天干地支关系表 */}
      {renderTgDzModlue()}

      {/* 袁天罡称骨 */}
      {renderYtgcg()}

      <ShowColors />
    </ScrollView>
  );
};

function _getWXNumbText(
  wuxingNumber: PageDataType['wuxingNumber'],
  isCg: boolean = false,
) {
  const bazi_wx = wuxingNumber.reduce<WX[]>((r, i) => {
    if (i.number) {
      new Array(i.number).fill(1).forEach(() => {
        r.push(i.name);
      });
    }
    return r;
  }, []);
  // console.log('bazi_wx', bazi_wx);
  const {wu_numbs, arr_wu_nums} = WuXing.getWxNumbs(bazi_wx);

  const attr = Object.keys(wu_numbs).every(key => wu_numbs[key as WX] > 0)
    ? '五行俱全；'
    : '';

  const limit = isCg ? 4 : 3;

  const wu_numbs_text = arr_wu_nums
    .reduce((r, i, index) => {
      if (i?.length) {
        if (index === 0) {
          r?.push('五行缺' + i?.join('、'));
        } else if (index >= limit) {
          r?.push(i?.join('、') + `${index === limit ? '较' : '过'}多`);
        }
      }
      return r;
    }, [])
    ?.join('；');

  return attr + wu_numbs_text;
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  topInfo: {
    marginTop: 12,
    padding: 8,
    backgroundColor: '#fff',
  },
  commonText: {
    fontSize: 16,
  },
  hint: {
    marginTop: 4,
    color: '#888',
    fontSize: 16,
  },

  wuxingTitle1: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  wuxingTitle2: {
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  wuxingView: {
    marginVertical: 6,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_LINEGRAY,
  },
  wuxingYueline: {
    marginVertical: 4,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  tgdzTitle: {
    marginBottom: 16,
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  tgdzList: {
    marginTop: 8,
    padding: 8,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderColor: COLOR_THEME_COMMON,
    borderWidth: 2,
    borderRadius: 8,
  },
  tgItem: {
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  notRizhu: {
    borderWidth: 2,
    borderColor: '#fff',
  },
  isRizhu: {
    borderWidth: 2,
    borderColor: COLOR_THEME_COMMON,
    borderRadius: 4,
  },
  dzItem: {
    marginBottom: 8,
    width: '33%',
    alignItems: 'center',
  },
  dzcgItem: {alignItems: 'center'},
  tenText: {
    margin: 4,
    fontSize: 16,
    color: '#4B4B4B',
    textAlign: 'center',
  },
});

export default BaseInfo;
