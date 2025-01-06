import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Tabs from '../../../../components/Tabs';

import {PageDataType} from '../BaseInfo';
import WuxingText from '../../components/WuxingText';
import {Col, Row} from '../../../../components/Layout';
import {Ten2, WuXing, YueClass5, YueLinByWuxing} from '../../../../util/wuxing';
import {COLOR_LINEGRAY} from '../../../../constant/UI';
import {TouchModal} from './BaziModal';
// import {Sizhu} from '..';

const TabWuXingLi: FC<{
  pageData: PageDataType;
}> = ({pageData}) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isStrong, setIsStrong] = useState(false);

  useEffect(() => {
    const index = pageData.wx_info.findIndex(
      i => i.wx === pageData.rizhuWuxing,
    );
    index !== -1 && setActiveTab(index);
  }, [pageData]);

  useEffect(() => {
    const tongPower = pageData.wx_info.reduce((r, i) => {
      if ([Ten2.日元, Ten2.比劫, Ten2.印绶].includes(i.shishen)) {
        r += Number(i.power_number);
      }
      return r;
    }, 0);
    setIsStrong(tongPower >= 50);
  }, [pageData.wx_info]);

  const activeZhu = pageData.wx_info?.[activeTab];
  // const isActiveRizhu = activeZhu?.wx === pageData.rizhuWuxing;

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
              <Text style={[styles.bold, {color}]}>{i.shishen}</Text>
              <Text style={{color}}>{i.power_number}%</Text>
              <Text
                style={[
                  // styles.bold,
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
                  // i.is_tougan && styles.bold,
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
        <TouchModal text={'得令情况'}>
          <Text style={styles.commonText}>
            月令情况：
            <Text style={styles.bold}>
              {activeZhu?.isDeLing ? '得令（得时）' : '失令（失时）'}{' '}
            </Text>
          </Text>
        </TouchModal>
        {/* 得地 各五行通根 天干虚浮 地支无透 */}
        {pageData.wx_info.length ? (
          <TouchModal text="通根情况">
            <Text style={styles.commonText}>
              通根情况：
              <Text style={styles.bold}>
                {`${activeZhu?.tg_is_qg ? '有强根' : '无强根'}(${
                  activeZhu.tg_level_text
                })`}
              </Text>
            </Text>
          </TouchModal>
        ) : null}
        {/* 得势 三合三会 */}
        <TouchModal text="得势情况">
          <Text style={styles.commonText}>
            得势情况：
            <Text style={styles.bold}>
              {activeZhu?.isDeShi ? `得势(${activeZhu.deshi_text})` : '未得势'}
            </Text>
          </Text>
        </TouchModal>
      </View>

      {/* 力量 */}
      <View style={styles.wuxingView}>
        <TouchModal text="综合力量">
          <Text style={styles.commonText}>
            综合力量：
            <Text
              style={
                styles.bold
              }>{`${activeZhu?.power_number}% ${activeZhu?.power_text} (${activeZhu?.shishen}) `}</Text>
          </Text>
        </TouchModal>
        <TouchModal text="日主旺衰">
          <Text style={styles.commonText}>
            日主旺衰：
            <Text style={styles.bold}>{isStrong ? '身强' : '身弱'}</Text>
          </Text>
        </TouchModal>
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
