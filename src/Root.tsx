import React, {Component} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';

// import { createStackNavigator } from 'react-navigation';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MainTabNavigator from './Main';
import About from './pages/Mine/About';

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

export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          hidden={false}
          translucent
        />
        {/* <Router /> */}

        <MainTabNavigator></MainTabNavigator>

        {/* <Stack.Navigator>
          <Stack.Screen name="Home" component={MainTabNavigator} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
