import React, {FC, useState} from 'react';
import {
  Alert,
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

// import WebView from 'react-native-webview';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

import {NativeModules} from 'react-native';
import version from '../../constant/version';
import Spin from '../../components/Spin';

// 获取 CalendarModule 模块
const {CalendarModule} = NativeModules;

const apkPath = `https://github.com/zhangbo819/zwd-app/releases/download/v0.2.0/zwd_v${version.newVersionName}.apk`;

const DownloadApk: FC<{
  setIsShowWebview: React.Dispatch<React.SetStateAction<boolean>>;
}> = props => {
  const [, setLoading] = useState(false);
  // const onShouldStartLoadWithRequest = (request: any) => {
  //   // 检查是否是要下载的链接
  //   if (request.url.endsWith('.apk')) {
  //     //   handleDownload(request.url);
  //     downloadAPK(request.url);

  //     return false; // 阻止 WebView 加载
  //   }
  //   return true; // 允许 WebView 加载其他链接
  // };

  const downloadAPK = async (apkUrl: string) => {
    props.setIsShowWebview(s => !s);
    // 请求权限
    if (Platform.OS === 'ios') {
      Alert.alert('iOS 不支持直接安装 APK');
      return;
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: '存储权限',
        message: '需要存储权限来下载 APK',
        buttonNeutral: '稍后询问',
        buttonNegative: '取消',
        buttonPositive: '确定',
      },
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('权限未被授予');
      return;
    }

    Alert.alert('提示', '开始下载最新安装包，请耐心等待');
    setLoading(true);

    const apkUrlArr = apkUrl.split('/');

    const path = `${RNFS.ExternalDirectoryPath}/${
      apkUrlArr[apkUrlArr.length - 1]
    }`; // 设置下载路径

    // 下载 APK
    RNFetchBlob.config({
      fileCache: true,
      path: path,
    })
      .fetch('GET', apkUrl)
      .then(res => {
        setLoading(false);
        // 下载完成，开始安装
        Alert.alert('提示', `下载完成，文件已保存到: ${res.path()}。`, [
          {
            text: '开始安装',
            onPress: () => {
              console.log('res path', res.path());
              CalendarModule.openDirectory(res.path());
            },
          },
        ]);
      })
      .catch(error => {
        Alert.alert('下载失败', error.message);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Spin spinning hiddenText>
        <Button
          onPress={() => {
            downloadAPK(apkPath);
          }}
          title="下载最新安装包"
        />
      </Spin>
      {/* <WebView
        source={{
          uri: 'https://github.com/zhangbo819/zwd-app/releases/tag/v0.2.0',
        }}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
        style={styles.webview}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    width: '100%',
    height: 1000,
  },
});

export default DownloadApk;