import React, { Component } from 'react';
import {
    Text,
    View,
    // Keyboard,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Share,
    Clipboard,
    TextInput,
    Animated
} from 'react-native';

import Ico5 from 'react-native-vector-icons/FontAwesome5';

import { ListEmptyComponent } from '../../components/ListEmptyComp';
import { loadStorage, saveStorage, isiOS } from '../../constant/config';
import STYLES from '../../constant/STYLES';
import {
    MinPix,
    COLOR_LINEGRAY,
    viewportWidth,
    FONT_PFS,
    FONT_PFR,
    COLOR_WHITE,
    COLOR_GRAY,
    COLOR_BLACK,
    STATUS_BAR_HEIGHT,
    COLOR_THEME_COMMON
} from '../../constant/UI';
import { Parsers } from '../../constant/moss';
import { getHeight, getWidth } from '../../util';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const StorageWHKey = 'warehouseData';
const headerInputHeight = getHeight(30);
const headerInputPaddingVertical = getHeight(8);
const headerInputMarginBottom = getHeight(5);
const headerInputHeightSum = headerInputHeight + headerInputPaddingVertical * 2 + headerInputMarginBottom;

class WarehouseList extends Component {

    constructor(props) {
        super(props);

        // console.log(props)
        this.state = {
            refreshing: false,
            StorageData: [],
            hasCopy: false,
            mustPositive: true,
            textInput: '',
            scrollAnimatedValue: new Animated.Value(0),
        }
    }

    componentDidMount() {
        // this.didFocusSubscription = this.props.navigation.addListener('willFocus', () => {
        //     Keyboard.dismiss();
        //     this._onRefresh();
        // });
        this._onRefresh();
        this.minLoadingTime = 0.7 * 1000;
    }

