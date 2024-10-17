import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  Clipboard,
  ScrollView,
  RefreshControl,
  Share,
  ShareContent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import MyHeader from '../../components/Myheader';
import {ListEmptyComponent} from '../../components/ListEmptyComp';

import STYLES from '../../constant/STYLES';
// import { getTabNavigatorConfig, tabOptions } from '../../navigation/config';
import {
  viewportWidth,
  COLOR_GRAY,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_LINEGRAY,
  MinPix,
  FONT_PFS,
  FONT_PFR,
} from '../../constant/UI';
import {Parsers} from '../../constant/moss';
import {saveStorage, loadStorage, isiOS} from '../../constant/config';
import {getHeight} from '../../constant/Util';
import {typeRenderItems} from './interface';

const fixedToken: Record<string, StyleProp<ViewStyle | TextStyle>> = {
  hint: {
    backgroundColor: '#E5EDFA',
    borderRadius: 8,
    ...Parsers.padding([8, 14]),
  },
  //   hintText: {
  //     // fontFamily: 'SourceCodePro-Regular',
  //     fontSize: 13,
  //     color: '#666',
  //     fontFamily: FONT_PFR,
  //   },

  content: {
    backgroundColor: COLOR_WHITE,
    borderWidth: MinPix,
    borderColor: COLOR_LINEGRAY,
    borderRadius: 8,
    ...STYLES.contentShadow,
    ...Parsers.margin([10, 14]),
    ...Parsers.padding([12, 0]),
  },

  row: {
    width: '100%',
    marginTop: 12,
    ...Parsers.padding([0, 11]),
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    height: 47,
    ...Parsers.padding([14, 10]),
    fontSize: 15,
    color: '#333',
    fontFamily: FONT_PFR,
  },

  timePickerView: {
    ...STYLES.RBC,
  },
  timePickerTouch: {
    width: '47.55%',
    backgroundColor: '#F5F5F5',
    height: 47,
    borderRadius: 8,
    ...Parsers.padding([14, 10]),
    justifyContent: 'center',
  },

  timePickerText: {
    fontFamily: FONT_PFR,
    fontSize: 15,
    color: COLOR_GRAY,
  },

  titlerowView: {
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONT_PFR,
    fontSize: 12,
    color: '#333',
  },
  warn: {
    minWidth: 14,
    textAlign: 'center',
    color: COLOR_GRAY,
  },

  propertyNumberTransform: {
    fontFamily: FONT_PFS,
    fontSize: 12,
    color: '#333',
    position: 'absolute',
    right: 10,
    top: 0,
  },

  //   get chargeBox() {
  //     return {
  //       ...this.row,
  //       flexDirection: 'row',
  //       ...Parsers.margin([16, 0, 10]),
  //     };
  //   },

  chageTitle: {
    fontFamily: FONT_PFR,
    fontSize: 15,
    color: COLOR_BLACK,
  },
  charge: {
    fontFamily: FONT_PFR,
    fontSize: 15,
    color: COLOR_BLACK,
  },
  chargeRate: {
    fontFamily: FONT_PFR,
    fontSize: 12,
    color: COLOR_GRAY,
  },

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
  actionButtonDisabled: {
    backgroundColor: COLOR_GRAY,
    ...Parsers.shadow([COLOR_GRAY, 0, 4, 4, 0.5]),
  },
  actionButtonText: {
    fontSize: 15,
    fontFamily: FONT_PFS,
    color: COLOR_WHITE,
    textAlign: 'center',
  },

  otherInfo: {
    marginTop: 16,
    ...STYLES.CCC,
    marginBottom: 40,
  },
  balance: {
    fontFamily: FONT_PFR,
    fontSize: 12,
    color: COLOR_GRAY,
  },
  noWHC: {
    ...STYLES.RCC,
  },
  noWHCText: {
    fontFamily: FONT_PFR,
    fontSize: 13,
    color: COLOR_BLACK,
  },
  exchange: {
    fontFamily: FONT_PFR,
    fontSize: 13,
    color: '#010000',
  },
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
  fixedToken,
  BillList,
};

const StorageBillKey = 'billData';

