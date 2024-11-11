import {Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const designWidth = 375;
const designHeight = 667;

const COLOR_RANGE = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

export const getWidth = (number: number) => {
  return Math.floor((number * viewportWidth) / designWidth);
};

export const getHeight = (number: number) => {
  return Math.floor((number * viewportHeight) / designHeight);
};

// 获得随机颜色
export const getRandomColor = (opacity = 1) => {
  //
  let arr = COLOR_RANGE,
    str = '#';

  const op = arr[Math.floor((arr.length - 1) * opacity)];

  for (let i = 0; i < 6; i++) {
    str += arr[Math.ceil(Math.random() * 16) - 1];
  }

  // to do
  str = str + op + op;

  // console.log(str)
  return str;
};

// 获取反转颜色
export const getReverseColor = (color = '') => {
  let result = '#';
  const diaphaneity = color.slice(-2);
  color = color[0] === '#' ? color.slice(1, -2) : color.slice(0, -2);

  const {length} = COLOR_RANGE;

  for (let i = 0, len = color.length; i < len; i++) {
    const now = COLOR_RANGE.findIndex(j => j === color[i]);
    const reverse = COLOR_RANGE[length - now - 1];
    if (reverse === undefined) {
      console.warn(
        'getReverseColor err ' +
          color[i] +
          ' is undefined, index is ' +
          (length - now),
      );
    }
    result += reverse;
  }

  result += diaphaneity;

  return result;
};

// 混合两种颜色
// export function mixHexColors(hex1: string, hex2: string) {
//   // // 将十六进制颜色转换为RGB
//   function hexToRgb(hex: string) {
//     let r = parseInt(hex.slice(1, 3), 16);
//     let g = parseInt(hex.slice(3, 5), 16);
//     let b = parseInt(hex.slice(5, 7), 16);
//     return [r, g, b];
//   }

//   // 将RGB颜色转换为十六进制
//   function rgbToHex(r: number, g: number, b: number) {
//     return (
//       '#' +
//       ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
//     );
//   }

//   // 获取两个颜色的RGB分量
//   let rgb1 = hexToRgb(hex1);
//   let rgb2 = hexToRgb(hex2);

//   // 计算平均值
//   let mixedR = Math.floor((rgb1[0] + rgb2[0]) / 2);
//   let mixedG = Math.floor((rgb1[1] + rgb2[1]) / 2);
//   let mixedB = Math.floor((rgb1[2] + rgb2[2]) / 2);

//   // 将平均后的RGB值转换回十六进制
//   return rgbToHex(mixedR, mixedG, mixedB);
// }

// 混合两种颜色 2
export function mixHexColors(
  color1: string,
  color2: string,
  weight: number = 0.5,
) {
  // 解析颜色字符串为RGB值
  function parseColor(color: string) {
    const hex = color.replace(/^#/, '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return {r, g, b};
  }

  const color1RGB = parseColor(color1);
  const color2RGB = parseColor(color2);

  // 计算混合后的RGB值
  const blendedR = Math.round(
    (1 - weight) * color1RGB.r + weight * color2RGB.r,
  );
  const blendedG = Math.round(
    (1 - weight) * color1RGB.g + weight * color2RGB.g,
  );
  const blendedB = Math.round(
    (1 - weight) * color1RGB.b + weight * color2RGB.b,
  );

  // 将RGB值转换为十六进制颜色字符串
  function componentToHex(c: number) {
    const hex = c.toString(16);

    return hex.length === 1 ? '0' + hex : hex;
  }

  return `#${componentToHex(blendedR)}${componentToHex(
    blendedG,
  )}${componentToHex(blendedB)}`;
}
