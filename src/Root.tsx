import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {RootStackParamList, StackPages} from './types/interface';
import About from './pages/Mine/About';
import BaziInfo from './pages/Bazi/Info';
import BaziBook from './pages/Bazi/Book';
import MainTabNavigator from './Main';
import {COLOR_THEME_COMMON} from './constant/UI';

// import { STATUS_BAR_HEIGHT } from './constant/UI';

// 主 stack
// const Stack = createNativeStackNavigator();
// const Router = createStackNavigator({
//     Home: { screen: MainTabNavigator },
//     About: { screen: About },
// }, {
//         initialRouteName: 'Home',
//         headerMode: 'none',
//         navigationOptions: {
//             header: null
//         }
//     }
// );
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Root() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          hidden={false}
          translucent
        />
        {/* <Router /> */}

        <Stack.Navigator screenOptions={{headerTintColor: COLOR_THEME_COMMON}}>
          <Stack.Screen
            name={StackPages.Home}
            component={MainTabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={StackPages.About}
            component={About}
            options={{
              headerTitle: '关于',
            }}
          />
          <Stack.Screen
            name={StackPages.BaziInfo}
            component={BaziInfo}
            options={{
              headerTitle: '',
            }}
          />
          <Stack.Screen
            name={StackPages.BaziBook}
            component={BaziBook}
            options={{
              headerTitle: '',
            }}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
