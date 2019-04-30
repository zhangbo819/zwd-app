import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Text
} from 'react-native';

export default class Root extends Component {
    constructor(props) {
        super(props);
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