import {
    Dimensions,
    StatusBar,
    PixelRatio,
    Platform,
} from 'react-native';

import { isiOS } from './config';
// import { getRandomColor } from './Util';

export const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export const IS_IPHONE_X =
    isiOS &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    ((viewportHeight === 812 && viewportWidth === 375) || (viewportHeight === 896 && viewportWidth === 414));
let statusBarHeight = 0;

if (isiOS) {
    statusBarHeight = IS_IPHONE_X ? 44 : 20;
} else {
    statusBarHeight = StatusBar.currentHeight;
}

export const STATUS_BAR_HEIGHT = statusBarHeight;
export const NAV_COMMON_HEIGHT = 44;

export const COLOR_COMMON_BLUE = '#1B82D2';
// export const COLOR_THEME_COMMON = getRandomColor();
export const COLOR_THEME_COMMON = COLOR_COMMON_BLUE;
export const COLOR_COMMON_BLACK = '#999';

export const COLOR_BLACK = '#2A2A2A';
export const COLOR_WHITE = '#fff';
export const COLOR_GRAY = '#999';
export const COLOR_ASH_GRAY = '#666';
export const COLOR_BLUE = '#16acf8';
export const COLOR_PEACH = '#ff5779';
export const COLOR_ORANGE = '#ffbb42';
export const COLOR_PURPLE = '#916fff';
export const COLOR_LIGHTGRAY = '#c8c8c8ad';  //浅灰
export const COLOR_LINEGRAY = '#E8EBF5';     //分割线
export const COLOR_BGGRAY = '#F9FAFB';       //页面底色灰

export const FONT_PFS = 'PingFangTC-Semibold';
export const FONT_PFR = 'PingFangTC-Regular';
export const FONT_PFM = 'PingFangSC-Medium';

const PixelRatioWidth = PixelRatio.get();
console.log('PixelRatioWidth', PixelRatioWidth)
export const MinPix = 1 / PixelRatioWidth;



// 图片
export const IMAGE_ARROW_RIGHT = require('../resource/image/SeemoreGray.png');
export const IMAGE_APP_ICON = require('../resource/image/app_icon.png');


