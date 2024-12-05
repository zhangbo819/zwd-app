import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Tabs from '../../../../components/Tabs';

import {PageDataType} from '../BaseInfo';
import WuxingText from '../../components/WuxingText';
import {Col, Row} from '../../../../components/Layout';
import {WuXing, YueClass5, YueLinByWuxing} from '../../../../util/wuxing';
import {COLOR_LINEGRAY} from '../../../../constant/UI';
import {Sizhu} from '..';

const TabWuXingLi: FC<{
  pageData: PageDataType;
}> = ({pageData}) => {
  const [activeTab, setActiveTab] = useState(2);

  const activeZhu = pageData.bazi?.[activeTab];

  return (
    <View style={styles.contentContainer}>
      <Tabs
        data={pageData.bazi}
        initIndex={activeTab}
        onActiveChange={setActiveTab}
        // disabled
        renderItem={({item: i}) => {
          return (
            <Col alignItems="center">
              <Text
                style={[
                  styles.bold,
                  {
                    color: WuXing.getColorByWuxing(i.tg),
                    opacity: i.tg_opacity,
                  },
                ]}>
                {i.tg_level_text}
              </Text>
              <WuxingText
                style={{opacity: i.tg_opacity}}
                disabled
                margin={2}
                text={i.tg}
              />
              <WuxingText disabled margin={2} text={i.dz} />
              <Text
                style={[
                  styles.bold,
                  {
                    color: WuXing.getColorByWuxing(i.dz),
                  },
                ]}>
                {i.dz_level_text}
              </Text>
            </Col>
          );
        }}
      />
      {/* 月令 */}
      <View style={styles.wuxingView}>
        <Row>
          <Col>
            <Text style={[styles.commonText]}>
              所选干支：
              {Sizhu[activeTab]}
            </Text>
          </Col>
          <Col>
            <Row alignItems="center" margin={0}>
              <Text style={[styles.commonText]}>天干：</Text>
              {activeZhu && (
                <WuxingText
                  style={styles.wuxingText}
                  size="mini"
                  text={activeZhu.tg}
                />
              )}
            </Row>
          </Col>
          {/* <Col>
            <Row alignItems="center" margin={0}>
              <Text style={[styles.commonText]}>地支：</Text>
              {activeZhu && (
                <WuxingText
                  style={styles.wuxingText}
                  size="mini"
                  text={activeZhu.dz}
                />
              )}
            </Row>
          </Col> */}
        </Row>
        <Row>
          {YueClass5.map((item, index) => {
            const map = YueLinByWuxing[pageData.yueling];
            return (
              <Col
                key={item}
                style={{
                  backgroundColor: WuXing.getColorByWuxing(map[index]),
                }}>
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
              <Text style={[styles.commonText]}>五行：</Text>
              {activeZhu && (
                <WuxingText
                  style={styles.wuxingText}
                  size="mini"
                  text={WuXing.getWuxing(activeZhu.tg)}
                />
              )}
            </Row>
          </Col>
          <Col>
            <Row alignItems="center" margin={0}>
              <Text style={[styles.commonText]}>月令：</Text>
              <WuxingText
                style={styles.wuxingText}
                size="mini"
                text={pageData.yueling}
              />
            </Row>
          </Col>
        </Row>
        <Text style={styles.commonText}>
          月令情况：
          <Text style={styles.bold}>
            {activeZhu?.isDeLing ? '得令（得时）' : '失令（失时）'}{' '}
          </Text>
        </Text>
        <Text style={styles.hint}>旺相为得令，休囚死为失令</Text>
        <Text style={styles.hint}>
          月令是判断五行力量的首要条件，但不是唯一条件，还要结合天干地支情况
        </Text>
      </View>

      {/* 得地 各五行通根 天干虚浮 地支无透 */}
      <View style={styles.wuxingView}>
        {pageData.bazi.length ? (
          <>
            <Text style={styles.commonText}>
              通根情况:{' '}
              <Text style={styles.bold}>
                {`${activeZhu?.tg_is_qg ? '有强根' : '无强根'}(${
                  activeZhu.tg_level_text
                })`}
              </Text>
            </Text>
            {/* <Text style={styles.commonText}>
                其余有强根天干:{' '}
                {pageData.bazi
                  .filter((i, index) => i.tg_is_qg && index !== 2)
                  .map(i => {
                    const index = TG_10.findIndex(j => j === i.tg);
                    return `${i.tg}(${paipanInfo.tenMap[index]})`;
                  })}
              </Text> */}
          </>
        ) : null}
        <Text style={styles.hint}>
          天干：有本气根代表天干有力，有强根，其余皆为无强根
        </Text>
        {/* <Text style={styles.commonText}>
            透干地支: {pageData.bazi.filter(i => i.tg_is_tougan).map(i => i.dz)}
          </Text>
          <Text style={styles.hint}>
            地支：透出天干代表可以成格成像，但不透干也不影响其在地支的强度
          </Text>
          <Text style={styles.hint}>
            天干为表，地支为里。天干为气，地支为质。天干决定上限，地支决定下限。
          </Text> */}
      </View>
      {/* 得势 三合三会 */}
      <View style={styles.wuxingView}>
        <Text style={styles.commonText}>
          得势情况：
          <Text style={styles.bold}>
            {activeZhu?.isDeShi ? `得势(${activeZhu.deshi_text})` : '未得势'}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wuxingView: {
    marginVertical: 4,
    paddingBottom: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: COLOR_LINEGRAY,
  },
  wuxingText: {marginLeft: 4},
  wuxingYueline: {
    marginVertical: 4,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  commonText: {
    fontSize: 16,
  },
  hint: {
    marginTop: 4,
    color: '#888',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TabWuXingLi;
