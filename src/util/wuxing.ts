import {DH_MAP} from './Tiaohou';

export enum TG {
  甲 = '甲',
  乙 = '乙',
  丙 = '丙',
  丁 = '丁',
  戊 = '戊',
  己 = '己',
  庚 = '庚',
  辛 = '辛',
  壬 = '壬',
  癸 = '癸',
}
export enum DZ {
  子 = '子',
  丑 = '丑',
  寅 = '寅',
  卯 = '卯',
  辰 = '辰',
  巳 = '巳',
  午 = '午',
  未 = '未',
  申 = '申',
  酉 = '酉',
  戌 = '戌',
  亥 = '亥',
}

export enum JZ_60 {
  甲子 = TG.甲 + DZ.子,
  乙丑 = TG.乙 + DZ.丑,
  丙寅 = TG.丙 + DZ.寅,
  丁卯 = TG.丁 + DZ.卯,
  戊辰 = TG.戊 + DZ.辰,
  己巳 = TG.己 + DZ.巳,
  庚午 = TG.庚 + DZ.午,
  辛未 = TG.辛 + DZ.未,
  壬申 = TG.壬 + DZ.申,
  癸酉 = TG.癸 + DZ.酉,
  甲戌 = TG.甲 + DZ.戌,
  乙亥 = TG.乙 + DZ.亥,
  丙子 = TG.丙 + DZ.子,
  丁丑 = TG.丁 + DZ.丑,
  戊寅 = TG.戊 + DZ.寅,
  己卯 = TG.己 + DZ.卯,
  庚辰 = TG.庚 + DZ.辰,
  辛巳 = TG.辛 + DZ.巳,
  壬午 = TG.壬 + DZ.午,
  癸未 = TG.癸 + DZ.未,
  甲申 = TG.甲 + DZ.申,
  乙酉 = TG.乙 + DZ.酉,
  丙戌 = TG.丙 + DZ.戌,
  丁亥 = TG.丁 + DZ.亥,
  戊子 = TG.戊 + DZ.子,
  己丑 = TG.己 + DZ.丑,
  庚寅 = TG.庚 + DZ.寅,
  辛卯 = TG.辛 + DZ.卯,
  壬辰 = TG.壬 + DZ.辰,
  癸巳 = TG.癸 + DZ.巳,
  甲午 = TG.甲 + DZ.午,
  乙未 = TG.乙 + DZ.未,
  丙申 = TG.丙 + DZ.申,
  丁酉 = TG.丁 + DZ.酉,
  戊戌 = TG.戊 + DZ.戌,
  己亥 = TG.己 + DZ.亥,
  庚子 = TG.庚 + DZ.子,
  辛丑 = TG.辛 + DZ.丑,
  壬寅 = TG.壬 + DZ.寅,
  癸卯 = TG.癸 + DZ.卯,
  甲辰 = TG.甲 + DZ.辰,
  乙巳 = TG.乙 + DZ.巳,
  丙午 = TG.丙 + DZ.午,
  丁未 = TG.丁 + DZ.未,
  戊申 = TG.戊 + DZ.申,
  己酉 = TG.己 + DZ.酉,
  庚戌 = TG.庚 + DZ.戌,
  辛亥 = TG.辛 + DZ.亥,
  壬子 = TG.壬 + DZ.子,
  癸丑 = TG.癸 + DZ.丑,
  甲寅 = TG.甲 + DZ.寅,
  乙卯 = TG.乙 + DZ.卯,
  丙辰 = TG.丙 + DZ.辰,
  丁巳 = TG.丁 + DZ.巳,
  戊午 = TG.戊 + DZ.午,
  己未 = TG.己 + DZ.未,
  庚申 = TG.庚 + DZ.申,
  辛酉 = TG.辛 + DZ.酉,
  壬戌 = TG.壬 + DZ.戌,
  癸亥 = TG.癸 + DZ.亥,
}

export const TG_10 = [
  TG.甲,
  TG.乙,
  TG.丙,
  TG.丁,
  TG.戊,
  TG.己,
  TG.庚,
  TG.辛,
  TG.壬,
  TG.癸,
];

export const DZ_12 = [
  DZ.子,
  DZ.丑,
  DZ.寅,
  DZ.卯,
  DZ.辰,
  DZ.巳,
  DZ.午,
  DZ.未,
  DZ.申,
  DZ.酉,
  DZ.戌,
  DZ.亥,
];

// 计算身命宫时用到的地支顺序
const DZ_SHEN_MING = [
  DZ.寅,
  DZ.卯,
  DZ.辰,
  DZ.巳,
  DZ.午,
  DZ.未,
  DZ.申,
  DZ.酉,
  DZ.戌,
  DZ.亥,
  DZ.子,
  DZ.丑,
];

export enum Ten {
  比肩 = '比肩',
  劫财 = '劫财',
  食神 = '食神',
  伤官 = '伤官',
  正印 = '正印',
  正官 = '正官',
  七杀 = '七杀',
  正财 = '正财',
  偏印 = '偏印',
  偏财 = '偏财',
  元男 = '元男',
  元女 = '元女',
}

export enum Ten2 {
  官杀 = '官杀',
  印绶 = '印绶',
  财才 = '财才',
  食伤 = '食伤',
  比劫 = '比劫',
  日元 = '日元',
}

export enum WX {
  金 = '金',
  木 = '木',
  水 = '水',
  火 = '火',
  土 = '土',
}

export const WuXing5 = [WX.金, WX.木, WX.水, WX.火, WX.土];

export enum ZhangSheng {
  长生 = '长生',
  沐浴 = '沐浴',
  冠带 = '冠带',
  临官 = '临官',
  帝旺 = '帝旺',
  衰 = '衰',
  病 = '病',
  死 = '死',
  墓 = '墓',
  绝 = '绝',
  胎 = '胎',
  养 = '养',
}

export const ZhangSheng12 = [
  ZhangSheng.长生,
  ZhangSheng.沐浴,
  ZhangSheng.冠带,
  ZhangSheng.临官,
  ZhangSheng.帝旺,
  ZhangSheng.衰,
  ZhangSheng.病,
  ZhangSheng.死,
  ZhangSheng.墓,
  ZhangSheng.绝,
  ZhangSheng.胎,
  ZhangSheng.养,
];

// 春分，夏至，秋分，冬至，的前一日离日。立春，立夏，立秋，立冬，前一日绝日。
export const JQ_4LI = ['春分', '夏至', '秋分', '冬至'];
export const JQ_4JUE = ['立春', '立夏', '立秋', '立冬'];
export const JQ_24 = [
  '立春',
  '雨水',
  '惊蛰',
  '春分',
  '清明',
  '谷雨',
  '立夏',
  '小满',
  '芒种',
  '夏至',
  '小暑',
  '大暑',
  '立秋',
  '处暑',
  '白露',
  '秋分',
  '寒露',
  '霜降',
  '立冬',
  '小雪',
  '大雪',
  '冬至',
  '小寒',
  '大寒',
];
export const JQ_12 = JQ_24.reduce((r, i, index) => {
  if (index % 2 === 0) {
    r.push(i);
  }
  return r;
}, [] as string[]);

enum YueClass {
  '旺' = '旺',
  '相' = '相',
  '休' = '休',
  '囚' = '囚',
  '死' = '死',
}

export const YueClass5 = [
  YueClass.旺,
  YueClass.相,
  YueClass.休,
  YueClass.囚,
  YueClass.死,
];

export const YueLinByWuxing = {
  // [WX.金]: [YueClass.旺, YueClass.死, YueClass.相, YueClass.囚, YueClass.休],
  [WX.金]: [WX.金, WX.水, WX.土, WX.火, WX.木],
  // [WX.木]: [YueClass.休, YueClass.旺, YueClass.休, YueClass.相, YueClass.死],
  [WX.木]: [WX.木, WX.火, WX.水, WX.金, WX.土],
  // [WX.水]: [YueClass.休, YueClass.相, YueClass.旺, YueClass.死, YueClass.休],
  [WX.水]: [WX.水, WX.木, WX.金, WX.土, WX.火],
  // [WX.火]: [YueClass.死, YueClass.休, YueClass.囚, YueClass.旺, YueClass.相],
  [WX.火]: [WX.火, WX.土, WX.木, WX.水, WX.金],
  // [WX.土]: [YueClass.相, YueClass.囚, YueClass.死, YueClass.休, YueClass.旺],
  [WX.土]: [WX.土, WX.金, WX.木, WX.火, WX.水],
};

