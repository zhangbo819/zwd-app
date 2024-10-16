import React, { Component } from 'react';
import {
    Text,
    View,
    Alert,
    TextInput,
    FlatList,
    TouchableHighlight,
    TouchableOpacity,
    Clipboard,
    ScrollView,
    RefreshControl,
    Share,
} from 'react-native';

// import { createMaterialTopTabNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import MyHeader from '../../components/Myheader';
import { ListEmptyComponent } from '../../components/ListEmptyComp';

import STYLES from '../../constant/STYLES';
// import { getTabNavigatorConfig, tabOptions } from '../../navigation/config';
import {
    viewportWidth,
    COLOR_GRAY,
    COLOR_BLACK,
    COLOR_WHITE,
    COLOR_LINEGRAY,
    MinPix,
    FONT_PFS,
    FONT_PFR,
} from '../../constant/UI';
import { Parsers } from '../../constant/moss';
import { saveStorage, loadStorage, isiOS } from '../../constant/config';
import { getHeight } from '../../constant/Util';


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
        color: COLOR_GRAY
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
const BillList = {
    container: {
        flex: 1,
        alignItems: 'center'
    },
    ScrollContent: {
        width: viewportWidth
    },
    Touch: {
        flex: 1,
        marginVertical: 5,
        ...Parsers.padding([0, 20]),
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
        flex: 1
    },
    fixedToken,
    BillList
};

const StorageBillKey = 'billData';
// 输入
class BillInputScreen extends Component {

    constructor() {
        super()

        const now = new Date();

        this.defineState = {
            content: '',
            money: ''
        }

        this.state = {
            disabled: true,
            time: (now.getMonth() + 1) + '.' + now.getDate(),
            ...this.defineState
        }

        this.renderItemsArr = [
            { title: '时间', stateKey: 'time', placeholder: '请输入时间', keyboardType: 'numeric' },
            { title: '内容', stateKey: 'content', placeholder: '请输入内容' },
            { title: '金额', stateKey: 'money', placeholder: '请输入金额', keyboardType: 'numeric' },
        ];
    }

    async componentDidMount() {
        this.StorageBillData = await loadStorage(StorageBillKey, []);
        if (this.StorageBillData === null) {
            alert('数据读取失败')
        } else {
            this.setState({ disabled: false })
        }
    }

    Input = value => (inputValue) => this.setState({ [value]: inputValue })

    clearInput = () => {
        this.setState(this.defineState)
        // to do change List state
    }

    handleSave = async () => {
        const input = this.state.time + '@' + this.state.content + '@' + this.state.money;

        let data = this.StorageBillData;
        data.push(input);
        this.props.navigation.goBack()
        let res = await saveStorage({ key: StorageBillKey, data })

        // to do goBack right
        const handler = res ? () => { this.props.navigation.navigate('列表'); this.clearInput(); } : this.props.navigation.goBack;

        Alert.alert(
            ('保存' + (res ? '成功' : '失败')),
            (res ? input : '请重试'),
            [
                { text: '继续', onPress: this.clearInput },
                { text: '去看看', onPress: handler },
            ],
            { onDismiss: this.clearInput }
        )
    }

    check = () => {
        const { time, content, money } = this.state;
        if (!time || !content || !money) {
            alert('不能为空')
        } else {
            this.handleSave()
        }
    }

    onSubmit = (i, data) => {
        if (i !== data.length - 1) {
            this.refs['Bill_' + (i + 1)].focus();
        } else {
            this.check()
        }
    }

    randerInput = (item, index, data) => {
        const {
            warn = null, placeholder = '', inputStyle = {}, multiline = false, keyboardType,
            stateKey, maxLength, title = ''
        } = item;
        const returnKeyType = index === data.length - 1 ? 'send' : 'next';
        const isFirst = index === 0;
        return (
            <View style={[styles.fixedToken.row, isFirst ? { marginTop: 0 } : {}]} key={index}>
                <View style={styles.fixedToken.titlerowView}>
                    <Text style={styles.fixedToken.title}>{title}</Text>
                    {warn === null ? null : <Text style={[styles.fixedToken.title, styles.fixedToken.warn]}>{warn}</Text>}
                </View>
                <TextInput
                    ref={'Bill_' + index}
                    style={[styles.fixedToken.input, inputStyle]}
                    underlineColorAndroid="transparent"
                    maxLength={maxLength}
                    placeholder={placeholder}
                    value={this.state[stateKey]}
                    keyboardType={keyboardType}
                    onSubmitEditing={this.onSubmit.bind(this, index, data)}
                    onChangeText={this.Input(stateKey)}
                    multiline={multiline}
                    enablesReturnKeyAutomatically={true}
                    returnKeyType={returnKeyType}
                    autoFocus={index === 1}
                    autoCorrect={false}
                />
            </View>
        );
    }

    render() {
        const { disabled } = this.state;

        return <View style={styles.container}>

            {/* <Text>{new Date().toLocaleString()}</Text> */}

            <ScrollView>
                <View style={styles.fixedToken.content}>
                    {this.renderItemsArr.map(this.randerInput)}
                </View>

                <View style={styles.fixedToken.action}>
                    <TouchableHighlight
                        onPress={this.check}
                        style={[styles.fixedToken.actionButton, disabled && styles.fixedToken.actionButtonDisabled]}
                        underlayColor={'rgba(1,167,234, 1)'}
                        disabled={disabled}
                    >
                        <Text style={styles.fixedToken.actionButtonText}>{'确认保存'}</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </View>
    }
}

