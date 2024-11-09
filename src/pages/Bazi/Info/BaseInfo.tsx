import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ShowColors from '../../../components/ShowColors';
import {PaipanInfo} from '../../../util/paipan';
import Ytgcg from '../../../util/ytgcg';
import {getColorByWuxing, getWuxing} from '../../../util/wuxing';
import {Col, Row} from '.';

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

  useEffect(() => {
    const newYtgcgData = Ytgcg.getData(
      paipanInfo.bazi,
      paipanInfo.yinli[1],
      paipanInfo.yinli[2],
    );
    // console.log('newYtgcgData', newYtgcgData)
    setYtgcgData(newYtgcgData);
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
    return <Text style={styles.yinyangText}>{res}</Text>;
  };

  return (
    <ScrollView style={styles.contentContainer}>
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
        <Row>
          <Col>
            <Text style={[styles.yinyangText]}>
              五行：
              <Text
                style={{
                  color: getColorByWuxing(paipanInfo.bazi[2][0]),
                }}>
                {paipanInfo.tg[2] % 2 === 0 ? '阳' : '阴'}{getWuxing(paipanInfo.bazi[2][0])}
              </Text>
            </Text>
          </Col>
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

      {/* 袁天罡称骨： */}
      <View style={styles.ytgcgBg}>
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

      <ShowColors />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  topInfo: {
    padding: 8,
    backgroundColor: '#fff',
  },
  yinyangText: {
    fontSize: 16,
  },
  ytgcgBg: {
    padding: 8,
    marginTop: 16,
    backgroundColor: '#fff',
  },
});

export default BaseInfo;
