import React, {FC, ReactNode} from 'react';
import {DZ, getColorByWuxing, TG} from '../../../util/wuxing';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

const WuxingText: FC<{
  text: TG | DZ | string;
  children?: ReactNode;
  size?: 'default' | 'mid' | 'mini';
  fontWeight?: TextStyle['fontWeight'];
  style?: StyleProp<ViewStyle>;
}> = ({text = '', children, size = 'default', fontWeight, style}) => {
  // 五行颜色
  const color_text = text.length > 1 ? text[0] : text;

  return (
    <View style={[styles.col, style]}>
      <Text
        style={[
          styles.wuxing,
          size === 'mid' && styles.wuxing_mid,
          size === 'mini' && styles.wuxing_mini,
          {fontWeight},
          {color: getColorByWuxing(color_text)},
        ]}>
        {text || ' '}
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    // flex: 1,
    // backgroundColor: '#ff0',
  },
  wuxing: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wuxing_mid: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  wuxing_mini: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default WuxingText;
