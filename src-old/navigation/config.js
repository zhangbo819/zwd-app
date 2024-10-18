import React, { Component } from 'react';
import {
    View
} from 'react-native';

import {
    COLOR_THEME_COMMON,
    COLOR_COMMON_BLACK,
    MinPix,
    NAV_COMMON_HEIGHT
} from "../constant/UI";
// import MyHeader from '../widget/myheader';
import STYLES from '../constant/STYLES';

export function HOC_NAV_TAB(COM, options = {}) {
    return class ComTabPage extends Component {
        static router = COM.router;

        render() {
            const { navigation } = this.props;
            const { isPage = false, navTitle = '' } = options;
            return <View style={[STYLES.commonBg]}>
                {/* {isPage ? <MyHeader title={navTitle} navigation={navigation} /> : null} */}
                <COM navigation={navigation} />
            </View>
        }
    }
}

export const tabOptions = {
    pressColor: (COLOR_THEME_COMMON.slice(0, -2) + '78'), //78 16进制透明度
    pressOpacity: 0.5,
    labelStyle: {
        fontSize: 14,
        lineHeight: 24,
    },
    style: {
        height: NAV_COMMON_HEIGHT,
        borderBottomWidth: MinPix,
        borderBottomColor: '#c3c3c3',
        backgroundColor: '#FFF'
    }
};

const getTabNavigatortabBarOptions = (options = {}) => {
    const defaultOptions = {
        activeTintColor: COLOR_THEME_COMMON,
        inactiveTintColor: COLOR_COMMON_BLACK,
        showIcon: false,
        scrollEnabled: true,
        pressColor: "#B7DAEE",
        tabStyle: {
            // height: 30,
            backgroundColor: "#FFF",
            padding: 0,
        },
        indicatorStyle: {
            // backgroundColor: "rgba(255,255,255,0.2)",
            // width: '33%',
            // alignSelf: 'center',
            backgroundColor: COLOR_THEME_COMMON,
            height: MinPix * 2
        },
        labelStyle: {
            fontSize: 18,
        },
        style: {
            borderBottomWidth: MinPix,
            borderBottomColor: '#c3c3c3',
            backgroundColor: '#fff',
        },
    };
    // console.log('getTabNavigatortabBarOptions , defaultOptions, options, Object.assign(defaultOptions, options', defaultOptions, options, Object.assign(defaultOptions, options))
    return Object.assign({}, defaultOptions, options)
}

export const getTabNavigatorConfig = (config = { tabBarOptions: {} }, useNavTabBarLabel = false) => {
    let { tabBarOptions = {} } = config;
    let defaultConfig = {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        backBehavior: "none",
    };
    if (useNavTabBarLabel) {
        defaultConfig.navigationOptions = function ({ navigation }) {
            let { state: { routeName } } = navigation;
            return {
                // tabBarVisible: false,
                tabBarLabel: routeName
            };
        }
    }
    return Object.assign({}, defaultConfig, config, { tabBarOptions: getTabNavigatortabBarOptions(tabBarOptions) })
};

