import {DZ, JZ_60, TG, WuXing, ZhangSheng12} from './wuxing';

export default class NaYin {
  static map_nayin: Record<string, JZ_60[]> = {
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

  static map_zs12 = {
    [TG.甲]: [
      DZ.亥,
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
    ],
    [TG.乙]: [
      DZ.午,
      DZ.巳,
      DZ.辰,
      DZ.卯,
      DZ.寅,
      DZ.丑,
      DZ.子,
      DZ.亥,
      DZ.戌,
      DZ.酉,
      DZ.申,
      DZ.未,
    ],
    [TG.丙]: [
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
    ],
    [TG.丁]: [
      DZ.酉,
      DZ.申,
      DZ.未,
      DZ.午,
      DZ.巳,
      DZ.辰,
      DZ.卯,
      DZ.寅,
      DZ.丑,
      DZ.子,
      DZ.亥,
      DZ.戌,
    ],
    [TG.戊]: [
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
    ],
    [TG.己]: [
      DZ.酉,
      DZ.申,
      DZ.未,
      DZ.午,
      DZ.巳,
      DZ.辰,
      DZ.卯,
      DZ.寅,
      DZ.丑,
      DZ.子,
      DZ.亥,
      DZ.戌,
    ],
    [TG.庚]: [
      DZ.巳,
      DZ.午,
      DZ.未,
      DZ.申,
      DZ.酉,
      DZ.戌,
      DZ.亥,
      DZ.子,
      DZ.丑,
      DZ.寅,
      DZ.卯,
      DZ.辰,
    ],
    [TG.辛]: [
      DZ.子,
      DZ.亥,
      DZ.戌,
      DZ.酉,
      DZ.申,
      DZ.未,
      DZ.午,
      DZ.巳,
      DZ.辰,
      DZ.卯,
      DZ.寅,
      DZ.丑,
    ],
    [TG.壬]: [
      DZ.申,
      DZ.酉,
      DZ.戌,
      DZ.亥,
      DZ.子,
      DZ.丑,
      DZ.寅,
      DZ.卯,
      DZ.辰,
      DZ.巳,
      DZ.午,
      DZ.未,
    ],
    [TG.癸]: [
      DZ.卯,
      DZ.寅,
      DZ.丑,
      DZ.子,
      DZ.亥,
      DZ.戌,
      DZ.酉,
      DZ.申,
      DZ.未,
      DZ.午,
      DZ.巳,
      DZ.辰,
    ],
  };

  // 纳音
  static getNayin(target: JZ_60) {
    let res = '';
    for (let name in this.map_nayin) {
      if (this.map_nayin[name].includes(target)) {
        res = name;
        break;
      }
    }
    return res;
  }

  // 纳音五行
  static getNayinWuxing(target: JZ_60) {
    const nayin = this.getNayin(target);
    return WuXing.getWuxing(nayin[2]);
  }

  // 12长生
  static getXingYun(target: JZ_60, zhizhu: TG) {
    const arr = this.map_zs12[zhizhu];
    const index = arr.findIndex(i => i === target[1]);
    return ZhangSheng12[index];
  }
}
