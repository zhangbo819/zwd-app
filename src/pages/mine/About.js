import React from 'react';
import { View, Image, TouchableOpacity, Linking, ScrollView, Text } from 'react-native';

import {
    IMAGE_APP_ICON,
    COLOR_BGGRAY,
    STATUS_BAR_HEIGHT,
    viewportHeight,
    NAV_COMMON_HEIGHT,
    COLOR_BLACK,
    MinPix,
    FONT_PFS
} from '../../constant/UI';

import { VERSION_NUMBER_NORM, loadStorage } from '../../constant/config';
import MyHeader from '../../components/widget/myheader';
import { Parsers } from '../../constant/moss';
import STYLES from '../../constant/STYLES';
import { getHeight } from '../../constant/Util';

const navHeight = STATUS_BAR_HEIGHT + NAV_COMMON_HEIGHT;

let css = {
    container: {
        ...STYLES.commonBg,
        paddingTop: 0
    },
    content: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        ...Parsers.padding([getHeight(40), 14, 0]),
        height: viewportHeight - navHeight,
    },
    appIconImage: {
        ...Parsers.size([80]),
        borderRadius: 18,
        borderWidth: MinPix * 2,
        borderColor: '#B5B7C5'
    },
    appNameTitle: {
        fontSize: 16,
        color: COLOR_BLACK,
        marginTop: 19,
        fontFamily: FONT_PFS
    },

};

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    openUrl = (url) => {
        if (url) {
            Linking.openURL(url).catch(err => {

            });
        }
    }

    // renderVersionList = async() => {
    //     const data = await loadStorage(appOpenTime, []);
    //     console.log('data', data)
    // }

    render() {
        // this.renderVersionList()
        return (
            <View style={css.container}>

                <MyHeader
                    title={'关于'}
                    navigation={this.props.navigation}
                    topful
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={css.content}>
                        {/* <Image style={css.appIconImage} source={IMAGE_APP_ICON} /> */}
                        <Text style={css.appNameTitle}>{'珍味道 V ' + VERSION_NUMBER_NORM}</Text>
                    </View>

                    {/* {this.renderVersionList()} */}
                </ScrollView>
            </View>
        );
    }
}