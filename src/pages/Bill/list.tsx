import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  TouchableOpacity,
  Clipboard,
  RefreshControl,
  Share,
  ShareContent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {CompositeScreenProps} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import MyHeader from '../../components/Myheader';
import {ListEmptyComponent} from '../../components/ListEmptyComp';

import STYLES from '../../constant/STYLES';
// import { getTabNavigatorConfig, tabOptions } from '../../navigation/config';
import {
  COLOR_LINEGRAY,
  MinPix,
  FONT_PFS,
  FONT_PFR,
  viewportWidth,
  COLOR_WHITE,
  COLOR_THEME_COMMON,
} from '../../constant/UI';
import {saveStorage, loadStorage, isiOS} from '../../constant/config';
import {StorageBillKey} from './interface';
import {Parsers} from '../../constant/moss';
import {getHeight} from '../../constant/Util';

const minLoadingTime = 0.7 * 1000;
// 列表
export const BillListScreen: FC<CompositeScreenProps<any, any>> = props => {
  const [hasCopy, setHasCopy] = useState(false);
  const [StorageBillData, setStorageBillData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const refTimer = useRef<NodeJS.Timeout | null>(null);
  const refOnRefresh = useRef(() => {});

  useEffect(() => {
    const listener = () => {
      refOnRefresh.current();
    };
    props.navigation.addListener('focus', listener);
    return () => {
      refTimer.current && clearTimeout(refTimer.current);
      props.navigation.removeListener('focus', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _onRefresh = async (needLoading = true) => {
    console.log('refresh in');
    needLoading && setRefreshing(true);
    const inTime = Date.now();
    const newStorageBillData = await loadStorage(StorageBillKey, []);
    if (newStorageBillData !== null) {
      setStorageBillData(newStorageBillData);
    }
    if (!needLoading) {
      return;
    }
    refTimer.current = setTimeout(
      () => {
        setRefreshing(false);
      },
      Date.now() - inTime < minLoadingTime ? minLoadingTime : 0,
    );
  };
  refOnRefresh.current = _onRefresh;

  const renderSeparator = () => (
    <View style={{height: MinPix * 2, backgroundColor: COLOR_LINEGRAY}} />
  );

  const renderHeaderComponent = () => {
    return (
      <View style={STYLES.REC}>
        {[
          {text: '分享', handler: handleShare},
          {
            text: hasCopy ? '已复制' : '复制',
            handler: handleCopy,
            disabled: hasCopy,
          },
          {
            text: '长按清空',
            Longhandler: () => handleDelete({deleteAll: true}),
          },
        ].map(
          (
            {
              text = '',
              disabled = false,
              handler = () => {},
              Longhandler = () => {},
            },
            index,
            data,
          ) => {
            let maxWidth: `${number}%` = `${Number(
              (100 / (data.length + 1)).toFixed(2),
            )}%`;
            return (
              <TouchableOpacity
                onPress={handler}
                onLongPress={Longhandler}
                style={[
                  styles.fixedToken.actionButton,
                  styles.BillList.headerTouch,
                  {maxWidth},
                ]}
                // underlayColor={'rgba(1,167,234, 1)'}
                disabled={disabled}
                key={'HeaderComponentBtn_' + index}>
                <Text style={styles.fixedToken.actionButtonText}>{text}</Text>
              </TouchableOpacity>
            );
          },
        )}
      </View>
    );
  };

  const renderFooterComponent = () => {
    // console.log('this.FlatList',this.FlatList)
    // to do length by Screen
    return StorageBillData.length < 10 ? null : (
      <View style={[STYLES.CCC, {marginTop: 5}]}>
        <Text style={{fontFamily: FONT_PFS}}>没有更多了...</Text>
      </View>
    );
  };

  const handleDelete = ({
    index,
    deleteAll = false,
  }: {
    index?: number;
    deleteAll?: boolean;
  }) => {
    Alert.alert('提示', `您确定${deleteAll ? '清空全部' : '删除这条'}记录吗`, [
      {
        text: '确定',
        onPress: async () => {
          const inTime = Date.now();
          let newStorageBillData = [...StorageBillData];
          setRefreshing(true);

          if (deleteAll) {
            newStorageBillData = [];
          } else {
            typeof index !== 'undefined' && newStorageBillData.splice(index, 1);
          }

          let res = await saveStorage({
            key: StorageBillKey,
            data: newStorageBillData,
          });

          if (res) {
            Alert.alert('提示', '删除成功!');
            setStorageBillData(newStorageBillData);
            refTimer.current = setTimeout(
              () => {
                setRefreshing(false);
              },
              Date.now() - inTime < minLoadingTime ? minLoadingTime : 0,
            );
          }
        },
      },
      {text: '取消', onPress: () => console.log('OK Pressed!')},
    ]);
  };

  const handleShare = async () => {
    try {
      const shareConfig: ShareContent = {
        title: 'Bill',
        message: getBillDataString(),
      };

      isiOS ? (shareConfig.url = 'http://www.baidu.com') : null;

      const result = await Share.share(shareConfig, {
        subject: '通过邮件分享的标题',
      });
      console.log('share result', result);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      error?.message && Alert.alert(error?.message);
    }
  };

  const handleCopy = async () => {
    await Clipboard.setString(getBillDataString());
    setHasCopy(true);
  };

  const getBillDataString = () => {
    let result = ',\n';
    StorageBillData.forEach((item, index, data) => {
      result += `"${item}"${index === data.length - 1 ? '' : ',\n'}`;
    });
    console.log('getBillDataString  data', result);
    return result;
  };

  return (
    <View style={styles.BillList.container}>
      <FlatList
        // ref={(res) => this.refFlatList = res}
        style={styles.BillList.ScrollContent}
        data={StorageBillData}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={'billList_' + index}
              style={styles.BillList.Touch}
              activeOpacity={0.8}
              onLongPress={() => handleDelete({index})}>
              <Text style={styles.BillList.ItemText}>{item}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => 'BillListItem_' + index}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={renderHeaderComponent}
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

const BillList: Record<string, StyleProp<ViewStyle | TextStyle>> = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  ScrollContent: {
    width: viewportWidth,
  },
  Touch: {
    flex: 1,
    marginVertical: 5,
    ...Parsers.padding([0, 20]),
  },
  headerTouch: {
    flex: 1,
    height: 40,
    // maxWidth: '35%',
    marginVertical: getHeight(10),
  },
  ItemText: {
    fontFamily: FONT_PFR,
    fontSize: 16,
    textAlign: 'center',
    color: '#000',
  },
};
const styles = {
  container: {
    flex: 1,
  },
  fixedToken: {
    action: {
      ...Parsers.margin([10, 14]),
    },
    actionButton: {
      height: 50,
      backgroundColor: 'rgba(1,167,234, .8)',
      borderRadius: 8,
      ...Parsers.shadow(['rgb(1,167,234)', 0, 4, 4, 0.5]),
      ...STYLES.CCC,
    },
    actionButtonText: {
      fontSize: 15,
      fontFamily: FONT_PFS,
      color: COLOR_WHITE,
      textAlign: 'center',
    } as StyleProp<TextStyle>,
  },
  BillList,
};
