import React, {FC, ReactNode} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {COLOR_THEME_COMMON} from '../constant/UI';

const Spin: FC<{
  spinning?: boolean;
  children?: ReactNode;
}> = ({spinning, children}) => {
  return spinning ? (
    <View style={styles.contentContainer}>
      <ActivityIndicator size="large" color={COLOR_THEME_COMMON} />
      <Text style={[styles.loadingText, {color: COLOR_THEME_COMMON}]}>
        Loading...
      </Text>
    </View>
  ) : (
    children
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
  },
});

export default Spin;
