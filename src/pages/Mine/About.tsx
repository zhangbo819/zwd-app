import React, {FC} from 'react';
import {
  View,
  Image,
  //   Linking,
  ScrollView,
  Text,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// import MyHeader from '../../components/Myheader';

import {
  IMAGE_APP_ICON,
  STATUS_BAR_HEIGHT,
  viewportHeight,
  NAV_COMMON_HEIGHT,
  COLOR_BLACK,
  FONT_PFS,
} from '../../constant/UI';

import {VERSION_NUMBER_NORM} from '../../constant/config';
import {Parsers} from '../../constant/moss';
import STYLES from '../../constant/STYLES';
import {getHeight} from '../../constant/Util';

const navHeight = STATUS_BAR_HEIGHT + NAV_COMMON_HEIGHT;

const css: Record<string, StyleProp<ViewStyle>> = {
  container: {
    ...STYLES.commonBg,
    paddingTop: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    ...Parsers.padding([getHeight(40), 14, 0]),
    height: viewportHeight - navHeight,
  },
};
const css_text: Record<string, StyleProp<TextStyle>> = {
  appNameTitle: {
    fontSize: 16,
    color: COLOR_BLACK,
    marginTop: 19,
    fontFamily: FONT_PFS,
  },
};
const css_image: Record<string, StyleProp<ImageStyle>> = {
  appIconImage: {
    ...Parsers.size([80]),
    borderRadius: 18,
    // borderWidth: MinPix * 2,
    borderColor: '#B5B7C5',
  },
};

const About: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.About>
> = () => {
  //   const openUrl = url => {
  //     if (url) {
  //       Linking.openURL(url).catch(_ => {});
  //     }
  //   };

  // renderVersionList = async() => {
  //     const data = await loadStorage(appOpenTime, []);
  //     console.log('data', data)
  // }

  return (
    <View style={css.container}>
      {/* <MyHeader
                title={'关于'}
                navigation={this.props.navigation}
                topful
            /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={css.content}>
          <Image
            style={css_image.appIconImage}
            source={IMAGE_APP_ICON}
            resizeMode={'stretch'}
          />
          <Text style={css_text.appNameTitle}>
            {'珍味道 V ' + VERSION_NUMBER_NORM}
          </Text>
        </View>

        {/* {this.renderVersionList()} */}
      </ScrollView>
    </View>
  );
};

export default About;