let StorageBillData: string[] = []; // TODO
// TODO CompositeScreenProps<any, any>
// 输入
const BillInputScreen: FC<CompositeScreenProps<any, any>> = (props) => {
  console.log('props', props);
  const [disabled, setDisabled] = useState(true);
  const [time, setTime] = useState(
    new Date().getMonth() + 1 + '.' + new Date().getDate(),
  );
  const [content, setContent] = useState('');
  const [money, setMoney] = useState('');

  const renderItemsArr: typeRenderItems[] = [
    {
      title: '时间',
      value: time,
      set: setTime,
      placeholder: '请输入时间',
      keyboardType: 'numeric',
    },
    {title: '内容', value: content, set: setContent, placeholder: '请输入内容'},
    {
      title: '金额',
      value: money,
      set: setMoney,
      placeholder: '请输入金额',
      keyboardType: 'numeric',
    },
  ];

  useEffect(() => {
    // console.log('this.props', props);
    loadStorage(StorageBillKey, []).then(res => {
      StorageBillData = res;
      if (StorageBillData === null) {
        Alert.alert('数据读取失败');
      }
      setDisabled(false);
    });
  }, []);

  const clearInput = () => {
    setContent('');
    setMoney('');
    // to do change List state
  };

  const handleSave = async () => {
    const input = time + '@' + content + '@' + money;
    // console.log('data input', input);

    // console.log('data data', StorageBillData);

    StorageBillData.unshift(input);
    // this.props.navigation.goBack() // TODO
    const res = await saveStorage({key: StorageBillKey, data: StorageBillData});
    // console.log('data', StorageBillData);

    // to do goBack right
    const handler = res
      ? () => {
          props.navigation.navigate('list');
          clearInput();
        }
      : props.navigation.goBack;

    Alert.alert(
      '保存' + (res ? '成功' : '失败'),
      res ? input : '请重试',
      [
        {text: '继续', onPress: clearInput},
        {text: '去看看', onPress: handler},
      ],
      {onDismiss: clearInput},
    );
  };

  const handleCheck = () => {
    if (!time || !content || !money) {
      Alert.alert('不能为空');
    } else {
      handleSave();
    }
  };

  const onSubmit = (i: number, data: typeRenderItems[]) => {
    if (i !== data.length - 1) {
      // TODO
      //   this.refs['Bill_' + (i + 1)].focus();
    } else {
      handleCheck();
    }
  };

  const randerInput = (
    item: typeRenderItems,
    index: number,
    data: typeRenderItems[],
  ) => {
    const {
      warn = null,
      placeholder = '',
      inputStyle = {},
      multiline = false,
      keyboardType,
      value,
      set,
      maxLength,
      title = '',
    } = item;
    const returnKeyType = index === data.length - 1 ? 'send' : 'next';
    const isFirst = index === 0;
    return (
      <View
        style={[styles.fixedToken.row, isFirst ? {marginTop: 0} : {}]}
        key={index}>
        <View style={styles.fixedToken.titlerowView}>
          <Text style={styles.fixedToken.title}>{title}</Text>
          {warn === null ? null : (
            <Text style={[styles.fixedToken.title, styles.fixedToken.warn]}>
              {warn}
            </Text>
          )}
        </View>
        <TextInput
          //   ref={'Bill_' + index}
          style={[styles.fixedToken.input, inputStyle]}
          underlineColorAndroid="transparent"
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          onSubmitEditing={() => onSubmit(index, data)}
          onChangeText={v => set(v)}
          multiline={multiline}
          enablesReturnKeyAutomatically={true}
          returnKeyType={returnKeyType}
          autoFocus={index === 1}
          autoCorrect={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text>{new Date().toLocaleString()}</Text> */}

      <ScrollView>
        <View style={styles.fixedToken.content}>
          {renderItemsArr.map(randerInput)}
        </View>

        <View style={styles.fixedToken.action}>
          <TouchableHighlight
            onPress={handleCheck}
            style={[
              styles.fixedToken.actionButton,
              disabled && styles.fixedToken.actionButtonDisabled,
            ]}
            underlayColor={'rgba(1,167,234, 1)'}
            disabled={disabled}>
            <Text style={styles.fixedToken.actionButtonText}>确认保存</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

const minLoadingTime = 0.7 * 1000;
// 列表
function BillListScreen() {
  const [hasCopy, setHasCopy] = useState(false);
  const [StorageBillData, setStorageBillData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const refTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // this.didFocusSubscription = this.props.navigation.addListener('willFocus', () => {
    //     Keyboard.dismiss();
    // });
    _onRefresh();
  }, []);

  useEffect(() => {
    return () => {
      // this.didFocusSubscription?.remove();
      refTimer.current && clearTimeout(refTimer.current);
    };
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
        keyExtractor={(item, index) => 'BillListItem_' + index}
        ItemSeparatorComponent={renderSeparator}
        ListEmptyComponent={ListEmptyComponent}
        ListHeaderComponent={renderHeaderComponent}
        ListFooterComponent={renderFooterComponent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
        }
        // onRefresh
        refreshing={refreshing}
      />
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

export default function BillScan() {
  // to do share in MyHeader
  return (
    <View style={STYLES.commonBg}>
      {/* <MyHeader
                // RightComponent={<TouchableOpacity onPress={this.handleShare}>
                //     <Icon name={'share'} size={18} color={COLOR_WHITE} style={{ textAlign: 'center' }} />
                // </TouchableOpacity>}
                title={'账本'}
                navigation={navigation}
            /> */}
      <Tab.Navigator initialRouteName="input">
        <Tab.Screen
          name="input"
          options={{tabBarLabel: '录入'}}
          component={BillInputScreen}
        />
        <Tab.Screen
          name="list"
          options={{tabBarLabel: '列表'}}
          component={BillListScreen}
        />
      </Tab.Navigator>
    </View>
  );
}
