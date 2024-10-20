import React, {FC, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import paipan from '../../util/paipan';
import {RootStackParamList, StackPages} from '../../types/interface';

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [paipanInfo, setPaipanInfo] = useState({});
  useEffect(() => {
    const {gender, date} = props.route.params;
    const dateObj = new Date(date);
    setPaipanInfo(paipan.GetInfo(
      gender,
      dateObj.getFullYear(),
      dateObj.getMonth() + 1,
      dateObj.getDate(),
      dateObj.getHours(),
    ))
  }, [props.route.params]);
  // const [gender, setGender] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>
          {JSON.stringify(paipanInfo, null, 4)}
          {/* {JSON.stringify(paipan.GetInfo(0, 1995, 1, 1, 16), null, 4)} */}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BaziInfo;