// 列表
class BillListScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasCopy: false,
            StorageBillData: [],
            refreshing: false
        }
        this.timer = null;
    }

    componentDidMount() {
        // this.didFocusSubscription = this.props.navigation.addListener('willFocus', () => {
        //     Keyboard.dismiss();
        //     this._onRefresh();
        // });
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
        const StorageBillData = await loadStorage(StorageBillKey, []);
        if (StorageBillData !== null) {
            this.setState({ StorageBillData })
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
            key={'billList_' + index}
            style={styles.BillList.Touch}
            activeOpacity={0.8}
            onLongPress={this.handleDelete.bind(this, { index })}
        >
            <Text style={styles.BillList.ItemText}>{item}</Text>
        </TouchableOpacity>
    }

    getkey = (item, index) => { return ('BillListItem_' + index) }

    renderSeparator = () => <View style={{ height: MinPix * 2, backgroundColor: COLOR_LINEGRAY }} />

    renderHeaderComponent = () => {
        const { hasCopy } = this.state;

        return <View style={STYLES.REC}>
            {[
                { text: '分享', handler: this.handleShare },
                { text: hasCopy ? '已复制' : '复制', handler: this.handleCopy, disabled: hasCopy },
                { text: '长按清空', Longhandler: this.handleDelete.bind(this, { deleteAll: true }) },
            ].map(({ text = '', disabled = false, handler = () => { }, Longhandler = () => { } }, index, data) => {
                let maxWidth = 100 / (data.length + 1);
                maxWidth = maxWidth.toFixed(2) + '%';
                return <TouchableOpacity
                    onPress={handler}
                    onLongPress={Longhandler}
                    style={[styles.fixedToken.actionButton, styles.BillList.headerTouch, { maxWidth }]}
                    underlayColor={'rgba(1,167,234, 1)'}
                    disabled={disabled}
                    key={'HeaderComponentBtn_' + index}
                >
                    <Text style={styles.fixedToken.actionButtonText}>{text}</Text>
                </TouchableOpacity>
            })}
        </View>
    }

    renderFooterComponent = () => {
        // console.log('this.FlatList',this.FlatList)
        // to do length by Screen
        return this.state.StorageBillData.length < 10 ? null
            : <View style={[STYLES.CCC, { marginTop: 5 }]}><Text style={{ fontFamily: FONT_PFS }}>没有更多了...</Text></View>
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
                        let { StorageBillData } = this.state;
                        this.setState({ refreshing: true })

                        if (deleteAll) {
                            StorageBillData = [];
                        } else {
                            StorageBillData.splice(index, 1);
                        }

                        let res = await saveStorage({ key: StorageBillKey, data: StorageBillData })

                        if (res) {
                            Alert.alert('提示', '删除成功!')
                            this.setState({ StorageBillData }, () => {
                                this.timer = setTimeout(
                                    () => { this.setState({ refreshing: false }) },
                                    (Date.now() - inTime) < minLoadingTime ? minLoadingTime : 0
                                )
                            })
                        }
                    }
                },
                { text: '取消', onPress: () => console.log('OK Pressed!') },
            ]
        )
    }

    handleShare = async () => {
        try {
            const shareConfig = {
                title: 'Bill',
                message: this.getBillDataString(),
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

    handleCopy = async () => {
        await Clipboard.setString(this.getBillDataString());
        this.setState({ hasCopy: true })
    }

    getBillDataString = () => {
        let result = ",\n";
        this.state.StorageBillData.forEach((item, index, data) => {
            result += `"${item}"${index === data.length - 1 ? '' : ',\n'}`;
        });
        console.log('getBillDataString  data', result);
        return result
    }

    render() {
        return <View style={styles.BillList.container}>
            <FlatList
                // ref={(res) => this.refFlatList = res}
                style={styles.BillList.ScrollContent}
                data={this.state.StorageBillData}
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
            />

        </View>
    }

}
// const BillTabNavigator = createMaterialTopTabNavigator(
//     {
//         录入: { screen: BillInputScreen },
//         列表: { screen: BillListScreen },
//     },
//     getTabNavigatorConfig({
//         tabBarOptions: {
//             ...tabOptions,
//             tabStyle: {
//                 width: viewportWidth / 2,
//                 padding: 0
//             }
//         }
//     }, true)
// );

export default class BillScan extends Component {
    // static router = BillTabNavigator.router;

    render() {
        const { navigation } = this.props;
        // to do share in MyHeader
        return <View style={STYLES.commonBg}>
            {/* <MyHeader
                // RightComponent={<TouchableOpacity onPress={this.handleShare}>
                //     <Icon name={'share'} size={18} color={COLOR_WHITE} style={{ textAlign: 'center' }} />
                // </TouchableOpacity>}
                title={'账本'}
                navigation={navigation}
            /> */}
            <BillInputScreen></BillInputScreen>
            <BillListScreen></BillListScreen>
            {/* <BillTabNavigator navigation={navigation} /> */}
        </View>
    }
}
