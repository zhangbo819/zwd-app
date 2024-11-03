import React, {FC, ReactNode} from 'react';
import {DZ, getWuxing, TG, WuXing} from '../../../util/wuxing';
import {StyleSheet, Text, View} from 'react-native';

const WuxingText: FC<{
  text: TG | DZ | string;
  children?: ReactNode;
  size?: 'default' | 'mini';
}> = ({text = '', children, size = 'default'}) => {
  // 五行颜色
  const ColorsMap: Record<WuXing | string, any> = {
    [WuXing.木]: '#4CAF50',
    [WuXing.火]: '#F44336',
    [WuXing.土]: '#795548',
    [WuXing.金]: '#FDD835',
    [WuXing.水]: '#2196F3',
  };
  const color_text = text.length > 1 ? text[0] : text;

  return (
    <View style={[styles.col]}>
      <Text
        style={[
          styles.wuxing,
          size === 'mini' && styles.wuxing_mini,
          {color: ColorsMap[getWuxing(color_text)]},
        ]}>
        {text || ' '}
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    flex: 1,
    // backgroundColor: '#ff0',
  },
  wuxing: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wuxing_mini: {
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default WuxingText;
