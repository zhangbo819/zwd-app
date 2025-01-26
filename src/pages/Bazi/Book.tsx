import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import {RootStackParamList, StackPages} from '../../types/interface';

export const Books = [
  {title: '穷通宝鉴', url: 'https://www.8bei8.com/book/qiongtongbaojian.html'},
  {title: '滴天髓', url: 'https://www.8bei8.com/book/ditiansui.html'},
  {title: '三命通会', url: 'https://www.8bei8.com/book/sanmingtonghui.html'},
  {title: '千里命稿', url: 'https://www.8bei8.com/book/qianliminggao.html'},
  {title: '渊海子平', url: 'https://www.8bei8.com/book/yuanhaiziping.html'},
  {title: '五行精纪', url: 'https://www.8bei8.com/book/wuxingjingji.html'},
  {title: '神峰通考', url: 'https://www.8bei8.com/book/shenfengtongkao.html'},
];

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziBook>
> = props => {
  return (
    <View style={styles.contentContainer}>
      <WebView
        source={{
          uri: props.route.params.url,
        }}
      />
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
