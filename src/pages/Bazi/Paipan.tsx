import React, {FC, useState} from 'react';
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
import {loadStorage, saveStorage} from '../../constant/config';
import {RootStackParamList, StackPages} from '../../types/interface';
import {BaziListKey} from '.';

const Paipan: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.Home>
> = props => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(false);
  const [date, setDate] = useState(new Date());
  const [isShowDays, setIsShowDays] = useState(false);
  const [isShowHours, setIsShowHours] = useState(false);

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

  const onSubmit = async () => {
    const newData = await loadStorage(BaziListKey, []);
    const newObj: RootStackParamList[StackPages.BaziInfo] = {
      name,
      gender: gender ? 0 : 1, // 保存时按照那边的规则 0 男 1 女
      date: date.getTime(),
      id: Date.now() * Math.random(),
    };
    newData.push(newObj);
    // 保存本地
    await saveStorage({key: BaziListKey, data: newData});
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
      <View style={styles.row}>
        <Text style={styles.title}>&nbsp;</Text>
        <TouchableOpacity onPress={() => setDate(new Date())}>
          <Text style={styles.setNow}>即时起局</Text>
        </TouchableOpacity>
      </View>

      <TouchableHighlight onPress={onSubmit} style={styles.submitTouch}>
        <Text style={styles.submitText}>开始排盘</Text>
      </TouchableHighlight>

      <DateTimePickerModal
        isVisible={isShowDays}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsShowDays(false)}
      />
      <DateTimePickerModal
        isVisible={isShowHours}
        date={date}
        mode="time"
        is24Hour={true}
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
    backgroundColor: '#fff'
  },
  title: {
    width: '30%',
    marginRight: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  row: {
    marginVertical: 4,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
  },
  dateBtn: {
    fontSize: 22,
  },
  setNow: {
    color: '#4A90E2',
    marginTop: 8,
    fontSize: 20,
  },
  submitTouch: {
    margin: 'auto',
    marginVertical: 20,
    paddingVertical: 16,
    width: '70%',
    borderRadius: 32,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Paipan;
