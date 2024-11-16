import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useRecoilState} from 'recoil';

import MyModal from '../../../../components/MyModal';
import {baziModalSelector} from '../../../../store';

const BaziModal: FC<{}> = () => {
  const [baziModal, setBaziModal] = useRecoilState(baziModalSelector);

  return (
    <View style={styles.contentContainer}>
      <MyModal
        isShow={baziModal.isShow}
        onClose={() => setBaziModal({...baziModal, isShow: false})}>
        <Text style={[styles.text]}>{baziModal.text}</Text>
      </MyModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    position: 'absolute',
  },
  text: {
    fontSize: 20,
  },
});

export default BaziModal;

export const TouchModal: FC<{
  text?: string | null;
  disabled?: boolean;
  children?: ReactNode;
}> = ({text = '', disabled, children}) => {
  const [, setBaziModal] = useRecoilState(baziModalSelector);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() =>
        setBaziModal({text: text === null ? '' : text, isShow: true})
      }>
      {children}
    </TouchableOpacity>
  );
};
