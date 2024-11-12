import React, {useEffect, useState} from 'react';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ico5 from 'react-native-vector-icons/FontAwesome5';

// import { billListTopTab } from './navigation/topTabNavPages';
import {HomeBottomTabPages, HomeBottomTabParamList} from './types/interface';
import {COLOR_THEME_COMMON} from './constant/UI';
import Mine from './pages/Mine/Mine';
import WarehouseList from './pages/Warehouse/WarehouseList';
import BillScan from './pages/Bill';
import BaziTab from './pages/Bazi';
import {fetchToCheckVersion} from './util';
import {isDev} from './constant/config';

// import {MinPix, COLOR_THEME_COMMON, COLOR_BLACK} from './constant/UI';
// import {getTabNavigatorConfig} from './navigation/config';

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

const BillIcon: BottomTabNavigationOptions['tabBarIcon'] = ({color, size}) => (
  <Icon name="book" color={color} size={size} />
);

const WareHouseIcon: BottomTabNavigationOptions['tabBarIcon'] = ({
  color,
  size,
}) => <Ico5 name="clipboard-list" color={color} size={size} />;

const BaziIcon: BottomTabNavigationOptions['tabBarIcon'] = ({color, size}) => (
  <Ico5 name="yin-yang" color={color} size={size} />
);

const MineIcon: BottomTabNavigationOptions['tabBarIcon'] = ({color, size}) => (
  <Icon name="user" color={color} size={size} />
);

export default function () {
  const [MineTabBarBadge, setMineTabBarBadge] = useState(0);

  useEffect(() => {
    if (isDev) {
      return;
    }
    fetchToCheckVersion().then(data => {
      if (data.hasUpdate) {
        setMineTabBarBadge(1);
      }
    });
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={HomeBottomTabPages.Bazi}
      screenOptions={{
        tabBarActiveTintColor: COLOR_THEME_COMMON,
      }}>
      <Tab.Screen
        name={HomeBottomTabPages.Home}
        options={{
          title: '账本',
          headerShown: false,
          tabBarIcon: BillIcon,
        }}
        component={BillScan}
      />
      <Tab.Screen
        name={HomeBottomTabPages.WareHouse}
        options={{
          title: '货物',
          tabBarIcon: WareHouseIcon,
        }}
        component={WarehouseList}
      />
      <Tab.Screen
        name={HomeBottomTabPages.Bazi}
        options={{
          title: '八字',
          headerShown: false,
          tabBarIcon: BaziIcon,
        }}
        component={BaziTab}
      />
      <Tab.Screen
        name={HomeBottomTabPages.Mine}
        options={{
          title: '我的',
          tabBarIcon: MineIcon,
          ...(MineTabBarBadge > 0 ? {tabBarBadge: MineTabBarBadge} : {}),
        }}
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
