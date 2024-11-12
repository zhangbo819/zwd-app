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

// 根据天干或地支得到对应的五行
export function getWuxing(text: TG | DZ | WX | string) {
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

export function getColorByWuxing(text: TG | DZ | string | WX) {
  const ColorsMap: Record<WX | string, any> = {
    [WX.木]: '#4CAF50',
    [WX.火]: '#F44336',
    [WX.土]: '#795548',
    [WX.金]: '#FDD835',
    [WX.水]: '#2196F3',
  };
  return ColorsMap[getWuxing(text)];
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
  三合 = '三合',
  三会 = '三会',
}

class WuXingClass {
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
      relation: {
        name: DZ | DZ[];
        index: number | number[];
        text: string;
      }[];
    }[] = [];

    // 从后向前
    for (let i = target.length - 1; i >= 0; i--) {
      const relation: {
        name: DZ | DZ[];
        index: number | number[];
        text: string;
      }[] = [];
      for (let j = i - 1; j >= 0; j--) {
        // console.log(target[i], target[j]);
        // 2
        const gx = this.checkDZRelation(target[i], target[j]);
        if (gx.length) {
          gx.forEach(gxItem => {
            relation.push({name: target[j], index: j, text: gxItem});
          });
        }
        // 3
        for (let k = j - 1; k >= 0; k--) {
          const gx3 = this.checkDZRelation(target[i], target[j], target[k]);
          if (gx3.length) {
            gx3.forEach(gx3Item => {
              relation.push({
                name: [target[j], target[k]],
                index: [j, k],
                text: gx3Item,
              });
            });
          }
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

  // 校验地支关系
  private checkDZRelation(a: DZ, b: DZ, c: DZ | null = null) {
    const map = {
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
        [DZ.子, DZ.午],
        [DZ.卯, DZ.酉],
        [DZ.寅, DZ.申],
        [DZ.巳, DZ.亥],
        [DZ.辰, DZ.戌],
        [DZ.丑, DZ.未],
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
      [DZ_GX.三合]: [
        [DZ.寅, DZ.午, DZ.戌],
        [DZ.申, DZ.子, DZ.辰],
        [DZ.巳, DZ.酉, DZ.丑],
        [DZ.亥, DZ.卯, DZ.未],
      ],
      [DZ_GX.三会]: [
        [DZ.寅, DZ.卯, DZ.辰],
        [DZ.巳, DZ.午, DZ.未],
        [DZ.申, DZ.酉, DZ.戌],
        [DZ.亥, DZ.子, DZ.丑],
      ],
      [DZ_GX.三刑]: [
        [DZ.丑, DZ.未, DZ.戌], //（土力量增加，藏干互毁）
        [DZ.寅, DZ.巳, DZ.申], //（本气互毁）
      ],
    };

    const res: string[] = [];
    const inputs = (c === null ? [a, b] : [a, b, c])
      .sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0))
      .join('');
    for (let key in map) {
      map[key as DZ_GX].forEach((gxItems, index) => {
        if (
          gxItems.length === inputs.length &&
          gxItems.sort((x, y) => x.charCodeAt(0) - y.charCodeAt(0)).join('') ===
            inputs
        ) {
          switch (key) {
            case DZ_GX.合:
              const map_he = [WX.土, WX.木, WX.火, WX.金, WX.水, WX.土];
              res.push(gxItems[0] + gxItems[1] + DZ_GX.合 + map_he[index]);
              break;
            case DZ_GX.暗合:
              res.push(gxItems[0] + gxItems[1] + DZ_GX.暗合);
              break;
            case DZ_GX.冲:
              res.push(gxItems[0] + gxItems[1] + DZ_GX.冲);
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
              res.push(
                gxItems[0] +
                  DZ_GX.穿 +
                  gxItems[1] +
                  '(' +
                  map_chuan[index] +
                  ')',
              );
              break;
            case DZ_GX.刑:
              if (a === b) {
                res.push(gxItems[0] + gxItems[1] + '自刑');
              } else {
                res.push(gxItems[0] + gxItems[1] + '相刑');
              }
              break;
            case DZ_GX.破:
              res.push(gxItems[0] + gxItems[1] + DZ_GX.破);
              break;
            case DZ_GX.三合:
              const map_3he = [WX.火, WX.水, WX.金, WX.木];
              res.push(a + b + c + DZ_GX.三合 + map_3he[index] + '局');
              break;
            case DZ_GX.三会:
              const map_3hui = [WX.木, WX.火, WX.金, WX.水];
              res.push(a + b + c + DZ_GX.三会 + map_3hui[index] + '局');
              break;
            case DZ_GX.三刑:
              res.push(a + b + c + DZ_GX.三刑);
          }
        }
      });
    }
    return res;
  }
}

export const WuXing = new WuXingClass();