type Xun =
  | JZ_60.甲子
  | JZ_60.甲午
  | JZ_60.甲寅
  | JZ_60.甲戌
  | JZ_60.甲申
  | JZ_60.甲辰;

enum TG_GX {
  克 = '克',
  合 = '合',
}

enum DZ_GX {
  合 = '合',
  暗合 = '暗合',
  冲 = '冲',
  穿 = '穿',
  刑 = '刑',
  破 = '破',
  三刑 = '三刑',
  三刑之二 = '三刑之二',
  三合 = '三合',
  四合 = '四合',
  三会 = '三会',
  拱合 = '拱合',
  拱会 = '拱会',
}

enum TG_LEVEL {
  '无根气',
  '余气根',
  '中气根',
  '本气根',
  // '刃',
  // '禄',
}
enum DZ_LEVEL {
  '透干',
  '未透干',
}
// enum TG_POWER_LEVEL {
//   '极强', // 当令 旺, 得强根 本气根
//   '强2', // 当令 相, 得强根 本气根
//   '强3', // 当令 旺, 得强根 中气根
//   '强4', // 当令 相, 得强根 中气根
//   '弱', // 余气根
//   '虚浮', // 无根气
// }

export type sizhuDetailsItem = {
  wx: WX;
  isDeLing: boolean; // 是否得令
  tg_is_qg: boolean; // 是否有强根
  tg_level_text: string; // 强根等级文字
  wx_opacity: number;
  // tg_color: string;
  // tg_power: TG_POWER_LEVEL; // 天干力量
  tg_level: TG_LEVEL;
  dz_level_text: string; // 地支透干等级
  is_tougan: boolean; // 是否透干
  isDeShi: boolean; // 是否得势
  gen_dz: DZ[]; // 天干的根对应的地支，空为无根
  deshi_text: string[];
  power_number: string | number; // 五行力量数字
  power_text: string; // 五行力量文字
  shishen: Ten2;
};

// function _exchangeGenqi(map: {
//   [TG_LEVEL.禄]: DZ[];
//   [TG_LEVEL.刃]: DZ[];
//   [TG_LEVEL.中气根]: DZ[];
//   [TG_LEVEL.余气根]: DZ[];
// }) {
//   const temp = map[TG_LEVEL.刃];
//   return {
//     ...map,
//     [TG_LEVEL.禄]: temp,
//     [TG_LEVEL.刃]: map[TG_LEVEL.禄],
//   };
// }

type DZ_RELATION_ITEM = {
  name: DZ[];
  index: number[];
  start: number;
  key: DZ_GX;
  text: string;
  color: string;
};

class WuXingClass {
  map_dzgx = {
    [DZ_GX.合]: [
      [DZ.子, DZ.丑], // 合化土
      [DZ.寅, DZ.亥], // 合化木
      [DZ.卯, DZ.戌], // 合化火
      [DZ.辰, DZ.酉], // 合化金
      [DZ.巳, DZ.申], // 合化水
      [DZ.午, DZ.未], // 合化土
    ],
    [DZ_GX.暗合]: [
      [DZ.卯, DZ.申],
      [DZ.寅, DZ.丑],
      [DZ.午, DZ.亥],
    ],
    [DZ_GX.冲]: [
      [DZ.子, DZ.午], // 水火本气受损
      [DZ.卯, DZ.酉], // 金木本气受损
      [DZ.寅, DZ.申], // 本气藏干都受损
      [DZ.巳, DZ.亥], // 本气藏干都受损
      [DZ.辰, DZ.戌], // 本气冲旺藏干互毁
      [DZ.丑, DZ.未], // 本气冲旺藏干互毁
    ],
    [DZ_GX.穿]: [
      [DZ.未, DZ.子], // 己土穿癸水
      [DZ.丑, DZ.午], // 癸水克丁火
      [DZ.巳, DZ.寅], // 庚金克甲木
      [DZ.卯, DZ.辰], // 木克土
      [DZ.申, DZ.亥], // 庚金克甲木
      [DZ.戌, DZ.酉], // 丁火克辛金
    ],
    [DZ_GX.刑]: [
      [DZ.子, DZ.卯],
      [DZ.午, DZ.酉],

      [DZ.辰, DZ.辰],
      [DZ.酉, DZ.酉],
      [DZ.亥, DZ.亥],
      [DZ.午, DZ.午],
    ],
    [DZ_GX.破]: [
      [DZ.子, DZ.酉],
      [DZ.午, DZ.卯],
      [DZ.巳, DZ.申],
      [DZ.寅, DZ.亥],
      [DZ.辰, DZ.丑],
      [DZ.未, DZ.戌],
    ],
    [DZ_GX.三刑]: [
      [DZ.丑, DZ.未, DZ.戌], //（土力量增加，藏干互毁）
      [DZ.寅, DZ.巳, DZ.申], //（本气互毁）
    ],
    [DZ_GX.三合]: [
      [DZ.寅, DZ.午, DZ.戌],
      [DZ.申, DZ.子, DZ.辰],
      [DZ.巳, DZ.酉, DZ.丑],
      [DZ.亥, DZ.卯, DZ.未],
    ],
    [DZ_GX.四合]: [[DZ.辰, DZ.戌, DZ.未, DZ.丑]],
    [DZ_GX.三会]: [
      [DZ.巳, DZ.午, DZ.未],
      [DZ.亥, DZ.子, DZ.丑],
      [DZ.申, DZ.酉, DZ.戌],
      [DZ.寅, DZ.卯, DZ.辰],
    ],
    get [DZ_GX.拱合]() {
      return this[DZ_GX.三合];
    },
    get [DZ_GX.拱会]() {
      return this[DZ_GX.三会];
    },
    get [DZ_GX.三刑之二]() {
      return this[DZ_GX.三刑];
    },
  };

  // map_tg_genqi = {
  //   [TG.甲]: {
  //     [TG_LEVEL.禄]: [DZ.寅],
  //     [TG_LEVEL.刃]: [DZ.卯],
  //     [TG_LEVEL.中气根]: [DZ.亥, DZ.辰],
  //     [TG_LEVEL.余气根]: [DZ.未],
  //   },
  //   get [TG.乙]() {
  //     return _exchangeGenqi(this[TG.甲]);
  //   },
  //   [TG.丙]: {
  //     [TG_LEVEL.禄]: [DZ.巳],
  //     [TG_LEVEL.刃]: [DZ.午],
  //     [TG_LEVEL.中气根]: [DZ.寅, DZ.未],
  //     [TG_LEVEL.余气根]: [DZ.戌],
  //   },
  //   get [TG.丁]() {
  //     return _exchangeGenqi(this[TG.丙]);
  //   },
  //   [TG.戊]: {
  //     [TG_LEVEL.禄]: [DZ.戌, DZ.辰],
  //     [TG_LEVEL.刃]: [DZ.丑, DZ.未],
  //     [TG_LEVEL.中气根]: [DZ.巳],
  //     [TG_LEVEL.余气根]: [DZ.寅, DZ.申],
  //   },
  //   get [TG.己]() {
  //     return _exchangeGenqi(this[TG.戊]);
  //   },
  //   [TG.庚]: {
  //     [TG_LEVEL.禄]: [DZ.申],
  //     [TG_LEVEL.刃]: [DZ.酉],
  //     [TG_LEVEL.中气根]: [DZ.戌],
  //     [TG_LEVEL.余气根]: [DZ.丑, DZ.巳],
  //   },
  //   get [TG.辛]() {
  //     return _exchangeGenqi(this[TG.庚]);
  //   },
  //   [TG.壬]: {
  //     [TG_LEVEL.禄]: [DZ.亥],
  //     [TG_LEVEL.刃]: [DZ.子],
  //     [TG_LEVEL.中气根]: [DZ.丑, DZ.申],
  //     [TG_LEVEL.余气根]: [DZ.辰],
  //   },
  //   get [TG.癸]() {
  //     return _exchangeGenqi(this[TG.壬]);
  //   },
  // };
  map_wx_genqi = {
    [WX.木]: {
      [TG_LEVEL.本气根]: [DZ.寅, DZ.卯],
      [TG_LEVEL.中气根]: [DZ.亥, DZ.辰],
      [TG_LEVEL.余气根]: [DZ.未],
    },
    [WX.火]: {
      [TG_LEVEL.本气根]: [DZ.巳, DZ.午],
      [TG_LEVEL.中气根]: [DZ.寅, DZ.未],
      [TG_LEVEL.余气根]: [DZ.戌],
    },
    [WX.土]: {
      [TG_LEVEL.本气根]: [DZ.辰, DZ.戌, DZ.丑, DZ.未],
      [TG_LEVEL.中气根]: [DZ.巳, DZ.午],
      [TG_LEVEL.余气根]: [DZ.寅, DZ.申],
    },
    [WX.金]: {
      [TG_LEVEL.本气根]: [DZ.申, DZ.酉],
      [TG_LEVEL.中气根]: [DZ.戌],
      [TG_LEVEL.余气根]: [DZ.丑, DZ.巳],
    },
    [WX.水]: {
      [TG_LEVEL.本气根]: [DZ.亥, DZ.子],
      [TG_LEVEL.中气根]: [DZ.丑, DZ.申],
      [TG_LEVEL.余气根]: [DZ.辰],
    },
  };

