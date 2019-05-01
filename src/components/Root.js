import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import MainTabNavigator, { getDiscoverPage } from './Main';

import { STATUS_BAR_HEIGHT } from '../constant/UI';
import About from '../pages/mine/About';

//主stack
const Router = createStackNavigator({
    Home: { screen: MainTabNavigator },
    About: { screen: About },
}, {
        initialRouteName: 'Home',
        headerMode: 'none',
        navigationOptions: {
            header: null
        }
    }
);

export default class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} hidden={false} translucent />
                <Router />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});