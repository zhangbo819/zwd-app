import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MyModal from '../../../../components/MyModal';
import {Col, Row} from '../../../../components/Layout';
import {WuXing} from '../../../../util/wuxing';
import WuxingText from '../../components/WuxingText';
import {PillarItem} from '..';
import {COLOR_THEME_COMMON} from '../../../../constant/UI';

const TgDzRelationModal: FC<{
  isShow: boolean;
  onClose?: () => void;
  pillarShowData: PillarItem[];
}> = ({isShow, onClose, pillarShowData}) => {
  //   const [baziModal, setBaziModal] = useRecoilState(baziModalSelector);

  const data_relation = useMemo(
    () => ({
      tg: WuXing.getTgRelation(pillarShowData.map(i => i.tg)),
      dz: WuXing.getDzRelation(pillarShowData.map(i => i.dz)),
    }),
    [pillarShowData],
  );

  const renderLeftRightLine = (left = true, right = true) => {
    return (
      <Row style={{position: 'absolute', top: '50%'}} margin={0}>
        <Col>{left && <View style={[styles.line]} />}</Col>
        <Col>{right && <View style={[styles.line]} />}</Col>
      </Row>
    );
  };

  return (
    <View style={styles.contentContainer}>
      <MyModal isShow={isShow} onClose={onClose}>
        <View style={{height: 10}} />
        {data_relation.tg.map(item => {
          const end = item.index;
          return item.relation.map(i => {
            const start = i.index;
            return (
              <Row key={'tg_' + i.index}>
                {pillarShowData.map((_, index) => {
                  if (index < start || index > end) {
                    return <Col key={'tg_empty_' + index} />;
                  } else if (index === start) {
                    return (
                      <Col
                        key={'tg_text_' + i.name + index}
                        style={{flex: end - start + 1}}>
                        <Row style={styles.relationItemRow}>
                          <Col alignItems="center">
                            <Text style={styles.relationItem}>{i.name}</Text>
                            {renderLeftRightLine(false, true)}
                          </Col>
                          {new Array(end - start - 1).fill(1).map((_, j) => (
                            <Col key={'dz_text_empty' + j}>
                              <View style={styles.line} />
                            </Col>
                          ))}
                          <Col alignItems="center">
                            <Text style={styles.relationItem}>{item.name}</Text>
                            {renderLeftRightLine(true, false)}
                          </Col>
                        </Row>
                        <Text style={styles.relationText}>{i.text}</Text>
                        <View style={styles.line} />
                      </Col>
                    );
                  }
                })}
              </Row>
            );
          });
        })}

        <Row style={styles.zhus}>
          {pillarShowData.map(i => {
            return (
              <Col key={i.title}>
                <Text style={styles.subheading}>{i.title}</Text>
                <WuxingText disabled text={i.tg} />
                <WuxingText disabled text={i.dz} />
              </Col>
            );
          })}
        </Row>

        {data_relation.dz.map(item => {
          const end = item.end;
          return item.relation.map(relation => {
            const start = relation.start;
            return (
              <Row key={'dz_' + start + relation.text}>
                {pillarShowData.map((_, index) => {
                  if (index < start || index > end) {
                    return <Col key={'dz_empty_' + index} />;
                  } else if (index === start) {
                    return (
                      <Col
                        key={'dz_text_' + relation.name + index}
                        style={{flex: end - start + 1}}>
                        <Row style={styles.relationItemRow}>
                          {new Array(end - start).fill(1).map((_, j) => {
                            const text_index = relation.index.findIndex(
                              z => z === j + relation.start,
                            );
                            if (text_index !== -1) {
                              return (
                                <Col key={'dz_text' + j} alignItems="center">
                                  <Text style={styles.relationItem}>
                                    {relation.name[text_index]}
                                  </Text>
                                  {renderLeftRightLine(j !== 0)}
                                </Col>
                              );
                            }
                            return (
                              <Col key={'dz_text_empty' + j}>
                                {/* for test */}
                                {/* <Text style={{textAlign: 'center'}}>{j}</Text> */}
                                <View style={styles.line} />
                              </Col>
                            );
                          })}
                          <Col alignItems="center">
                            <Text style={styles.relationItem}>{item.name}</Text>
                            {renderLeftRightLine(true, false)}
                          </Col>
                        </Row>
                        <Text style={styles.relationText}>{relation.text}</Text>
                        <View style={styles.line} />
                      </Col>
                    );
                  }
                })}
              </Row>
            );
          });
        })}

        {/* <Text>{JSON.stringify(pillarShowData, null, 4)}</Text> */}
        {/* <Text>{JSON.stringify(data_relation.dz, null, 4)}</Text> */}
      </MyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  zhus: {
    // flex: 1,
    marginVertical: 12,
  },
  line: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    width: '100%',
    height: 1,
    backgroundColor: COLOR_THEME_COMMON,
    zIndex: 1,
  },
  subheading: {
    fontSize: 16,
    color: '#9F9F9F',
    textAlign: 'center',
  },
  relationItemRow: {
    backgroundColor: '#fff',
    zIndex: 10,
  },
  relationItem: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    zIndex: 10,
  },
  relationText: {
    position: 'absolute',
    top: -8,
    alignSelf: 'center',
    fontSize: 12,
    zIndex: 20,
  },
});

export default TgDzRelationModal;