  map_dz_wx: Record<DZ, Record<string, number>> = {
    [DZ.子]: {[WX.水]: 1},
    [DZ.丑]: {[WX.土]: 0.6, [WX.水]: 0.3, [WX.金]: 0.1},
    [DZ.寅]: {[WX.木]: 0.6, [WX.火]: 0.3, [WX.土]: 0.1},
    [DZ.卯]: {[WX.木]: 1},
    [DZ.辰]: {[WX.土]: 0.6, [WX.木]: 0.3, [WX.水]: 0.1},
    [DZ.巳]: {[WX.火]: 0.6, [WX.土]: 0.3, [WX.金]: 0.1},
    [DZ.午]: {[WX.火]: 0.7, [WX.土]: 0.3},
    [DZ.未]: {[WX.土]: 0.6, [WX.火]: 0.3, [WX.木]: 0.1},
    [DZ.申]: {[WX.金]: 0.6, [WX.水]: 0.3, [WX.土]: 0.1},
    [DZ.酉]: {[WX.金]: 1},
    [DZ.戌]: {[WX.土]: 0.6, [WX.金]: 0.3, [WX.火]: 0.1},
    [DZ.亥]: {[WX.水]: 0.7, [WX.木]: 0.3},
  };

  map_dz_2_power: Record<DZ, Record<DZ, Record<string, number>>> = {
    [DZ.子]: {
      [DZ.子]: {[WX.水]: 1}, //
      [DZ.丑]: {[WX.水]: 0.8}, // 被合
      [DZ.寅]: {[WX.水]: 0.9}, // 生寅木
      [DZ.卯]: {[WX.水]: 1}, // 刑
      [DZ.辰]: {[WX.水]: 1.5}, // 半合水
      [DZ.巳]: {[WX.水]: 0.8}, // 水被耗
      [DZ.午]: {[WX.水]: 0.5}, // 冲
      [DZ.未]: {[WX.水]: 0.4}, // 被穿被克
      [DZ.申]: {[WX.水]: 1.5}, // 半合水
      [DZ.酉]: {[WX.水]: 1}, // 酉不生子
      [DZ.戌]: {[WX.水]: 0.6}, // 被克
      [DZ.亥]: {[WX.水]: 1.5}, // 半会
    },
    [DZ.丑]: {
      [DZ.子]: {[WX.土]: 1.2, [WX.水]: 0.8, [WX.金]: 1}, // 合子
      [DZ.丑]: {[WX.土]: 1, [WX.水]: 1, [WX.金]: 1}, // 无
      [DZ.寅]: {[WX.土]: 1.1, [WX.水]: 0.8, [WX.金]: 0.9}, // 暗合
      [DZ.卯]: {[WX.土]: 0.5, [WX.水]: 1, [WX.金]: 0.8}, // 被克
      [DZ.辰]: {[WX.土]: 1, [WX.水]: 0.8, [WX.金]: 0.8}, // 破、辛金消耗
      [DZ.巳]: {[WX.土]: 1, [WX.水]: 0.8, [WX.金]: 1.5}, // 拱金
      [DZ.午]: {[WX.土]: 1.2, [WX.水]: 0.8, [WX.金]: 1}, // 穿 癸水克丁火
      [DZ.未]: {[WX.土]: 1.5, [WX.水]: 0.1, [WX.金]: 0.5}, // 冲 本气冲旺藏干互毁
      [DZ.申]: {[WX.土]: 0.8, [WX.水]: 1, [WX.金]: 1.5}, // 半会
      [DZ.酉]: {[WX.土]: 0.7, [WX.水]: 1, [WX.金]: 1.5}, // 半合
      [DZ.戌]: {[WX.土]: 1.5, [WX.水]: 0.5, [WX.金]: 0.3}, // 刑
      [DZ.亥]: {[WX.土]: 1, [WX.水]: 1.5, [WX.金]: 1}, // 半会
    },
    [DZ.寅]: {
      [DZ.子]: {[WX.木]: 1.2, [WX.火]: 1.2, [WX.土]: 1}, // 癸水生甲木
      [DZ.丑]: {[WX.木]: 0.8, [WX.火]: 0.8, [WX.土]: 0.9}, // 暗合
      [DZ.寅]: {[WX.木]: 1, [WX.火]: 1, [WX.土]: 1}, //
      [DZ.卯]: {[WX.木]: 1.5, [WX.火]: 0.8, [WX.土]: 0.8}, // 半会
      [DZ.辰]: {[WX.木]: 1.5, [WX.火]: 0.8, [WX.土]: 0.5}, // 半会
      [DZ.巳]: {[WX.木]: 0.5, [WX.火]: 1.2, [WX.土]: 1.2}, // 穿 庚金克甲木
      [DZ.午]: {[WX.木]: 0.7, [WX.火]: 1.5, [WX.土]: 1.5}, // 半合
      [DZ.未]: {[WX.木]: 0.9, [WX.火]: 1.2, [WX.土]: 0.8}, // 正财耗
      [DZ.申]: {[WX.木]: 0.1, [WX.火]: 0.5, [WX.土]: 0.8}, // 被冲
      [DZ.酉]: {[WX.木]: 0.8, [WX.火]: 0.9, [WX.土]: 1}, // 正官克
      [DZ.戌]: {[WX.木]: 0.7, [WX.火]: 1.5, [WX.土]: 1}, // 拱午
      [DZ.亥]: {[WX.木]: 1.4, [WX.火]: 0.8, [WX.土]: 0.9}, // 合木
    },
    [DZ.卯]: {
      [DZ.子]: {[WX.木]: 1}, // 刑，子水不生卯木
      [DZ.丑]: {[WX.木]: 0.9}, // 偏财克
      [DZ.寅]: {[WX.木]: 1.5}, // 半会
      [DZ.卯]: {[WX.木]: 1}, //
      [DZ.辰]: {[WX.木]: 0.9}, // 穿 木克土
      [DZ.巳]: {[WX.木]: 0.8}, // 生伤官
      [DZ.午]: {[WX.木]: 0.7}, // 破
      [DZ.未]: {[WX.木]: 1.5}, // 半合
      [DZ.申]: {[WX.木]: 0.8}, // 暗合
      [DZ.酉]: {[WX.木]: 0.1}, // 被冲
      [DZ.戌]: {[WX.木]: 0.7}, // 合火
      [DZ.亥]: {[WX.木]: 1.5}, // 半合
    },
    [DZ.辰]: {
      [DZ.子]: {[WX.土]: 0.8, [WX.木]: 1, [WX.水]: 1.2}, // 半合
      [DZ.丑]: {[WX.土]: 1.2, [WX.木]: 0.1, [WX.水]: 0.8}, // 破
      [DZ.寅]: {[WX.土]: 0.5, [WX.木]: 1.2, [WX.水]: 1}, // 半会
      [DZ.卯]: {[WX.土]: 0.1, [WX.木]: 1.2, [WX.水]: 1}, // 被穿 木克土 半会
      [DZ.辰]: {[WX.土]: 1.5, [WX.木]: 0.3, [WX.水]: 0.3}, // 自刑
      [DZ.巳]: {[WX.土]: 1.1, [WX.木]: 0.7, [WX.水]: 0.9}, // 被生
      [DZ.午]: {[WX.土]: 1.2, [WX.木]: 0.8, [WX.水]: 0.5}, // 被生
      [DZ.未]: {[WX.土]: 1.1, [WX.木]: 1, [WX.水]: 0.8}, //
      [DZ.申]: {[WX.土]: 0.8, [WX.木]: 0.8, [WX.水]: 1.5}, // 拱子
      [DZ.酉]: {[WX.土]: 1, [WX.木]: 0.8, [WX.水]: 1.1}, // 合金
      [DZ.戌]: {[WX.土]: 1.5, [WX.木]: 0.1, [WX.水]: 0.3}, // 冲
      [DZ.亥]: {[WX.土]: 0.5, [WX.木]: 1.2, [WX.水]: 1.5}, // 开水库、克水
    },
    [DZ.巳]: {
      [DZ.子]: {[WX.火]: 0.7, [WX.土]: 0.9, [WX.金]: 0.9}, // 被正官克
      [DZ.丑]: {[WX.火]: 0.7, [WX.土]: 0.7, [WX.金]: 1.5}, // 拱酉金
      [DZ.寅]: {[WX.火]: 1.2, [WX.土]: 0.8, [WX.金]: 0.8}, // 三刑 穿 庚金克甲木
      [DZ.卯]: {[WX.火]: 1.2, [WX.土]: 0.8, [WX.金]: 1.2}, // 被正印生
      [DZ.辰]: {[WX.火]: 0.8, [WX.土]: 0.8, [WX.金]: 0.8}, // 生食神
      [DZ.巳]: {[WX.火]: 1, [WX.土]: 1, [WX.金]: 1}, //
      [DZ.午]: {[WX.火]: 1.2, [WX.土]: 0.5, [WX.金]: 0.5}, // 半会
      [DZ.未]: {[WX.火]: 1.2, [WX.土]: 1, [WX.金]: 0.9}, // 半会
      [DZ.申]: {[WX.火]: 0.8, [WX.土]: 0.9, [WX.金]: 1.1}, // 合
      [DZ.酉]: {[WX.火]: 0.7, [WX.土]: 0.9, [WX.金]: 1}, // 半合
      [DZ.戌]: {[WX.火]: 1.2, [WX.土]: 1, [WX.金]: 0.7}, // 开火库
      [DZ.亥]: {[WX.火]: 0.5, [WX.土]: 0.5, [WX.金]: 0.5}, // 被冲
    },
    [DZ.午]: {
      [DZ.子]: {[WX.火]: 0.5, [WX.土]: 0.8}, // 被冲
      [DZ.丑]: {[WX.火]: 0.5, [WX.土]: 0.8}, // 被穿 癸水克丁火
      [DZ.寅]: {[WX.火]: 1.5, [WX.土]: 1.5}, // 半合
      [DZ.卯]: {[WX.火]: 1.2, [WX.土]: 0.5}, // 被破
      [DZ.辰]: {[WX.火]: 0.9, [WX.土]: 0.8}, // 生伤官
      [DZ.巳]: {[WX.火]: 1.2, [WX.土]: 1.2}, // 半会
      [DZ.午]: {[WX.火]: 1.5, [WX.土]: 0.5}, // 自刑
      [DZ.未]: {[WX.火]: 0.9, [WX.土]: 1.2}, // 合土 半会
      [DZ.申]: {[WX.火]: 0.9, [WX.土]: 0.9}, // 克正财
      [DZ.酉]: {[WX.火]: 0.9, [WX.土]: 0.9}, // 刑
      [DZ.戌]: {[WX.火]: 1.5, [WX.土]: 1.5}, // 半合
      [DZ.亥]: {[WX.火]: 0.8, [WX.土]: 1.2}, // 暗合
    },
    [DZ.未]: {
      [DZ.子]: {[WX.土]: 0.9, [WX.火]: 0.9, [WX.木]: 1}, // 穿 己土穿癸水
      [DZ.丑]: {[WX.土]: 1.5, [WX.火]: 0.1, [WX.木]: 0.1}, // 冲
      [DZ.寅]: {[WX.土]: 0.5, [WX.火]: 0.5, [WX.木]: 1.2}, // 开木库
      [DZ.卯]: {[WX.土]: 0.5, [WX.火]: 0.8, [WX.木]: 1.2}, // 半合
      [DZ.辰]: {[WX.土]: 1, [WX.火]: 1, [WX.木]: 1}, // 无
      [DZ.巳]: {[WX.土]: 0.8, [WX.火]: 1.2, [WX.木]: 0.8}, // 半会
      [DZ.午]: {[WX.土]: 1.2, [WX.火]: 1, [WX.木]: 1}, // 合土
      [DZ.未]: {[WX.土]: 1, [WX.火]: 1, [WX.木]: 1}, //
      [DZ.申]: {[WX.土]: 0.9, [WX.火]: 0.9, [WX.木]: 0.9}, // 生伤官
      [DZ.酉]: {[WX.土]: 0.9, [WX.火]: 0.9, [WX.木]: 0.9}, // 生食神
      [DZ.戌]: {[WX.土]: 1.5, [WX.火]: 0.9, [WX.木]: 0.5}, // 破 三刑
      [DZ.亥]: {[WX.土]: 1, [WX.火]: 0.8, [WX.木]: 1.2}, // 克正财
    },
    [DZ.申]: {
      [DZ.子]: {[WX.金]: 0.7, [WX.水]: 1.5, [WX.土]: 0.9}, // 半合
      [DZ.丑]: {[WX.金]: 1.2, [WX.水]: 1.2, [WX.土]: 1}, // 开金库
      [DZ.寅]: {[WX.金]: 0.7, [WX.水]: 0.5, [WX.土]: 0.5}, // 冲
      [DZ.卯]: {[WX.金]: 1.2, [WX.水]: 0.8, [WX.土]: 0.8}, // 暗合
      [DZ.辰]: {[WX.金]: 0.7, [WX.水]: 1.2, [WX.土]: 0.8}, // 拱子
      [DZ.巳]: {[WX.金]: 0.7, [WX.水]: 1.1, [WX.土]: 0.8}, // 合化水 破
      [DZ.午]: {[WX.金]: 0.8, [WX.水]: 0.7, [WX.土]: 1}, // 被正官克
      [DZ.未]: {[WX.金]: 1.1, [WX.水]: 1, [WX.土]: 1}, // 被偏印生
      [DZ.申]: {[WX.金]: 1, [WX.水]: 1, [WX.土]: 1}, //
      [DZ.酉]: {[WX.金]: 1.5, [WX.水]: 0.5, [WX.土]: 0.5}, // 半会
      [DZ.戌]: {[WX.金]: 1.5, [WX.水]: 0.5, [WX.土]: 0.7}, // 半会
      [DZ.亥]: {[WX.金]: 0.9, [WX.水]: 1, [WX.土]: 1}, // 穿 庚金克甲木
    },
    [DZ.酉]: {
      [DZ.子]: {[WX.金]: 1}, // 刑，破
      [DZ.丑]: {[WX.金]: 1.5}, // 半合
      [DZ.寅]: {[WX.金]: 0.9}, // 正财耗
      [DZ.卯]: {[WX.金]: 0.8}, // 冲
      [DZ.辰]: {[WX.金]: 1.2}, // 合金
      [DZ.巳]: {[WX.金]: 1.5}, // 半合
      [DZ.午]: {[WX.金]: 1}, //
      [DZ.未]: {[WX.金]: 0.9}, //
      [DZ.申]: {[WX.金]: 1.2}, // 半会
      [DZ.酉]: {[WX.金]: 1.5}, // 自刑
      [DZ.戌]: {[WX.金]: 0.5}, // 穿 丁火克辛金
      [DZ.亥]: {[WX.金]: 0.8}, //
    },
    [DZ.戌]: {
      [DZ.子]: {[WX.土]: 0.9, [WX.金]: 1, [WX.火]: 1.1}, // 克正财
      [DZ.丑]: {[WX.土]: 1.5, [WX.金]: 1, [WX.火]: 0.8}, // 三刑
      [DZ.寅]: {[WX.土]: 0.5, [WX.金]: 0.5, [WX.火]: 1.5}, // 拱午
      [DZ.卯]: {[WX.土]: 0.8, [WX.金]: 0.8, [WX.火]: 1.2}, // 合火
      [DZ.辰]: {[WX.土]: 1.5, [WX.金]: 0.9, [WX.火]: 0.1}, // 冲
      [DZ.巳]: {[WX.土]: 0.8, [WX.金]: 0.7, [WX.火]: 1.2}, // 开火库
      [DZ.午]: {[WX.土]: 0.8, [WX.金]: 0.5, [WX.火]: 1.5}, // 半合
      [DZ.未]: {[WX.土]: 1.5, [WX.金]: 0.5, [WX.火]: 1.2}, // 三刑
      [DZ.申]: {[WX.土]: 0.7, [WX.金]: 1.2, [WX.火]: 0.5}, // 半会
      [DZ.酉]: {[WX.土]: 1, [WX.金]: 0.5, [WX.火]: 0.9}, // 半会 穿 丁火克辛金
      [DZ.戌]: {[WX.土]: 1, [WX.金]: 1, [WX.火]: 1}, //
      [DZ.亥]: {[WX.土]: 0.7, [WX.金]: 0.9, [WX.火]: 1}, // 克偏财
    },
    [DZ.亥]: {
      [DZ.子]: {[WX.水]: 1.5, [WX.木]: 0.5}, // 半会
      [DZ.丑]: {[WX.水]: 1.2, [WX.木]: 0.8}, // 半会
      [DZ.寅]: {[WX.水]: 0.7, [WX.木]: 1.2}, // 合木
      [DZ.卯]: {[WX.水]: 0.7, [WX.木]: 1.2}, // 半合
      [DZ.辰]: {[WX.水]: 1.2, [WX.木]: 1.2}, // 开水库
      [DZ.巳]: {[WX.水]: 0.5, [WX.木]: 0.1}, // 冲 本气藏干都受损
      [DZ.午]: {[WX.水]: 0.9, [WX.木]: 1.1}, // 暗合
      [DZ.未]: {[WX.水]: 0.5, [WX.木]: 1.5}, // 拱卯
      [DZ.申]: {[WX.水]: 1.2, [WX.木]: 0.1}, // 穿 庚金克甲木
      [DZ.酉]: {[WX.水]: 1.1, [WX.木]: 0.9}, // 偏印生
      [DZ.戌]: {[WX.水]: 0.7, [WX.木]: 0.8}, // 被克
      [DZ.亥]: {[WX.水]: 1.5, [WX.木]: 0.5}, // 自刑
    },
  };

