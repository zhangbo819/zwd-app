import React, {FC, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  BaziMaterialTopTabParamList,
  BaziScreenName,
  PaipanItem,
  RootStackParamList,
  StackPages,
} from '../../types/interface';
import {loadStorage} from '../../constant/config';
import {Parsers} from '../../constant/moss';
import {COLOR_LINEGRAY, FONT_PFR, FONT_PFS, MinPix} from '../../constant/UI';
import {ListEmptyComponent} from '../../components/ListEmptyComp';
import STYLES from '../../constant/STYLES';
import {BaziListKey} from '.';

const List: FC<
  CompositeScreenProps<
    NativeStackScreenProps<RootStackParamList, StackPages.Home>,
    MaterialTopTabScreenProps<BaziMaterialTopTabParamList, BaziScreenName.List>
  >
> = props => {
  const [list, setList] = useState<PaipanItem[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const refOnRefresh = useRef(() => {});

  useEffect(() => {
    const listener = () => {
      refOnRefresh.current();
    };
    props.navigation.addListener('focus', listener);
    return () => {
      props.navigation.removeListener('focus', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onRefresh = async (needLoading = true) => {
    console.log('refresh in');
    needLoading && setRefreshing(true);
    const newStorageBaziData = await loadStorage(BaziListKey, []);
    if (newStorageBaziData !== null) {
      setList(newStorageBaziData);
    }
    needLoading && setRefreshing(false);
  };
  refOnRefresh.current = _onRefresh;

  const handleItem = (item: PaipanItem) => {
    props.navigation.navigate(StackPages.BaziInfo, item);
  };

  const renderItem = ({item}: {item: PaipanItem; index: number}) => {
    const date = new Date(item.date);
    return (
      <TouchableOpacity
        key={'baziList_' + item.id}
        style={styles.Touch}
        // activeOpacity={0.8}
        onPress={() => handleItem(item)}
        // onLongPress={() => handleDelete({index})}
      >
        <Text style={styles.ItemText}>{`${item.name} ${
          item.gender === 0 ? '男' : '女'
        } ${date.getFullYear()}年${
          date.getMonth() + 1
        }月${date.getDate()}日${date.getHours()}时`}</Text>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => (
    <View style={{height: MinPix * 2, backgroundColor: COLOR_LINEGRAY}} />
  );

  const renderFooterComponent = () => {
    // console.log('this.FlatList',this.FlatList)
    // to do length by Screen
    return list.length < 10 ? null : (
      <View style={[STYLES.CCC, {marginTop: 5}]}>
        <Text style={{fontFamily: FONT_PFS}}>没有更多了...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        // ref={(res) => this.refFlatList = res}
        // style={styles.BillList.ScrollContent}
        data={list}
        renderItem={renderItem}
        keyExtractor={(_, index) => 'BaziKeyExtractor_' + index}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={ListEmptyComponent}
        // ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
        // onRefresh
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Touch: {
    flex: 1,
    marginVertical: 5,
    ...Parsers.padding([0, 20]),
  },
  ItemText: {
    paddingVertical:5,
    fontFamily: FONT_PFR,
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
});

export default List;
