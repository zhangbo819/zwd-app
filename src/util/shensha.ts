import {DZ_12, JZ_60, TG_10} from './wuxing';

// TODO add more
export enum ShenshaItem {
  天乙贵人 = '天乙贵人',
  天德贵人 = '天德贵人',
  月德贵人 = '月德贵人',
  天德合 = '天德合',
  月德合 = '月德合',
  天赦日 = '天赦日',
  禄神 = '禄神',
  驿马 = '驿马',
  太极贵人 = '太极贵人',
  将星 = '将星',
  //   学堂 = '学堂',
  //   词馆 = '词馆',
  国印 = '国印',
  三奇贵人 = '三奇贵人',
  文昌贵人 = '文昌贵人',
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
    [ShenshaItem.天德合]: {
      text: `寅月壬。卯月巳。辰月丁。巳月丙。午月寅。未月己。申月戊。酉月亥。戌月辛。亥月庚。子月申。丑月乙。
        性格好，主化险为夷，不犯刑律，不遇危难。（天德的一半效果）。天德与天干五合或地支六合者即为天德合，如正月见丁为天德，壬与丁合，壬即为天德合，类推。如没有天德贵人，有天德合也起到天德贵人的作用。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yz] = bazi;
        const [, yuezhi] = yz;
        let res: false | ShenshaItem.天德合 = false;

        switch (yuezhi) {
          case DZ_12.寅:
            if (target[0] === TG_10.壬) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.卯:
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.辰:
            if (target[0] === TG_10.丁) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.巳:
            if (target[0] === TG_10.丙) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.午:
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.未:
            if (target[0] === TG_10.己) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.申:
            if (target[0] === TG_10.戊) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.酉:
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.戌:
            if (target[0] === TG_10.辛) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.亥:
            if (target[0] === TG_10.庚) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.子:
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ_12.丑:
            if (target[0] === TG_10.乙) {
              res = ShenshaItem.天德合;
            }
            break;
        }
        return res;
      },
    },
    [ShenshaItem.月德合]: {
      text: `寅午戌见辛，申子辰见丁，巳酉丑见乙，亥卯未见己。
        性格好，主化险为夷，不犯刑律，不遇危难。（月德的一半效果）。月德合就是与月德相合的天干，如丙火与辛金合，我们就说寅午戌月德合辛，即寅午戌月的辛干。月德合凡遇预测之事一般都会达到比较和谐的程度。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.月德合 = false;

        switch (yuezhi) {
          case DZ_12.寅:
          case DZ_12.午:
          case DZ_12.戌:
            if (target[0] === TG_10.辛) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ_12.申:
          case DZ_12.子:
          case DZ_12.辰:
            if (target[0] === TG_10.丁) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ_12.亥:
          case DZ_12.卯:
          case DZ_12.未:
            if (target[0] === TG_10.己) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ_12.巳:
          case DZ_12.酉:
          case DZ_12.丑:
            if (target[0] === TG_10.乙) {
              res = ShenshaItem.月德合;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.天赦日]: {
      text: `春戊寅, 夏甲午, 秋戊申, 冬甲子。
        化险为夷之神，可解危难，处世无忧，对犯有刑事信息的人尤为有利。天赦是化险为夷之星，能解人危难。尤其对犯法之人，有宽大处理之可能。纵有过错也可得到宽恕或赦免。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.天赦日 = false;

        switch (yuezhi) {
          case DZ_12.寅:
          case DZ_12.卯:
          case DZ_12.辰:
            if (target === JZ_60.戊寅) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ_12.巳:
          case DZ_12.午:
          case DZ_12.未:
            if (target === JZ_60.甲午) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ_12.申:
          case DZ_12.酉:
          case DZ_12.戌:
            if (target === JZ_60.戊申) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ_12.亥:
          case DZ_12.子:
          case DZ_12.丑:
            if (target === JZ_60.甲子) {
              res = ShenshaItem.天赦日;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.禄神]: {
      text: `甲禄寅。乙禄卯。丙禄巳。丁禄午。戊禄巳。己禄午。庚禄申。辛禄酉。壬禄亥。癸禄子。
        日主得根有利，身体健康，充满信心。身旺见禄，喜见财官。身弱喜禄而逢死绝遭刑冲，又逢吉祥救应，家运可能不太顺利，容易影响到置产、家人之间的关系；同时在求财方面也较为困难。
见年神篇“元禄神”。主身体健康，充满信心，记忆力强，勤劳致富，一生少闲，性刚，容易得罪人。武富、武贵，技术研究方面独具慧眼。
在年月为“建禄”，四柱天干要见财官，“建禄生是月，财官喜透天”也。透财，富。透官，贵。
在时为“归禄”，不喜官星，“日禄归时没官星，号曰青云得路。”主少年发达。“建禄”主长辈之荫，主少年时代幸福。若逢卫破，家运可能不太顺利。身（日主）若太旺，不屑于祖辈留有的家产，不愿坐享现成之福，会自己在外乡创事业。若逢偏印，即破禄而无禄。
在日为“专禄”（甲寅、乙卯、庚申、辛酉四日），主会享受，爱过阔绰的生活。要有羊刃来保护（因禄柔、刃刚），若被合去则无禄。被冲不利丈夫或者妻子的健康和运势。
“归禄”喜羊刃、身旺、财星。不但不会追求物质享受，反而勤奋努力。逢合变无禄，逢冲，不利子女的健康和运势。“归禄”见食神、财星，多主名利双收。
八字如果有禄有财：丰盈一生。八字如果有禄无财：祖先庇荫。八字若无禄有财：白手起家。大运流年与禄神冲克：可能有意外危险，难聚财，健康上也要注意。
女命禄神与桃花同柱：为异性多付出。禄刃同柱：不利钱财与姻缘。
禄神在空亡之地：称为『财库落空』，一生做事只怕是有劳无功，虚名虚利。禄神逢冲：叫做破禄，就是一般常听所谓『破财』。大运流年逢之，不可轻言忽视，小心意外事故。
八字有禄神入命，予人有财有富之感，一生重视钱财，有金钱观念。精神力超强，脚踏实地，多见努力。企划技术能力强，个性稍见内向，较不善交际，能得人望。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.禄神 = false;

        switch (rigan) {
          case TG_10.甲:
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.乙:
            if (target[1] === DZ_12.卯) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.丙:
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.丁:
            if (target[1] === DZ_12.午) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.戊:
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.己:
            if (target[1] === DZ_12.午) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.庚:
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.辛:
            if (target[1] === DZ_12.酉) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.壬:
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG_10.癸:
            if (target[1] === DZ_12.子) {
              res = ShenshaItem.禄神;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.驿马]: {
      text: `申子辰马在寅, 寅午戌马在申, 巳酉丑马在亥, 亥卯未马在巳。
        升迁,调动,走动,迁移,奔波,换工作,出国等。贵人驿马多升擢,常人驿马多奔波。代表这个人一生走动多、远行、会出远门。一生驿马运重，即使是在一个地方，也经常会忙个不停，这些都是驿马的作用。
驿马坐旺地：利禄亨通。驿马为喜用：心高气爽，动则有喜。四柱财官有力，真好马也。
驿马为喜用，自坐财官地：岁运逢财官星，主升迁。驿马为忌且逢冲：是非波动。吉神坐马：有乔迁之喜或顺动之利。凶神坐马：奔走四方，忙于生计。驿马与财星同柱：为喜则财源广进；为忌则奔走四方。驿马与财官、贵人同柱：才是真马。驿马与正官同柱：为喜者风儒雅士，为忌者性格开放。
驿马坐七杀，带羊刃或劫煞：小心突发事故。驿马逢冲，带羊刃、元辰、空亡：注意人身意外。驿马见合：有牵制之虑。驿马坐死墓绝、羊刃、劫煞：做事有始无终，飘泊无定。驿马自坐绝地：凶，尤岁运再逢冲。驿马自坐死、绝方：做事少成。桃花坐马：为情爱受难。驿马坐劫煞或羊刃：劳碌奔波，心性多冲动；尤岁运再逢。
劫煞坐马：容易有意外危险。马星生财者：有名扬之机。男命，驿马自坐财星：娶他乡富女。女命，驿马与天乙贵人同柱：不利姻缘。女命，驿马坐独官：夫为有用人，儿孙亦同。女命，驿马自同：嫁远乡。
驿马逢冲：心猿意马，奔波，忙碌，乃天涯之客。流年驿马逢冲：此年多奔波，有迁异职动之机，并多见出国或远行。驿马冲动，若带羊刃、血支等神煞，应该小心行事。
命带驿马的人比较闲不下来，经常总是把自己弄得很忙，所以古人说『驿马入命，心不安闲』即是此谓。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [, nianzhi] = nianzhu;
        const [, rizhi] = rizhu;
        let res: false | ShenshaItem.驿马 = false;

        console.log(
          'target',
          target,
          [DZ_12.巳, DZ_12.酉, DZ_12.丑].some(
            i => i === nianzhi || i === rizhi,
          ),
        );

        switch (true) {
          case [DZ_12.申, DZ_12.子, DZ_12.辰].includes(nianzhi as DZ_12):
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.寅, DZ_12.午, DZ_12.戌].includes(nianzhi as DZ_12):
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.巳, DZ_12.酉, DZ_12.丑].includes(nianzhi as DZ_12):
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.亥, DZ_12.卯, DZ_12.未].includes(nianzhi as DZ_12):
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.驿马;
            }
            break;
        }
        switch (true) {
          case [DZ_12.申, DZ_12.子, DZ_12.辰].includes(rizhi as DZ_12):
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.寅, DZ_12.午, DZ_12.戌].includes(rizhi as DZ_12):
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.巳, DZ_12.酉, DZ_12.丑].includes(rizhi as DZ_12):
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.驿马;
            }
            break;
          case [DZ_12.亥, DZ_12.卯, DZ_12.未].includes(rizhi as DZ_12):
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.驿马;
            }
            break;
        }

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
    [ShenshaItem.将星]: {
      text: `子日子。丑日酉。寅日午。卯日卯。辰日子。巳日酉。午日午。未日卯。申日子。酉日酉。戌日午。亥日卯。
        将星入命：能文能武，一生有权柄威信，具有组织领导能力，会见掌权之机。将星为真格：须正官、七杀有力，或印星有力。将星入命，岁运为财官：大权在握，利禄亨通。
将星与亡神同现：才智过人，深具谋略，会是栋梁之才。将星无破：财、官运亨通。将星三合为忌神：奔波多劳。将星逢冲克，权利事职有变动。
将星跟权力地位有关，命带将星的人，给人不可侵犯的感觉，很自然的散发出一种无形、难以言喻的权威感，让人望而生敬。很多做官的人或工商高层主管八字里面大都带有将星，所以也称为将权，八字带有将星，称做将权入命。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [, rizhi] = rizhu;
        let res: false | ShenshaItem.将星 = false;

        switch (rizhi) {
          case DZ_12.寅:
          case DZ_12.午:
          case DZ_12.戌:
            if (target[1] === DZ_12.午) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ_12.申:
          case DZ_12.子:
          case DZ_12.辰:
            if (target[1] === DZ_12.子) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ_12.亥:
          case DZ_12.卯:
          case DZ_12.未:
            if (target[1] === DZ_12.卯) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ_12.巳:
          case DZ_12.酉:
          case DZ_12.丑:
            if (target[1] === DZ_12.酉) {
              res = ShenshaItem.将星;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.国印]: {
      text: `甲见戌, 乙见亥, 丙见丑,丁见寅,戊见丑, 己见寅, 庚见辰, 辛见巳。壬见未, 癸见申。
          正直忠信，若生旺得其他吉神辅助，可得掌印之权。四柱带国印者， 主人诚实可靠，严守清规， 照章行事，办事公道。为人和悦，礼义仁慈，气质轩昂。如国印逢生旺，有其它吉星相助，不逢冲破克害，不仅可以有掌印之能，可亦为官掌实权。
        亦主一生工作，生活环境多动，若流年岁运逢之即主工作变动或家庭搬迁。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [niangan] = nianzhu;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.国印 = false;

        switch (true) {
          case [niangan, rigan].includes(TG_10.甲):
            if (target[1] === DZ_12.戌) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.乙):
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.丙):
            if (target[1] === DZ_12.丑) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.丁):
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.戊):
            if (target[1] === DZ_12.丑) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.己):
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.庚):
            if (target[1] === DZ_12.辰) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.辛):
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.壬):
            if (target[1] === DZ_12.未) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG_10.癸):
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.国印;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.三奇贵人]: {
      text: `天上三奇甲戊庚，地下三奇乙丙丁，人中三奇壬癸辛。
          胸怀坦荡，博学多才。（与天乙并用，则建功立业，功勋卓著。居空亡，则为隐士高人。凡命遇三奇，主人精神异常，襟怀卓越，好奇尚大，博学多能。
学艺专精、精力旺盛、脑力灵敏、机智灵巧、易成专业技能人才、如工程师、信息家、计算机软件设计、属技能专精之人。
三奇在什么条件下才能真正为奇? 无非是:
（一）顺布而排。即，年乙月丙日丁,或月乙日丙时丁。
（二）三奇必须得时得地, 不得死绝。
（三）三奇必有吉星贵人, 如天乙, 天月德贵人扶助。
（四）带元辰, 桃花, 天罗地网为无用。三奇具有特殊奇材的作用。
带天乙贵人者, 勋业超群。带天月二德者,不犯意外事故。带三合入局者,国家柱石。带官符劫煞者, 器识宏远。带空生旺者,脱尘离俗,不因有钱有势而惑乱，不因武力或权势而胁迫屈服。
三奇必须命局配合得体, 并有其它贵人吉星扶持才有荣华福寿,如果只有三奇无贵地, 命局组合不好, 势必钱财不丰，容易受欺负。即使命局较清粹,若三奇不落贵地而落空亡, 较为孤独, 即是蓬莱三岛客,万里走江山了。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60]) {
        const [nianzhu, yuezhi, rizhu, shizhu] = bazi;
        let res: false | ShenshaItem.三奇贵人 = false;

        if (
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG_10.甲 + TG_10.戊 + TG_10.庚) ||
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG_10.乙 + TG_10.丙 + TG_10.丁) ||
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG_10.壬 + TG_10.癸 + TG_10.辛)
        ) {
          res = ShenshaItem.三奇贵人;
        }

        return res;
      },
    },
    [ShenshaItem.文昌贵人]: {
      text: `甲乙巳午报君知, 丙戊申宫丁己鸡。庚猪辛鼠壬逢虎, 癸人见卯入云梯。甲日巳。乙日午。丙日申。丁日酉。戊日申。己日酉。庚日亥。辛日子。壬日寅。癸日卯。
            聪明有才华，文笔能力强，利读书考学著书。文昌多取食神之临官为贵, 为食神建禄之称。文昌入命,主聪明过人,又主化险为夷。气质雅秀,举止温文,男命逢着内涵,女命逢着仪容得体；具有上进心，不与粗俗之辈乱交朋友。
            文昌逢合为喜：富加且贵。文昌逢合为忌：多见忙碌，劳苦功高。文昌坐旺地：身体健康，幸福如意，利考试，贵气十足。文昌逢刑冲：劳累辛苦。
            文昌入命：心性聪明，出入近贵，气质文雅，好学新知，一生可以近贵利官。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [niangan] = nianzhu;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.文昌贵人 = false;

        switch (true) {
          case [niangan, rigan].includes(TG_10.甲):
            if (target[1] === DZ_12.巳) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.乙):
            if (target[1] === DZ_12.午) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.丙):
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.丁):
            if (target[1] === DZ_12.酉) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.戊):
            if (target[1] === DZ_12.申) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.己):
            if (target[1] === DZ_12.酉) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.庚):
            if (target[1] === DZ_12.亥) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.辛):
            if (target[1] === DZ_12.子) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.壬):
            if (target[1] === DZ_12.寅) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG_10.癸):
            if (target[1] === DZ_12.卯) {
              res = ShenshaItem.文昌贵人;
            }
            break;
        }

        return res;
      },
    },
  };

  static getDetails(key: ShenshaItem) {
    return this.Map[key].text;
  }

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
