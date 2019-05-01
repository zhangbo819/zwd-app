import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Keyboard,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Share,
    Clipboard
} from 'react-native';
import STYLES from '../../constant/STYLES';

import Icon from 'react-native-vector-icons/FontAwesome';

import { loadStorage, saveStorage, isDev } from '../../constant/config';
import {
    MinPix,
    COLOR_LINEGRAY,
    viewportWidth,
    FONT_PFS,
    FONT_PFR,
    COLOR_WHITE,
    COLOR_GRAY,
    COLOR_BLACK,
    COLOR_ORANGE
} from '../../constant/UI';
import { Parsers } from '../../constant/moss';
import { getHeight, getWidth } from '../../constant/Util'

const StorageWHKey = 'warehouseData';

class WarehouseList extends Component {

    constructor(props) {
        super(props);

        // console.log(props)
        this.state = {
            refreshing: false,
            StorageData: [],
            hasCopy: false,
            mustPositive: true
        }
    }

    componentDidMount() {
        this.didFocusSubscription = this.props.navigation.addListener('willFocus', () => {
            Keyboard.dismiss();
            this._onRefresh();
        });
        this.minLoadingTime = 0.7 * 1000;
    }

    componentWillUnmount() {
        this.didFocusSubscription.remove();
        clearTimeout(this.timer)
    }

    _onRefresh = async (needLoading = true) => {
        console.log('refresh in')
        needLoading && this.setState({ refreshing: true })
        const inTime = Date.now();
        const StorageData = await loadStorage(StorageWHKey, []);
        if (StorageData !== null) {
            this.setState({ StorageData })
        }
        if (!needLoading) return;
        const { minLoadingTime } = this;
        this.timer = setTimeout(
            () => { this.setState({ refreshing: false }) },
            (Date.now() - inTime) < minLoadingTime ? minLoadingTime : 0
        )
    }

    renderList = ({ item, index }) => {
        const { name, value } = item;
        return <View
            key={'warehouseList_' + index}
            style={styles.warehouseList.bg}
            activeOpacity={0.8}
        >
            <Text style={styles.warehouseList.ItemText}>{name}</Text>
            <View style={styles.warehouseList.chevronBg}>
                <TouchableOpacity
                    style={styles.warehouseList.chevron}
                    onPress={this.handleChevron.bind(this, { isUp: true, index })}
                >
                    <Icon name={'chevron-up'} size={16} color={COLOR_ORANGE} />
                </TouchableOpacity>
                <Text style={styles.warehouseList.value}>{value}</Text>
                <TouchableOpacity
                    style={styles.warehouseList.chevron}
                    onPress={this.handleChevron.bind(this, { isUp: false, index })}
                >
                    <Icon name={'chevron-down'} size={16} color={COLOR_ORANGE} />
                </TouchableOpacity>
            </View>
        </View>
    }

    getkey = (item, index) => { return ('warehouseListItem_' + index) }

    renderSeparator = () => <View style={{ height: MinPix * 2, backgroundColor: COLOR_LINEGRAY }} />

    renderHeaderComponent = () => {
        const { hasCopy } = this.state;

        return <View style={STYLES.REC}>
            {[
                { text: '录入', handler: this.handleNavInput },
                { text: '分享', handler: this.handleShare },
                { text: hasCopy ? '已复制' : '复制', handler: this.handleCopy, disabled: hasCopy },
                { text: this.state.mustPositive ? '只要正值' : '全部', handler: this.handleMustPositive },
            ].map(({ text = '', disabled = false, handler = () => { }, Longhandler = () => { } }, index, data) => {
                let maxWidth = 100 / (data.length + 1);
                maxWidth = maxWidth.toFixed(2) + '%';
                return <TouchableHighlight
                    onPress={handler}
                    onLongPress={Longhandler}
                    style={[styles.fixedToken.actionButton, styles.warehouseList.headerTouch, { maxWidth }]}
                    underlayColor={'rgba(1,167,234, 1)'}
                    disabled={disabled}
                    key={'HeaderComponentBtn_' + index}
                >
                    <Text style={styles.fixedToken.actionButtonText}>{text}</Text>
                </TouchableHighlight>
            })}
        </View>
    }

    renderFooterComponent = () => {
        // console.log('this.FlatList',this.FlatList)
        // to do length by Screen
        return (<View style={[STYLES.CCC, { marginVertical: 20 }]}>
            <Text>没有更多了</Text>
        </View>);
    }

    handleNavInput = () => { this.props.navigation.navigate('录入') }

    handleChevron = async ({ isUp, index }) => {
        const { StorageData } = this.state;
        const target = StorageData[index];

        if (isUp) {
            target.value++;
        } else {
            target.value--;
        }

        const res = await saveStorage({ key: StorageWHKey, data: StorageData });

        if (!res) {
            alert('保存失败');
            return;
        }

        this.setState({ StorageData })
    }

    getStorageDataString = () => {
        let result = "";
        const { mustPositive, StorageData } = this.state;
        const data = mustPositive ? StorageData.filter(item => item.value > 0) : StorageData

        data.forEach(({ name, value }, index, data) => {
            result += `${name} ${index === data.length - 1 ? value : (value + ',\n')}`;
        });
        console.log('getStorageDataString  data', result);
        return result
    }

    handleCopy = async () => {
        await Clipboard.setString(this.getStorageDataString());
        this.setState({ hasCopy: true })
    }

