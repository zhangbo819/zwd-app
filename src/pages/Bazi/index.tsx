import React, {FC} from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import STYLES from '../../constant/STYLES';
import { BaziMaterialTopTabParamList, BaziScreenName } from '../../types/interface';
import Input from './Paipan';
import List from './List';

const Tab = createMaterialTopTabNavigator<BaziMaterialTopTabParamList>();

const BaziTab: FC<{}> = () => {
  return (
    <View style={STYLES.commonBg}>
      <Tab.Navigator initialRouteName={BaziScreenName.Paipan}>
        <Tab.Screen
          name={BaziScreenName.Paipan}
          options={{tabBarLabel: '排盘'}}
          component={Input}
        />
        <Tab.Screen
          name={BaziScreenName.List}
          options={{tabBarLabel: '用户列表'}}
          component={List}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BaziTab;