  map_muku = {
    [WX.火]: {
      mk: DZ.戌,
      tg: [TG.丙, TG.丁],
      dz: [DZ.巳, DZ.午, DZ.寅],
      close: DZ.卯,
    },
    [WX.水]: {
      mk: DZ.辰,
      tg: [TG.壬, TG.癸],
      dz: [DZ.亥, DZ.子, DZ.申],
      close: DZ.酉,
    },
    [WX.金]: {
      mk: DZ.丑,
      tg: [TG.庚, TG.辛],
      dz: [DZ.申, DZ.酉, DZ.巳],
      close: DZ.子,
    },
    [WX.木]: {
      mk: DZ.未,
      tg: [TG.甲, TG.乙],
      dz: [DZ.寅, DZ.卯, DZ.亥],
      close: DZ.午,
    },
  };

  // 根据天干或地支得到对应的五行
  public getWuxing(text: TG | DZ | WX | string) {
    const wuxingArr = WuXing5;
    if (text in WX) {
      return text;
    } else if (text in TG) {
      const index = TG_10.findIndex(i => i === text);
      const wuxingIndex = [1, 1, 3, 3, 4, 4, 0, 0, 2, 2][index];
      return wuxingArr[wuxingIndex];
    } else if (text in DZ) {
      const index = DZ_12.findIndex(i => i === text);
      const wuxingIndex = [2, 4, 1, 1, 4, 3, 3, 4, 0, 0, 4, 2][index];
      return wuxingArr[wuxingIndex];
    }
    return '';
  }

