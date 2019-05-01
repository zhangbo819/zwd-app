import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import STYLES from '../../constant/STYLES';

import { loadStorage, saveStorage, isDev } from '../../constant/config';


class WarehouseList extends Component {

    constructor(props) {
        super(props);

        // console.log(props)
        this.state = {

        }
    }

    async componentDidMount() {
        const ListData = await loadStorage('ListData', []);
        console.log('ListData %o', ListData)
    }


    render() {
        return <View style={{ ...STYLES.CCC, flex: 1 }}>
            <Text>暂无</Text>
        </View>
    }

}

// const styles = StyleSheet.create({

// })

export default WarehouseList;