import React, {FC, ReactNode, useEffect, useState} from 'react';
import {ActivityIndicator, Animated, StyleSheet, Text} from 'react-native';
import {COLOR_THEME_COMMON} from '../constant/UI';

const Spin: FC<{
  spinning?: boolean;
  children?: ReactNode;
}> = ({spinning, children}) => {
  const [hiddenLoading, setHiddenLoading] = useState(false);
  const loading_opacity = new Animated.Value(1);
  const blurValue = new Animated.Value(0.3);

  useEffect(() => {
    if (!spinning) {
      Animated.timing(blurValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(loading_opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          setHiddenLoading(true);
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinning]);

  return (
    <>
      <Animated.View
        style={[
          styles.contentContainer,
          {opacity: loading_opacity, display: hiddenLoading ? 'none' : 'flex'},
        ]}>
        <ActivityIndicator size="large" color={COLOR_THEME_COMMON} />
        <Text style={[styles.loadingText, {color: COLOR_THEME_COMMON}]}>
          Loading...
        </Text>
      </Animated.View>

      <Animated.View style={[styles.container, {opacity: blurValue}]}>
        {children}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hidden: {opacity: 0.3},
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#666',
    zIndex: 100000,
  },
  loadingText: {
    marginTop: 12,
  },
});

export default Spin;
