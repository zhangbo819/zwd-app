import {Dimensions} from 'react-native';
import version from '../constant/version';
import RNFetchBlob from 'rn-fetch-blob';

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

export type fetchToCheckVersionRes = {
  hasUpdate: boolean;
  tagName: string;
  published_at: string;
  apk: {
    name: string;
    download_count: string;
    size: string;
    url: string;
    updated_at: string;
  };
};
export async function fetchToCheckVersion(): Promise<fetchToCheckVersionRes> {
  return new Promise((resolve, reject) => {
    // fetch(
    //   'https://github.com/zhangbo819/zwd-app/releases/download/v0.2.0/zwd_v0.2.20.apk',
    //   {
    //     method: 'HEAD',
    //   },
    // ).then((data: any) => {
    //   console.log('data', JSON.stringify(data, null, 4));
    // });
    RNFetchBlob.fetch(
      'GET',
      'https://api.github.com/repos/zhangbo819/zwd-app/releases/latest',
    )
      .then(response => response.json())
      .then((data: any) => {
        // console.log('data', JSON.stringify(data, null, 4));
        if (!data.assets) {
          reject('无远程资源');
          return;
        }
        const apkData = data.assets.find(
          (i: any) =>
            i.content_type === 'application/vnd.android.package-archive',
        );
        // console.log('apkData', apkData);

        if (!apkData) {
          reject('远程资源列表无 apk 文件');
          return;
        }

        const nowVersion = version.newVersionName;
        const newApkVersion = extractVersion(apkData.name);
        const hasUpdate = compareVersions(newApkVersion, nowVersion);
        // console.log('hasUpdate, nowVersion, newApkVersion', hasUpdate, nowVersion, newApkVersion)

        resolve({
          hasUpdate,
          tagName: data.name,
          published_at: data.published_at,
          apk: {
            name: apkData.name,
            download_count: apkData.download_count,
            size: apkData.size,
            url: apkData.browser_download_url,
            updated_at: apkData.updated_at,
          },
        });
      })
      .catch(error => {
        console.error('Error:', error);
        reject(error);
      });
  });
}

function extractVersion(filename: string): string {
  const regex = /v([0-9]+(?:\.[0-9]+)*)(?:[-\.].*)?$/;
  const match = filename.match(regex);

  if (match) {
    return match[1]; // 返回版本号
  }
  return '0.0.0'; // 未找到版本号
}

// 比较版本号判断是否需要更新
function compareVersions(newVersion: string, oldVersion: string): boolean {
  // 将版本号拆分为数组并转换为数字
  const newParts = newVersion.split('.').map(Number);
  const oldParts = oldVersion.split('.').map(Number);

  // 使得两个版本号数组的长度相同，通过添加 0 填充
  while (newParts.length < 3) {
    newParts.push(0);
  }
  while (oldParts.length < 3) {
    oldParts.push(0);
  }

  // 按照每个部分逐个比较
  for (let i = 0; i < 3; i++) {
    if (newParts[i] > oldParts[i]) {
      return true;
    } else if (newParts[i] < oldParts[i]) {
      return false;
    }
  }

  return false; // 版本号相等
}
