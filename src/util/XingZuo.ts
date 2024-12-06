export enum XZ {
  白羊座 = '白羊座',
  金牛座 = '金牛座',
  双子座 = '双子座',
  巨蟹座 = '巨蟹座',
  狮子座 = '狮子座',
  处女座 = '处女座',
  天秤座 = '天秤座',
  天蝎座 = '天蝎座',
  射手座 = '射手座',
  摩羯座 = '摩羯座',
  水瓶座 = '水瓶座',
  双鱼座 = '双鱼座',
}
export const XZ_12 = [
  XZ.白羊座,
  XZ.金牛座,
  XZ.双子座,
  XZ.巨蟹座,
  XZ.狮子座,
  XZ.处女座,
  XZ.天秤座,
  XZ.天蝎座,
  XZ.射手座,
  XZ.摩羯座,
  XZ.水瓶座,
  XZ.双鱼座,
];
export type XingZuoGetDataRes = {
  xz: XZ;
  duigong: XZ;
  class_four: string;
  palace_three: string;
};

export default class XingZuo {
  public static getData(xz: XZ): XingZuoGetDataRes {
    const index = XZ_12.findIndex(i => i === xz);
    const duigong = XZ_12[(index + 6) % 12];
    // console.log('duigong', duigong);

    const map_four: Record<string, XZ[]> = {
      火系: [XZ.白羊座, XZ.狮子座, XZ.射手座],
      土系: [XZ.金牛座, XZ.处女座, XZ.摩羯座],
      风系: [XZ.双子座, XZ.天秤座, XZ.水瓶座],
      水系: [XZ.巨蟹座, XZ.天蝎座, XZ.双鱼座],
    };
    const class_four = Object.keys(map_four).reduce((r, i) => {
      if (map_four[i].includes(xz)) {
        r = i;
      }
      return r;
    }, '');
    const map_palace: Record<string, XZ[]> = {
      基本宫: [XZ.白羊座, XZ.巨蟹座, XZ.天秤座, XZ.摩羯座],
      固定宫: [XZ.金牛座, XZ.狮子座, XZ.天蝎座, XZ.水瓶座],
      变动宫: [XZ.双子座, XZ.处女座, XZ.射手座, XZ.双鱼座],
    };
    const palace_three = Object.keys(map_palace).reduce((r, i) => {
      if (map_palace[i].includes(xz)) {
        r = i;
      }
      return r;
    }, '');

    return {xz, duigong, class_four, palace_three};
  }
}
