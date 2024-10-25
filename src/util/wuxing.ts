export enum TG_10 {
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
export enum DZ_12 {
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
  甲子 = TG_10.甲 + DZ_12.子,
  丙子 = TG_10.丙 + DZ_12.子,
  戊子 = TG_10.戊 + DZ_12.子,
  庚子 = TG_10.庚 + DZ_12.子,
  壬子 = TG_10.壬 + DZ_12.子,
  乙丑 = TG_10.乙 + DZ_12.丑,
  丁丑 = TG_10.丁 + DZ_12.丑,
  己丑 = TG_10.己 + DZ_12.丑,
  辛丑 = TG_10.辛 + DZ_12.丑,
  癸丑 = TG_10.癸 + DZ_12.丑,
  丙寅 = TG_10.丙 + DZ_12.寅,
  戊寅 = TG_10.戊 + DZ_12.寅,
  庚寅 = TG_10.庚 + DZ_12.寅,
  壬寅 = TG_10.壬 + DZ_12.寅,
  甲寅 = TG_10.甲 + DZ_12.寅,
  丁卯 = TG_10.丁 + DZ_12.卯,
  己卯 = TG_10.己 + DZ_12.卯,
  辛卯 = TG_10.辛 + DZ_12.卯,
  癸卯 = TG_10.癸 + DZ_12.卯,
  乙卯 = TG_10.乙 + DZ_12.卯,
  戊辰 = TG_10.戊 + DZ_12.辰,
  庚辰 = TG_10.庚 + DZ_12.辰,
  壬辰 = TG_10.壬 + DZ_12.辰,
  甲辰 = TG_10.甲 + DZ_12.辰,
  丙辰 = TG_10.丙 + DZ_12.辰,
  己巳 = TG_10.己 + DZ_12.巳,
  辛巳 = TG_10.辛 + DZ_12.巳,
  癸巳 = TG_10.癸 + DZ_12.巳,
  乙巳 = TG_10.乙 + DZ_12.巳,
  丁巳 = TG_10.丁 + DZ_12.巳,
  庚午 = TG_10.庚 + DZ_12.午,
  壬午 = TG_10.壬 + DZ_12.午,
  甲午 = TG_10.甲 + DZ_12.午,
  丙午 = TG_10.丙 + DZ_12.午,
  戊午 = TG_10.戊 + DZ_12.午,
  辛未 = TG_10.辛 + DZ_12.未,
  癸未 = TG_10.癸 + DZ_12.未,
  乙未 = TG_10.乙 + DZ_12.未,
  丁未 = TG_10.丁 + DZ_12.未,
  己未 = TG_10.己 + DZ_12.未,
  壬申 = TG_10.壬 + DZ_12.申,
  甲申 = TG_10.甲 + DZ_12.申,
  丙申 = TG_10.丙 + DZ_12.申,
  戊申 = TG_10.戊 + DZ_12.申,
  庚申 = TG_10.庚 + DZ_12.申,
  癸酉 = TG_10.癸 + DZ_12.酉,
  乙酉 = TG_10.乙 + DZ_12.酉,
  丁酉 = TG_10.丁 + DZ_12.酉,
  己酉 = TG_10.己 + DZ_12.酉,
  辛酉 = TG_10.辛 + DZ_12.酉,
  甲戌 = TG_10.甲 + DZ_12.戌,
  丙戌 = TG_10.丙 + DZ_12.戌,
  戊戌 = TG_10.戊 + DZ_12.戌,
  庚戌 = TG_10.庚 + DZ_12.戌,
  壬戌 = TG_10.壬 + DZ_12.戌,
  乙亥 = TG_10.乙 + DZ_12.亥,
  丁亥 = TG_10.丁 + DZ_12.亥,
  己亥 = TG_10.己 + DZ_12.亥,
  辛亥 = TG_10.辛 + DZ_12.亥,
  癸亥 = TG_10.癸 + DZ_12.亥,
}

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

export function getWuxing(text: TG_10 | DZ_12 | string) {
  const wuxingArr = [WuXing.金, WuXing.木, WuXing.水, WuXing.火, WuXing.土];
  if (text in TG_10) {
    const index = [
      TG_10.甲,
      TG_10.乙,
      TG_10.丙,
      TG_10.丁,
      TG_10.戊,
      TG_10.己,
      TG_10.庚,
      TG_10.辛,
      TG_10.壬,
      TG_10.癸,
    ].findIndex(i => i === text);
    const wuxingIndex = [1, 1, 3, 3, 4, 4, 0, 0, 2, 2][index];
    return wuxingArr[wuxingIndex];
  } else if (text in DZ_12) {
    const index = [
      DZ_12.子,
      DZ_12.丑,
      DZ_12.寅,
      DZ_12.卯,
      DZ_12.辰,
      DZ_12.巳,
      DZ_12.午,
      DZ_12.未,
      DZ_12.申,
      DZ_12.酉,
      DZ_12.戌,
      DZ_12.亥,
    ].findIndex(i => i === text);
    const wuxingIndex = [2, 4, 1, 1, 4, 3, 3, 4, 0, 0, 4, 2][index];
    return wuxingArr[wuxingIndex];
  }
  return '';
}

export class NaYin {
  static map: Record<string, JZ_60[]> = {
    海中金: [JZ_60.甲子, JZ_60.乙丑],
    炉中火: [JZ_60.丙寅, JZ_60.丁卯],
    大林木: [JZ_60.戊辰, JZ_60.己巳],
    路旁土: [JZ_60.庚午, JZ_60.辛未],
    剑锋金: [JZ_60.壬申, JZ_60.癸酉],
    山头火: [JZ_60.甲戌, JZ_60.乙亥],
    涧下水: [JZ_60.丙子, JZ_60.丁丑],
    城头土: [JZ_60.戊寅, JZ_60.己卯],
    白蜡金: [JZ_60.庚辰, JZ_60.辛巳],
    杨柳木: [JZ_60.壬午, JZ_60.癸未],
    泉中水: [JZ_60.甲申, JZ_60.乙酉],
    屋上土: [JZ_60.丙戌, JZ_60.丁亥],
    霹雳火: [JZ_60.戊子, JZ_60.己丑],
    松柏木: [JZ_60.庚寅, JZ_60.辛卯],
    长流水: [JZ_60.壬辰, JZ_60.癸巳],
    砂石金: [JZ_60.甲午, JZ_60.乙未],
    山下火: [JZ_60.丙申, JZ_60.丁酉],
    平地木: [JZ_60.戊戌, JZ_60.己亥],
    壁上土: [JZ_60.庚子, JZ_60.辛丑],
    金箔金: [JZ_60.壬寅, JZ_60.癸卯],
    灯头火: [JZ_60.甲辰, JZ_60.乙巳],
    天河水: [JZ_60.丙午, JZ_60.丁未],
    大驿土: [JZ_60.戊申, JZ_60.己酉],
    钗钏金: [JZ_60.庚戌, JZ_60.辛亥],
    桑柘木: [JZ_60.壬子, JZ_60.癸丑],
    大溪水: [JZ_60.甲寅, JZ_60.乙卯],
    沙中土: [JZ_60.丙辰, JZ_60.丁巳],
    天上火: [JZ_60.戊午, JZ_60.己未],
    石榴木: [JZ_60.庚申, JZ_60.辛酉],
    大海水: [JZ_60.壬戌, JZ_60.癸亥],
  };

  static getNayin(target: JZ_60) {
    let res = '';
    for (let name in this.map) {
      if (this.map[name].includes(target)) {
        res = name;
        break;
      }
    }
    return res;
  }
}
