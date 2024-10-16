import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// import Icon from 'react-native-vector-icons/FontAwesome';

import {
    NAV_COMMON_HEIGHT,
    COLOR_WHITE,
    FONT_PFS,
    COLOR_THEME_COMMON,
    STATUS_BAR_HEIGHT
} from '../constant/UI';
import STYLES from '../constant/STYLES';
import { Parsers } from '../constant/moss';

export default class MyHeader extends Component {

    constructor(props) {
        super(props);

        this.defaultLeftComponent = (<TouchableOpacity onPress={() => this.props.navigation.goBack()} >
            {/* <Icon style={styles.settingImg} name={'arrow-left'} size={18} color={COLOR_WHITE} /> */}
            <Text>Icon</Text>
        </TouchableOpacity>);

        this.defaultRightComponent = null;
    }

    render() {
        let {
            style = {},
            LeftComponent = this.defaultLeftComponent,
            RightComponent = this.defaultRightComponent,
            title = '',
            topful = false
        } = this.props;
        return (
            <View>
                {topful ? <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: COLOR_THEME_COMMON }} /> : null}

                <View style={[styles.headView, style]}>

                    <View style={styles.LeftComponentTouch}>
                        {LeftComponent}
                    </View>

                    <Text style={styles.title}>
                        {title}
                    </Text>

                    <View style={styles.RightComponentTouch}>
                        {RightComponent}
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    headView: {
        height: NAV_COMMON_HEIGHT,
        backgroundColor: COLOR_THEME_COMMON,
        ...STYLES.RCC
    },
    LeftComponentTouch: {
        marginLeft: 5,
        ...Parsers.size(NAV_COMMON_HEIGHT),
        position: 'absolute',
        left: 0,
        justifyContent: 'center'
    },
    RightComponentTouch: {
        // marginRight: 5,
        ...Parsers.size(NAV_COMMON_HEIGHT),
        position: 'absolute',
        right: 0,
        justifyContent: 'center'
    },
    settingImg: {
        alignItems: 'center',
        // borderRadius: 30,
        marginRight: 15
    },
    title: {
        color: COLOR_WHITE,
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: FONT_PFS,
        textAlign: 'center'
    }
})