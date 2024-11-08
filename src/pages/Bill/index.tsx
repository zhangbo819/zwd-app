import React, {FC, useEffect, useState} from 'react';
import {
  Text,
  View,
  Alert,
  TextInput,
  TouchableHighlight,
  ScrollView,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

import {
  createMaterialTopTabNavigator,
  MaterialTopTabScreenProps,
} from '@react-navigation/material-top-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import MyHeader from '../../components/Myheader';

import STYLES from '../../constant/STYLES';
// import { getTabNavigatorConfig, tabOptions } from '../../navigation/config';
import {
  COLOR_GRAY,
  COLOR_BLACK,
  COLOR_WHITE,
  COLOR_LINEGRAY,
  MinPix,
  FONT_PFS,
  FONT_PFR,
  COLOR_THEME_COMMON,
} from '../../constant/UI';
import {Parsers} from '../../constant/moss';
import {saveStorage, loadStorage} from '../../constant/config';
import {BillListScreen} from './list';
import {
  BillScreenName,
  MaterialTopTabParamList,
  StorageBillKey,
  typeRenderItems,
} from './interface';

let StorageBillData: string[] = [];
// 输入
const BillInputScreen: FC<
  MaterialTopTabScreenProps<MaterialTopTabParamList, BillScreenName.input>
> = props => {
  const [disabled, setDisabled] = useState(true);
  const [time, setTime] = useState(
    new Date().getFullYear() +
      '.' +
      (new Date().getMonth() + 1) +
      '.' +
      new Date().getDate(),
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
    const listener = () => {
      //   console.log('listener in');
      loadStorage(StorageBillKey, []).then(res => {
        StorageBillData = res;
        if (StorageBillData === null) {
          Alert.alert('数据读取失败');
        }
        setDisabled(false);
      });
    };
    props.navigation.addListener('focus', listener);
    return () => {
      props.navigation.removeListener('focus', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    const res = await saveStorage({key: StorageBillKey, data: StorageBillData});
    // console.log('data', StorageBillData);

    // to do goBack right
    const handler = res
      ? () => {
          props.navigation.navigate(BillScreenName.list);
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
};

const Tab = createMaterialTopTabNavigator<MaterialTopTabParamList>();

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
      <Tab.Navigator
        initialRouteName={BillScreenName.list}
        screenOptions={{
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 18},
          tabBarActiveTintColor: COLOR_THEME_COMMON,
          tabBarIndicatorStyle: {
            backgroundColor: COLOR_THEME_COMMON,
            height: MinPix * 2,
          },
        }}>
        <Tab.Screen
          name={BillScreenName.input}
          options={{tabBarLabel: '录入'}}
          component={BillInputScreen}
        />
        <Tab.Screen
          name={BillScreenName.list}
          options={{tabBarLabel: '列表'}}
          component={BillListScreen}
        />
      </Tab.Navigator>
    </View>
  );
}

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

const styles = {
  container: {
    flex: 1,
  },
  fixedToken,
};
