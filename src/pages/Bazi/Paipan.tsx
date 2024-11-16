import React, {FC, useEffect, useState} from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {isiOS, loadStorage, saveStorage} from '../../constant/config';
import {RootStackParamList, StackPages} from '../../types/interface';
import {BaziListKey} from '.';
import {COLOR_THEME_COMMON} from '../../constant/UI';
import WuxingText from './components/WuxingText';
import paipan from '../../util/paipan';

const Paipan: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.Home>
> = props => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(true);
  const [date, setDate] = useState(new Date());
  const [isShowDays, setIsShowDays] = useState(false);
  const [isShowHours, setIsShowHours] = useState(false);
  const [nowPaipan, setNowPaipan] = useState(paipan.GetInfo(0, Date.now()));

  useEffect(() => {
    const listener = () => {
      setNowPaipan(paipan.GetInfo(0, Date.now()));
    };
    props.navigation.addListener('focus', listener);
    return () => {
      props.navigation.removeListener('focus', listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirm = (ymdDate: Date) => {
    // console.log('A date has been picked: ', date);
    setDate(ymdDate);
    const newDate = new Date(ymdDate);
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes());
    setDate(newDate);
    setIsShowDays(false);
  };

  const onHoursConfirm = (hoursDate: Date) => {
    // console.log('currentDate', hoursDate);
    const newDate = new Date(date);
    newDate.setHours(hoursDate.getHours());
    newDate.setMinutes(hoursDate.getMinutes());
    setDate(newDate);
    setIsShowHours(false);
  };

  const onSubmit = async (isSave: boolean = true) => {
    const newData = await loadStorage(BaziListKey, []);
    const newObj: RootStackParamList[StackPages.BaziInfo] = {
      name: name === '' ? '未命名' : name,
      gender: gender ? 0 : 1, // 保存时按照那边的规则 0 男 1 女
      date: date.getTime(),
      id: Date.now() * Math.random(),
    };
    newData.unshift(newObj);
    // 保存本地
    if (isSave) {
      await saveStorage({key: BaziListKey, data: newData});
    }
    // 跳转详情
    props.navigation.navigate(StackPages.BaziInfo, newObj);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>姓名</Text>
        <TextInput
          style={styles.name}
          underlineColorAndroid="transparent"
          placeholder="请输入姓名"
          value={name}
          onChangeText={v => setName(v)}
          enablesReturnKeyAutomatically={true}
          autoFocus
          autoCorrect={false}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>性别</Text>
        <View style={styles.sex}>
          <TouchableOpacity onPress={() => setGender(g => !g)}>
            <Text style={styles.dateBtn}>{gender ? '男' : '女'}</Text>
          </TouchableOpacity>
          <Switch
            trackColor={{false: '#FFC0CB', true: '#000'}}
            // thumbColor={gender ? '#f5dd4b' : '#FFC0CB'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setGender(g => !g)}
            value={gender}
            style={{marginLeft: 16}}
          />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>时辰</Text>
        <TouchableOpacity onPress={() => setIsShowDays(true)}>
          <Text style={styles.dateBtn}>{`${date.getFullYear()}年${
            date.getMonth() + 1
          }月${date.getDate()}日`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsShowHours(true)}>
          <Text style={styles.dateBtn}>{` ${date.getHours()}时`}</Text>
        </TouchableOpacity>
        {/* <Button
          title={`${date.getHours()}时(分钟不重要)`}
          onPress={() => setIsShowHours(true)}
        /> */}
      </View>
      <View style={[styles.row, styles.nowRow]}>
        <Text style={styles.title}>此刻</Text>
        <View>
          <Text style={styles.nowText}>
            公历：{nowPaipan.yangli[0]}年{nowPaipan.yangli[1]}月
            {nowPaipan.yangli[2]}日 {nowPaipan.yangli[3]}时
          </Text>
          <Text style={styles.nowText}>
            农历：{nowPaipan.yinli[0]}年{nowPaipan.yinli[1]}月
            {nowPaipan.yinli[2]}日 {nowPaipan.bazi[3][1]}时
          </Text>
          <View style={styles.zhuRow}>
            {nowPaipan.bazi.map((zhu, index) => {
              return (
                <View style={styles.zhuItem} key={'now_zhu' + index}>
                  <WuxingText disabled size="mid" text={zhu[0]} />
                  <WuxingText disabled size="mid" text={zhu[1]} />
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              setDate(new Date());
              onSubmit(false);
            }}>
            <Text style={styles.setNow}>即时起局</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableHighlight
        onPress={() => onSubmit()}
        style={[styles.submitTouch]}>
        <Text style={styles.submitText}>开始排盘</Text>
      </TouchableHighlight>

      <DateTimePickerModal
        isVisible={isShowDays}
        date={date}
        mode="date"
        display={isiOS ? 'inline' : 'default'}
        positiveButton={{textColor: COLOR_THEME_COMMON}}
        negativeButton={{textColor: COLOR_THEME_COMMON}}
        accentColor={COLOR_THEME_COMMON}
        buttonTextColorIOS={COLOR_THEME_COMMON}
        onConfirm={handleConfirm}
        onCancel={() => setIsShowDays(false)}
      />
      <DateTimePickerModal
        isVisible={isShowHours}
        date={date}
        mode="time"
        is24Hour={true}
        buttonTextColorIOS={COLOR_THEME_COMMON}
        positiveButton={{textColor: COLOR_THEME_COMMON}}
        negativeButton={{textColor: COLOR_THEME_COMMON}}
        // display="default"
        onConfirm={onHoursConfirm}
        onCancel={() => setIsShowHours(false)}
      />
      {/* <Text>Selected Time: {date.toLocaleString()}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    marginVertical: 8,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  nowRow: {
    alignItems: 'flex-start',
  },
  title: {
    width: '35%',
    paddingRight: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  sex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nowText: {
    color: '#666',
  },
  zhuRow: {
    marginVertical: 8,
    // width: '100%',
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  zhuItem: {
    marginRight: 16,
  },
  name: {
    fontSize: 22,
  },
  dateBtn: {
    fontSize: 22,
    color: COLOR_THEME_COMMON,
    textDecorationLine: 'underline',
  },
  setNow: {
    color: COLOR_THEME_COMMON,
    // marginTop: 8,
    // padding: 8,
    fontSize: 18,
    textDecorationLine: 'underline',
    // borderRadius: 20,
    // borderColor: COLOR_THEME_COMMON,
    // borderWidth: 1,
  },
  submitTouch: {
    alignItems: 'center',
    margin: 'auto',
    marginVertical: 20,
    paddingVertical: 16,
    width: '65%',
    borderRadius: 32,
    backgroundColor: COLOR_THEME_COMMON,
    // backgroundColor: '#1a1a1a',
  },
  submitText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Paipan;
