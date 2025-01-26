import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import {RootStackParamList, StackPages} from '../../types/interface';

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziBook>
> = () => {
  return (
    <View style={styles.contentContainer}>
      <WebView
        source={{
          uri: 'https://www.8bei8.com/book/ditiansui.html',
        }}></WebView>
    </View>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },
});
export default BaziInfo;
