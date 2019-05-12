
import React, { Component } from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

import { createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    viewportWidth,
    MinPix,
    COLOR_THEME_COMMON,
    COLOR_BLACK
} from '../constant/UI';
import { HOC_NAV_TAB, getTabNavigatorConfig, tabOptions } from './navigation/config';

// import { billListTopTab } from './navigation/topTabNavPages';
import Mine from '../pages/mine/Mine';
import WarehouseList from '../pages/warehouse/warehouseList';

const initialRouteName = '首页';
let mainTabCurrentTab = initialRouteName;
let mainTabRoute = {
    首页: { screen: WarehouseList },
    我的: { screen: Mine }
};

const MainTabNavigator = createBottomTabNavigator(
    mainTabRoute,
    getTabNavigatorConfig({
        initialRouteName,
        navigationOptions({ navigation }) {
            let { state: { routeName } } = navigation;
            return {
                tabBarIcon({ focused }) {
                    let source;
                    let name = '';
                    switch (routeName) {
                        case '首页':
                            name = 'home';
                            break;
                        case '课程':
                            name = 'calendar';
                            break;
                        case '发现':
                            name = 'bullseye';
                            break;
                        case '服务':
                            name = 'shopping-cart';
                            break;
                        case '我的':
                            name = 'user';
                            break;
                    }
                    return <Icon name={name} size={30} color={focused ? COLOR_THEME_COMMON : COLOR_BLACK} />;
                },
                tabBarLabel: routeName,
                // tabBarLabel({ focused }) {
                //     // let title;

                //     // switch (routeName) {
                //     //     case '首页':
                //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
                //     //         break;
                //     //     case '课程':
                //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
                //     //         break;
                //     //     case '发现':
                //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
                //     //         break;
                //     //     case '服务':
                //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
                //     //         break;
                //     //     case '我的':
                //     //         color = focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK;
                //     //         break;
                //     // }
                //     return (
                //         <Text style={[{ textAlign: 'center', color: focused ? COLOR_THEME_COMMON : COLOR_COMMON_BLACK }]}>{routeName}</Text>
                //     );
                // },
                tabBarOnPress({ navigation, defaultHandler }) {
                    defaultHandler();
                    mainTabCurrentTab = routeName;
                }
            };
        },
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: false,
        tabBarOptions: {
            showIcon: true,
            labelStyle: {
                fontSize: 10,
                marginBottom: 5,
            },
            tabStyle: {
                backgroundColor: "#FFF",
            },
            style: {
                borderTopWidth: MinPix,
                borderTopColor: '#c3c3c3',
                height: 60,
                backgroundColor: '#fff'
            },
        }
    })
);

export default MainTabNavigator;

