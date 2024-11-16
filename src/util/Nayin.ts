import {DZ, JZ_60, TG, WuXing, ZhangSheng12} from './wuxing';

export enum NaYinName {
  海中金 = '海中金',
  炉中火 = '炉中火',
  大林木 = '大林木',
  路旁土 = '路旁土',
  剑锋金 = '剑锋金',
  山头火 = '山头火',
  涧下水 = '涧下水',
  城头土 = '城头土',
  白蜡金 = '白蜡金',
  杨柳木 = '杨柳木',
  泉中水 = '泉中水',
  屋上土 = '屋上土',
  霹雳火 = '霹雳火',
  松柏木 = '松柏木',
  长流水 = '长流水',
  砂石金 = '砂石金',
  山下火 = '山下火',
  平地木 = '平地木',
  壁上土 = '壁上土',
  金箔金 = '金箔金',
  覆灯火 = '覆灯火',
  天河水 = '天河水',
  大驿土 = '大驿土',
  钗钏金 = '钗钏金',
  桑柘木 = '桑柘木',
  大溪水 = '大溪水',
  沙中土 = '沙中土',
  天上火 = '天上火',
  石榴木 = '石榴木',
  大海水 = '大海水',
}

export default class NaYin {
  static map_nayin: Record<string, JZ_60[]> = {
    [NaYinName.海中金]: [JZ_60.甲子, JZ_60.乙丑],
    [NaYinName.炉中火]: [JZ_60.丙寅, JZ_60.丁卯],
    [NaYinName.大林木]: [JZ_60.戊辰, JZ_60.己巳],
    [NaYinName.路旁土]: [JZ_60.庚午, JZ_60.辛未],
    [NaYinName.剑锋金]: [JZ_60.壬申, JZ_60.癸酉],
    [NaYinName.山头火]: [JZ_60.甲戌, JZ_60.乙亥],
    [NaYinName.涧下水]: [JZ_60.丙子, JZ_60.丁丑],
    [NaYinName.城头土]: [JZ_60.戊寅, JZ_60.己卯],
    [NaYinName.白蜡金]: [JZ_60.庚辰, JZ_60.辛巳],
    [NaYinName.杨柳木]: [JZ_60.壬午, JZ_60.癸未],
    [NaYinName.泉中水]: [JZ_60.甲申, JZ_60.乙酉],
    [NaYinName.屋上土]: [JZ_60.丙戌, JZ_60.丁亥],
    [NaYinName.霹雳火]: [JZ_60.戊子, JZ_60.己丑],
    [NaYinName.松柏木]: [JZ_60.庚寅, JZ_60.辛卯],
    [NaYinName.长流水]: [JZ_60.壬辰, JZ_60.癸巳],
    [NaYinName.砂石金]: [JZ_60.甲午, JZ_60.乙未],
    [NaYinName.山下火]: [JZ_60.丙申, JZ_60.丁酉],
    [NaYinName.平地木]: [JZ_60.戊戌, JZ_60.己亥],
    [NaYinName.壁上土]: [JZ_60.庚子, JZ_60.辛丑],
    [NaYinName.金箔金]: [JZ_60.壬寅, JZ_60.癸卯],
    [NaYinName.覆灯火]: [JZ_60.甲辰, JZ_60.乙巳],
    [NaYinName.天河水]: [JZ_60.丙午, JZ_60.丁未],
    [NaYinName.大驿土]: [JZ_60.戊申, JZ_60.己酉],
    [NaYinName.钗钏金]: [JZ_60.庚戌, JZ_60.辛亥],
    [NaYinName.桑柘木]: [JZ_60.壬子, JZ_60.癸丑],
    [NaYinName.大溪水]: [JZ_60.甲寅, JZ_60.乙卯],
    [NaYinName.沙中土]: [JZ_60.丙辰, JZ_60.丁巳],
    [NaYinName.天上火]: [JZ_60.戊午, JZ_60.己未],
    [NaYinName.石榴木]: [JZ_60.庚申, JZ_60.辛酉],
    [NaYinName.大海水]: [JZ_60.壬戌, JZ_60.癸亥],
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
