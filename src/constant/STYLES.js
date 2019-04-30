import { STATUS_BAR_HEIGHT } from "./UI";
// import { Parsers } from "./moss";


export default {
    CCC: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    RCC: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RBC: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    REC: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    statusBarHolder: {
        height: STATUS_BAR_HEIGHT,
        backgroundColor: '#FFF',
        width: '100%',
        zIndex: 100
        // backgroundColor: 'red',
        // position:'absolute',
        // top:0,
        // right:0
    },
    contentShadow: {
        // ...Parsers.shadow(['#000', 0, 0, 12, 0.08]),
        // elevation: 3
        // ...Parsers.shadow(['#000', 20, 20, 12, 0.5]),
    },
    commonBg: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: STATUS_BAR_HEIGHT
    }
};