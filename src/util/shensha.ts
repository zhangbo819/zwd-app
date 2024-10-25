import {DZ_12, JZ_60, TG_10} from './wuxing';

// TODO add more
enum ShenshaItem {
  天乙贵人 = '天乙贵人',
  太极贵人 = '太极贵人',
  天德贵人 = '天德贵人',
  月德贵人 = '月德贵人',
}

export default class Shensha {
  static Map = {
    [ShenshaItem.天乙贵人]: {
      text: `甲戊并牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，庚辛逢虎马，此是贵人方
    查法：以日干起贵人，地支见者为是。如乙酉甲申丙辰甲午，按丙丁猪鸡位查，丙见年支酉为贵人。
    四柱有贵人，遇事有人帮，遇危难之事有人解救，是逢凶化吉之星。故《三命通会》说：天乙者，乃天上之神，在紫微恒阖门外，与太乙并列，事天皇大帝，下游三辰，家在斗牛之次……较量天人之事，名曰天乙也，其神最尊贵，所至之处，一切凶杀隐然而避。
    《烛神经》还讲：天乙贵人遇生旺，则形貌轩昂，性灵颖悟，理义分明，不喜杂术，纯粹大器，身蕴道德，众人钦爱。死绝则执拗自是，喜游近贵。与劫煞并则貌有威，多谋足计。与官符并，则文翰飘逸，高谈雄辨。与建禄并，则文翰纯实，济惠广游，君子人也。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nz, , rz] = bazi;
        let res: false | ShenshaItem.天乙贵人 = false;
        // console.log('bazi, target', bazi, target);

        [nz[0] as TG_10, rz[0] as TG_10].forEach(i => {
          const target_dz = target[1] as DZ_12;
          switch (i) {
            case TG_10.甲:
            case TG_10.戊: {
              if ([DZ_12.丑, DZ_12.未].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG_10.乙:
            case TG_10.己: {
              if ([DZ_12.子, DZ_12.申].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG_10.丙:
            case TG_10.丁: {
              if ([DZ_12.亥, DZ_12.酉].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG_10.壬:
            case TG_10.癸: {
              if ([DZ_12.卯, DZ_12.巳].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG_10.庚:
            case TG_10.辛: {
              if ([DZ_12.寅, DZ_12.午].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
          }
        });

        return res;
      },
    },
    [ShenshaItem.太极贵人]: {
      text: '甲乙生人子午中，丙丁鸡兔定亨通，戊己两干临四季，庚辛寅亥禄丰隆，壬癸巳申偏喜美，值此应当福气钟，更须贵格来相扶，候封万户到三公。',
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nz, , rz] = bazi;
        let res: false | ShenshaItem.太极贵人 = false;
        // console.log('bazi, target', bazi, target);

        [nz[0] as TG_10, rz[0] as TG_10].forEach(i => {
          const target_dz = target[1] as DZ_12;
          switch (i) {
            case TG_10.甲:
            case TG_10.乙: {
              if ([DZ_12.子, DZ_12.午].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG_10.丙:
            case TG_10.丁: {
              if ([DZ_12.酉, DZ_12.卯].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG_10.戊:
            case TG_10.己: {
              if (
                [DZ_12.辰, DZ_12.戌, DZ_12.丑, DZ_12.未].includes(target_dz)
              ) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG_10.庚:
            case TG_10.辛: {
              if ([DZ_12.寅, DZ_12.亥].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG_10.壬:
            case TG_10.癸: {
              if ([DZ_12.申, DZ_12.巳].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
          }
        });

        return res;
      },
    },
    [ShenshaItem.天德贵人]: {
      text: `正月生者见丁，二月生者见申，三月生者见壬，四月生者见辛，五月生者见亥，六月生者见甲，七月生者见癸，八月生者见寅，九月生者见丙，十月生者见乙，十一月生者见巳，十二月生者见庚。 　
      凡四柱年月日时上见者为有天德贵人。 　天月德遇将星，名登科府。女命逢天月二德，嫁美夫生聪秀贵子，利产无凶。天月二德得吉神助者更吉，逢冲无害。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60, yinli: number[]) {
        const [, mm] = yinli;
        let res: false | ShenshaItem.天德贵人 = false;

        const map = [
          '',
          TG_10.丁,
          DZ_12.申,
          TG_10.壬,
          TG_10.辛,
          DZ_12.亥,
          TG_10.甲,
          TG_10.癸,
          DZ_12.寅,
          TG_10.丙,
          TG_10.乙,
          DZ_12.巳,
          TG_10.庚,
        ];

        // console.log('yinli', yinli, map[mm]);

        if (target[0] === map[mm] || target[1] === map[mm]) {
          res = ShenshaItem.天德贵人;
        }

        return res;
      },
    },
    [ShenshaItem.月德贵人]: {
      text: `寅午戌月生者见丙, 申子辰月生者见壬, 亥卯未月生者见甲, 巳酉丑月生者见庚。　
      月德贵人同天乙贵人一样，是一颗很好的吉星，命主在命局中逢上带有月德贵人，一生处世无忧，化险为夷，平生很少生病，不犯官刑。但需要注意的是，月德是勤勉敏慧之徳星，虽然命主身带此吉星，也需本身勤勉自助，才能在紧要关头获得帮助。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.月德贵人 = false;

        switch (yuezhi) {
          case DZ_12.寅:
          case DZ_12.午:
          case DZ_12.戌:
            if (target[0] === TG_10.丙) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ_12.申:
          case DZ_12.子:
          case DZ_12.辰:
            if (target[0] === TG_10.壬) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ_12.亥:
          case DZ_12.卯:
          case DZ_12.未:
            if (target[0] === TG_10.甲) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ_12.巳:
          case DZ_12.酉:
          case DZ_12.丑:
            if (target[0] === TG_10.庚) {
              res = ShenshaItem.月德贵人;
            }
            break;
        }

        return res;
      },
    },
  };

  static getData(
    bazi: [JZ_60, JZ_60, JZ_60, JZ_60],
    target: JZ_60,
    yinli: number[],
  ) {
    const res = [];
    for (let key in this.Map) {
      const ss = this.Map[key as ShenshaItem].rule(bazi, target, yinli) as
        | false
        | ShenshaItem;
      ss && res.push(ss);
    }
    return res;
  }
}