    componentWillUnmount() {
        // this.didFocusSubscription.remove();
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

    renderInput = () => {
        const stateKey = 'textInput';

        return <View>
            <Animated.View
                style={[STYLES.REC, {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    width: '100%',
                    transform: [
                        {
                            translateY: this.state.scrollAnimatedValue.interpolate({
                                inputRange: [-10, 0, headerInputHeightSum],
                                outputRange: [headerInputHeightSum, headerInputHeightSum, 0],
                                extrapolate: 'clamp',
                            })
                        }
                    ],
                    opacity: this.state.scrollAnimatedValue.interpolate({
                        inputRange: [-10, 0, headerInputHeightSum],
                        outputRange: [0, 0, 1],
                        extrapolate: 'clamp',
                    }),
                }]}
            >
                {this.renderHeaderComponent()}
            </Animated.View>

            <Animated.View
                style={[STYLES.RBC,
                { ...Parsers.padding([headerInputPaddingVertical, 10, headerInputPaddingVertical]), borderBottomWidth: MinPix, borderColor: COLOR_LINEGRAY, marginBottom: headerInputMarginBottom },
                {
                    transform: [
                        {
                            translateY: this.state.scrollAnimatedValue.interpolate({
                                inputRange: [-10, 0, headerInputHeightSum],
                                outputRange: [0, 0, -headerInputHeightSum],
                                extrapolate: 'clamp',
                            })
                        }
                    ],
                    opacity: this.state.scrollAnimatedValue.interpolate({
                        inputRange: [-10, 0, headerInputHeightSum],
                        outputRange: [1, 1, 0],
                        extrapolate: 'clamp',
                    }),
                }
                ]}
            >
                <TextInput
                    ref={(ref) => { this.TextInput = ref; }}
                    style={[styles.fixedToken.input, { width: '75%', height: headerInputHeight, ...Parsers.padding([getHeight(9), 10]), }]}
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
                    // autoFocus={this.state.autoFocus}
                    autoCorrect={false}
                />
                {this.renderTouchHight([
                    { text: '添加', handler: this.handleAdd },
                ], { style: { maxWidth: '20%', height: headerInputHeight } })}
            </Animated.View>
        </View>
    }

    renderList = ({ item, index }) => {
        const { name, value } = item;
        const isActive =  this.state.mustPositive ? true : (value > 0);

        return <TouchableOpacity
            key={'warehouseList_' + index}
            style={styles.WarehouseList.bg}
            // activeOpacity={0.5}
            onLongPress={this.handleDelete.bind(this, { index })}
        >
            <Text
                style={[styles.WarehouseList.ItemText, isActive ? {} : { color: COLOR_GRAY }]}
            >
                {name}
            </Text>
            <View style={styles.WarehouseList.chevronBg}>
                <TouchableOpacity
                    style={styles.WarehouseList.chevron}
                    onPress={this.handleChevron.bind(this, { isUp: true, index })}
                >
                    <Ico5 name="chevron-up" size={16} color={COLOR_THEME_COMMON} />
                    {/* <Text>+</Text> */}
                </TouchableOpacity>
                <Text style={styles.WarehouseList.value}>{value}</Text>
                <TouchableOpacity
                    style={styles.WarehouseList.chevron}
                    onPress={this.handleChevron.bind(this, { isUp: false, index })}
                >
                    <Ico5 name="chevron-down" size={16} color={COLOR_THEME_COMMON} />
                    {/* <Text>-</Text> */}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    }

    getkey = (item, index) => { return ('warehouseListItem_' + index) }

    renderSeparator = () => <View style={{ height: MinPix * 2, backgroundColor: COLOR_LINEGRAY }} />

    renderTouchHight = (data, { style = {} } = { style: {} }) => {
        return data.map(({
            text = '', disabled = false, handler = () => { }, Longhandler = () => { }
        }, index) => {
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

        return <View style={[STYLES.REC, { width: '100%' }]}>
            {this.renderTouchHight([
                // { text: '录入', handler: this.handleNavInput },
                { text: '分享', handler: this.handleShare },
                // { text: hasCopy ? '已复制' : '复制', handler: this.handleCopy, disabled: hasCopy },
                { text: this.state.mustPositive ? '全部' : '只要正值', handler: this.handleMustPositive },
                { text: '长按清空', Longhandler: this.handleDelete.bind(this, { deleteAll: true }) },
            ], { style: {} })}

        </View>
    }

    renderFooterComponent = () => {
        // console.log('this.FlatList',this.FlatList)
        // to do length by Screen
        return (<View style={[STYLES.CCC, { marginVertical: 20 }]}>
            <Text style={styles.footerText}>没有更多了...</Text>
        </View>);
    }

    handleAdd = async () => {
        const { StorageData, textInput } = this.state;

        if (textInput == '') {
            Alert.alert('提示', '名称不能为空');
            return;
        }

        StorageData.unshift({ name: textInput, value: 0 })
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

    getStorageDataString = () => {
        let result = "";
        const { mustPositive, StorageData } = this.state;
        const data = mustPositive ? StorageData.filter(item => item.value > 0) : StorageData

        data.forEach(({ name, value }, index, data) => {
            result += `${name} ${index === data.length - 1 ? value : (value + ',\n')}`;
        });
        console.log('getStorageDataString  data', result);
        return result;
    }

    handleCopy = async () => {
        await Clipboard.setString(this.getStorageDataString());
        this.setState({ hasCopy: true })
    }

    handleShare = async () => {
        try {
            const shareConfig = {
                title: '珍味道',
                message: this.getStorageDataString(),
            };

            isiOS ? shareConfig.url = 'http://www.baidu.com' : null;

            const result = await Share.share(shareConfig, {
                subject: '通过邮件分享的标题'
            })

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
        this.setState(({ mustPositive }) => ({ mustPositive: !mustPositive }))
    }

    Input = value => (inputValue) => this.setState({ [value]: inputValue })

    handleScrollEnd = e => {
        let { y } = e.nativeEvent.contentOffset;

        if (y <= headerInputHeightSum) {
            y = y < headerInputHeightSum / 2 ? 0 : headerInputHeightSum;
            console.log(this.FlatList)
            // this.FlatList.scrollToOffset({ y: y, animated: true });
        }
    }

    render() {

        return <View style={styles.container}>

            {this.renderInput()}

            <AnimatedFlatList
                ref={(res) => (this.FlatList = res)}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: this.state.scrollAnimatedValue } } }],
                    {
                        useNativeDriver: true  // <- Native Driver used for animated events
                    }
                )}
                scrollEventThrottle={12}
                // onMomentumScrollEnd={isiOS ? null : this.handleScrollEnd}
                // onScrollEndDrag={isiOS ? this.handleScrollEnd : null}
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
                refreshing={this.state.refreshing}
                keyboardDismissMode={'on-drag'}
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
    bg: {
        ...STYLES.RBC,
        marginVertical: 5,
        ...Parsers.padding([0, 14]),
        height: getHeight(40)
    },
    headerTouch: {
        flex: 1,
        height: getHeight(30),
        // maxWidth: '35%',
    },
    ItemText: {
        fontFamily: FONT_PFS,
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
        maxWidth: '75%'
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
        paddingTop: STATUS_BAR_HEIGHT,
        backgroundColor: COLOR_WHITE
        // ...STYLES.CCC,
    },
    footerText: {
        color: '#9AA2B7',
        fontFamily: FONT_PFS
    },
    WarehouseList: styleWarehouseList,
    fixedToken
}

export default WarehouseList;