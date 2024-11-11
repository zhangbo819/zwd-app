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
import {Col, Row} from '.';
import WuxingText from '../components/WuxingText';
import {COLOR_THEME_COMMON} from '../../../constant/UI';

const SHOW_DZ_12 = [DZ_12[11], ...DZ_12.slice(0, 11)];

const BaseInfo: FC<{
  name: string;
  paipanInfo: PaipanInfo;
}> = props => {
  const {paipanInfo} = props;
  const [ytgcgData, setYtgcgData] = useState({
    weight_text: '',
    comment: '',
    weight_y: 0,
    weight_m: 0,
    weight_d: 0,
    weight_h: 0,
  });
  const [dz12, setDz12] = useState<{dzcg: number[][]; dzcg_text: string[][]}>({
    dzcg: [],
    dzcg_text: [],
  });
  const [isShowTgdz, setIsShowTgdz] = useState(false);

  useEffect(() => {
    const newYtgcgData = Ytgcg.getData(
      paipanInfo.bazi,
      paipanInfo.yinli[1],
      paipanInfo.yinli[2],
    );
    // console.log('newYtgcgData', newYtgcgData)
    setYtgcgData(newYtgcgData);

    const {dzcg, dzcg_text} = paipan.getDzcgText(
      [11].concat(new Array(11).fill(0).map((_, i) => i)),
    );
    // console.log('dzcg, dzcg_text', dzcg, dzcg_text);
    setDz12({dzcg, dzcg_text});
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
        <Text style={styles.yinyangText}>{res}</Text>
      </Row>
    );
  };

  const color_rizhu = getColorByWuxing(paipanInfo.bazi[2][0]);
  const yueling = getWuxing(paipanInfo.bazi[1][1]) as WX;

  return (
    <ScrollView style={styles.contentContainer}>
      {/* 顶部基本信息 */}
      <View style={[styles.topInfo, {marginTop: 0}]}>
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
        <Row>
          <Col>
            <Row alignItems="center" margin={0}>
              <Text style={[styles.yinyangText]}>日主五行：</Text>
              <WuxingText
                style={{marginLeft: 4}}
                size="mini"
                text={getWuxing(paipanInfo.bazi[2][0])}
              />
            </Row>
          </Col>
          <Col>
            <Text style={[styles.yinyangText]}>
              阴阳：
              <Text>{paipanInfo.tg[2] % 2 === 0 ? '阳' : '阴'}</Text>
            </Text>
          </Col>
        </Row>
        <Row>
          <Row alignItems="center" margin={0}>
            <Text style={[styles.yinyangText]}>月令：</Text>
            <WuxingText style={{marginLeft: 4}} size="mini" text={yueling} />
          </Row>
        </Row>
        <Row>
          <Col>
            <Text style={styles.yinyangText}>属相：{paipanInfo.sx}</Text>
          </Col>
          <Col>
            <Text style={styles.yinyangText}>星座：{paipanInfo.xz}</Text>
          </Col>
        </Row>
      </View>

      <View style={styles.topInfo}>
        <Text style={styles.wuxingTitle}>五行力量</Text>
        <Row>
          {YueClass5.map((item, index) => {
            const map = YueLinByWuxing[yueling];
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
      </View>

      {/* 天干地支关系表 */}
      <View style={styles.topInfo}>
        <Row alignItems="center">
          <Text style={styles.yinyangText}>天干地支关系表</Text>
          <Switch
            style={{marginLeft: 8}}
            trackColor={{false: '#FFC0CB', true: COLOR_THEME_COMMON}}
            // thumbColor={isShowTgdz ? '#f5dd4b' : '#FFC0CB'}
            ios_backgroundColor="#3e3e3e"
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
                    {dz12.dzcg_text &&
                      Array.isArray(dz12.dzcg_text[index]) &&
                      dz12.dzcg_text[index].map((j, k) => {
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
                              {paipanInfo.tenMap[dz12.dzcg[index][k]]}
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

      {/* 袁天罡称骨： */}
      <View style={styles.topInfo}>
        <Row>
          <Text style={[styles.yinyangText]}>袁天罡称骨：</Text>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                ytgcgData.weight_text,
                `年${ytgcgData.weight_y}两 + 月${ytgcgData.weight_m}两 + 日${ytgcgData.weight_d}两 + 时${ytgcgData.weight_h}两`,
              )
            }>
            <Text style={[styles.yinyangText, {color: COLOR_THEME_COMMON}]}>
              {ytgcgData.weight_text}
            </Text>
          </TouchableOpacity>
        </Row>
        <Row>
          <Text style={styles.yinyangText}>{ytgcgData.comment}</Text>
        </Row>
      </View>

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
  yinyangText: {
    fontSize: 16,
  },

  wuxingTitle: {
    marginBottom: 4,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
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
