import React, {FC, useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MyModal from '../../../../components/MyModal';
import {Col, Row} from '../../../../components/Layout';
import {WuXing} from '../../../../util/wuxing';
import WuxingText from '../../components/WuxingText';
import {PillarItem} from '..';

const TgDzRelationModal: FC<{
  isShow: boolean;
  onClose?: () => void;
  pillarShowData: PillarItem[];
}> = ({isShow, onClose, pillarShowData}) => {
  //   const [baziModal, setBaziModal] = useRecoilState(baziModalSelector);

  const data_tgdz_relation = useMemo(
    () => [
      WuXing.getTgRelation(pillarShowData.map(i => i.tg)),
      WuXing.getDzRelation(pillarShowData.map(i => i.dz)),
    ],
    [pillarShowData],
  );

  return (
    <View style={styles.contentContainer}>
      <MyModal isShow={isShow} onClose={onClose}>
        <View style={{height: 10}}></View>
        {data_tgdz_relation[0].map(item => {
          const end = item.index;
          return item.relation.map(i => {
            const start = i.index;
            return (
              <Row>
                {pillarShowData.map((_, index) => {
                  if (Array.isArray(start)) {
                    return null;
                  } else if (index < start || index > end) {
                    return <Col />;
                  } else if (index === start) {
                    return (
                      <Col
                        style={{
                          flex: end - start + 1,
                          //   backgroundColor: '#f00',
                        }}>
                        <Row>
                          <Col>
                            <Text style={styles.relationItem}>{i.name}</Text>
                          </Col>
                          {new Array(end - start - 1).fill(1).map(() => (
                            <Col />
                          ))}
                          <Col>
                            <Text style={styles.relationItem}>{item.name}</Text>
                          </Col>
                        </Row>
                        <Text style={styles.relationText}>{i.text}</Text>
                        <View style={styles.line} />
                      </Col>
                    );
                  } else {
                    return null;
                  }
                })}
              </Row>
            );
          });
        })}

        <Row style={{flex: 1}}>
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

        {/* <Text>{JSON.stringify(pillarShowData, null, 4)}</Text> */}
        <Text>{JSON.stringify(data_tgdz_relation[0], null, 4)}</Text>
      </MyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  line: {
    position: 'absolute',
    top: '50%',
    alignSelf: 'center',
    width: '100%',
    height: 1,
    backgroundColor: '#666',
    zIndex: 1,
  },
  subheading: {
    fontSize: 16,
    color: '#9F9F9F',
    textAlign: 'center',
  },
  relationItem: {
    // position: 'absolute',
    // left: '50%',
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    // backgroundColor: '#fff',
    zIndex: 10,
  },
  relationText: {
    position: 'absolute',
    top: -8,
    alignSelf: 'center',
    fontSize: 12,
  },
});

export default TgDzRelationModal;
