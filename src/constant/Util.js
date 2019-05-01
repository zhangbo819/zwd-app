import { Dimensions } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const designWidth = 375;
const designHeight = 667;

const COLOR_RANGE = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

export const getWidth = (number) => {
    return Math.floor((number * viewportWidth) / designWidth)
}

export const getHeight = (number) => {
    return Math.floor((number * viewportHeight) / designHeight)
}

//获得随机颜色
export const getRandomColor = (opacity = 1) => {
    //
    let arr = COLOR_RANGE,
        str = "#";

    const op = arr[Math.floor((arr.length - 1) * opacity)];

    for (let i = 0; i < 6; i++) {
        str += arr[Math.ceil(Math.random() * 16) - 1];
    }

    // to do
    str = str + op + op;

    // console.log(str)
    return str
}

export const getReverseColor = (color = '') => {
    let result = '#';
    const diaphaneity = color.slice(-2);
    color = color[0] === '#' ? color.slice(1, -2) : color.slice(0, -2);

    const { length } = COLOR_RANGE;

    for (let i = 0, len = color.length; i < len; i++) {
        const now = COLOR_RANGE.findIndex(j => j === color[i]);
        const reverse = COLOR_RANGE[length - now - 1];
        if (reverse === undefined) {
            console.warn('getReverseColor err ' + color[i] + ' is undefined, index is ' + (length - now))
        }
        result += reverse;
    }

    result += diaphaneity;

    return result
}