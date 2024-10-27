import {DZ, getXun, JZ_60, TG} from './wuxing';

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
  华盖 = '华盖',
  天医 = '天医',
  金舆 = '金舆',
  空亡 = '空亡',
  灾煞 = '灾煞',
  劫煞 = '劫煞',
  亡神 = '亡神',
  羊刃 = '羊刃',
  飞刃 = '飞刃',
  血刃 = '血刃',
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

        [nz[0] as TG, rz[0] as TG].forEach(i => {
          const target_dz = target[1] as DZ;
          switch (i) {
            case TG.甲:
            case TG.戊: {
              if ([DZ.丑, DZ.未].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG.乙:
            case TG.己: {
              if ([DZ.子, DZ.申].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG.丙:
            case TG.丁: {
              if ([DZ.亥, DZ.酉].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG.壬:
            case TG.癸: {
              if ([DZ.卯, DZ.巳].includes(target_dz)) {
                res = ShenshaItem.天乙贵人;
              }
              break;
            }
            case TG.庚:
            case TG.辛: {
              if ([DZ.寅, DZ.午].includes(target_dz)) {
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
          TG.丁,
          DZ.申,
          TG.壬,
          TG.辛,
          DZ.亥,
          TG.甲,
          TG.癸,
          DZ.寅,
          TG.丙,
          TG.乙,
          DZ.巳,
          TG.庚,
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
          case DZ.寅:
          case DZ.午:
          case DZ.戌:
            if (target[0] === TG.丙) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ.申:
          case DZ.子:
          case DZ.辰:
            if (target[0] === TG.壬) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ.亥:
          case DZ.卯:
          case DZ.未:
            if (target[0] === TG.甲) {
              res = ShenshaItem.月德贵人;
            }
            break;
          case DZ.巳:
          case DZ.酉:
          case DZ.丑:
            if (target[0] === TG.庚) {
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
          case DZ.寅:
            if (target[0] === TG.壬) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.卯:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.辰:
            if (target[0] === TG.丁) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.巳:
            if (target[0] === TG.丙) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.午:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.未:
            if (target[0] === TG.己) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.申:
            if (target[0] === TG.戊) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.酉:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.戌:
            if (target[0] === TG.辛) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.亥:
            if (target[0] === TG.庚) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.子:
            if (target[1] === DZ.申) {
              res = ShenshaItem.天德合;
            }
            break;
          case DZ.丑:
            if (target[0] === TG.乙) {
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
          case DZ.寅:
          case DZ.午:
          case DZ.戌:
            if (target[0] === TG.辛) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ.申:
          case DZ.子:
          case DZ.辰:
            if (target[0] === TG.丁) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ.亥:
          case DZ.卯:
          case DZ.未:
            if (target[0] === TG.己) {
              res = ShenshaItem.月德合;
            }
            break;
          case DZ.巳:
          case DZ.酉:
          case DZ.丑:
            if (target[0] === TG.乙) {
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
        const [, yuezhu, rizhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.天赦日 = false;

        if (rizhu !== target) return false;
        switch (yuezhi) {
          case DZ.寅:
          case DZ.卯:
          case DZ.辰:
            if (target === JZ_60.戊寅) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ.巳:
          case DZ.午:
          case DZ.未:
            if (target === JZ_60.甲午) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ.申:
          case DZ.酉:
          case DZ.戌:
            if (target === JZ_60.戊申) {
              res = ShenshaItem.天赦日;
            }
            break;
          case DZ.亥:
          case DZ.子:
          case DZ.丑:
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
          case TG.甲:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.乙:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.丙:
          case TG.戊:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.丁:
          case TG.己:
            if (target[1] === DZ.午) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.庚:
            if (target[1] === DZ.申) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.辛:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.壬:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.禄神;
            }
            break;
          case TG.癸:
            if (target[1] === DZ.子) {
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

        function verify(t: DZ) {
          switch (true) {
            case [DZ.申, DZ.子, DZ.辰].includes(t):
              if (target[1] === DZ.寅) {
                res = ShenshaItem.驿马;
              }
              break;
            case [DZ.寅, DZ.午, DZ.戌].includes(t):
              if (target[1] === DZ.申) {
                res = ShenshaItem.驿马;
              }
              break;
            case [DZ.巳, DZ.酉, DZ.丑].includes(t):
              if (target[1] === DZ.亥) {
                res = ShenshaItem.驿马;
              }
              break;
            case [DZ.亥, DZ.卯, DZ.未].includes(t):
              if (target[1] === DZ.巳) {
                res = ShenshaItem.驿马;
              }
              break;
          }
        }

        verify(nianzhi as DZ);
        verify(rizhi as DZ);

        return res;
      },
    },
    [ShenshaItem.太极贵人]: {
      text: '甲乙生人子午中，丙丁鸡兔定亨通，戊己两干临四季，庚辛寅亥禄丰隆，壬癸巳申偏喜美，值此应当福气钟，更须贵格来相扶，候封万户到三公。',
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nz, , rz] = bazi;
        let res: false | ShenshaItem.太极贵人 = false;
        // console.log('bazi, target', bazi, target);

        [nz[0] as TG, rz[0] as TG].forEach(i => {
          const target_dz = target[1] as DZ;
          switch (i) {
            case TG.甲:
            case TG.乙: {
              if ([DZ.子, DZ.午].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG.丙:
            case TG.丁: {
              if ([DZ.酉, DZ.卯].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG.戊:
            case TG.己: {
              if ([DZ.辰, DZ.戌, DZ.丑, DZ.未].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG.庚:
            case TG.辛: {
              if ([DZ.寅, DZ.亥].includes(target_dz)) {
                res = ShenshaItem.太极贵人;
              }
              break;
            }
            case TG.壬:
            case TG.癸: {
              if ([DZ.申, DZ.巳].includes(target_dz)) {
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
          case DZ.寅:
          case DZ.午:
          case DZ.戌:
            if (target[1] === DZ.午) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ.申:
          case DZ.子:
          case DZ.辰:
            if (target[1] === DZ.子) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ.亥:
          case DZ.卯:
          case DZ.未:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.将星;
            }
            break;
          case DZ.巳:
          case DZ.酉:
          case DZ.丑:
            if (target[1] === DZ.酉) {
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
          case [niangan, rigan].includes(TG.甲):
            if (target[1] === DZ.戌) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.乙):
            if (target[1] === DZ.亥) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.丙):
            if (target[1] === DZ.丑) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.丁):
            if (target[1] === DZ.寅) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.戊):
            if (target[1] === DZ.丑) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.己):
            if (target[1] === DZ.寅) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.庚):
            if (target[1] === DZ.辰) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.辛):
            if (target[1] === DZ.巳) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.壬):
            if (target[1] === DZ.未) {
              res = ShenshaItem.国印;
            }
            break;
          case [niangan, rigan].includes(TG.癸):
            if (target[1] === DZ.申) {
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
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, yuezhi, rizhu, shizhu] = bazi;
        let res: false | ShenshaItem.三奇贵人 = false;

        if (target !== rizhu) return false;

        if (
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.甲 + TG.戊 + TG.庚) ||
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.乙 + TG.丙 + TG.丁) ||
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.壬 + TG.癸 + TG.辛)
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
          case [niangan, rigan].includes(TG.甲):
            if (target[1] === DZ.巳) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.乙):
            if (target[1] === DZ.午) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.丙):
            if (target[1] === DZ.申) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.丁):
            if (target[1] === DZ.酉) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.戊):
            if (target[1] === DZ.申) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.己):
            if (target[1] === DZ.酉) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.庚):
            if (target[1] === DZ.亥) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.辛):
            if (target[1] === DZ.子) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.壬):
            if (target[1] === DZ.寅) {
              res = ShenshaItem.文昌贵人;
            }
            break;
          case [niangan, rigan].includes(TG.癸):
            if (target[1] === DZ.卯) {
              res = ShenshaItem.文昌贵人;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.华盖]: {
      text: `
        寅午戌见戌, 亥卯未见未,申子辰见辰, 巳酉丑见丑.
        文章、艺术、聪明、孤独，宗教、佛道，浪迹江湖。
        艺术之星，多有文学，音乐，设计方面的天赋，但性情较孤独，具有敏感性质。
        华盖是一颗吉祥之星，有揽护君主威严的职权，所以华盖是权力的象征，也是工作职事变化的代表性，亦是艺术之星。
        华盖临生旺地为喜用，此人才华横溢；
        华盖临（日干）墓地，在日支和时柱为忌，不利子女的健康或运势；若有气，可能为僧道；
        华盖+七杀、桃花，可能成为艺人、巫师；
        华盖+桃花+贵人，会为艺人明星。
        华盖是八字忌神，虽然聪明好学，但个性比较有孤僻现象，常见血气方刚，不靠六亲。如果是八字喜神，一生可以自立更生，见解超群，才华有过人之处；可谓气宇不凡，是一个有条件、有能力成就事业的人。
        双华盖入命：命中多贵人。华盖为八字吉神：一生利官近贵，技艺出众。岁运华盖逢刑冲：事职有动；若岁运不利，小心意外危难。华盖坐空亡、或逢刑冲：工作起伏变动较多。华盖带将星，福气深厚。华盖在空亡、死、绝之地，可修身养性，修习佛理，净化自身。女命，华盖坐日支：形同寡宿。
        一般都称华盖为孤独之星，如上所言确实如此。有很多方外出家人、在家修道人，甚至九流技术艺业的人，八字里面都带有华盖。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [, nianzhi] = nianzhu;
        const [, rizhi] = rizhu;
        let res: false | ShenshaItem.华盖 = false;

        function verify(t: DZ) {
          switch (true) {
            case [DZ.申, DZ.子, DZ.辰].includes(t):
              if (target[1] === DZ.辰) {
                res = ShenshaItem.华盖;
              }
              break;
            case [DZ.寅, DZ.午, DZ.戌].includes(t):
              if (target[1] === DZ.戌) {
                res = ShenshaItem.华盖;
              }
              break;
            case [DZ.巳, DZ.酉, DZ.丑].includes(t):
              if (target[1] === DZ.丑) {
                res = ShenshaItem.华盖;
              }
              break;
            case [DZ.亥, DZ.卯, DZ.未].includes(t):
              if (target[1] === DZ.未) {
                res = ShenshaItem.华盖;
              }
              break;
          }
        }

        verify(nianzhi as DZ);
        verify(rizhi as DZ);

        return res;
      },
    },
    [ShenshaItem.天医]: {
      text: `
        正月生见丑, 二月生见寅, 三月生见卯, 四月生见辰, 五月生见巳, 六月生见午, 七月生见未, 八月生见申, 九月生见酉, 十月生见戌, 十一月生见亥, 十二月生见子。
        与医学有缘,少病,处死绝之地,则主人体弱，身体健康容易出问题。
        天医是掌管疾病之事的星神。四柱逢天医,如不旺,又无贵人吉神相扶,不利于身体健康，容易身弱无力。若生旺又有贵人相生助,不仅身体健壮,而且特别适合从事医学、心理学、哲学等。学习力、理解力、观察力、模仿力、好奇心、研究心、直觉观等能力皆强。
        宗教、医药、哲学、人文等学说之星。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60, yinli: number[]) {
        const [, mm] = yinli;
        let res: false | ShenshaItem.天医 = false;

        const map = [
          '',
          DZ.丑,
          DZ.寅,
          DZ.卯,
          DZ.辰,
          DZ.巳,
          DZ.午,
          DZ.未,
          DZ.酉,
          DZ.戌,
          DZ.亥,
          DZ.子,
        ];

        // console.log('yinli', yinli, map[mm]);

        if (target[1] === map[mm]) {
          res = ShenshaItem.天医;
        }

        return res;
      },
    },
    [ShenshaItem.金舆]: {
      text: `
        甲龙乙蛇丙戊羊, 丁己猴歌庚犬方, 辛猪壬牛癸逢虎, 凡人遇此福气昌。
        财帛之星和配偶相关联，会受到配偶之资助，技术之相助。
        与车有缘，拥有私车，交通事故等。日坐金舆：能得异性之助；命带金舆：得祖荫。又称金舆禄神，此星入命能得扶助，一生能得富贵。
        女人逢之，幸福安吉、骨肉安泰。
        男人逢之，得贤妻，享妻钱财，荣富显贵。
        古代皇族，多带此星。金舆是贵人乘坐的车子。乃禄命之旌旗，三才之节钺。主人性柔、貌美，举止温顺。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        let res: false | ShenshaItem.金舆 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
              if (target[1] === DZ.辰) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.乙:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.丙:
            case TG.戊:
              if (target[1] === DZ.未) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.丁:
            case TG.己:
              if (target[1] === DZ.申) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.戌) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.丑) {
                res = ShenshaItem.金舆;
              }
              break;
            case TG.癸:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.金舆;
              }
              break;
          }
        }

        verify(nianzhu[0] as TG);
        verify(rizhu[0] as TG);

        return res;
      },
    },
    [ShenshaItem.空亡]: {
      text: `
      甲子旬在戌亥。甲戌旬在申酉。甲申旬在午未。甲午旬在辰巳。甲辰旬在寅卯。甲寅旬在子丑。
      空亡入吉神，吉事减半；空亡入凶神，坏事威力减少。
      空亡又名“天中”，凡命中所忌之凶星落入空亡则吉，命中所喜之吉星落入空亡则顿失其力，空亡本身并不主吉凶灾祥之事。空亡见三会，三合，六合不作空亡论。吉神空而喜见合，凶星空而忌见合。
      空亡入命为八字忌神：判断多误，事易差错，人多迷糊，乏主见。多有无心之过错或是意外，一生常见四处奔走。可以说『空亡』是八字里面比劫畏惧见到的神煞。带双空亡：修行出家之人，或见在家居士，多为吃斋人。最怕时柱落空，有孤寡：姻缘迟来，恋情较晚，乃性拗之人。
      空亡在年支上, 一是家运可能不太顺利，二是与母亲缘薄。空亡在月支上, 多主无兄弟姐妹, 或兄弟姐妹无靠。时值空亡多拗性,更遇华盖主少子。胎元支落空亡，昏蒙飘零。命中有空亡与咸池, 沐浴多者是艺人。若空亡与贵人,华盖一齐出现,则此人有大智慧,性情恬淡,品德清高,具有追求真理与智慧的超凡入圣之士,每易为世人钦仰与皈依。
      伤官与空亡同柱：做事经常遭受阻碍。食神与空亡同柱：注意自身健康。正财与空亡同柱：做事辛苦，财钱不聚。偏财与空亡同柱：横财机会少。正官与空亡同柱：不利公职，威信不足。七杀与空亡同柱：权力难保。空亡与正印同柱：潜心修道之人，一生终见黄袍加身。比肩与空亡同柱：兄弟、朋友相交无情义可言。
      劫财与空亡同柱：财钱难储，有来去之患。财神、禄神落入空亡之地：一生四处奔波，求财较为困难。女命，食神与空亡同柱：子息少。女命，空亡与正官或七杀同柱：感情多波折。八字喜神入空亡，失其功能。八字忌神入空亡，藏其凶讯。
      空亡逢合化吉，初凶终吉。空亡逢合化忌，可能对命主不利。空亡逢冲，则空亡去。空亡在喜用之地，则喜神受制。空亡在忌神之地，则助其凶猛。
      古人说，空亡入命只怕万事成空、心难如愿，有很多人饱读诗书、胸怀大志，却徒劳英雄无用武之地，或则感觉好事不临，却是杂琐不如意事始终不离身，一样的机会、一样的努力以赴，结果反而事与愿违，劳苦心力，空亡入命制喜助凶罢了。是否如此，或吉凶福祸如何，依八字而论定。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        let res: false | ShenshaItem.空亡 = false;

        function verifyXun(t: JZ_60) {
          let res: DZ[] = [];
          const xun = getXun(t);
          switch (xun) {
            case JZ_60.甲子:
              res = [DZ.戌, DZ.亥];
              break;
            case JZ_60.甲戌:
              res = [DZ.申, DZ.酉];
              break;
            case JZ_60.甲申:
              res = [DZ.午, DZ.未];
              break;
            case JZ_60.甲午:
              res = [DZ.辰, DZ.巳];
              break;
            case JZ_60.甲辰:
              res = [DZ.寅, DZ.卯];
              break;
            case JZ_60.甲寅:
              res = [DZ.子, DZ.丑];
              break;
          }
          return res;
        }

        const xun_res = [...verifyXun(nianzhu), ...verifyXun(rizhu)];

        if (xun_res.includes(target[1] as DZ)) {
          res = ShenshaItem.空亡;
        }

        return res;
      },
    },
    [ShenshaItem.灾煞]: {
      text: `
          申子辰见午, 亥卯未见酉, 寅午戌见子, 巳酉丑见卯。查法：以年支查余三支
          又名白虎煞，主人身意外。有天月吉神相助，多主武权之威。
          其性勇猛，冲破将星，谓之灾煞。
          此煞主人身意外，根据所处五行支，在水火，防焚溺，金木，杖刃；土，坠落瘟疫。若与七杀同柱来克身，可能有危难。也主刑律官司。若灾煞是正官、正印的生旺之支，多是武权。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.灾煞 = false;

        switch (true) {
          case [DZ.申, DZ.子, DZ.辰].includes(nianzhi as DZ):
            if (target[1] === DZ.午) {
              res = ShenshaItem.灾煞;
            }
            break;
          case [DZ.寅, DZ.午, DZ.戌].includes(nianzhi as DZ):
            if (target[1] === DZ.子) {
              res = ShenshaItem.灾煞;
            }
            break;
          case [DZ.巳, DZ.酉, DZ.丑].includes(nianzhi as DZ):
            if (target[1] === DZ.卯) {
              res = ShenshaItem.灾煞;
            }
            break;
          case [DZ.亥, DZ.卯, DZ.未].includes(nianzhi as DZ):
            if (target[1] === DZ.酉) {
              res = ShenshaItem.灾煞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.劫煞]: {
      text: `
          寅午戌见亥，申子辰见巳，巳酉丑见寅，亥卯未见申。查法：以年日支查余三支, 三合局第三个字的下一位
          入喜用支而处生旺则才智过人，可创业绩。反之家运可能不太顺利，难聚财，严重会惹上法律纠纷，事与愿违。
          劫煞主意外危难、健康、刑法上面的问题。为喜具有竞争心，肯求上进，做事有魄力，敢担当。
          劫煞与贵星同柱：谋事有成。劫煞与天乙贵人、或喜用神同柱：有才能和智谋。劫煞与羊刃同柱：小心意外危险。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.劫煞 = false;

        switch (true) {
          case [DZ.申, DZ.子, DZ.辰].includes(nianzhi as DZ):
            if (target[1] === DZ.巳) {
              res = ShenshaItem.劫煞;
            }
            break;
          case [DZ.寅, DZ.午, DZ.戌].includes(nianzhi as DZ):
            if (target[1] === DZ.亥) {
              res = ShenshaItem.劫煞;
            }
            break;
          case [DZ.巳, DZ.酉, DZ.丑].includes(nianzhi as DZ):
            if (target[1] === DZ.寅) {
              res = ShenshaItem.劫煞;
            }
            break;
          case [DZ.亥, DZ.卯, DZ.未].includes(nianzhi as DZ):
            if (target[1] === DZ.申) {
              res = ShenshaItem.劫煞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.亡神]: {
      text: `
          寅午戌见巳, 亥卯未见寅, 巳酉丑见申, 申子辰见亥。
          查法：以年、日支查余三支, 三合局中神的前一位
          临喜用，则善于谋略，胸有城府；临死绝则遇事浮躁，气量较小，脾气阴晴不定，经常任性而为。
          亡神若为命局中所喜用的地支，并与吉神同柱，则会沉稳干练，谋略深算，严谨有威，好胜心强。如果恰为命局所忌的地支，又与其它凶煞同柱，则性情中存在着虚伪掩饰的成分，家业容易不顺，影响置业和储蓄；夫妻感情一般，多波折；子女的健康或运势也容易出现问题；自己也经常得罪人，严重的话会有法律纠纷出现。
          亡神入命：城府多深，做事疑虑。
          亡神与天乙贵人同现：老谋深算。
          亡神为喜：面有威仪、足智多谋、处事严谨、断事如神，是一个真人不露相的人。
          最怕亡神是命中凶忌之神：其人心性难定、事难如愿、脾气粗俗。
          亡神入命为八字凶神的人，做起起事来总感觉无精打采，不利家运，一生难免争纷，严重者可能会惹上法律纠纷，容易涉足酒色场所。不管男命还是女命，夫妻间都容易争吵，子女也会有不省心的情况发生。古人论命特别强调了亡神入命的危害，其实不是没有道理。
        `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [, nianzhi] = nianzhu;
        const [, rizhi] = rizhu;
        let res: false | ShenshaItem.亡神 = false;

        function verify(t: DZ) {
          switch (true) {
            case [DZ.申, DZ.子, DZ.辰].includes(t):
              if (target[1] === DZ.亥) {
                res = ShenshaItem.亡神;
              }
              break;
            case [DZ.寅, DZ.午, DZ.戌].includes(t):
              if (target[1] === DZ.巳) {
                res = ShenshaItem.亡神;
              }
              break;
            case [DZ.巳, DZ.酉, DZ.丑].includes(t):
              if (target[1] === DZ.申) {
                res = ShenshaItem.亡神;
              }
              break;
            case [DZ.亥, DZ.卯, DZ.未].includes(t):
              if (target[1] === DZ.寅) {
                res = ShenshaItem.亡神;
              }
              break;
          }
        }

        verify(nianzhi as DZ);
        verify(rizhi as DZ);

        return res;
      },
    },
    [ShenshaItem.羊刃]: {
      text: `
        甲日卯。乙日寅。丙日午。丁日巳。戊日午。己日巳。庚日酉。辛日申。壬日子。癸日亥。
        查法：以日干查四地支。
        武职之星，主观性、好胜心、倔强、刚烈、勇猛、担当、急躁。
        羊刃+血刃+驿马同柱：人身意外、多惊多险、交通意外事故。
        时刃者, 岁运并临, 可能会有意外危难。
        年刃者，祖上家运可能不太顺利，影响到置产、钱财储蓄、家人之间的关系。
        比如：癸卯 甲子 甲辰 癸酉此一八字出身农家。又如：乙酉 戊寅 庚申 戊寅此男命，年刃栽根，不仅少年丧父，且平生与妻不和。
        一般格局中，透出杀神皆要制合，惟刃格大忌制化之。
        羊刃常见于警察、军人。
        羊刃是一种很强硬的气力，但它不一定是凶恶的，必须看八字中的整体组合。
        假如一个人的八字很弱，羊刃可以起到很大的匡助作用，比如你贫穷困难时，羊刃就是一个强有力的兄弟，能帮助和支持你；假如八字比较旺，再来羊刃的话就危险了，缺乏适当制约的话，他会与你争夺，劫财。
        羊刃是五行过旺之气，通常被认为是凶星。刃，即刀，故亦常与手术、杀伤有关。情绪容易激动，易树敌，生涯充满惊涛骇浪。从事机械、技术之研究，成功的人很多。虽然常碰到困难，但若成功时，所缔造的都是丰功伟业。
        羊刃一忌重犯，二忌羊刃逢三合六合于岁运。三忌羊刃跟太岁冲战。羊刃一忌重犯叠遇，犯之必凶所谓“劫财羊刃，切忌时逢，岁运许临，祸患立至”是也。比如原局有子午卯酉四刃，岁运又逢则谓犯重刃，会主求财较为困难，与父亲缘薄，不常往来。夫妻感情多波折。其中尤以午午、酉酉相见大凶，以午酉重叠有相刑之象。
        二忌羊刃逢三合六合于岁运。太岁乃凶神羊刃乃凶煞，羊刃三合六合太岁，则小心意外事故。比如甲刃在卯忌亥未戍流岁合之，若命中原犯三合六合，岁运再逢大忌；若原局无此病端则刃合岁灾稍轻。
        三忌羊刃跟太岁冲战。经云：“羊刃冲合岁君，勃然祸至”是也。羊刃不可冲犯，犯之大怒凶性发；命中原刃最忌跟太岁冲战，比如甲刃在卯忌见酉年相战，可能会有意外的危难。
        羊刃制凶要官杀制化去其暴气方可温顺驯服。甲刃在卯。要庚辛申制合，忌酉冲之；丙刃在午，要见壬癸亥制合，忌子冲之；戊刃在午，要见甲乙寅卯制合，忌子冲亡；庚刃在酉，要丙丁巳午制亡，忌卯冲之；壬刃在子，要戊已戍丑未制之，忌午冲之。
        刃杀两凶互相制伏，日主从中渔利方善驾驭也。刃杀相见也要力量相等匹配，方为大贵之造。刃重杀柔要补杀，杀重刃轻要补刃，或用食制杀印化杀来助刃平定杀气。
        羊刃颇忌伤食之星护卫，则杀官制化之功难于作用；若羊刃与伤食互倚成党，对命主可能会有不利的事情。
        `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.羊刃 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.乙:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.丙:
            case TG.戊:
              if (target[1] === DZ.午) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.丁:
            case TG.己:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.申) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.子) {
                res = ShenshaItem.羊刃;
              }
              break;
            case TG.癸:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.羊刃;
              }
              break;
          }
        }

        verify(rigan as TG);

        return res;
      },
    },
    [ShenshaItem.飞刃]: {
      text: `
        羊刃的六冲。甲羊刃在卯，如果地支见酉，即为飞刃; 乙刃在寅, 寅申相冲, 即为飞刃。
        查法：以日干查四地支。
        人身意外、争端、是非之星，出现在月时两柱最严重。（除非有贵人星化解，最忌刑冲）。
        如果原局羊刃，再遇其他支或流年有飞刃，身体健康上容易出问题。
        `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.飞刃 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.乙:
              if (target[1] === DZ.申) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.丙:
            case TG.戊:
              if (target[1] === DZ.子) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.丁:
            case TG.己:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.午) {
                res = ShenshaItem.飞刃;
              }
              break;
            case TG.癸:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.飞刃;
              }
              break;
          }
        }

        verify(rigan as TG);

        return res;
      },
    },
    [ShenshaItem.血刃]: {
      text: `
        寅月丑。卯月未。辰月寅。巳月申。午月卯。未月酉。申月辰。酉月戌。戌月巳。亥月亥。子月午。丑月子。
        查法：以月支查四柱干支。
        注意身体健康、意外的事故。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yz] = bazi;
        const [, yuezhi] = yz;
        let res: false | ShenshaItem.血刃 = false;

        switch (yuezhi) {
          case DZ.寅:
            if (target[1] === DZ.丑) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.卯:
            if (target[1] === DZ.未) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.辰:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.巳:
            if (target[1] === DZ.申) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.午:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.未:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.申:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.酉:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.戌:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.亥:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.子:
            if (target[1] === DZ.午) {
              res = ShenshaItem.血刃;
            }
            break;
          case DZ.丑:
            if (target[1] === DZ.子) {
              res = ShenshaItem.血刃;
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
