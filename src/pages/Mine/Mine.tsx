import React, {FC} from 'react';
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

const Mine: FC<
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, StackPages.About>,
    BottomTabScreenProps<HomeBottomTabParamList, HomeBottomTabPages.Mine>
  >
> = props => {
  const handleAbout = () => {
    props.navigation.navigate(StackPages.About);
  };

  const handleAccount = () => {
    Alert.alert('暂无');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {RenderCard([
          {event: handleAccount, title: '账号管理'},
          {event: handleAbout, title: '关于'},
        ])}
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
    rightComponent?: React.JSX.Element;
    titleStyle?: StyleProp<TextStyle>;
  }[],
  BgStyle = {},
) => {
  let result = [];
  result = DataArr.map((item, index, arr) => {
    let {
      title = '',
      event,
      rightComponent = <Image source={IMAGE_ARROW_RIGHT} />,
      titleStyle = STYLES.liText,
    } = item;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={event}
        key={'RenderCard_' + title}>
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
    );
  });
  return <View style={[STYLES.panel, BgStyle]}>{result}</View>;
};

export default Mine;
