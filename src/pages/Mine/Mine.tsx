import React, {FC, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleProp,
  TextStyle,
  Platform,
  PermissionsAndroid,
  NativeModules,
} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import STYLES from '../../constant/STYLES';
import {
  IMAGE_ARROW_RIGHT,
  STATUS_BAR_HEIGHT,
  COLOR_BGGRAY,
  NAV_COMMON_HEIGHT,
} from '../../constant/UI';
import {
  HomeBottomTabPages,
  HomeBottomTabParamList,
  RootStackParamList,
  StackPages,
} from '../../types/interface';
// import DownloadApk from './DownloadApk';
import Spin from '../../components/Spin';

import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

import version from '../../constant/version';

// 获取 CalendarModule 模块
const {CalendarModule} = NativeModules;

const apkPath = `https://github.com/zhangbo819/zwd-app/releases/download/v0.2.0/zwd_v${version.newVersionName}.apk`;

const Mine: FC<
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, StackPages.About>,
    BottomTabScreenProps<HomeBottomTabParamList, HomeBottomTabPages.Mine>
  >
> = props => {
  const [loading, setLoading] = useState(false);
  const handleAbout = () => {
    props.navigation.navigate(StackPages.About);
  };

  const handleAccount = () => {
    Alert.alert('暂无');
  };

  const downloadAPK = async (apkUrl: string) => {
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
  const handleDownloadApk = () => {
    // setIsShowWebview(s => !s);
    downloadAPK(apkPath);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {RenderCard([
          {event: handleAccount, title: '账号管理'},
          {event: handleAbout, title: '关于'},
          {event: handleDownloadApk, title: '下载最新版本', loading},
        ])}
        {/* {isShowWebview && <DownloadApk setIsShowWebview={setIsShowWebview} />} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BGGRAY,
    paddingTop: STATUS_BAR_HEIGHT,
  },
  content: {
    marginTop: NAV_COMMON_HEIGHT,
    paddingHorizontal: 14,
  },
});

export const RenderCard = (
  DataArr: {
    title?: string;
    event: () => void;
    loading?: boolean;
    rightComponent?: React.JSX.Element;
    titleStyle?: StyleProp<TextStyle>;
  }[],
  BgStyle = {},
) => {
  const result = DataArr.map((item, index, arr) => {
    let {
      title = '',
      event,
      rightComponent = <Image source={IMAGE_ARROW_RIGHT} />,
      titleStyle = STYLES.liText,
    } = item;

    return (
      <Spin spinning={item.loading} key={'RenderCard_' + title}>
        <TouchableOpacity activeOpacity={0.8} onPress={event}>
          <View style={STYLES.li}>
            <View
              style={[
                STYLES.liBorderView,
                index !== arr.length - 1 ? STYLES.hasBorder : {},
              ]}>
              <Text style={titleStyle}>{title}</Text>
              {rightComponent}
            </View>
          </View>
        </TouchableOpacity>
      </Spin>
    );
  });
  return <View style={[STYLES.panel, BgStyle]}>{result}</View>;
};

export default Mine;
