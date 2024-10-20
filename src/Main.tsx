import React from 'react';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import { billListTopTab } from './navigation/topTabNavPages';
import {HomeBottomTabPages, HomeBottomTabParamList} from './types/interface';
import Mine from './pages/Mine/Mine';
import WarehouseList from './pages/Warehouse/WarehouseList';
import BillScan from './pages/Bill';
import BaziTab from './pages/Bazi';

// import {MinPix, COLOR_THEME_COMMON, COLOR_BLACK} from './constant/UI';
// import {getTabNavigatorConfig} from './navigation/config';

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

export default function () {
  return (
    <Tab.Navigator initialRouteName={HomeBottomTabPages.Bazi}>
      <Tab.Screen
        name={HomeBottomTabPages.Home}
        options={{title: '首页', headerShown: false}}
        component={BillScan}
      />
      <Tab.Screen
        name={HomeBottomTabPages.WareHouse}
        options={{title: '货物'}}
        component={WarehouseList}
      />
      <Tab.Screen
        name={HomeBottomTabPages.Bazi}
        options={{title: '八字', headerShown: false}}
        component={BaziTab}
      />
      <Tab.Screen
        name={HomeBottomTabPages.Mine}
        options={{title: '我的'}}
        component={Mine as React.ComponentType<{}>}
      />
    </Tab.Navigator>
  );
}

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
