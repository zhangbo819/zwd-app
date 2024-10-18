import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import About from './pages/Mine/About';
import MainTabNavigator from './Main';

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

export default function Root () {
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

        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={StackPages.Home}
            component={MainTabNavigator}
          />
          <Stack.Screen name={StackPages.About} component={About} />
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
