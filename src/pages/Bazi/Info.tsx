import React, {FC, ReactNode, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import paipan, {PaipanInfo} from '../../util/paipan';
import {RootStackParamList, StackPages} from '../../types/interface';

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [paipanInfo, setPaipanInfo] = useState<PaipanInfo>(
    paipan.GetInfo(1, Date.now()),
  );

  useEffect(() => {
    const {gender, date} = props.route.params;

    setPaipanInfo(paipan.GetInfo(gender, date));
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
  const renderPillarGrid = (data: string[]) => {
    // const {length} = data;
    return (
      <View style={styles.pillarGrid}>
        {/* 标题 */}
        <Row>
          {['日期', '年柱', '月柱', '日柱', '时柱'].map(item => {
            return (
              <Col key={item}>
                <Text style={styles.subheading}>{item}</Text>
              </Col>
            );
          })}
        </Row>
        {/* 十神 todo */}
        {/* <Row>
          {['主星', '', '', '', ''].map(item => {
            return (
              <Col key={item}>
                <Text style={styles.subheading}>{item}</Text>
              </Col>
            );
          })}
        </Row> */}
        {/* 天干 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>天干</Text>
          </Col>
          {paipanInfo.bazi.map((item: any, index: number) => {
            return (
              <Col key={'tg' + item[0] + index}>
                <WuxingText text={item[0]} />
              </Col>
            );
          })}
        </Row>
        {/* 地支 */}
        <Row>
          <Col>
            <Text style={styles.subheading}>地支</Text>
          </Col>
          {paipanInfo.bazi.map((item: any, index: number) => {
            return (
              <Col key={'tg' + item[1] + index}>
                <WuxingText text={item[1]} />
              </Col>
            );
          })}
        </Row>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.yinyangText}>
          {props.route.params.name || '未命名'} {paipanInfo.gender ? '女' : '男'}
        </Text>
        {/* 阴历阳历 */}
        {renderDateText(false)}
        {renderDateText(true)}
        {/* <Text>{JSON.stringify(paipanInfo, null, 4)}</Text> */}
        {/* 八字 */}
        {renderPillarGrid(paipanInfo.bazi)}
      </ScrollView>
    </View>
  );
};

const Row: FC<{
  children?: ReactNode;
}> = props => {
  return <View style={styles.row}>{props.children}</View>;
};
const Col: FC<{
  children?: ReactNode;
}> = ({children}) => {
  return <View style={[styles.col]}>{children}</View>;
};
const WuxingText: FC<{
  text: string;
  children?: ReactNode;
}> = ({text, children}) => {
  const Colors5 = ['#41A949', '#B31722', '#8B7049', '#D69415', '#3474E9'];
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
  return (
    <View style={[styles.col]}>
      <Text style={[styles.wuxing, {color: ColorsMap[text]}]}>{text}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },
  yinyangText: {
    fontSize: 18,
  },
  row: {
    marginVertical: 4,
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    // backgroundColor: '#ff0',
  },
  pillarGrid: {
    marginTop: 12,
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
});

export default BaziInfo;
