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
    TextInput
} from 'react-native';

import { ListEmptyComponent } from './WarehouseList';

import STYLES from '../../constant/STYLES';
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
import { getHeight } from '../../constant/Util'


const StorageWHKey = 'warehouseData';

class WarehouseInput extends Component {

    constructor(props) {
        super(props);

        // console.log(props)
        this.state = {
            refreshing: false,
            StorageData: [],
            textInput: "",
            autoFocus: false
        }
    }

    componentDidMount() {
        this.didFocusSubscription = this.props.navigation.addListener('willFocus', () => {
            this.setState({ autoFocus: true })
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
        return <TouchableOpacity
            key={'warehouseList_' + index}
            style={styles.WarehouseList.Touch}
            activeOpacity={0.8}
            onLongPress={this.handleDelete.bind(this, { index })}
        >
            <Text style={styles.WarehouseList.ItemText}>{item.name}</Text>
        </TouchableOpacity>
    }

    getkey = (item, index) => { return ('warehouseListItem_' + index) }

    renderSeparator = () => <View style={{ height: MinPix * 2, backgroundColor: COLOR_LINEGRAY }} />

    Input = value => (inputValue) => this.setState({ [value]: inputValue })

    renderTouchHight = (data, { style = {} } = { style: {} }) => {
        return data.map(({
            text = '', disabled = false, handler = () => { }, Longhandler = () => { }
        }, index, data) => {
            let maxWidth = 100 / (data.length + 1);
            maxWidth = maxWidth.toFixed(2) + '%';
            return <TouchableHighlight
                onPress={handler}
                onLongPress={Longhandler}
                style={[styles.fixedToken.actionButton, styles.WarehouseList.headerTouch, { maxWidth }, style]}
                underlayColor={'rgba(1,167,234, 1)'}
                disabled={disabled}
                key={'HeaderComponentBtn_' + index}
            >
                <Text style={styles.fixedToken.actionButtonText}>{text}</Text>
            </TouchableHighlight>
        })
    }

    renderHeaderComponent = () => {
        const { hasCopy } = this.state;
        const stateKey = 'textInput';

        return <View>
            <View style={{ ...STYLES.RBC, ...Parsers.padding(10, 10, 0) }}>
                <TextInput
                    ref={(ref) => { this.TextInput = ref; }}
                    style={[styles.fixedToken.input, { width: '75%' }]}
                    underlineColorAndroid="transparent"
                    // maxLength={maxLength}
                    placeholder={'请输入'}
                    value={this.state[stateKey]}
                    // keyboardType={keyboardType}
                    // onSubmitEditing={this.onSubmit.bind(this, index, data)}
                    onChangeText={this.Input(stateKey)}
                    multiline={false}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType={'send'}
                    autoFocus={this.state.autoFocus}
                    autoCorrect={false}
                />
                {this.renderTouchHight([
                    { text: '添加', handler: this.handleAdd },
                ], { style: { maxWidth: '20%' } })}
            </View>

            <View style={STYLES.REC}>
                {this.renderTouchHight([
                    // { text: '分享', handler: this.handleShare },
                    // { text: '录入', handler: this.handleShare },
                    // { text: hasCopy ? '已复制' : '复制', handler: this.handleCopy, disabled: hasCopy },
                    { text: '长按清空', Longhandler: this.handleDelete.bind(this, { deleteAll: true }) },
                ], { style: { marginTop: 0 } })}
            </View>
        </View>
    }

    renderFooterComponent = () => {
        // console.log('this.FlatList',this.FlatList)
        // to do length by Screen
        return null;
    }

    handleAdd = async () => {
        const { StorageData, textInput } = this.state;
        StorageData.push({ name: textInput, value: 0 })
        console.log(StorageWHKey, StorageData)

        const res = await saveStorage({ key: StorageWHKey, data: StorageData });
        Alert.alert(
            '提示',
            `添加${res ? '成功' : '失败'}`,
            [
                { text: '确定', onPress: () => afterAdd() },
            ],
            {
                onDismiss: () => afterAdd()
            }
        )

        const afterAdd = () => {
            this._onRefresh()
            this.setState({ textInput: '' })
        }
    }

    handleDelete = ({ index, deleteAll = false }) => {
        Alert.alert(
            '提示',
            `您确定${deleteAll ? '清空全部' : '删除这条'}记录吗`,
            [
                {
                    text: '确定', onPress: async () => {
                        const { minLoadingTime } = this;
                        const inTime = Date.now();
                        let { StorageData } = this.state;
                        this.setState({ refreshing: true })

                        if (deleteAll) {
                            StorageData = [];
                        } else {
                            StorageData.splice(index, 1);
                        }
                        console.log(StorageData)
                        let res = await saveStorage({ key: StorageWHKey, data: StorageData })

                        Alert.alert('提示', `删除${res ? '成功' : '失败'}!`)

                        if (!res) { return; }

                        this.setState({ StorageData }, () => {
                            this.timer = setTimeout(
                                () => { this.setState({ refreshing: false }) },
                                (Date.now() - inTime) < minLoadingTime ? minLoadingTime : 0
                            )
                        })
                    }
                },
                { text: '取消', onPress: () => console.log('OK Pressed!') },
            ]
        )
    }


    render() {
        return <View style={styles.container}>

            <FlatList
                ref={(res) => this.FlatList = res}
                style={styles.WarehouseList.ScrollContent}
                data={this.state.StorageData}
                renderItem={this.renderList}
                keyExtractor={this.getkey}
                ItemSeparatorComponent={this.renderSeparator}
                ListEmptyComponent={ListEmptyComponent}
                ListHeaderComponent={this.renderHeaderComponent}
                ListFooterComponent={this.renderFooterComponent}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
                onRefresh
                numColumns={5}
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
const styleWarehouseList = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    ScrollContent: {
        width: viewportWidth
    },
    Touch: {
        // flex: 1,
        // minWidth: "10%",
        // maxWidth: "17%",
        width: '17%',
        ...Parsers.padding([10, 5]),
        ...Parsers.margin([5, 5]),
        backgroundColor: COLOR_ORANGE,
        borderRadius: 10
    },
    headerTouch: {
        flex: 1,
        height: 40,
        // maxWidth: '35%',
        marginVertical: getHeight(10)
    },
    ItemText: {
        fontFamily: FONT_PFR,
        fontSize: 16,
        textAlign: 'center',
        color: '#000'
    }
}
const styles = {
    container: {
        flex: 1,
        // ...STYLES.CCC,
    },
    WarehouseList: styleWarehouseList,
    fixedToken
}

export default WarehouseInput;