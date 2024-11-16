import React, {FC, ReactNode} from 'react';
import {DZ, TG, WuXing} from '../../../util/wuxing';
import {
  FlexStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TouchModal} from '../Info/components/BaziModal';

const WuxingText: FC<{
  text: TG | DZ | string;
  touchModalText?: string;
  disabled?: boolean;
  children?: ReactNode;
  size?: 'default' | 'mid' | 'mini';
  style?: StyleProp<ViewStyle>;
  margin?: FlexStyle['margin'];
  fontWeight?: TextStyle['fontWeight'];
}> = ({
  text = '',
  touchModalText,
  disabled,
  children,
  size = 'default',
  fontWeight,
  margin,
  style,
}) => {
  // 五行颜色
  const color_text = text.length > 1 ? text[0] : text;

  return (
    <View style={[styles.col, {margin}, style]}>
      <TouchModal disabled={disabled} text={touchModalText || text}>
        <Text
          style={[
            styles.wuxing,
            size === 'mid' && styles.wuxing_mid,
            size === 'mini' && styles.wuxing_mini,
            {fontWeight},
            {color: WuXing.getColorByWuxing(color_text)},
          ]}>
          {text || ' '}
          {children}
        </Text>
      </TouchModal>
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
