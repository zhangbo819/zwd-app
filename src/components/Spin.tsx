import React, {FC, ReactNode, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {COLOR_THEME_COMMON} from '../constant/UI';

const Spin: FC<{
  spinning?: boolean;
  children?: ReactNode;
  hiddenText?: boolean;
  style?: StyleProp<ViewStyle>;
}> = ({spinning, children, hiddenText = false, style}) => {
  const refLastSpinning = useRef(false);
  const [hiddenLoading, setHiddenLoading] = useState(false);
  const loading_opacity = new Animated.Value(1);
  const content_opacity = new Animated.Value(0.3);

  useEffect(() => {
    if (!refLastSpinning.current && spinning) {
      // 开始 loading
      setHiddenLoading(false);
      loading_opacity.setValue(1);
      content_opacity.setValue(0.3);
    } else if (refLastSpinning.current && !spinning) {
      // 结束 loading
      Animated.parallel([
        Animated.timing(content_opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(loading_opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(({finished}) => {
        if (finished) {
          setHiddenLoading(true);
        }
      });
    }

    refLastSpinning.current = Boolean(spinning);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinning]);

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.loadingContainer,
          {opacity: loading_opacity, display: hiddenLoading ? 'none' : 'flex'},
        ]}>
        <ActivityIndicator size="large" color={COLOR_THEME_COMMON} />
        {!hiddenText && (
          <Text style={[styles.loadingText, {color: COLOR_THEME_COMMON}]}>
            Loading...
          </Text>
        )}
      </Animated.View>
      <Animated.View style={[styles.content, {opacity: content_opacity}]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
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
