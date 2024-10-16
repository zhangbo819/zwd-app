import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const OS = Platform.OS;
export const iOS = 'ios';
export const Android = 'android';
export const isiOS = OS === iOS;
export const isAndroid = OS === Android;

const ReadableVersion = DeviceInfo.getReadableVersion();
const ReadableVersionArr = ReadableVersion.split('.');
function supplementZero(num) {
    return num < 10 ? '0' + num : num;
}

export const VERSION_NUMBER = ReadableVersionArr[0] + supplementZero(ReadableVersionArr[1]) + supplementZero(ReadableVersionArr[2]);
export const VERSION_NUMBER_NORM = ((VERSION_NUMBER - VERSION_NUMBER % 10000) / 10000) + '.' + ((VERSION_NUMBER % 10000 - VERSION_NUMBER % 100) / 100) + '.' + (VERSION_NUMBER % 100);


export const isDev = typeof __DEV__ === 'boolean' && __DEV__;
if (!isDev) {
    global.console = {
        info: () => { },
        log: () => { },
        warn: () => { },
        debug: () => { },
        error: () => { },
    };
}


export const saveStorage = async ({ key, data, expires = null }) => {
    try {
        await global.storage.save({ key, data, expires });
        return true;
    }
    catch (err) {
        console.log('saveStorage err', err)
        return false;
    }
}

export const loadStorage = async (key, defaultValue) => {
    let result = null;
    try {
        // console.log('storage', storage)
        // to do
        result = await global.storage.load({ key, autoSync: true, syncInBackground: true });
        if (result === null) {
            result = defaultValue;
            // storage.save({ key, data: result, expires: null });
        }
    } catch (err) {
        console.log('loadStorage err', err)
        if (err.name == 'NotFoundError') {
            result = defaultValue;
            storage.save({ key, data: result, expires: null });
        }
    }
    return result;
};

export const base64Header = 'data:image/jpeg;base64,';