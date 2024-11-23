import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import { COLOR_THEME_COMMON } from '../constant/UI';

const MyModal: FC<{
  isShow?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}> = ({isShow, onClose, children}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const insets = useSafeAreaInsets(); // 获取安全区边距

  useEffect(() => {
    if (typeof isShow !== 'undefined') {
      setModalVisible(isShow);
    }
  }, [isShow]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible(!modalVisible);
        // }}
      >
        <View
          style={[
            styles.centeredView,
            {marginTop: insets.top, marginBottom: insets.bottom},
          ]}>
          <View style={[styles.modalView]}>
            <ScrollView style={styles.ScrollView}>{children}</ScrollView>

            <TouchableHighlight
              //   style={{...styles.openButton, backgroundColor: '#2196F3'}}
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
                onClose?.();
              }}>
              <Text style={styles.textStyle}>关闭</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/* <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight> */}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    flexGrow: 0,
    width: '90%',
    maxHeight: '100%',
    // backgroundColor: '#f00',
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ScrollView: {
    // flexGrow: 0,
    width: '100%',
    paddingHorizontal: 12,
    // flexGrow: 0,
    // backgroundColor: '#ff0',
    // paddingHorizontal: 10,
    // maxHeight: '80%',
  },
  openButton: {
    marginTop: 10,
    backgroundColor: COLOR_THEME_COMMON,
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyModal;
