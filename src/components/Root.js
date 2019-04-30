import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text,
    StyleSheet
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import MainTabNavigator, { getDiscoverPage } from './Main';

import { loadStorage, saveStorage, isDev } from '../constant/config';
import { STATUS_BAR_HEIGHT } from '../constant/UI';

//主stack
const Router = createStackNavigator({
    Home: { screen: MainTabNavigator },
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

    async componentDidMount() {
        const ListData = await loadStorage('ListData', {});
        console.log('ListData %o', ListData)
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