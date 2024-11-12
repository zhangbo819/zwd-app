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

import ShowColors from '../../../components/ShowColors';
import paipan, {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import {
  DZ_12,
  getColorByWuxing,
  getWuxing,
  TG_10,
  WuXing5,
  WX,
  YueClass5,
  YueLinByWuxing,
} from '../../../util/wuxing';
import WuxingText from '../components/WuxingText';
import {
  COLOR_LINEGRAY,
  COLOR_THEME_COMMON,
  viewportWidth,
} from '../../../constant/UI';
import {Col, Row} from '.';

const SHOW_DZ_12 = [DZ_12[11], ...DZ_12.slice(0, 11)];

const BaseInfo: FC<{
  name: string;
  paipanInfo: PaipanInfo;
}> = props => {
  const {paipanInfo} = props;

  const [pageData, setPageData] = useState<{
    dzcg: number[][];
    dzcg_text: string[][];
    rizhuWuxing: WX;
    wuxingNumber: {name: WX; number: number}[];
    wuxingCgNumber: {name: WX; number: number}[];
    yueling: WX;
    isDeLing: boolean;
  }>({
    dzcg: [],
    dzcg_text: [],
    rizhuWuxing: WX.土,
    wuxingNumber: [],
    wuxingCgNumber: [],
    yueling: WX.土,
    isDeLing: false,
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
    // 称骨数据
    const newYtgcgData = Ytgcg.getData(
      paipanInfo.bazi,
      paipanInfo.yinli[1],
      paipanInfo.yinli[2],
    );
    // console.log('newYtgcgData', newYtgcgData)
    setYtgcgData(newYtgcgData);

    // 页面数据
    const bazi = paipanInfo.bazi;
    const {dzcg, dzcg_text} = paipan.getDzcgText(
      [11].concat(new Array(11).fill(0).map((_, i) => i)),
    );
    // console.log('dzcg, dzcg_text', dzcg, dzcg_text);
    const yueling = getWuxing(bazi[1][1]) as WX;
    const rizhuWuxing = getWuxing(bazi[2][0]) as WX;
    const yuelingIndex = YueLinByWuxing[yueling].findIndex(
      i => i === rizhuWuxing,
    );

    // console.log(JSON.stringify(paipanInfo, null, 4));
    // 五行数量
    const wuxingNumber = bazi.reduce(
      (r, i) => {
        r.forEach(j => {
          if (j.name === getWuxing(i[0]) || j.name === getWuxing(i[1])) {
            j.number++;
          }
        });

        return r;
      },
      WuXing5.map(i => ({name: i, number: 0})),
    );

    // 藏干数量
    const wuxingCgNumber = paipanInfo.bazi
      .map(i => i[0])
      .concat(
        paipanInfo.dzcg_text.reduce((r, i) => {
          i.forEach(i => r.push(i[0]));
          return r;
        }, []),
      )
      .reduce(
        (r, i) => {
          r.forEach(j => {
            if (j.name === getWuxing(i)) {
              j.number++;
            }
          });

          return r;
        },
        WuXing5.map(i => ({name: i, number: 0})),
      );

    setPageData({
      dzcg,
      dzcg_text,
      rizhuWuxing,
      wuxingNumber,
      wuxingCgNumber,
      yueling,
      isDeLing: yuelingIndex === 0 || yuelingIndex === 1,
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
      : `${paipanInfo.bazi?.[3]?.[1]}时`;
    return (
      <Row>
        <Text style={styles.commonText}>{res}</Text>
      </Row>
    );
  };

  // 天干地支关系表
  const renderTgDzModlue = () => {
    const color_rizhu = getColorByWuxing(paipanInfo.bazi[2][0]);
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

        {/* <Text>{JSON.stringify(paipanInfo, null, 4)}</Text> */}
        <Row style={[styles.tgdzList, {display: isShowTgdz ? 'flex' : 'none'}]}>
          <Text style={styles.tgdzTitle}>十天干对应日主</Text>
          {TG_10.map((item, index) => {
            const isRizhu = item === paipanInfo.bazi[2][0];
            return (
              <View key={item} style={styles.tgItem}>
                <Text style={styles.tenText}>{paipanInfo.tenMap[index]}</Text>
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
          {SHOW_DZ_12.map((item, index) => {
            const fw_map = ['北方水', '东方木', '南方火', '西方金'];
            return (
              <>
                {index % 3 === 0 && (
                  <Text key={'title_' + index / 3} style={styles.tgdzTitle}>
                    {fw_map[index / 3]}
                  </Text>
                )}
                <View key={item} style={styles.dzItem}>
                  <WuxingText text={item} />
                  <Row>
                    {/* <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
              {'藏干'}
            </Text> */}
                    {pageData.dzcg_text &&
                      Array.isArray(pageData.dzcg_text[index]) &&
                      pageData.dzcg_text[index].map((j, k) => {
                        const isRizhu = j[0] === paipanInfo.bazi[2][0];

                        return (
                          <View key={item + j} style={styles.dzcgItem}>
                            <WuxingText
                              style={[
                                styles.notRizhu,
                                isRizhu && [
                                  styles.isRizhu,
                                  {borderColor: color_rizhu},
                                ],
                              ]}
                              size="mid"
                              text={j}
                            />
                            <Text style={styles.tenText}>
                              {paipanInfo.tenMap[pageData.dzcg[index][k]]}
                            </Text>
                          </View>
                        );
                      })}
                  </Row>
                </View>
              </>
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
        <Text style={styles.wuxingTitle}>五行力量分析</Text>
        {/* 五行数量，整体阴阳 */}
        <View style={styles.wuxingView}>
          <Row alignItems="center">
            <Text style={styles.commonText}>是否展示藏干</Text>
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
              const nowWuxingColor = getColorByWuxing(i.name);
              return (
                <Row key={'wuxingNumber_' + i.name} alignItems="center">
                  <WuxingText size="mid" fontWeight="bold" text={i.name} />
                  <Col style={{marginHorizontal: 4}}>
                    <Progress.Bar
                      progress={i.number / 8}
                      width={viewportWidth - 100} // todo 100
                      color={nowWuxingColor}
                      borderColor="#fff"
                    />
                  </Col>
                  <Text style={[styles.commonText, {color: nowWuxingColor}]}>
                    {i.number}个
                  </Text>
                </Row>
              );
            },
          )}
          <Text style={styles.hint}>
            五行数量（不加藏干）3个及以上为多，1个及以下为少。
          </Text>
        </View>

        {/* 月令 */}
        <View style={styles.wuxingView}>
          <Row>
            {YueClass5.map((item, index) => {
              const map = YueLinByWuxing[pageData.yueling];
              return (
                <Col
                  key={item}
                  style={{backgroundColor: getColorByWuxing(map[index])}}>
                  <Text style={styles.wuxingYueline}>
                    {map[index]}
                    {item}
                  </Text>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <Row alignItems="center" margin={0}>
                <Text style={[styles.commonText]}>日主五行：</Text>
                <WuxingText
                  style={{marginLeft: 4}}
                  size="mini"
                  text={pageData.rizhuWuxing}
                />
              </Row>
            </Col>
            <Col>
              <Row alignItems="center" margin={0}>
                <Text style={[styles.commonText]}>月令：</Text>
                <WuxingText
                  style={{marginLeft: 4}}
                  size="mini"
                  text={pageData.yueling}
                />
              </Row>
            </Col>
          </Row>
          <Text style={styles.commonText}>
            月令情况：{pageData.isDeLing ? '得令（得时）' : '失令（失时）'}
          </Text>
          <Text style={styles.hint}>旺相为得令，休囚死为失令</Text>
          <Text style={styles.hint}>
            月令是判断五行力量的首要条件，但不是唯一条件，还要结合天干地支情况
          </Text>
        </View>

        {/* 得地 各五行通根 天干虚浮 地支无透 */}
        {/* 得势 三合三会 */}
      </View>

      {/* 天干地支关系表 */}
      {renderTgDzModlue()}

      {/* 袁天罡称骨 */}
      {renderYtgcg()}

      <ShowColors />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  topInfo: {
    marginTop: 8,
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

  wuxingTitle: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  wuxingView: {
    marginVertical: 4,
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
