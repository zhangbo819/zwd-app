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
        <Row style={{flex: 1}}>
          {pillarShowData.map((i, index) => {
            return (
              <Col key={i.tg + index}>
                <WuxingText text={i.tg} />
              </Col>
            );
          })}
        </Row>
        <Text>{JSON.stringify(data_tgdz_relation, null, 4)}</Text>
      </MyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
});

export default TgDzRelationModal;
