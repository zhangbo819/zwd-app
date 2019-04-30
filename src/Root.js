import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text
} from 'react-native';

import { loadStorage, saveStorage, isDev } from './constant/config';


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
            <View style={{ flex: 1 }}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} hidden={false} translucent />
                <Text>Root</Text>
            </View>
        );
    }
}