  getColorByWuxing(text: TG | DZ | string | WX) {
    const ColorsMap: Record<WX | string, any> = {
      [WX.木]: '#4CAF50',
      [WX.火]: '#F44336',
      [WX.土]: '#795548',
      [WX.金]: '#FDD835',
      [WX.水]: '#2196F3',
    };
    return ColorsMap[this.getWuxing(text)];
  }

  // 根据JZ_60得到对应的旬
  public getXun(target: JZ_60): Xun {
    const tg_index = TG_10.findIndex(i => i === target[0]);
    if (tg_index === 0) {
      return target as Xun;
    } else {
      const dz_index = DZ_12.findIndex(i => i === target[1]);
      // 找到该旬的甲对应的地支
      // 如 戊申 -> 4, 8 -> 8 - 4 = 4 -> 4为辰, 所以为甲辰旬
      // 如 壬辰 -> 8, 4 -> 4 - 8 + 12 = 8 -> 8为申, 所以为甲申旬
      const xun_dizhi_index =
        dz_index - tg_index < 0
          ? dz_index - tg_index + DZ_12.length
          : dz_index - tg_index;

      return (TG.甲 + DZ_12[xun_dizhi_index]) as Xun;
    }
  }

  // 拿到天干关系
  public getTgRelation(target: TG[]) {
    const res: {
      name: TG;
      index: number;
      relation: {
        name: TG;
        index: number;
        text: string;
      }[];
    }[] = [];

    // 从后向前
    for (let i = target.length - 1; i >= 0; i--) {
      const relation = [];
      for (let j = i - 1; j >= 0; j--) {
        // console.log(target[i], target[j]);
        const gx = this.checkTGRelation(target[i], target[j]);
        if (gx !== null) {
          relation.push({name: target[j], index: j, text: gx});
        }
      }
      if (relation.length) {
        res.push({
          name: target[i],
          index: i,
          relation,
        });
      }
    }

    return res;
  }

  // 校验天干关系
  private checkTGRelation(a: TG, b: TG) {
    const map = {
      [TG_GX.克]: [
        [TG.甲, TG.戊],
        [TG.乙, TG.己],
        [TG.丙, TG.庚],
        [TG.丁, TG.辛],
        [TG.戊, TG.壬],
        [TG.己, TG.癸],
        [TG.庚, TG.甲],
        [TG.辛, TG.乙],
        [TG.壬, TG.丙],
        [TG.癸, TG.丁],
      ],
      [TG_GX.合]: [
        [TG.甲, TG.己],
        [TG.乙, TG.庚],
        [TG.丙, TG.辛],
        [TG.丁, TG.壬],
        [TG.戊, TG.癸],
      ],
    };

    let res: string | null = null;
    for (let key in map) {
      map[key as TG_GX].forEach((gxItems, index) => {
        if (
          (gxItems[0] === a && gxItems[1] === b) ||
          (gxItems[0] === b && gxItems[1] === a)
        ) {
          if (key === TG_GX.克) {
            res = gxItems[0] + TG_GX.克 + gxItems[1];
          } else if (key === TG_GX.合) {
            const map_tg = [WX.土, WX.金, WX.水, WX.木, WX.火];
            res = gxItems[0] + gxItems[1] + TG_GX.合 + map_tg[index];
          }
        }
      });
    }
    return res;
  }

