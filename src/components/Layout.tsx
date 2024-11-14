import React, {FC, ReactNode} from 'react';
import {FlexStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

export const Row: FC<{
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  margin?: FlexStyle['margin'];
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
}> = ({style, children, margin, justifyContent, alignItems}) => {
  return (
    <View
      style={[
        styles.row,
        {alignItems, justifyContent},
        typeof margin !== 'undefined' && {margin},
        style,
      ]}>
      {children}
    </View>
  );
};
export const Col: FC<{
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  justifyContent?: FlexStyle['justifyContent'];
  alignItems?: FlexStyle['alignItems'];
}> = ({children, style, justifyContent, alignItems}) => {
  return (
    <View style={[styles.col, {justifyContent, alignItems}, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    margin: 4,
    marginHorizontal: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  col: {
    flex: 1,
    // backgroundColor: '#ff0',
  },
});
