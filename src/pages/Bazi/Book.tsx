import React, {FC, useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import WebView from 'react-native-webview';
import {RootStackParamList, StackPages} from '../../types/interface';
import Icon from 'react-native-vector-icons/AntDesign';
import {COLOR_THEME_COMMON} from '../../constant/UI';
import {Row} from '../../components/Layout';

export const Books = [
  {title: '穷通宝鉴', url: 'https://www.8bei8.com/book/qiongtongbaojian.html'},
  {title: '滴天髓', url: 'https://www.8bei8.com/book/ditiansui.html'},
  {title: '三命通会', url: 'https://www.8bei8.com/book/sanmingtonghui.html'},
  {title: '千里命稿', url: 'https://www.8bei8.com/book/qianliminggao.html'},
  {title: '渊海子平', url: 'https://www.8bei8.com/book/yuanhaiziping.html'},
  {title: '五行精纪', url: 'https://www.8bei8.com/book/wuxingjingji.html'},
  {title: '神峰通考', url: 'https://www.8bei8.com/book/shenfengtongkao.html'},
];

const listener = {
  goBack() {},
  goForward() {},
  reload() {},
};

const BaziBook: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziBook>
> = props => {
  const refWebView = useRef<WebView>(null);

  useEffect(() => {
    if (refWebView.current) {
      listener.goBack = refWebView.current?.goBack;
      listener.goForward = refWebView.current?.goForward;
      listener.reload = refWebView.current?.reload;
    }
  }, []);

  return (
    <View style={styles.contentContainer}>
      <WebView
        ref={refWebView}
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
  icon: {fontSize: 20, color: COLOR_THEME_COMMON, marginLeft: 16},
});

export const BookRight = () => {
  return (
    <Row>
      <Icon
        name="arrowleft"
        style={styles.icon}
        onPress={() => listener.goBack()}
      />
      <Icon
        name="arrowright"
        style={styles.icon}
        onPress={() => listener.goForward()}
      />
      <Icon
        name="reload1"
        style={styles.icon}
        onPress={() => listener.reload()}
      />
    </Row>
  );
};

export default BaziBook;