  // 拿到地支关系
  public getDzRelation(target: DZ[]) {
    const res: {
      name: DZ;
      index: number;
      end: number;
      relation: DZ_RELATION_ITEM[];
    }[] = [];

    // 从后向前
    for (let i = target.length - 1; i >= 0; i--) {
      const relation: DZ_RELATION_ITEM[] = [];
      for (let j = i - 1; j >= 0; j--) {
        // console.log(target[i], target[j]);
        // 2
        const gx = this.checkDZRelation(target[i], target[j], null, target);
        if (gx.length) {
          gx.forEach(({text, key, color}) => {
            relation.push({
              name: [target[j]],
              index: [j],
              start: j,
              key: key as DZ_GX,
              text,
              color,
            });
          });
        }
        // 3
        for (let k = j - 1; k >= 0; k--) {
          const gx3 = this.checkDZRelation(
            target[i],
            target[j],
            target[k],
            target,
          );
          if (gx3.length) {
            gx3.forEach(({text, key, color}) => {
              relation.push({
                name: [target[k], target[j]],
                start: Math.min(j, k),
                index: [k, j],
                key: key as DZ_GX,
                text,
                color,
              });
            });
          }

          const four = this.map_dzgx[DZ_GX.四合][0];

          if (
            four.includes(target[i]) &&
            four.includes(target[j]) &&
            four.includes(target[k])
          ) {
            const i_index = four.findIndex(fourItem => fourItem === target[i]);
            const j_index = four.findIndex(fourItem => fourItem === target[j]);
            const k_index = four.findIndex(fourItem => fourItem === target[k]);
            if (
              i_index === j_index ||
              j_index === k_index ||
              i_index === k_index
            ) {
              continue;
            }
            const other_index = 6 - i_index - j_index - k_index;
            const other = four[other_index];
            for (let p = k - 1; p >= 0; p--) {
              if (target[p] === other) {
                relation.push({
                  name: [target[k], target[j], target[k], target[p]],
                  start: Math.min(j, k, p),
                  index: [p, k, j],
                  key: DZ_GX.四合,
                  text:
                    this.map_dzgx[DZ_GX.四合][0].join('') + DZ_GX.四合 + '土局',
                  color: '',
                });
              }
            }
          }
        }
      }
      if (relation.length) {
        res.push({
          name: target[i],
          index: i,
          end: i,
          relation,
        });
      }
    }

    return res;
  }

