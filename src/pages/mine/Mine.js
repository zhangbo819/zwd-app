import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import STYLES from '../../constant/STYLES';
import {
    IMAGE_ARROW_RIGHT,
    STATUS_BAR_HEIGHT,
    COLOR_BGGRAY,
    NAV_COMMON_HEIGHT
} from '../../constant/UI';

class Mine extends Component {

    constructor(props) {
        super(props);

        // console.log(props)
        this.state = {

        }
    }

    handleEmpty = () => { }

    handleAbout = () => {
        this.props.navigation.navigate('About')
    }

    handleAccount = () => {
        Alert.alert('暂无')
    }

    render() {
        return <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.content}
            >
                {RenderCard([
                    { event: this.handleAccount, title: '账号管理' },
                    { event: this.handleAbout, title: '关于' },
                ])}
            </ScrollView>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_BGGRAY,
        paddingTop: STATUS_BAR_HEIGHT,
    },
    content: {
        marginTop: NAV_COMMON_HEIGHT,
        paddingHorizontal: 14
    }
})

export const RenderCard = (DataArr, BgStyle = {}) => {
    let result = [];
    result = DataArr.map((item, index, arr) => {
        let { title = '', event, rightComponent = <Image source={IMAGE_ARROW_RIGHT} />, titleStyle = STYLES.liText } = item;

        return (<TouchableOpacity
            activeOpacity={0.8}
            onPress={event}
            key={'RenderCard_' + title}
        >
            <View style={STYLES.li}>
                <View style={[STYLES.liBorderView, index !== (arr.length - 1) ? STYLES.hasBorder : {}]}>
                    <Text style={titleStyle}>{title}</Text>
                    {rightComponent}
                </View>
            </View>
        </TouchableOpacity>);
    });
    return (<View style={[STYLES.panel, BgStyle]}>{result}</View>);
};

export default Mine;