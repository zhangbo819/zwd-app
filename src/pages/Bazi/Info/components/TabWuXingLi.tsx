import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Tabs from '../../../../components/Tabs';

import {PageDataType} from '../BaseInfo';
import WuxingText from '../../components/WuxingText';
import {Col, Row} from '../../../../components/Layout';
import {WuXing, YueClass5, YueLinByWuxing} from '../../../../util/wuxing';
import {COLOR_LINEGRAY} from '../../../../constant/UI';
// import {Sizhu} from '..';

const TabWuXingLi: FC<{
  pageData: PageDataType;
}> = ({pageData}) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const index = pageData.wx_info.findIndex(
      i => i.wx === pageData.rizhuWuxing,
    );
    index !== -1 && setActiveTab(index);
  }, [pageData]);

  const activeZhu = pageData.wx_info?.[activeTab];

  return (
    <View style={styles.contentContainer}>
      <Tabs
        data={pageData.wx_info}
        index={activeTab}
        onActiveChange={setActiveTab}
        // disabled
        renderItem={({item: i}) => {
          const color = WuXing.getColorByWuxing(i.wx);
          return (
            <Col alignItems="center">
              <Text style={{color}}>{i.power_number}%</Text>
              <Text
                style={[
                  styles.bold,
                  {
                    color,
                    // opacity: i.wx_opacity,
                  },
                ]}>
                {i.tg_level_text}
              </Text>
              {/* <Text>{i.isDeLing ? '得令' : '不得令'}</Text> */}
              {/* <Text>{i.isDeShi ? '得势' : '未得势'}</Text> */}
              <WuxingText
                // style={{opacity: i.wx_opacity}}
                disabled
                margin={2}
                text={i.wx}
              />
              {/* <WuxingText disabled margin={2} text={i.dz} /> */}
              <Text
                style={[
                  i.is_tougan && styles.bold,
                  {
                    color,
                    // opacity: i.wx_opacity,
                  },
                ]}>
                {i.dz_level_text}
              </Text>
              <View
                style={[
                  styles.scoreView,
                  {
                    height: `${Number(i.power_number)}%`,
                    backgroundColor: color,
                  },
                ]}
              />
            </Col>
          );
        }}
      />
      {/* 月令 */}
      <View style={styles.wuxingView}>
        {/* <Row>
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
          <Col>
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
          </Col>
        </Row> */}
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
                  text={activeZhu.wx}
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
        {pageData.wx_info.length ? (
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
            透干地支: {pageData.bazi.filter(i => i.is_tougan).map(i => i.dz)}
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

      {/* 力量 */}
      <View style={styles.wuxingView}>
        <Text style={styles.commonText}>
          综合力量：
          <Text
            style={
              styles.bold
            }>{`${activeZhu?.power_number}%(${activeZhu?.power_text})`}</Text>
        </Text>
      </View>

      {/* <View style={styles.wuxingView}>
        <Text style={styles.hint}>
          日主得令、通根、得势三项得其二即可视为身强，皆有则极强、皆无则极弱。中间状态需再细究十神及地支关系。
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 12,
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
  scoreView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 0,
    opacity: 0.6,
    // backgroundColor: '#f008',
  },
});

export default TabWuXingLi;