  // 校验地支关系
  private checkDZRelation(
    a: DZ,
    b: DZ,
    c: DZ | null = null,
    target: DZ[] = [],
  ) {
    const res: {text: string; key: string; color: string}[] = [];
    const inputs = (c === null ? [a, b] : [a, b, c])
      .sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0))
      .join('');
    const map_3he = [WX.火, WX.水, WX.金, WX.木];

    for (let key in this.map_dzgx) {
      this.map_dzgx[key as DZ_GX].forEach((gxItems, index) => {
        if (
          key === DZ_GX.拱会 ||
          key === DZ_GX.拱合 ||
          key === DZ_GX.三刑之二
        ) {
          if (
            c === null &&
            a !== b &&
            gxItems.includes(a) &&
            gxItems.includes(b)
          ) {
            const rest = gxItems.filter(i => i !== a && i !== b);
            if (!target.includes(rest[0])) {
              if (key === DZ_GX.三刑之二) {
                res.push({
                  key,
                  text: `${a}${b}相刑`,
                  color: '',
                });
              } else {
                // console.log(key, a, b, index);
                res.push({
                  key,
                  // text: `${a}${b}${key[0]}${rest[0]}半三${key[1]}${map_3he[index]}局`,
                  text: `${a}${b}拱${key[1]}${map_3he[index]}局`,
                  color: '',
                });
              }
            }
          }
        } else if (
          gxItems.length === inputs.length &&
          [...gxItems]
            .sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0))
            .join('') === inputs
        ) {
          switch (key) {
            // TODO use color
            case DZ_GX.合:
              const map_he = [WX.土, WX.木, WX.火, WX.金, WX.水, WX.土];
              res.push({
                key,
                text: gxItems.join('') + DZ_GX.合 + map_he[index],
                color: '',
              });
              break;
            case DZ_GX.暗合:
              res.push({key, text: gxItems.join('') + DZ_GX.暗合, color: ''});
              break;
            case DZ_GX.冲:
              res.push({key, text: gxItems.join('') + DZ_GX.冲, color: ''});
              break;
            case DZ_GX.穿:
              const map_chuan = [
                '己土穿癸水',
                '癸水克丁火',
                '庚金克甲木',
                '木克土',
                '庚金克甲木',
                '丁火克辛金',
              ];
              res.push({
                key,
                text:
                  gxItems[0] +
                  DZ_GX.穿 +
                  gxItems[1] +
                  '(' +
                  map_chuan[index] +
                  ')',
                color: '',
              });
              break;
            case DZ_GX.刑:
              let text = '';
              if (a === b) {
                text = gxItems.join('') + '自刑';
              } else {
                text = gxItems.join('') + '相刑';
              }
              res.push({key, text, color: ''});
              break;
            case DZ_GX.破:
              res.push({key, text: gxItems.join('') + DZ_GX.破, color: ''});
              break;
            case DZ_GX.三刑:
              res.push({key, text: gxItems.join('') + DZ_GX.三刑, color: ''});
              break;
            case DZ_GX.三合:
              res.push({
                key,
                text: gxItems.join('') + DZ_GX.三合 + map_3he[index] + '局',
                color: '',
              });
              break;
            case DZ_GX.三会:
              res.push({
                key,
                text: gxItems.join('') + DZ_GX.三会 + map_3he[index] + '局',
                color: '',
              });
              break;
            case DZ_GX.四合:
              break;
          }
        }
      });
    }
    return res;
  }

  // 调侯
  public getTiaohou(bazi: JZ_60[]) {
    const [, yuezhu, rizhu] = bazi;

    const info = DH_MAP[rizhu[0] as TG][yuezhu[1] as DZ];
    return info.text;
  }

  // 得到五行的十神关系
  public getTenMapByWX(tenMap: Ten[]) {
    const wxTenMap = tenMap.reduce((r, i, index) => {
      const tg10Wuxing = [WX.木, WX.火, WX.土, WX.金, WX.水];
      const halfIndex = Math.floor(index / 2);

      const map = {
        [Ten.正官]: Ten2.官杀,
        [Ten.七杀]: Ten2.官杀,
        [Ten.正印]: Ten2.印绶,
        [Ten.偏印]: Ten2.印绶,
        [Ten.正财]: Ten2.财才,
        [Ten.偏财]: Ten2.财才,
        [Ten.食神]: Ten2.食伤,
        [Ten.伤官]: Ten2.食伤,
        [Ten.比肩]: Ten2.比劫,
        [Ten.劫财]: Ten2.比劫,
        [Ten.元男]: Ten2.日元,
        [Ten.元女]: Ten2.日元,
      };

      r[tg10Wuxing[halfIndex]] = map[i];
      return r;
    }, {} as Record<WX, Ten2>);
    return wxTenMap;
  }

  // 拿到各个五行的力量
  public getWxPower(bazi: JZ_60[], tenMap: Ten[]) {
    // console.log('bazi', bazi);
    const {tgs, dzs} = bazi.reduce(
      (r, i) => {
        r.tgs.push(i[0] as TG);
        r.dzs.push(i[1] as DZ);
        return r;
      },
      {tgs: [] as TG[], dzs: [] as DZ[]},
    );

    // console.log('tgs, dzs', tgs, dzs);

    const yueling = WuXing.getWuxing(bazi[1][1]) as WX;
    const yueMap = YueLinByWuxing[yueling];

    const res: sizhuDetailsItem[] = WuXing5.map(i => {
      const yuelingIndex = yueMap.findIndex(j => j === i);

      // 根气情况
      let tg_level = TG_LEVEL.无根气;
      let wx_opacity = 0.3;
      const now_genqi = this.map_wx_genqi[i];
      if (dzs.find(d => now_genqi[TG_LEVEL.本气根].includes(d))) {
        tg_level = TG_LEVEL.本气根;
        wx_opacity = 1;
      } else if (dzs.find(d => now_genqi[TG_LEVEL.中气根].includes(d))) {
        tg_level = TG_LEVEL.中气根;
        wx_opacity = 0.7;
      } else if (dzs.find(d => now_genqi[TG_LEVEL.余气根].includes(d))) {
        tg_level = TG_LEVEL.余气根;
        wx_opacity = 0.4;
      }

      let gen_dz: DZ[] = [];
      if (tg_level !== TG_LEVEL.无根气) {
        gen_dz = dzs
          .filter(d => now_genqi[TG_LEVEL.本气根].includes(d))
          .concat(dzs.filter(d => now_genqi[TG_LEVEL.中气根].includes(d)))
          .concat(dzs.filter(d => now_genqi[TG_LEVEL.余气根].includes(d)));
      }

      let dz_level_text = DZ_LEVEL[DZ_LEVEL.未透干];

      if (tgs.find(t => this.getWuxing(t) === i)) {
        dz_level_text = DZ_LEVEL[DZ_LEVEL.透干];
      }

      return {
        wx: i,
        // tg,
        // dz,
        isDeLing: yuelingIndex === 0 || yuelingIndex === 1,
        tg_level,
        tg_level_text: TG_LEVEL[tg_level],
        wx_opacity,
        tg_is_qg: tg_level === TG_LEVEL.本气根,
        // tg_color: WuXing.getColorByWuxing(tg),
        dz_level_text,
        is_tougan: dz_level_text === DZ_LEVEL[DZ_LEVEL.透干],
        gen_dz,
        isDeShi: false,
        deshi_text: [],
        power_number: 0,
        power_text: '',
        shishen: Ten2.日元,
      };
    });
    // console.log(JSON.stringify(res, null, 4));

    // 得势情况
    // 1. 地支关系
    const dz_gx = this.getDzRelation(bazi.map(i => i[1] as DZ));
    // console.log('dz_gx', JSON.stringify(dz_gx, null, 4));
    dz_gx.forEach(i => {
      i.relation.forEach(relation => {
        if (
          relation.text.includes(DZ_GX.三合) ||
          relation.text.includes(DZ_GX.三会) ||
          relation.text.includes(DZ_GX.四合)
        ) {
          const zhongshen = res.find(
            j => j.gen_dz.includes(relation.text[1] as DZ), // TODO index 1
          );
          if (zhongshen) {
            zhongshen.isDeShi = true;
            zhongshen.deshi_text.push(relation.text);
          }
        }
      });
    });
    // 2. 成众判断
    let {wu_numbs} = this.getWxNumbs(bazi.map(i => this.getWuxing(i[1]) as WX));
    // // arr_wu_nums = arr_wu_nums.filter(i => i);
    // // console.log('arr_wu_nums', arr_wu_nums);
    // // console.log('wu_numbs', wu_numbs);
    res.forEach(item => {
      if (item.gen_dz) {
        if (wu_numbs[item.wx] >= 2) {
          item.isDeShi = true;
          item.deshi_text.push(item.wx + '成众');
        }
      }
    });

    const wxTenMap = this.getTenMapByWX(tenMap);

    // console.log('yueMap', yueMap);
    console.log('res', JSON.stringify(res, null, 4));

    // 详细力量计算
    // 五行依次单独分析打分、最终再对比五个的分数得出各个的强度
    // 在给单个五行打分时，只需要关注自己，不需要考虑其他五行强弱状态对自身的影响
    let allScore = 0;
    res.forEach(i => {
      const score = this.getWxSingleScore(i.wx, bazi, res);
      i.power_number = score;
      allScore += score;
    });
    res.forEach(i => {
      const score = i.power_number;
      i.power_number = ((+score / allScore) * 100).toFixed(2);
      i.power_text =
        +score >= 180
          ? '极强'
          : +score >= 150
          ? '强盛'
          : +score >= 100
          ? '强'
          : +score >= 50
          ? '普通'
          : '弱';
      i.shishen = wxTenMap[i.wx];
      // console.log('', i.wx, i.score);
    });

    return res;
  }

  // 获取单个五行的分数
  private getWxSingleScore(wx: WX, bazi: JZ_60[], res: sizhuDetailsItem[]) {
    const getWuxing = this.getWuxing;
    // 1 月令
    function getYuelingScore() {
      const yuezhi = bazi[1][1];
      const yueling = WuXing.getWuxing(yuezhi) as WX;
      const yueMap = YueLinByWuxing[yueling];
      const map = [1.2, 1.1, 1, 0.75, 0.6];

      const index = yueMap.findIndex(i => i === wx);
      if (
        (DZ.丑 === yuezhi && wx === WX.水) ||
        (DZ.未 === yuezhi && wx === WX.火) ||
        (DZ.辰 === yuezhi && wx === WX.木)
      ) {
        return map[1];
      }
      return map[index];
    }
    const yuelingScore = getYuelingScore();

    // 2 结党、三合三会
    const dz_gx = this.getDzRelation(bazi.map(i => i[1] as DZ));
    // console.log('dz_gx', JSON.stringify(dz_gx, null, 4));
    let {wu_numbs} = this.getWxNumbs(bazi.map(i => this.getWuxing(i[1]) as WX));
    function getDeshiScore() {
      let score = 0;
      let has3 = false;
      // 1. 三合三会
      dz_gx.forEach(i => {
        i.relation.forEach(relation => {
          if (
            relation.text.includes(DZ_GX.三合) ||
            relation.text.includes(DZ_GX.三会)
          ) {
            const zhongshen = res.find(
              j => j.gen_dz.includes(relation.text[1] as DZ), // TODO index 1
            );
            if (zhongshen?.wx === wx) {
              has3 = true;
            }
          }
        });
      });
      // 2. 成众
      const wxNumbs = wu_numbs[wx];
      if (wxNumbs === 4) {
        score = 100;
      } else {
        if (has3) {
          score = wxNumbs >= 2 ? 100 : 75;
        } else {
          if (wxNumbs === 3) {
            score = 90;
          } else if (wxNumbs === 2) {
            score = 50;
          } else if (wxNumbs === 1) {
            score = 25;
          } else {
            const item = res.find(i => i.wx === wx);
            score =
              item?.tg_level === TG_LEVEL.中气根
                ? 7.5
                : item?.tg_level === TG_LEVEL.余气根
                ? 2.5
                : 0;
          }
        }
      }
      return score;
    }
    const deshiScore = getDeshiScore();

    // 3 天干关系、生克制化
    const tgs = bazi.map(i => i[0] as TG);
    const tg_gx = this.getTgRelation(tgs).reduce<[TG, TG][]>((r, i) => {
      i.relation.forEach(j => {
        if (j.text.includes('合')) {
          r.push([i.name, j.name]);
        }
      });
      return r;
    }, []);
    // console.log(JSON.stringify(tg_gx, null, 4));
    function getTgScore() {
      let score = 0;
      const same_tgs = tgs.filter(i => getWuxing(i) === wx);
      const ke_map = [WX.金, WX.火, WX.水, WX.土, WX.木];
      const ke_wx =
        ke_map[(ke_map.findIndex(i => i === wx) + 1) % ke_map.length];
      const sheng_map = [WX.金, WX.土, WX.火, WX.木, WX.水];
      const sheng_wx =
        sheng_map[(sheng_map.findIndex(i => i === wx) + 1) % sheng_map.length];
      // console.log('ke_wx', wx, ke_wx, sheng_wx);
      for (let i = 0; i < tgs.length; i++) {
        const tg_wx = getWuxing(tgs[i]);

        if (tg_wx === sheng_wx) {
          // 生
          score += 25;
          // console.log('生', tgs[i]);
        } else if (tg_gx.find(j => j.includes(tgs[i]))) {
          // 天干五合
          // console.log('天干五合', tgs[i]);
          if (tg_wx === wx) {
            if ([TG.乙, TG.丁, TG.辛, TG.癸].includes(tgs[i])) {
              score += 20;
            } else if (tgs[i] === TG.己) {
              score += 25;
            } else if (tgs[i] === TG.庚) {
              score += 30;
            } else {
              score += 25;
            }
          }
        } else if (tg_wx === ke_wx) {
          // 克
        } else if (tg_wx === wx) {
          score += 25;
          // 同
          // console.log('同', tgs[i]);
        }
      }
      if (same_tgs.length === 0) {
        // score = Math.floor(score / 2);
        score = 0;
      }
      // console.log('length', length)
      return score;
    }
    const tgScore = getTgScore();
    // 4 地支关系、刑冲合害
    const map_dz_wx = this.map_dz_wx;
    const map_dz_2_power = this.map_dz_2_power;
    const dzs = bazi.map(i => i[1] as DZ);

    function getDzScore() {
      let score = 0;

      const item = res.find(i => i.wx === wx);
      for (let i = 0; i < dzs.length; i++) {
        const target = dzs[i];
        if (item?.gen_dz.includes(target)) {
          // 是根气
          const genqi_ratio = map_dz_wx[target][wx]; // 根据根气等级计算比例
          let genqi_item_power = 0; // 当前根气在所有地支的实际力量
          // console.log('wx, target, genqi_ratio', wx, target, genqi_ratio);

          for (let j = 0; j < dzs.length; j++) {
            if (i === j) continue;

            const power = map_dz_2_power[target][dzs[j]][wx]; // 该五行在该地址的实际力量

            if (power) {
              genqi_item_power += power * 0.33;
            }
          }
          score += genqi_item_power * genqi_ratio; // 该五行的力量比例
          // console.log('score, genqi_power', score, genqi_item_power, genqi_ratio);
        }
      }

      score = Math.floor((score * 100) / 3);

      return score;
    }
    const dzScore = getDzScore();
    // 5 墓库
    const map_muku = this.map_muku;
    function getMkScore() {
      let score = 0;
      if (wx === WX.土) return score;
      const {tg, dz, mk} = map_muku[wx];
      if (dzs.includes(mk)) {
        if (tg.find(t => tgs.includes(t)) && dz.find(d => dzs.includes(d))) {
          // if (dz.find(d => close.includes(d))) {}
          score = 100;
        }
      }
      return score;
    }
    const mkScore = getMkScore();
    // 6 进气、退气

    const res_score = Math.round(
      yuelingScore * (tgScore + deshiScore + dzScore + mkScore / 4 / 2),
    );

    // 例子：甲木日主
    // 中间态
    //   强时失令、弱时得令
    //   根气、结党情况。只有弱根、皆无三合三会、皆无结党或旗鼓相当
    //   在地根气有损、但也有增强、或有强根被冲
    //   在天有官杀有印或食伤、有财无官、有食伤有比劫、有印有财来坏
    //   弱时有库、强时无库
    //   额外项 弱时进气、强时退气

    console.log('score', wx, res_score, {
      yuelingScore,
      deshiScore,
      tgScore,
      dzScore,
      mkScore,
    });
    return res_score;
  }

  // 获取五行数量数组
  public getWxNumbs(wxs: WX[]) {
    const wu_numbs = wxs.reduce(
      (r, i) => {
        r[i]++;
        return r;
      },
      {[WX.金]: 0, [WX.木]: 0, [WX.水]: 0, [WX.火]: 0, [WX.土]: 0},
    );
    const arr_wu_nums = Array(wxs.length)
      .fill(null)
      .map((_, index) => {
        const active = Object.keys(wu_numbs).filter(
          key => wu_numbs[key as WX] === index,
        );
        if (active.length) {
          return active;
        }
        return null;
      });
    // console.log('wu_numbs, arr_wu_nums', wu_numbs, arr_wu_nums);
    return {arr_wu_nums, wu_numbs};
  }
}

