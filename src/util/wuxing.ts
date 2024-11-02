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
  丙子 = TG.丙 + DZ.子,
  戊子 = TG.戊 + DZ.子,
  庚子 = TG.庚 + DZ.子,
  壬子 = TG.壬 + DZ.子,
  乙丑 = TG.乙 + DZ.丑,
  丁丑 = TG.丁 + DZ.丑,
  己丑 = TG.己 + DZ.丑,
  辛丑 = TG.辛 + DZ.丑,
  癸丑 = TG.癸 + DZ.丑,
  丙寅 = TG.丙 + DZ.寅,
  戊寅 = TG.戊 + DZ.寅,
  庚寅 = TG.庚 + DZ.寅,
  壬寅 = TG.壬 + DZ.寅,
  甲寅 = TG.甲 + DZ.寅,
  丁卯 = TG.丁 + DZ.卯,
  己卯 = TG.己 + DZ.卯,
  辛卯 = TG.辛 + DZ.卯,
  癸卯 = TG.癸 + DZ.卯,
  乙卯 = TG.乙 + DZ.卯,
  戊辰 = TG.戊 + DZ.辰,
  庚辰 = TG.庚 + DZ.辰,
  壬辰 = TG.壬 + DZ.辰,
  甲辰 = TG.甲 + DZ.辰,
  丙辰 = TG.丙 + DZ.辰,
  己巳 = TG.己 + DZ.巳,
  辛巳 = TG.辛 + DZ.巳,
  癸巳 = TG.癸 + DZ.巳,
  乙巳 = TG.乙 + DZ.巳,
  丁巳 = TG.丁 + DZ.巳,
  庚午 = TG.庚 + DZ.午,
  壬午 = TG.壬 + DZ.午,
  甲午 = TG.甲 + DZ.午,
  丙午 = TG.丙 + DZ.午,
  戊午 = TG.戊 + DZ.午,
  辛未 = TG.辛 + DZ.未,
  癸未 = TG.癸 + DZ.未,
  乙未 = TG.乙 + DZ.未,
  丁未 = TG.丁 + DZ.未,
  己未 = TG.己 + DZ.未,
  壬申 = TG.壬 + DZ.申,
  甲申 = TG.甲 + DZ.申,
  丙申 = TG.丙 + DZ.申,
  戊申 = TG.戊 + DZ.申,
  庚申 = TG.庚 + DZ.申,
  癸酉 = TG.癸 + DZ.酉,
  乙酉 = TG.乙 + DZ.酉,
  丁酉 = TG.丁 + DZ.酉,
  己酉 = TG.己 + DZ.酉,
  辛酉 = TG.辛 + DZ.酉,
  甲戌 = TG.甲 + DZ.戌,
  丙戌 = TG.丙 + DZ.戌,
  戊戌 = TG.戊 + DZ.戌,
  庚戌 = TG.庚 + DZ.戌,
  壬戌 = TG.壬 + DZ.戌,
  乙亥 = TG.乙 + DZ.亥,
  丁亥 = TG.丁 + DZ.亥,
  己亥 = TG.己 + DZ.亥,
  辛亥 = TG.辛 + DZ.亥,
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

export enum WuXing {
  金 = '金',
  木 = '木',
  水 = '水',
  火 = '火',
  土 = '土',
}

export const WuXing5 = [WuXing.金, WuXing.木, WuXing.水, WuXing.火, WuXing.土];

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

// 根据天干或地支得到对应的五行
export function getWuxing(text: TG | DZ | string) {
  const wuxingArr = WuXing5;
  if (text in TG) {
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

type Xun =
  | JZ_60.甲子
  | JZ_60.甲午
  | JZ_60.甲寅
  | JZ_60.甲戌
  | JZ_60.甲申
  | JZ_60.甲辰;
// 根据JZ_60得到对应的旬
export function getXun(target: JZ_60): Xun {
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
