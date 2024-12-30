import React, {useEffect, useState} from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR_THEME_COMMON} from '../constant/UI';

interface TabsProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  initIndex?: number;
  index?: number;
  disabled?: boolean;
  onActiveChange?: (v: number) => void;
}

const Tabs = <T,>({
  data,
  renderItem,
  initIndex = 0,
  index,
  disabled,
  onActiveChange,
}: TabsProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(initIndex);

  useEffect(() => {
    if (typeof index !== 'undefined') {
      setActiveIndex(index);
    }
  }, [index]);

  return (
    <View style={styles.contentContainer}>
      <FlatList
        style={styles.flatList}
        data={data}
        renderItem={info => {
          const isActive = activeIndex === info.index;
          return (
            <TouchableOpacity
              disabled={disabled}
              onPress={() => {
                setActiveIndex(info.index);
                onActiveChange?.(info.index);
              }}
              style={[styles.tabItem, isActive && styles.isActive]}>
              {renderItem(info)}
            </TouchableOpacity>
          );
        }}
        horizontal
      />
      {/* <View style={styles.contentContainer} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignSelf: 'center',
  },
  flatList: {
    flexGrow: 0,
    borderColor: COLOR_THEME_COMMON,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    // overflow: 'hidden',
  },
  tabItem: {
    padding: 12,
    backgroundColor: '#fff',
    // borderWidth: 2,
    // borderTopWidth: 0,
    // borderBottomWidth: 0,
    // borderColor: '#fff',
    borderRadius: 6,
  },
  isActive: {
    // backgroundColor: '#F0F0F0',
    backgroundColor: '#F5F5F5',
  },
});

export default Tabs;
