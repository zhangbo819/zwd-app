import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Image,
  //   Linking,
  ScrollView,
  Text,
  StyleProp,
  ViewStyle,
  ImageStyle,
  // PermissionsAndroid,
  NativeModules,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import * as Progress from 'react-native-progress';
import {useRecoilState} from 'recoil';

// import MyHeader from '../../components/Myheader';

import {versionState} from '../../store';
import {
  IMAGE_APP_ICON,
  STATUS_BAR_HEIGHT,
  viewportHeight,
  NAV_COMMON_HEIGHT,
  COLOR_BLACK,
  FONT_PFS,
  COLOR_THEME_COMMON,
  COLOR_ASH_GRAY,
} from '../../constant/UI';
import {Parsers} from '../../constant/moss';
import STYLES from '../../constant/STYLES';
import {fetchToCheckVersion} from '../../util';
import {RootStackParamList, StackPages} from '../../types/interface';
import version from '../../constant/version';
import {isiOS} from '../../constant/config';

const navHeight = STATUS_BAR_HEIGHT + NAV_COMMON_HEIGHT;

const {CalendarModule} = NativeModules;

const About: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.About>
> = () => {
  const [appVersionData, setAppVersionData] = useRecoilState(versionState);
  const [checkVersionLoading, setcheckVersionDonwLoading] = useState(false);
  const [downLoading, setDonwLoading] = useState(false);
  const [progress, setProgress] = useState(0); // 下载进度（0 到 100）

  //   const openUrl = url => {
  //     if (url) {
  //       Linking.openURL(url).catch(_ => {});
  //     }
  //   };

  useEffect(() => {
    setcheckVersionDonwLoading(true);
    fetchToCheckVersion()
      .then(data => {
        setAppVersionData(data);
      })
      .finally(() => {
        setcheckVersionDonwLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadAPK = async (apkUrl: string) => {
    // 请求权限
    if (isiOS) {
      Alert.alert('iOS 不支持直接安装 APK');
      return;
    }
    // const granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   {
    //     title: '存储权限',
    //     message: '需要存储权限来下载 APK',
    //     buttonNeutral: '稍后询问',
    //     buttonNegative: '取消',
    //     buttonPositive: '确定',
    //   },
    // );

    // if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
    //   Alert.alert('权限未被授予', granted);
    //   return;
    // }

    // Alert.alert('提示', '开始下载最新安装包，请耐心等待');
    setDonwLoading(true);

    const apkUrlArr = apkUrl.split('/');

    // 设置下载路径
    const path = `${RNFS.ExternalDirectoryPath}/${
      apkUrlArr[apkUrlArr.length - 1]
    }`.replace(/(\/zwd_v)[\d.]+(\.apk)$/, '$1_last$2'); // 替换包名，防止apk包过多

    // 下载 APK
    RNFetchBlob.config({
      fileCache: true,
      path: path,
    })
      .fetch('GET', apkUrl)
      .progress((received, total) => {
        // 计算下载进度百分比
        // const progressPercent = ((received / total) * 100).toFixed(2) + '%';
        const progressPercent = (received / total) * 100;
        setProgress(progressPercent);
      })
      .then(res => {
        setDonwLoading(false);
        // 下载完成，开始安装
        Alert.alert('提示', `下载完成，文件已保存到: ${res.path()}。`, [
          {
            text: '取消',
          },
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
        setDonwLoading(false);
      });
  };

  return (
    <View style={css.container}>
      {/* <MyHeader title={'关于'} navigation={this.props.navigation} topful /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={css.content}>
          <Image
            style={css_image.appIconImage}
            source={IMAGE_APP_ICON}
            resizeMode={'stretch'}
          />
          <Text style={styles.appNameTitle}>
            {'珍味道_v' + version.newVersionName}
          </Text>

          {/* <Text>{JSON.stringify(appVersionData, null, 4)}</Text> */}

          {checkVersionLoading ? (
            <View style={styles.apkSpin}>
              <ActivityIndicator size="large" color={COLOR_THEME_COMMON} />
              <Text>检查更新中... </Text>
            </View>
          ) : appVersionData?.hasUpdate ? (
            <>
              {downLoading ? (
                <View style={styles.apkSpin}>
                  <ActivityIndicator size="large" color={COLOR_THEME_COMMON} />
                  <Text>下载中... </Text>
                  {/* 进度条组件 */}
                  <Progress.Bar
                    style={{marginTop: 4}}
                    progress={progress / 100}
                    color={COLOR_THEME_COMMON}
                  />
                </View>
              ) : (
                <>
                  <Text style={styles.apkText}>
                    发现最新版本，{appVersionData.apk.name}
                  </Text>
                  {appVersionData.body ? (
                    <>
                      <Text style={styles.apkText}>更新内容：</Text>
                      <ScrollView style={styles.versionbg}>
                        <Text style={styles.apkText}>
                          {appVersionData.body}
                        </Text>
                      </ScrollView>
                    </>
                  ) : null}
                  <TouchableOpacity
                    style={styles.apkBtnTouch}
                    onPress={() => {
                      downloadAPK(appVersionData.apk.url);
                    }}>
                    <Text style={styles.apkBtn}>点击下载最新安装包</Text>
                  </TouchableOpacity>
                </>
              )}
            </>
          ) : (
            <>
              {appVersionData?.body ? (
                <>
                  <Text style={styles.apkText}>更新内容：</Text>
                  <ScrollView style={styles.versionbg}>
                    <Text style={[styles.apkText, styles.black]}>
                      {appVersionData.body}
                    </Text>
                  </ScrollView>
                </>
              ) : null}
              <Text style={styles.apkText}>当前已是最新版本，无需更新</Text>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const css: Record<string, StyleProp<ViewStyle>> = {
  container: {
    ...STYLES.commonBg,
    paddingTop: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    // justifyContent: 'center',
    alignItems: 'center',
    ...Parsers.padding([60, 14, 0]),
    height: viewportHeight - navHeight,
  },
};
const css_image: Record<string, StyleProp<ImageStyle>> = {
  appIconImage: {
    marginTop: 24,
    ...Parsers.size([100]),
    borderRadius: 18,
    // borderWidth: MinPix * 2,
    borderColor: '#B5B7C5',
  },
};
const styles = StyleSheet.create({
  appNameTitle: {
    marginTop: 19,
    fontSize: 16,
    color: COLOR_BLACK,
    fontFamily: FONT_PFS,
  },
  apkSpin: {
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionbg: {
    maxHeight: 300,
    paddingHorizontal: 12,
    // backgroundColor:'#ff0'
  },
  apkText: {
    marginTop: 8,
    color: '#FF3B2F',
  },
  black: {
    color: COLOR_ASH_GRAY,
  },
  apkBtnTouch: {
    marginTop: 8,
  },
  apkBtn: {
    fontWeight: 'bold',
    fontFamily: FONT_PFS,
    fontSize: 16,
    color: COLOR_THEME_COMMON,
    // textDecorationLine: 'underline',
  },
});

export default About;
