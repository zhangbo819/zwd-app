import React from 'react';

// import { createBottomTabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { billListTopTab } from './navigation/topTabNavPages';
import Mine from './pages/Mine/Mine';
import WarehouseList from './pages/Warehouse/WarehouseList';
import BillScan from './pages/Bill';

// import {MinPix, COLOR_THEME_COMMON, COLOR_BLACK} from './constant/UI';
// import {getTabNavigatorConfig} from './navigation/config';

const Tab = createBottomTabNavigator();

// const MainTabNavigator = createBottomTabNavigator(
//     mainTabRoute,
//     getTabNavigatorConfig({
//         initialRouteName,
//         navigationOptions({ navigation }) {
//             let { state: { routeName } } = navigation;
//             return {
//                 tabBarIcon({ focused }) {
//                     let source;
//                     let name = '';
//                     switch (routeName) {
//                         case '首页':
//                             name = 'home';
//                             break;
//                         case '货物':
//                             name = 'book';
//                             break;
//                         case '我的':
//                             name = 'user';
//                             break;
//                     }
//                     return <Icon name={name} size={30} color={focused ? COLOR_THEME_COMMON : COLOR_BLACK} />;
//                 },
//                 tabBarLabel: routeName,
//                 // tabBarLabel({ focused }) {
//                 //     // let title;

//                 //     // switch (routeName) {
//                 //     //     case '首页':
//                 //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
//                 //     //         break;
//                 //     //     case '课程':
//                 //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
//                 //     //         break;
//                 //     //     case '发现':
//                 //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
//                 //     //         break;
//                 //     //     case '服务':
//                 //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
//                 //     //         break;
//                 //     //     case '我的':
//                 //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
//                 //     //         break;
//                 //     // }
//                 //     return (
//                 //         <Text style={[{ textAlign: 'center', color: focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK }]}>{routeName}</Text>
//                 //     );
//                 // },
//                 tabBarOnPress({ navigation, defaultHandler }) {
//                     defaultHandler();
//                     mainTabCurrentTab = routeName;
//                 }
//             };
//         },
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         animationEnabled: false,
//         lazy: false,
//         tabBarOptions: {
//             showIcon: true,
//             labelStyle: {
//                 fontSize: 10,
//                 marginBottom: 5,
//             },
//             tabStyle: {
//                 backgroundColor: "#FFF",
//             },
//             style: {
//                 borderTopWidth: MinPix,
//                 borderTopColor: '#c3c3c3',
//                 height: 60,
//                 backgroundColor: '#fff'
//             },
//         }
//     })
// );

export default function () {
  return (
    // <NavigationContainer>
    <Tab.Navigator >
      {/* options={{headerShown:false}} */}
      <Tab.Screen  name="首页" component={BillScan} />
      <Tab.Screen name="货物" component={WarehouseList} />
      <Tab.Screen name="我的" component={Mine} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
