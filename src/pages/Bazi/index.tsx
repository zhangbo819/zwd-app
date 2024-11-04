import React, {FC} from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import STYLES from '../../constant/STYLES';
import {
  BaziMaterialTopTabParamList,
  BaziScreenName,
} from '../../types/interface';
import Input from './Paipan';
import List from './List';
import {COLOR_THEME_COMMON, MinPix} from '../../constant/UI';

const Tab = createMaterialTopTabNavigator<BaziMaterialTopTabParamList>();

const BaziTab: FC<{}> = () => {
  return (
    <View style={STYLES.commonBg}>
      <Tab.Navigator
        initialRouteName={BaziScreenName.Paipan}
        screenOptions={{
          tabBarLabelStyle: {fontWeight: 'bold', fontSize: 18},
          tabBarActiveTintColor: COLOR_THEME_COMMON,
          tabBarIndicatorStyle: {
            backgroundColor: COLOR_THEME_COMMON,
            height: MinPix,
          },
        }}>
        <Tab.Screen
          name={BaziScreenName.Paipan}
          options={{
            tabBarLabel: '排盘',
          }}
          component={Input as React.ComponentType<{}>}
        />
        <Tab.Screen
          name={BaziScreenName.List}
          options={{tabBarLabel: '用户列表'}}
          component={List as React.ComponentType<{}>}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BaziTab;

export const BaziListKey = 'BaziListKey';