    handleShare = async () => {
        try {
            const result = await Share.share({
                title: '珍味道',
                message: this.getStorageDataString(),
                url: 'http://www.baidu.com'
            }, {
                    subject: '通过邮件分享的标题'
                }
            )
            console.log('share result', result)
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }

    handleMustPositive = () => {
        this.setState({ mustPositive: !this.state.mustPositive })
    }


    render() {
        return <View style={styles.container}>

            <FlatList
                ref={(res) => this.FlatList = res}
                style={styles.warehouseList.ScrollContent}
                data={this.state.StorageData}
                renderItem={this.renderList}
                keyExtractor={this.getkey}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent={() => <View style={STYLES.CCC}><Text>暂无</Text></View>}
                ListHeaderComponent={this.renderHeaderComponent}
                ListFooterComponent={this.renderFooterComponent}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                onRefresh
                refreshing={this.state.refreshing}
            />
        </View>
    }

}

const fixedToken = {
    hint: {
        backgroundColor: '#E5EDFA',
        borderRadius: 8,
        ...Parsers.padding([8, 14])
    },
    hintText: {
        // fontFamily: 'SourceCodePro-Regular',
        fontSize: 13,
        color: '#666',
        fontFamily: FONT_PFR,
    },

    content: {
        backgroundColor: COLOR_WHITE,
        borderWidth: MinPix,
        borderColor: COLOR_LINEGRAY,
        borderRadius: 8,
        ...STYLES.contentShadow,
        ...Parsers.margin([10, 14]),
        ...Parsers.padding([12, 0])
    },

    row: {
        width: '100%',
        marginTop: 12,
        ...Parsers.padding([0, 11])
    },

    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height: 47,
        ...Parsers.padding([14, 10]),
        fontSize: 15,
        color: '#333',
        fontFamily: FONT_PFR,
    },

    timePickerView: {
        ...STYLES.RBC
    },
    timePickerTouch: {
        width: "47.55%",
        backgroundColor: "#F5F5F5",
        height: 47,
        borderRadius: 8,
        ...Parsers.padding([14, 10]),
        justifyContent: "center"
    },

    timePickerText: {
        fontFamily: FONT_PFR,
        fontSize: 15,
    },

    titlerowView: {
        marginBottom: 6,
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontFamily: FONT_PFR,
        fontSize: 12,
        color: '#333',
    },
    warn: {
        minWidth: 14,
        textAlign: 'center',
        color: COLOR_GRAY
    },

    propertyNumberTransform: {
        fontFamily: FONT_PFS,
        fontSize: 12,
        color: '#333',
        position: 'absolute',
        right: 10,
        top: 0
    },

    get chargeBox() {
        return {
            ...this.row,
            flexDirection: 'row',
            ...Parsers.margin([16, 0, 10]),
        };
    },

    chageTitle: {
        fontFamily: FONT_PFR,
        fontSize: 15,
        color: COLOR_BLACK,
    },
    charge: {
        fontFamily: FONT_PFR,
        fontSize: 15,
        color: COLOR_BLACK,
    },
    chargeRate: {
        fontFamily: FONT_PFR,
        fontSize: 12,
        color: COLOR_GRAY,
    },

    action: {
        ...Parsers.margin([10, 14])
    },
    actionButton: {
        height: 50,
        backgroundColor: 'rgba(1,167,234, .8)',
        borderRadius: 8,
        ...Parsers.shadow(['rgb(1,167,234)', 0, 4, 4, 0.5]),
        ...STYLES.CCC
    },
    actionButtonDisabled: {
        backgroundColor: COLOR_GRAY,
        ...Parsers.shadow([COLOR_GRAY, 0, 4, 4, 0.5]),
    },
    actionButtonText: {
        fontSize: 15,
        fontFamily: FONT_PFS,
        color: COLOR_WHITE,
        textAlign: 'center'
    },

    otherInfo: {
        marginTop: 16,
        ...STYLES.CCC,
        marginBottom: 40
    },
    balance: {
        fontFamily: FONT_PFR,
        fontSize: 12,
        color: COLOR_GRAY,
    },
    noWHC: {
        ...STYLES.RCC
    },
    noWHCText: {
        fontFamily: FONT_PFR,
        fontSize: 13,
        color: COLOR_BLACK,
    },
    exchange: {
        fontFamily: FONT_PFR,
        fontSize: 13,
        color: '#010000',
    }

}
const warehouseList = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    ScrollContent: {
        width: viewportWidth
    },
    bg: {
        ...STYLES.RBC,
        marginVertical: 5,
        ...Parsers.padding([0, 14]),
        height: getHeight(40)
    },
    headerTouch: {
        flex: 1,
        height: getHeight(35),
        // maxWidth: '35%',
        marginVertical: getHeight(10)
    },
    ItemText: {
        fontFamily: FONT_PFS,
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
    },
    chevronBg: {
        ...STYLES.RCC,
        height: '100%'
    },
    chevron: {
        ...STYLES.CCC,
        ...Parsers.padding([0, 5]),
        height: '100%',
        width: getWidth(35),
        // backgroundColor: 'red'
    },
    value: {
        minWidth: 20,
        textAlign: 'center'
    }
}
const styles = {
    container: {
        flex: 1,
        // ...STYLES.CCC,
    },
    warehouseList,
    fixedToken
}

export default WarehouseList;