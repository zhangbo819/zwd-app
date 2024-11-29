import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Alert,
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  BaziMaterialTopTabParamList,
  BaziScreenName,
  PaipanItem,
  RootStackParamList,
  StackPages,
} from '../../types/interface';
import {loadStorage, saveStorage} from '../../constant/config';
import {Parsers} from '../../constant/moss';
import {
  COLOR_LINEGRAY,
  COLOR_THEME_COMMON,
  FONT_PFS,
  MinPix,
} from '../../constant/UI';
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
    await new Promise(resolve => setTimeout(resolve, 300));
    if (newStorageBaziData !== null) {
      setList(newStorageBaziData);
    }
    needLoading && setRefreshing(false);
  };
  refOnRefresh.current = _onRefresh;

  const handleItem = (item: PaipanItem) => {
    props.navigation.navigate(StackPages.BaziInfo, item);
  };

  const handleDelete = (item: PaipanItem, index: number) => {
    Alert.alert('提示', `确定要删除 "${item.name}"`, [
      {text: '取消', onPress: () => {}},
      {
        text: '确定',
        onPress: async () => {
          const newList = [...list];
          newList.splice(index, 1);

          const res = await saveStorage({key: BaziListKey, data: newList});

          if (res) {
            Alert.alert('提示', '删除成功!');

            _onRefresh();
          }
        },
      },
    ]);
  };

  const renderItem = ({item, index}: {item: PaipanItem; index: number}) => {
    const date = new Date(item.date);
    return (
      <TouchableOpacity
        key={'baziList_' + item.id}
        style={styles.Touch}
        onPress={() => handleItem(item)}>
        <Text style={[styles.Col, styles.ItemText]}>
          {`${item.name || '未命名'} `}
        </Text>
        <Text style={[styles.Col2, styles.ItemSmallText]}>
          {`${date.getFullYear()}年${
            date.getMonth() + 1
          }月${date.getDate()}日${date.getHours()}时`}
          <Text>{` ${item.gender === 0 ? '男' : '女'}`}</Text>
        </Text>
        <View style={styles.Col}>
          <Icon
            style={styles.delete}
            name="delete"
            onPress={() => handleDelete(item, index)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => <View style={styles.separator} />;

  const renderFooterComponent = () => {
    // console.log('this.FlatList',this.FlatList)
    // to do length by Screen
    return list.length < 10 ? null : (
      <View style={[STYLES.CCC, {marginVertical: 10}]}>
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
        keyExtractor={item => 'BaziKeyExtractor_' + item.id}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={ListEmptyComponent}
        // ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={_onRefresh}
            tintColor={COLOR_THEME_COMMON}
          />
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
  separator: {
    height: MinPix * 2,
    backgroundColor: COLOR_LINEGRAY,
  },
  Touch: {
    flex: 1,
    marginVertical: 5,
    ...Parsers.padding([5, 20]),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Col2: {
    flex: 2,
    textAlign: 'center',
    // backgroundColor: "#ff0"
  },
  Col: {
    flex: 1,
  },
  ItemText: {
    marginRight: 8,
    paddingVertical: 5,
    fontFamily: FONT_PFS,
    fontWeight: 'bold',
    fontSize: 18,
    // textAlign: 'center',
    color: '#000',
  },
  ItemSmallText: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  delete: {
    alignSelf: 'flex-end',
    fontSize: 24,
    color: COLOR_THEME_COMMON,
  },
});

export default List;
