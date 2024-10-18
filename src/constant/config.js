import {Platform} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {MMKV} from 'react-native-mmkv';

// import DeviceInfo from 'react-native-device-info'; // TODO

export const OS = Platform.OS;
export const iOS = 'ios';
export const Android = 'android';
export const isiOS = OS === iOS;
export const isAndroid = OS === Android;

// const ReadableVersion = DeviceInfo.getReadableVersion();
// const ReadableVersionArr = ReadableVersion.split('.');
// function supplementZero(num) {
//     return num < 10 ? '0' + num : num;
// }


// export const VERSION_NUMBER = ReadableVersionArr[0] + supplementZero(ReadableVersionArr[1]) + supplementZero(ReadableVersionArr[2]);
// export const VERSION_NUMBER_NORM =
//   (VERSION_NUMBER - (VERSION_NUMBER % 10000)) / 10000 +
//   '.' +
//   ((VERSION_NUMBER % 10000) - (VERSION_NUMBER % 100)) / 100 +
//   '.' +
//   (VERSION_NUMBER % 100);
export const VERSION_NUMBER_NORM = '0.2.0';

export const isDev = typeof __DEV__ === 'boolean' && __DEV__;
if (!isDev) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    debug: () => {},
    error: () => {},
  };
}

const storage = new MMKV();

export const saveStorage = async ({key, data}) => {
  try {
    // await AsyncStorage.setItem(key, JSON.stringify(data))
    await storage.set(key, JSON.stringify(data));
    // console.log('data in', data)
    return true;
  } catch (err) {
    console.log('saveStorage err', err);
    return false;
  }
};

export const loadStorage = async (key, defaultValue) => {
  let result = null;
  try {
    // to do
    // result = await AsyncStorage.getItem(key);
    result = await storage.getString(key) || null;
    if (result) {
        result = JSON.parse(result);
    }
    if (result === null) {
        result = defaultValue;
        saveStorage({key, data: result});
    }
    // console.log('result 1', result, typeof result);
  } catch (err) {
    console.log('loadStorage err', err);
    if (err.name == 'NotFoundError') {
      result = defaultValue;
      saveStorage({key, data: result});
    }
  }
  return result;
};

export const base64Header = 'data:image/jpeg;base64,';
