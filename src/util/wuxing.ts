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

export const JQ_12 = [
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
].reduce((r, i, index) => {
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
  '刃',
  '禄',
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
  tgdz: JZ_60;
  tg: TG;
  dz: DZ;
  isDeLing: boolean; // 是否得令
  tg_is_qg: boolean; // 是否有强根
  tg_level_text: string; // 强根等级文字
  tg_opacity: number;
  tg_color: string;
  // tg_power: TG_POWER_LEVEL; // 天干力量
  dz_level_text: string; // 地支透干等级
  tg_is_tougan: boolean; // 是否透干
  isDeShi: boolean; // 是否得势
  gen_dz: DZ | null; // 天干的根对应的地支，null为无根
  deshi_text: string[];
};

function _exchangeGenqi(map: {
  [TG_LEVEL.禄]: DZ[];
  [TG_LEVEL.刃]: DZ[];
  [TG_LEVEL.中气根]: DZ[];
  [TG_LEVEL.余气根]: DZ[];
}) {
  const temp = map[TG_LEVEL.刃];
  return {
    ...map,
    [TG_LEVEL.禄]: temp,
    [TG_LEVEL.刃]: map[TG_LEVEL.禄],
  };
}

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

  map_tg_genqi = {
    [TG.甲]: {
      [TG_LEVEL.禄]: [DZ.寅],
      [TG_LEVEL.刃]: [DZ.卯],
      [TG_LEVEL.中气根]: [DZ.亥, DZ.辰],
      [TG_LEVEL.余气根]: [DZ.未],
    },
    get [TG.乙]() {
      return _exchangeGenqi(this[TG.甲]);
    },
    [TG.丙]: {
      [TG_LEVEL.禄]: [DZ.巳],
      [TG_LEVEL.刃]: [DZ.午],
      [TG_LEVEL.中气根]: [DZ.寅, DZ.未],
      [TG_LEVEL.余气根]: [DZ.戌],
    },
    get [TG.丁]() {
      return _exchangeGenqi(this[TG.丙]);
    },
    [TG.戊]: {
      [TG_LEVEL.禄]: [DZ.戌, DZ.辰],
      [TG_LEVEL.刃]: [DZ.丑, DZ.未],
      [TG_LEVEL.中气根]: [DZ.巳],
      [TG_LEVEL.余气根]: [DZ.寅, DZ.申],
    },
    get [TG.己]() {
      return _exchangeGenqi(this[TG.戊]);
    },
    [TG.庚]: {
      [TG_LEVEL.禄]: [DZ.申],
      [TG_LEVEL.刃]: [DZ.酉],
      [TG_LEVEL.中气根]: [DZ.戌],
      [TG_LEVEL.余气根]: [DZ.丑, DZ.巳],
    },
    get [TG.辛]() {
      return _exchangeGenqi(this[TG.庚]);
    },
    [TG.壬]: {
      [TG_LEVEL.禄]: [DZ.亥],
      [TG_LEVEL.刃]: [DZ.子],
      [TG_LEVEL.中气根]: [DZ.丑, DZ.申],
      [TG_LEVEL.余气根]: [DZ.辰],
    },
    get [TG.癸]() {
      return _exchangeGenqi(this[TG.壬]);
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
      relation: {
        name: DZ[];
        index: number[];
        start: number;
        text: string;
        color: string;
      }[];
    }[] = [];

    // 从后向前
    for (let i = target.length - 1; i >= 0; i--) {
      const relation: {
        name: DZ[];
        index: number[];
        start: number;
        text: string;
        color: string;
      }[] = [];
      for (let j = i - 1; j >= 0; j--) {
        // console.log(target[i], target[j]);
        // 2
        const gx = this.checkDZRelation(target[i], target[j], null, target);
        if (gx.length) {
          gx.forEach(({text, color}) => {
            relation.push({
              name: [target[j]],
              index: [j],
              start: j,
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
            gx3.forEach(({text, color}) => {
              relation.push({
                name: [target[k], target[j]],
                start: Math.min(j, k),
                index: [k, j],
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
    const res: {text: string; color: string}[] = [];
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
                  text: `${a}${b}相刑`,
                  color: '',
                });
              } else {
                // console.log(key, a, b, index);
                res.push({
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
                text: gxItems.join('') + DZ_GX.合 + map_he[index],
                color: '',
              });
              break;
            case DZ_GX.暗合:
              res.push({text: gxItems.join('') + DZ_GX.暗合, color: ''});
              break;
            case DZ_GX.冲:
              res.push({text: gxItems.join('') + DZ_GX.冲, color: ''});
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
              res.push({text, color: ''});
              break;
            case DZ_GX.破:
              res.push({text: gxItems.join('') + DZ_GX.破, color: ''});
              break;
            case DZ_GX.三刑:
              res.push({text: gxItems.join('') + DZ_GX.三刑, color: ''});
              break;
            case DZ_GX.三合:
              res.push({
                text: gxItems.join('') + DZ_GX.三合 + map_3he[index] + '局',
                color: '',
              });
              break;
            case DZ_GX.三会:
              res.push({
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

  // 根据原始四柱拿到更全的四柱数据
  public getSiZhuDetails(bazi: JZ_60[]) {
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

    const res: sizhuDetailsItem[] = bazi.map((i, index) => {
      const tg = i[0] as TG;
      const dz = i[1] as DZ;

      const yueling = WuXing.getWuxing(bazi[1][1]) as WX;
      const nowTgWuxing = WuXing.getWuxing(bazi[index][0]) as WX;
      const yuelingIndex = YueLinByWuxing[yueling].findIndex(
        j => j === nowTgWuxing,
      );

      // 根气情况
      let tg_level = TG_LEVEL.无根气;
      let tg_level_text = TG_LEVEL[TG_LEVEL.无根气];
      let tg_opacity = 0.3;
      let tg_is_qg = false;
      const tg_genqi = this.map_tg_genqi[tg];
      // console.log('tg_genqi', tg, tg_genqi,);
      if (dzs.find(d => tg_genqi[TG_LEVEL.禄].includes(d))) {
        tg_level = TG_LEVEL.禄;
        tg_level_text = TG_LEVEL[TG_LEVEL.本气根];
        tg_opacity = 1;
        tg_is_qg = true;
      } else if (dzs.find(d => tg_genqi[TG_LEVEL.刃].includes(d))) {
        tg_level = TG_LEVEL.刃;
        tg_level_text = TG_LEVEL[TG_LEVEL.本气根];
        tg_opacity = 1;
        tg_is_qg = true;
      } else if (dzs.find(d => tg_genqi[TG_LEVEL.中气根].includes(d))) {
        tg_level = TG_LEVEL.中气根;
        tg_level_text = TG_LEVEL[tg_level];
        tg_opacity = 7;
      } else if (dzs.find(d => tg_genqi[TG_LEVEL.余气根].includes(d))) {
        tg_level = TG_LEVEL.余气根;
        tg_level_text = TG_LEVEL[tg_level];
        tg_opacity = 0.5;
      }

      let gen_dz: null | DZ = null;
      if (tg_level !== TG_LEVEL.无根气) {
        gen_dz = dzs.find(d => tg_genqi[tg_level].includes(d)) || null;
      }

      let dz_level_text = DZ_LEVEL[DZ_LEVEL.未透干];
      let tg_is_tougan = false;

      if (tgs.find(t => this.getWuxing(t) === this.getWuxing(dz))) {
        dz_level_text = DZ_LEVEL[DZ_LEVEL.透干];
        tg_is_tougan = true;
      }

      return {
        tgdz: i,
        tg,
        dz,
        isDeLing: yuelingIndex === 0 || yuelingIndex === 1,
        tg_level_text,
        tg_opacity,
        tg_is_qg,
        tg_color: WuXing.getColorByWuxing(tg),
        dz_level_text,
        tg_is_tougan,
        gen_dz,
        isDeShi: false,
        deshi_text: [],
      };
    });

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
          const zhongshen = res.find(j => j.gen_dz === relation.text[1]); // TODO index 1
          if (zhongshen) {
            zhongshen.isDeShi = true;
            zhongshen.deshi_text.push(relation.text);
          }
        }
      });
    });
    // 2. 成众判断
    const {wu_numbs} = this.getWxNumbs(
      res.map(i => this.getWuxing(i.dz) as WX),
    );
    // console.log('wu_numbs', wu_numbs);
    res.forEach(item => {
      if (item.gen_dz) {
        const wx = this.getWuxing(item.tg) as WX;
        if (wu_numbs[wx] >= 2) {
          item.isDeShi = true;
          item.deshi_text.push(wx + '成众');
        }
      }
    });

    return res;
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
    const arr_wu_nums = Array(8)
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

  // 地支力量
  public getDzPower(bazi: JZ_60[], _tenMap: Ten[]) {
    const dzs = bazi.map(i => i[1] as DZ);
    const wx_dz = dzs.map(i => this.getWuxing(i) as WX);
    const {wu_numbs} = this.getWxNumbs(wx_dz);

    let max_num = 0;
    let max_wx = WX.金;
    Object.keys(wu_numbs).forEach(i => {
      if (wu_numbs[i as WX] > max_num) {
        max_num = wu_numbs[i as WX];
        max_wx = i as WX;
      }
    });

    console.log('wu_numbs', wu_numbs, max_wx);

    const [, [, yueling]] = bazi;
    const yueling_wuxing = this.getWuxing(yueling) as WX;
    // console.log('yueling_wuxing', yueling_wuxing);

    // console.log('tenMap', tenMap);
    const yuelingMap = YueLinByWuxing[yueling_wuxing];
    // console.log('yuelingMap', yuelingMap);

    const max_yue_index = yuelingMap.findIndex(i => i === yueling_wuxing);
    // console.log('yuelingMap', yuelingMap, max_yue_index);

    if (wu_numbs[max_wx] === 4) {
      // get
    } else if (wu_numbs[max_wx] === 3) {
      if (max_yue_index === 0) {
        // get
      } else {
        // this.map_dzgx[DZ_GX.三会]
      }
    } else if (wu_numbs[max_wx] === 2) {
      if (max_yue_index === 0) {
        // get
      } else {
        // this.map_dzgx[DZ_GX.三会]
      }
    } else {
    }
  }
}

export const WuXing = new WuXingClass();

// type Command = {
//   monthBranch: string; // 月令地支
//   timeBranch: string; // 时辰地支
// };

// const EARTHLY_BRANCHES = [
//   '子',
//   '丑',
//   '寅',
//   '卯',
//   '辰',
//   '巳',
//   '午',
//   '未',
//   '申',
//   '酉',
//   '戌',
//   '亥',
// ];

// /**
//  * 根据月令和时辰推算命宫
//  * @param command 月令和时辰地支
//  * @returns 命宫的地支
//  */
// function calculateMingGongFromCommand(command: Command): string {
//   const {monthBranch, timeBranch} = command;

//   // 获取月令和时辰地支的索引
//   const monthIndex = EARTHLY_BRANCHES.indexOf(monthBranch);
//   const timeIndex = EARTHLY_BRANCHES.indexOf(timeBranch);

//   if (monthIndex === -1 || timeIndex === -1) {
//     throw new Error('输入的地支不正确，请检查');
//   }

//   // 计算命宫地支
//   const mingGongIndex = (monthIndex + timeIndex) % 12;

//   return EARTHLY_BRANCHES[mingGongIndex];
// }

// // 示例
// const exampleCommand: Command = {
//   monthBranch: '申',
//   timeBranch: '卯',
// };

// console.log(calculateMingGongFromCommand(exampleCommand));