export const WuXing = new WuXingClass();

// 胎元
function getTaiyuan(yuegan: TG, yuezhi: DZ) {
  const yuegan_index = TG_10.indexOf(yuegan);
  const res_tg = TG_10[(yuegan_index + 1) % 10];

  const yuezhi_index = DZ_12.indexOf(yuezhi);
  const res_dz = DZ_12[(yuezhi_index + 3) % 12];

  return (res_tg + res_dz) as JZ_60;
}

// console.log(getTaiyuan(TG.辛, DZ.酉));
// console.log(getTaiyuan(TG.壬, DZ.申));

// 命宫
function calculateMingGong(
  // birthMonth: number,
  yuegan: TG,
  yuezhi: DZ,
  shizhi: DZ,
) {
  // 2 寅 1
  // 3 卯 2
  // 4 辰 3
  // ...
  // 0 子 11
  // 1 丑 12
  // const birthMonth = (DZ_12.indexOf(yuezhi) - 1 + 12) % 12;
  const birthMonth = DZ_SHEN_MING.indexOf(yuezhi) + 1;
  // 第一步：从子开始逆查到生月
  let mingGongIndex = 12 - birthMonth + 1;
  // console.log('命宫 step 1', DZ_12[mingGongIndex]);

  // 第二步：从生月支起生时，顺查到卯
  const mao_index = DZ_12.indexOf(DZ.卯);
  const shizhi_index = DZ_12.indexOf(shizhi);
  const step_move = (12 + mao_index - shizhi_index) % 12;
  // console.log('命宫 step_move', DZ_12[step_move]);
  mingGongIndex = (mingGongIndex + step_move) % 12;
  const mingGongDizhi = DZ_12[mingGongIndex];
  // console.log('命宫 step 2', mingGongBranch);

  // 第三步：确定命宫的天干
  const yuegan_index = TG_10.indexOf(yuegan);
  const yuezhi_index = DZ_SHEN_MING.indexOf(yuezhi);
  mingGongIndex = DZ_SHEN_MING.indexOf(mingGongDizhi);
  let mingGongStemIndex;
  // console.log('命宫', mingGongIndex > yuezhi_index ? '顺' : '逆');

  if (mingGongIndex > yuezhi_index) {
    // 顺查天干
    mingGongStemIndex = (yuegan_index + (mingGongIndex - yuezhi_index)) % 10;
  } else {
    // 逆查天干
    mingGongStemIndex =
      (yuegan_index - (yuezhi_index - mingGongIndex) + 10) % 10;
  }

  const mingGongTiangan = TG_10[mingGongStemIndex];

  return mingGongTiangan + mingGongDizhi;
}
// 示例
// console.log(calculateMingGong(7, TG.壬, DZ.申, DZ.卯)); // 计算命宫
// console.log(calculateMingGong(3, TG.甲, DZ.辰, DZ.申)); // 计算命宫
// console.log(calculateMingGong(3, TG.甲, DZ.辰, DZ.丑)); // 计算命宫

// 身宫
function calculateShenGong(
  // birthMonth: number,
  yuegan: TG,
  yuezhi: DZ,
  shizhi: DZ,
) {
  const birthMonth = (DZ_12.indexOf(yuezhi) - 1 + 12) % 12;

  // 第一步：从子开始顺查到生月
  let mingGongIndex = birthMonth - 1;
  // console.log('身宫 step 1', DZ_12[mingGongIndex]);

  // 第二步：从生月支起生时，逆查到酉
  const you_index = DZ_12.indexOf(DZ.酉);
  let shizhi_index = DZ_12.indexOf(shizhi);
  // console.log('身宫 shizhi_index', DZ_12[shizhi_index]);
  const step_move = (12 + shizhi_index - you_index) % 12;
  // console.log('身宫 step_move', DZ_12[step_move]);
  mingGongIndex = (mingGongIndex + step_move) % 12;
  let mingGongBranch = DZ_12[mingGongIndex];
  // console.log('身宫 step 2', mingGongBranch);

  // 第三步：确定命宫的天干
  let yuegan_index = TG_10.indexOf(yuegan);
  let yuezhi_index = DZ_12.indexOf(yuezhi);
  let mingGongStemIndex;
  console.log(
    '身宫',
    mingGongIndex > yuezhi_index ? '顺' : '逆',
    yuezhi_index - mingGongIndex,
  );

  if (mingGongIndex > yuezhi_index) {
    // 顺查天干
    mingGongStemIndex = (yuegan_index + (mingGongIndex - yuezhi_index)) % 10;
  } else {
    // 逆查天干
    mingGongStemIndex =
      (yuegan_index - (yuezhi_index - mingGongIndex) + 10) % 10;
  }

  let mingGongStem = TG_10[mingGongStemIndex];

  return mingGongStem + mingGongBranch;
}

// 示例
// console.log(calculateShenGong(7, TG.壬, DZ.申, DZ.卯)); // 计算身宫
// console.log(calculateShenGong(3, TG.甲, DZ.辰, DZ.丑)); // 计算身宫
// console.log(calculateShenGong(2, TG.壬, DZ.寅, DZ.午)); // 计算身宫

export function getTMS(bazi: JZ_60[]) {
  const [, [yuegan, yuezhi], , [, shizhi]] = bazi;
  const taiyuan = getTaiyuan(yuegan as TG, yuezhi as DZ);
  const minggong = calculateMingGong(yuegan as TG, yuezhi as DZ, shizhi as DZ);
  const shengong = calculateShenGong(yuegan as TG, yuezhi as DZ, shizhi as DZ);
  console.log(bazi, '胎命身', taiyuan, minggong, shengong);
}

// getTMS([JZ_60.壬子, JZ_60.癸卯, JZ_60.壬寅, JZ_60.丙午]);
