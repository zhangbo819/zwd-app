// import {StyleProp, ViewStyle, TextStyle} from 'react-native';
import {Parsers} from './moss';
import {
  STATUS_BAR_HEIGHT,
  COLOR_BLACK,
  COLOR_LINEGRAY,
  FONT_PFR,
  MinPix,
  COLOR_WHITE,
} from './UI';

// StyleProp<ViewStyle | TextStyle>
const STYLES: Record<string, any> = {
  CCC: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  RCC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RBC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  REC: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  statusBarHolder: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: '#FFF',
    width: '100%',
    zIndex: 100,
    // backgroundColor: 'red',
    // position:'absolute',
    // top:0,
    // right:0
  },
  contentShadow: {
    ...Parsers.shadow(['#000', 0, 0, 12, 0.08]),
    // elevation: 3
    // ...Parsers.shadow(['#000', 20, 20, 12, 0.5]),
  },
  panel: {
    width: '100%',
    backgroundColor: COLOR_WHITE,
    borderRadius: 8,
    ...Parsers.shadow(['#000', 0, 0, 12, 0.08]),
    // elevation: 1,
    marginBottom: 20,
  },
  li: {
    height: 48,
    ...Parsers.padding([0, 10, 0, 11]),
  },
  liText: {
    ...Parsers.font([COLOR_BLACK, 15, FONT_PFR]),
  },
  liBorderView: {
    flex: 1,
    ...Parsers.box(['center', 'space-between', 'row']),
  },
  hasBorder: {
    borderColor: COLOR_LINEGRAY,
    borderBottomWidth: MinPix,
  },
  commonBg: {
    backgroundColor: '#FFF',
    flex: 1,
    // paddingTop: STATUS_BAR_HEIGHT,
  },
};
export default STYLES;
