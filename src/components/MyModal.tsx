import React, {FC, ReactNode, useEffect, useState} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const MyModal: FC<{
  isShow?: boolean;
  onClose?: () => void;
  children?: ReactNode;
}> = ({isShow, onClose, children}) => {
  const [modalVisible, setModalVisible] = useState(false);

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
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
    margin: 20,
    padding: 20,
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
    // elevation: 5,
  },
  ScrollView: {
    flexGrow: 0,
    paddingHorizontal: 10
    // maxHeight: '80%',
  },
  openButton: {
    marginTop: 10,
    backgroundColor: '#2196F3',
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default MyModal;
