import React, {FC, useEffect, useState} from 'react';
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
  ViewStyle,
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
import {fetchToCheckVersion} from '../../util';

// 获取 CalendarModule 模块

const Mine: FC<
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, StackPages.About>,
    BottomTabScreenProps<HomeBottomTabParamList, HomeBottomTabPages.Mine>
  >
> = props => {
  const [hasUpdate, setHasUpdate] = useState(false);

  useEffect(() => {
    // TODO move to store
    fetchToCheckVersion().then(data => {
      if (data.hasUpdate) {
        setHasUpdate(true);
      }
    });
  }, []);

  const handleAbout = () => {
    props.navigation.navigate(StackPages.About);
  };

  const handleAccount = () => {
    Alert.alert('暂无');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <RenderCard
          data={[
            {event: handleAccount, title: '账号管理'},
            {event: handleAbout, title: '关于', hasUpdate},
          ]}
        />
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

  rightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateText: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontWeight: 'bold',
    color: '#FF3B2F',
    borderColor: '#FF3B2F',
    borderWidth: 1,
    borderRadius: 4,
  },
});

export const RenderCard: FC<{
  data: {
    title?: string;
    event: () => void;
    // loading?: boolean;
    rightComponent?: React.JSX.Element;
    titleStyle?: StyleProp<TextStyle>;
    hasUpdate?: boolean;
  }[];
  style?: StyleProp<ViewStyle>;
}> = props => {
  const {data, style = {}} = props;
  const result = data.map((item, index, arr) => {
    let {
      title = '',
      event,
      rightComponent = <Image source={IMAGE_ARROW_RIGHT} />,
      titleStyle = STYLES.liText,
      hasUpdate,
    } = item;

    return (
      <TouchableOpacity
        key={'RenderCard_' + title}
        activeOpacity={0.8}
        onPress={event}>
        <View style={STYLES.li}>
          <View
            style={[
              STYLES.liBorderView,
              index !== arr.length - 1 ? STYLES.hasBorder : {},
            ]}>
            <Text style={titleStyle}>{title}</Text>
            <View style={styles.rightView}>
              {hasUpdate && <Text style={styles.updateText}>有新版本</Text>}

              {rightComponent}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
  return <View style={[STYLES.panel, style]}>{result}</View>;
};

export default Mine;
