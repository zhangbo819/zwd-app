import NaYin from './Nayin';
import {DZ, DZ_12, JZ_60, TG, WuXing, WX} from './wuxing';

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
  学堂 = '学堂',
  正学堂 = '正学堂',
  词馆 = '词馆',
  正词馆 = '正词馆',
  国印贵人 = '国印贵人',
  三奇贵人 = '三奇贵人',
  三奇贵人天奇 = '三奇贵人\n(天奇)',
  三奇贵人地奇 = '三奇贵人\n(地奇)',
  三奇贵人人奇 = '三奇贵人\n(人奇)',
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
  流霞 = '流霞',
  四废 = '四废',
  天罗地网 = '天罗地网',
  天罗 = '天罗',
  地网 = '地网',
  桃花 = '桃花',
  孤辰 = '孤辰',
  寡宿 = '寡宿',
  阴阳差错 = '阴阳差错',
  魁罡 = '魁罡',
  孤鸾煞 = '孤鸾煞',
  红鸾 = '红鸾',
  天喜 = '天喜',
  勾绞煞 = '勾绞煞',
  红艳煞 = '红艳煞',
  十恶大败 = '十恶大败',
  元辰 = '元辰',
  金神 = '金神',
  天转 = '天转',
  地转 = '地转',
  丧门 = '丧门',
  吊客 = '吊客',
  披麻 = '披麻',
  十灵日 = '十灵日',
  六秀日 = '六秀日',
  八专 = '八专',
  九丑 = '九丑',
  童子煞 = '童子煞',
  天厨贵人 = '天厨贵人',
  福星贵人 = '福星贵人',
  德秀贵人 = '德秀贵人',
  德秀贵人德 = '德秀贵人(德)',
  德秀贵人秀 = '德秀贵人(秀)',
  拱禄 = '拱禄',
}

export default class Shensha {
  static Map = {
    [ShenshaItem.天乙贵人]: {
      text: `
        精评：一生人缘佳，遇事有人解救危难，化险为夷。
        甲戊并牛羊，乙己鼠猴乡，丙丁猪鸡位，壬癸兔蛇藏，庚辛逢虎马，此是贵人方
        查法：以日/年干查四地支。如乙酉甲申丙辰甲午，按丙丁猪鸡位查，丙见年支酉为贵人。
        人命有天乙贵人，遇事有人帮，临难有人解，是化险为夷最有力的贵人之星。
        天乙贵人：人缘、社交缘、异性缘、长辈缘。
        一生少病，人缘佳，易有社会地位，很适合从事公关性质的工作。
        经书有云：『天乙者，乃天上之神，与太乙并列，其神最尊贵，所到之处，危难隐然而避。』由此可知天乙贵人之神通广大，遇吉神则有喜上加喜之庆。逢而为喜，富加且贵，是吉祥之神。凡人命遇之，昌荣有望，达人逢之，功名早显。
        天乙贵人入命：心性聪明，出入近贵。大运流年见天乙贵人：有生官发财之机，最少亦有吉祥庆事加临。天乙贵人坐旺地：身体健康吉祥富贵，福禄加倍。天乙贵人逢合为忌：多见劳苦，劳苦功高。天乙贵人逢刑冲：多劳累，遇事则贵人去。女命天乙贵人入命、日主自坐二德者：可嫁贵夫。
        天乙贵人是八字里面最重要、最吉祥的一颗贵人星，八字带天乙贵人吉星的人，无形之中会散发一种贵气，给人亲切好相处的感觉。还可以转危为安，有很多人发生了意外的危难，受到的伤害却很小，经常都是因为八字里面带有天乙贵人这颗贵人吉星。
        如为喜用，不冲克刑害，多受器重提携与拥护。如毛爷爷出生的丁酉日。
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
      text: `
        精评: 性格好，主化险为夷，不犯刑律，不遇危难。
        正月生者见丁，二月生者见申，三月生者见壬，四月生者见辛，五月生者见亥，六月生者见甲，七月生者见癸，八月生者见寅，九月生者见丙，十月生者见乙，十一月生者见巳，十二月生者见庚。
        查法：以月支查四柱干支, 凡四柱年月日时上见者为有天德贵人。 
        天月德助，处世无殃。能把遇到凶险转化为吉祥、顺利，随处保护。
        天地德秀之气，其特点是化解危难。命带天德贵人者有福德，其人心地善良，身体健康，人缘好，在生平之中较不会遇到意外等，纵使逢之也能适时得以化解。
        天月二德,乃日月会合照临,有何阴昧敢容其间？子平赋说:" 印绶得同天德,官刑不至, 至老无灾。"凡八字中有天月二德,其人恺悌慈祥,待人至诚仁厚。煞带天月德,明敏果决而仁厚,食伤带天月德,聪明秀慧而仁厚。书云: 素食慈心,印绶逢于天德,良以秉性慈祥故也。二德以天德为重,月德次之,临财官印绶,加一倍福力,日干尤吉。
        天德和月德，都是贵人吉星的名称。与其它贵人星有一个最大的不同处，就是天月德比较趋向于一个人个性方面的表现，也就是说天月德谈的是性格。一般来说，八字有天月德入命的人，不但具有贵气的特质，行为处事坦白而无私，也有慈悲心或者同情心。人言积善之家必有余庆，所以天月德也具有遇事化险为夷的功能。
      `,
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
      text: `
        精评：性格好，主化险为夷，不犯刑律，不遇危难。
        寅午戌月生者见丙, 申子辰月生者见壬, 亥卯未月生者见甲, 巳酉丑月生者见庚。　
        查法：以月支查四柱干支
        月德贵人同天乙贵人一样，是一颗很好的吉星，命主在命局中逢上带有月德贵人，一生处世无忧，化险为夷，平生很少生病，不犯官刑。但需要注意的是，月德是勤勉敏慧之徳星，虽然命主身带此吉星，也需本身勤勉自助，才能在紧要关头获得帮助。
        天月二德,乃日月会合照临,有何阴昧敢容其间？子平赋说:" 印绶得同天德,官刑不至, 至老无灾。"凡八字中有天月二德,其人恺悌慈祥,待人至诚仁厚。煞带天月德,明敏果决而仁厚,食伤带天月德,聪明秀慧而仁厚。书云: 素食慈心,印绶逢于天德,良以秉性慈祥故也。二德以天德为重,月德次之,临财官印绶,加一倍福力,日干尤吉。
        天德和月德，都是贵人吉星的名称。与其它贵人星有一个最大的不同处，就是天月德比较趋向于一个人个性方面的表现，也就是说天月德谈的是性格。一般来说，八字有天月德入命的人，不但具有贵气的特质，行为处事坦白而无私，也有慈悲心或者同情心。人言积善之家必有余庆，所以天月德也具有遇事化险为夷的功能。`,
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
    [ShenshaItem.三奇贵人]: {
      text: `
        精评：胸怀坦荡，博学多才。（与天乙并用，则建功立业，功勋卓著。居空亡，则为隐士高人。）
        天上三奇甲戊庚，地下三奇乙丙丁，人中三奇壬癸辛。
        查法：三天干相连（要不相隔而紧连）
        凡命遇三奇，主人精神异常，襟怀卓越，好奇尚大，博学多能。
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
        let res:
          | false
          | ShenshaItem.三奇贵人天奇
          | ShenshaItem.三奇贵人地奇
          | ShenshaItem.三奇贵人人奇 = false;

        if (target !== rizhu) {
          return false;
        }

        if (
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.甲 + TG.戊 + TG.庚)
        ) {
          res = ShenshaItem.三奇贵人天奇;
        } else if (
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.乙 + TG.丙 + TG.丁)
        ) {
          res = ShenshaItem.三奇贵人地奇;
        } else if (
          [
            nianzhu[0] + yuezhi[0] + rizhu[0],
            yuezhi[0] + rizhu[0] + shizhu[0],
          ].includes(TG.壬 + TG.癸 + TG.辛)
        ) {
          res = ShenshaItem.三奇贵人人奇;
        }

        return res;
      },
    },
    get [ShenshaItem.三奇贵人天奇]() {
      return {
        text: this[ShenshaItem.三奇贵人].text,
        rule: () => false,
      };
    },
    get [ShenshaItem.三奇贵人地奇]() {
      return {
        text: this[ShenshaItem.三奇贵人].text,
        rule: () => false,
      };
    },
    get [ShenshaItem.三奇贵人人奇]() {
      return {
        text: this[ShenshaItem.三奇贵人].text,
        rule: () => false,
      };
    },
    [ShenshaItem.德秀贵人]: {
      text: `
        精评：主内涵充实，才华出众，遇难呈祥。
        古诀：
        寅午戌月, 丙丁为德, 戊癸为秀, 申子辰月, 壬癸戊己为德, 丙辛甲己为秀。
        巳酉丑月, 庚辛为德, 乙庚为秀, 亥卯未月, 甲乙为德, 丁壬为秀。
        查法以月令查天干
        夫德者，本月生旺之德；秀者，合天地中和之气、五行变化而成者也。
        又曰；德者，阴阳解凶之神；秀者，天地清秀之气，四时当旺之神。故寅午戌月，丙丁为德，戊癸为秀。申子辰月，壬癸戊己为德，丙辛甲己为秀。巳酉丑月，庚辛为德，乙庚为秀。亥卯未月，甲乙为德，丁壬为秀。凡人命中得此德秀，无破冲克压者，赋性聪明，温厚和气。若遇学堂，更带财官，主贵。冲克减力。
        德秀贵人是八字里的一种神煞，古人对德秀贵人的解释是：“德者，本月生旺之德，秀者，合天地中和之气、五行变化而成者也。又曰：德者，阴阳解凶之神；秀者，天地淸秀之气，四时当旺之神”。此种说法表示德秀贵人不仅仅是贵人，还包含了一股文学的淸秀之意。
        德秀贵人的女命：
        为人仁慈、敏慧、慈善、温顺、修养高，一生有贵人相助，无险无虑，较为神佛帮助。“德”，就是利物救人、改过迁善。性格温和有相夫教子之美，主人仪容娟秀，对工作和家庭都是和和美美。
        德秀贵人的男命：
        德者，性格秉性；秀者，天地清秀之气，四时当旺之神。德秀贵人乃阴阳解厄之神，天在正气所在，故有自救解灾之能。男命带德秀贵人，且无冲破克压者，其人聪明晓事，温厚和气，文业通达，遇事常人贵人相助，总能化险为夷。带财官，主贵。此外，男命德秀贵人多带正气，所以命主很可能多在公、检、法或事业单位工作。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, yuezhu, rizhu, shizhu] = bazi;
        const [niangan] = nianzhu;
        const [yuegan, yuezhi] = yuezhu;
        const [rigan] = rizhu;
        const [shigan] = shizhu;
        let res: false | ShenshaItem.德秀贵人德 | ShenshaItem.德秀贵人秀 =
          false;

        function verify(a: TG[], b: TG[]) {
          const isDe =
            [niangan, yuegan, rigan, shigan].some(i => b.includes(i as TG)) &&
            a.includes(target[0] as TG);
          if (isDe) {
            return ShenshaItem.德秀贵人德;
          }
          const isXiu =
            [niangan, yuegan, rigan, shigan].some(i => a.includes(i as TG)) &&
            b.includes(target[0] as TG);
          if (isXiu) {
            return ShenshaItem.德秀贵人秀;
          }

          return false;
        }

        switch (yuezhi) {
          case DZ.寅:
          case DZ.午:
          case DZ.戌:
            res = verify([TG.丙, TG.丁], [TG.戊, TG.癸]);
            break;
          case DZ.申:
          case DZ.子:
          case DZ.辰:
            res = verify(
              [TG.壬, TG.癸, TG.戊, TG.己],
              [TG.丙, TG.辛, TG.甲, TG.己],
            );
            break;
          case DZ.亥:
          case DZ.卯:
          case DZ.未:
            res = verify([TG.甲, TG.乙], [TG.丁, TG.壬]);
            break;
          case DZ.巳:
          case DZ.酉:
          case DZ.丑:
            res = verify([TG.庚, TG.辛], [TG.乙, TG.庚]);
            break;
        }

        return res;
      },
    },
    get [ShenshaItem.德秀贵人德]() {
      return {
        text: this[ShenshaItem.德秀贵人].text,
        rule: () => false,
      };
    },
    get [ShenshaItem.德秀贵人秀]() {
      return {
        text: this[ShenshaItem.德秀贵人].text,
        rule: () => false,
      };
    },
    [ShenshaItem.太极贵人]: {
      text: `
        精评：聪明好学，喜神秘事物（与华盖并用，又临戍亥，在易学方面多有成就。）
        甲乙生人子午中，丙丁鸡兔定亨通，戊己两干临四季，庚辛寅亥禄丰隆，壬癸巳申偏喜美，值此应当福气钟，更须贵格来相扶，候封万户到三公。
        查法：以日/年干查四地支
        太极者，太初至极之谓。造物之所始，既生不灭，是谓太极。
        命中带有太极贵人的八字，可以事职平顺亨通、福禄兼得，事情能够化险为夷，一生多得贵人相助，晚年可以幸福安逸，太极贵人可以说是一颗非常珍贵的吉星。
        五行有始有终，造化始终相保，谓之太极。甲乙木生于子，终于午。丙日、丁月出于卯，落于酉，戊己土藏于辰戌丑未四维之库，庚辛金生于寅（垦卦），成于亥（乾卦），壬癸水生于申（坤卦），纳于巳（巽卦），人命逢之，主聪明好学，有钻劲，喜文史哲宗教等科目，为人正直，做事有始有终。如得生旺及有贵格吉星相扶助，主气宇轩昂, 福寿双全, 富贵人间。`,
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
    [ShenshaItem.文昌贵人]: {
      text: `
        精评：聪明有才华，文笔能力强，利读书考学著书。
        甲乙巳午报君知, 丙戊申宫丁己鸡。庚猪辛鼠壬逢虎, 癸人见卯入云梯。甲日巳。乙日午。丙日申。丁日酉。戊日申。己日酉。庚日亥。辛日子。壬日寅。癸日卯。
        查法：以日/年干查四地支
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
    [ShenshaItem.国印贵人]: {
      text: `
        精评：正直忠信，若生旺得其他吉神辅助，可得掌印之权。
        甲见戌, 乙见亥, 丙见丑,丁见寅,戊见丑, 己见寅, 庚见辰, 辛见巳。壬见未, 癸见申。
        查法：以年，日干查四支
        四柱带国印者， 主人诚实可靠，严守清规， 照章行事，办事公道。为人和悦，礼义仁慈，气质轩昂。如国印逢生旺，有其它吉星相助，不逢冲破克害，不仅可以有掌印之能，可亦为官掌实权。
        亦主一生工作，生活环境多动，若流年岁运逢之即主工作变动或家庭搬迁。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [niangan] = nianzhu;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.国印贵人 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
              if (target[1] === DZ.戌) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.乙:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.丙:
              if (target[1] === DZ.丑) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.丁:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.戊:
              if (target[1] === DZ.丑) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.己:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.辰) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.未) {
                res = ShenshaItem.国印贵人;
              }
              break;
            case TG.癸:
              if (target[1] === DZ.申) {
                res = ShenshaItem.国印贵人;
              }
              break;
          }
        }

        verify(niangan as TG);
        verify(rigan as TG);

        return res;
      },
    },
    [ShenshaItem.天厨贵人]: {
      text: `
        精评：1、有口福 2、厨艺一流、女命旺夫，但忌刑冲克破空亡
        古诀：
        甲丙爱行双妃游，乙丁狮子已金牛，
        戊坐阴阳庚鱼双，二干石禄坐皇州，
        癸用天喝壬人马，辛到宝瓶禄自由，
        此是天厨注天禄，令人福禄两优游。
        查法：以年干、日干查余四支
        丙干见巳，丁干见午
        戊干见申，己干见酉
        庚干见亥，辛干见子
        壬干见寅，癸干见卯
        天厨又名「食神禄」，先贤陆位亦说:「天厨，宜食禀」，食禀是藏食粮的仓库。
        天厨乃食神建禄之宫，食神是人命福星，食神既能得禄，其福必厚，故谓之天厨。
        天厨入命的人，如不逢刑冲克破空亡，一生不愁吃穿，食禄不虞匮乏，可以享降天之禄、得天赐之福，古人谓之“衣食无忧，福禄满堂”。八字带有天厨贵人的命，一生大都能够平安吉顺，遇事可以化险为夷、福禄优游。女命逢天厨贵人，有口福，爱美食，爱做饭，且烹饪技术一流，饭菜之香胜于他人，能迅速拉高一家人的幸福指数，因此有旺夫一说。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [niangan] = nianzhu;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.天厨贵人 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
            case TG.丙:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.乙:
            case TG.丁:
              if (target[1] === DZ.午) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.戊:
              if (target[1] === DZ.申) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.己:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.子) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.天厨贵人;
              }
              break;
            case TG.癸:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.天厨贵人;
              }
              break;
          }
        }

        verify(niangan as TG);
        verify(rigan as TG);

        return res;
      },
    },
    [ShenshaItem.福星贵人]: {
      text: `
        精评：主平安福气，丰衣足食。
        古诀：
        凡甲、丙两干见寅或子，乙、癸两干见卯或丑，戊干见申，己干见未，丁干见亥，庚干见午，辛干见巳，壬干见辰是也。
        查法以年/日干查地支
        出自明代《甲丙相邀入虎乡歌》，甲丙相邀入虎乡，更游鼠穴高强，戊猴己未丁宜亥，乙癸逢牛卯禄昌，庚赶马头辛到巳，壬骑龙背喜非常，此为有福文昌贵，遇者应知受宠光。
        人命若带福星。主一生禄禄不缺，格局配合得当，自然多福多寿，金玉满堂。平常人得之，亦主三餐温饱，无忧无虑。此星多主平安福气而不主富贵。
        命中带有福星贵人，不但能够遇事不为凶，甚至可以遇难呈祥，化险为夷，一辈子享受悠闲的福气。如果再加上岁运和流年的配合，那自然是一个福禄兴昌、光宗耀祖的命。倘若得不到岁运流年扶持的话，也可以平安的享受快乐的生活，所以说福星贵人是一个很高贵的星。
`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const [niangan] = nianzhu;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.福星贵人 = false;

        function verify(t: TG) {
          switch (t) {
            case TG.甲:
            case TG.丙:
              if (target[1] === DZ.寅 || target[1] === DZ.子) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.乙:
            case TG.癸:
              if (target[1] === DZ.卯 || target[1] === DZ.丑) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.戊:
              if (target[1] === DZ.申) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.己:
              if (target[1] === DZ.未) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.丁:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.庚:
              if (target[1] === DZ.午) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.辛:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.福星贵人;
              }
              break;
            case TG.壬:
              if (target[1] === DZ.辰) {
                res = ShenshaItem.福星贵人;
              }
              break;
          }
        }

        verify(niangan as TG);
        verify(rigan as TG);

        return res;
      },
    },
    [ShenshaItem.天德合]: {
      text: `
        精评：性格好，主化险为夷，不犯刑律，不遇危难。（天德的一半效果）
        寅月壬。卯月巳。辰月丁。巳月丙。午月寅。未月己。申月戊。酉月亥。戌月辛。亥月庚。子月申。丑月乙。
        天德与天干五合或地支六合者即为天德合，如正月见丁为天德，壬与丁合，壬即为天德合，类推。如没有天德贵人，有天德合也起到天德贵人的作用。`,
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
      text: `
        精评：性格好，主化险为夷，不犯刑律，不遇危难。（月德的一半效果）。
        寅午戌见辛，申子辰见丁，巳酉丑见乙，亥卯未见己。
        月德合就是与月德相合的天干，如丙火与辛金合，我们就说寅午戌月德合辛，即寅午戌月的辛干。月德合凡遇预测之事一般都会达到比较和谐的程度。`,
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
      text: `
        精评：化险为夷之神，可解危难，处世无忧，对犯有刑事信息的人尤为有利。
        春戊寅, 夏甲午, 秋戊申, 冬甲子。
        天赦是化险为夷之星，能解人危难。尤其对犯法之人，有宽大处理之可能。纵有过错也可得到宽恕或赦免。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu, rizhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.天赦日 = false;

        if (rizhu !== target) {
          return false;
        }
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
    get [ShenshaItem.正学堂]() {
      return {
        text: this[ShenshaItem.学堂].text,
        rule: () => false,
      };
    },
    get [ShenshaItem.正词馆]() {
      return {
        text: this[ShenshaItem.词馆].text,
        rule: () => false,
      };
    },
    [ShenshaItem.十灵日]: {
      text: `
        精评：洞悉宗教之星，直觉敏锐，善于察言观色、领悟力、领会力，善解人意等心性皆强。
        古诀：“男带十灵好文章，女带十灵好衣裳。”
        甲辰、乙亥、丙辰、丁酉、戊午、庚戌、庚寅、辛亥、壬寅、癸未
        查法：查日柱
        十灵者，聪颖性灵，古人招收学习五术（医、卜、星、相、山）的徒弟，会看是否十灵日出生的，一般来说十灵日出生的人对五术方面的知识比较有天赋。好诗书文章、时尚杂论等，男子性灵，女子气质佳长相灵秀，逢此日柱出生的人主灵慧聪明。
        《星平会海》云：“五行绝处，即是胎元，生日逢之，名曰‘受气’，八字从了不入格富贵，亦是有余。”通书刊载的十灵日只有癸未日。此日生者容易出名。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.十灵日 = false;

        if (
          rizhu === target &&
          [
            JZ_60.甲辰,
            JZ_60.乙亥,
            JZ_60.丙辰,
            JZ_60.丁酉,
            JZ_60.戊午,
            JZ_60.庚戌,
            JZ_60.庚寅,
            JZ_60.辛亥,
            JZ_60.壬寅,
            JZ_60.癸未,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.十灵日;
        }

        return res;
      },
    },
    [ShenshaItem.六秀日]: {
      text: `
        精评：聪明秀气
        古诀：
        丙午 丁未 戊子 戊午 己丑 己未
        查法：查日柱
        命带六秀聪明多才多艺，相貌俊秀，人缘佳。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.六秀日 = false;

        if (
          rizhu === target &&
          [
            JZ_60.丙午,
            JZ_60.丁未,
            JZ_60.戊子,
            JZ_60.戊午,
            JZ_60.己丑,
            JZ_60.己未,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.六秀日;
        }

        return res;
      },
    },
    [ShenshaItem.空亡]: {
      text: `
      精评：空亡入吉神，吉事减半；空亡入凶神，坏事威力减少。
      甲子旬在戌亥。甲戌旬在申酉。甲申旬在午未。甲午旬在辰巳。甲辰旬在寅卯。甲寅旬在子丑。
      查法：以日/年柱，见余三地支
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
          const xun = WuXing.getXun(t);
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
    [ShenshaItem.禄神]: {
      text: `
        精评：日主得根有利，身体健康，充满信心。
        甲禄寅。乙禄卯。丙禄巳。丁禄午。戊禄巳。己禄午。庚禄申。辛禄酉。壬禄亥。癸禄子。
        查法：以日干查四地支
        身旺见禄，喜见财官。身弱喜禄而逢死绝遭刑冲，又逢吉祥救应，家运可能不太顺利，容易影响到置产、家人之间的关系；同时在求财方面也较为困难。
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
      text: `
        精评：升迁,调动,走动,迁移,奔波,换工作,出国等。
        申子辰马在寅, 寅午戌马在申, 巳酉丑马在亥, 亥卯未马在巳。
        查法：以年、日支查余三支
        贵人驿马多升擢,常人驿马多奔波。代表这个人一生走动多、远行、会出远门。一生驿马运重，即使是在一个地方，也经常会忙个不停，这些都是驿马的作用。
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
    [ShenshaItem.将星]: {
      text: `
        精评：权力之星，易掌握权势，较有老板或主管之命，具有领导力、威慑力。
        子日子。丑日酉。寅日午。卯日卯。辰日子。巳日酉。午日午。未日卯。申日子。酉日酉。戌日午。亥日卯。
        查法：以年、日支查余支
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
    [ShenshaItem.学堂]: {
      text: `
        精评：模仿力、创作力、想象力、理解力。学业出类拔萃，文章声名远播
        古诀：纳音之长生
        金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。
        查法一：以年纳音查月日时支（禄命法）
        年柱纳音为金命见其他三支有“巳”为学堂，见“辛巳”为正学堂（海中金、剑锋金、沙中金都为纳音金命）；
        年柱纳音为木命见其他三支有“亥”为学堂，见“己亥”为正学堂；
        年柱纳音为水命见其他三支有“申”为学堂，见“甲申”为正学堂；
        年柱纳音为火命见其他三支有“寅”为学堂，见“丙寅”为正学堂。
        年柱纳音为土命见其他三支有“申”为学堂，见“戊申”为正学堂；
        查法二：以日干查四柱（子平法）
        甲见己亥, 乙见壬午, 丙见丙寅, 丁见丁酉, 戊见戊寅, 己见己酉, 庚见辛巳, 辛见甲子, 壬见甲申, 癸见乙卯. 以年日干, 查四柱干支.
        本软件使用第一种纳音查法
        学堂为纳音之长生，命中带之，主人聪明，可得考职功名，文才出众，功名显达。
        学堂又称官贵学堂，八字带学堂的命格，大都饱读诗书，记忆力很好，行为举止无形间给人一种高贵气质的感觉，很多高学历甚至达官显贵之人，八字都有学堂贵星的加临。
        八字如果见到文昌又有学堂，可以说是一个贵气十足的命格；只要见到其中一位，都很擅长读书，一生当中也都能够化险为夷。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const nayin_nian_wuxing = NaYin.getNayinWuxing(nianzhu);
        let res: false | ShenshaItem.学堂 | ShenshaItem.正学堂 = false;

        // if (![yuezhu, rizhu, shizhu].includes(target)) {
        //   return res;
        // }

        switch (nayin_nian_wuxing) {
          case WX.金:
            if (target === JZ_60.辛巳) {
              res = ShenshaItem.正学堂;
            } else if (target[1] === DZ.巳) {
              res = ShenshaItem.学堂;
            }
            break;
          case WX.木:
            if (target === JZ_60.己亥) {
              res = ShenshaItem.正学堂;
            } else if (target[1] === DZ.亥) {
              res = ShenshaItem.学堂;
            }
            break;
          case WX.水:
            if (target === JZ_60.甲申) {
              res = ShenshaItem.正学堂;
            } else if (target[1] === DZ.申) {
              res = ShenshaItem.学堂;
            }
            break;
          case WX.火:
            if (target === JZ_60.丙寅) {
              res = ShenshaItem.正学堂;
            } else if (target[1] === DZ.寅) {
              res = ShenshaItem.学堂;
            }
            break;
          case WX.土:
            if (target === JZ_60.戊申) {
              res = ShenshaItem.正学堂;
            } else if (target[1] === DZ.申) {
              res = ShenshaItem.学堂;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.词馆]: {
      text: `
        精评：学业出类拔萃，文章声名远播。
        古诀：纳音之临官。
        金命见巳，辛巳为正；木命见亥，己亥为正；水命见申，甲申为正；土命见申，戊申为正；火命见寅，丙寅为正。
        查法一：
        以年纳音查月日时支（禄命法）
        年柱纳音为金命见其他三支有“申”为词馆，见“壬申”为正词馆（海中金、剑锋金、沙中金都为纳音金命）；
        年柱纳音为木命见其他三支有“寅”为词馆，见“庚寅”为正词馆；
        年柱纳音为水命见其他三支有“亥”为词馆，见“癸亥”为正词馆；
        年柱纳音为火命见其他三支有“巳”为词馆，见“乙巳”为正词馆。
        年柱纳音为土命见其他三支有“亥”为词馆，见“丁亥”为正词馆；
        查法二：
        甲干见庚寅，乙干见辛卯；丙干见乙巳，丁干见戊午；戊干见丁巳，己干见庚午；庚干见壬申，辛干见癸酉；壬干见癸亥，癸干见壬戌。
        本软件使用第一种纳音查法。
        理愚歌云:"学堂如更朝驿马, 位及勋高压天下." 此言学堂要有马星."生来禄马真学堂, 若同词馆主文章, 遇冲不遇谁人会, 不遇克破福禄昌; 文星聚处人中瑞, 声华独冠英雄辈." 
        学堂词馆, 主人秀气生发, 聪明智巧, 文章冠世, 一生富贵. 宜生旺不宜克害冲破, 宜天乙贵人吉星相扶为好, 否则, 才难展, 志难伸. 
      `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const nayin_nian_wuxing = NaYin.getNayinWuxing(nianzhu);
        let res: false | ShenshaItem.词馆 | ShenshaItem.正词馆 = false;

        // if (![yuezhu, rizhu, shizhu].includes(target)) {
        //   return res;
        // }

        switch (nayin_nian_wuxing) {
          case WX.金:
            if (target === JZ_60.壬申) {
              res = ShenshaItem.正词馆;
            } else if (target[1] === DZ.申) {
              res = ShenshaItem.词馆;
            }
            break;
          case WX.木:
            if (target === JZ_60.庚寅) {
              res = ShenshaItem.正词馆;
            } else if (target[1] === DZ.寅) {
              res = ShenshaItem.词馆;
            }
            break;
          case WX.水:
            if (target === JZ_60.癸亥) {
              res = ShenshaItem.正词馆;
            } else if (target[1] === DZ.亥) {
              res = ShenshaItem.词馆;
            }
            break;
          case WX.火:
            if (target === JZ_60.乙巳) {
              res = ShenshaItem.正词馆;
            } else if (target[1] === DZ.巳) {
              res = ShenshaItem.词馆;
            }
            break;
          case WX.土:
            if (target === JZ_60.丁亥) {
              res = ShenshaItem.正词馆;
            } else if (target[1] === DZ.亥) {
              res = ShenshaItem.词馆;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.魁罡]: {
      text: `
        精评：聪明机巧，临事果断，有威杀之。
        忌刑冲，刑冲多有灭身之祸；忌身弱，身弱逢之则钱财不丰可能会遇刑律。
        戊戌日。庚辰日。庚戌日。壬辰日。
        查法：查日柱
        魁罡坐命：心性刚强霸气，聪明果断，攻击性，不服输，临事果断。带双魁罡：秉权，好杀，具领导才能。必须身旺，才能任其霸气；身弱，则容易遭意外事故，凡事不要强出头。
        辰为天罡, 戌为河魁, 乃阴阳绝灭之地,故名。辰是水库属天罡, 戌是火库属地魁, 辰戌相见为天冲地击。魁罡格在日柱方能入格,其他三格不算,且不能冲破。魁罡格需日主健旺,也即以财官为喜用,因为魁罡格,具有攻击性且格局雄壮,日主衰弱需印生,与魁罡性格相反, 即不成为魁罡格了。
        古歌云'魁罡四日最为先，叠叠相逢掌大权，庚戌庚辰怕显官，戊戌壬辰畏财运。主人性格多聪慧，好杀之心断不偏，倘有刑冲兼破害，一贫彻骨受笞鞭。'
        身值天罡地魁，衰则彻骨贫寒，强则绝伦显贵，魁罡聚会，发福非常。
        主为人性格聪明，文章振发，临事果断，秉权好杀。魁罡性严有操持。
        运行身旺发福百端，一见财官，祸患立至，或带刑杀尤甚。倘日位独处，刑冲克制重临，必是小人，刑责不已，穷必彻骨。
        运临财旺官旺处，主防奇祸，若月令见财官印绶，日主一位，即以财官印食取用，虽微破财，财官印食得位即无大害。
        庚戌，庚辰二日无官星，若魁罡重叠有情，主富贵于名，但见财官则不成局，岁运再见财旺之乡，祸不可测。
        柱带魁罡者，虽有领导才能，声宏气壮，且好权术，好胜心强，但婚姻终为不顺。如不遵纪守法，难免牢狱之苦。
        古人说魁罡入命的八字不要吃牛肉，并且适合修道养性以断其霸气伤人之性。
        “为人性格聪明，文章振发，临事果断，秉权好杀。”在现代，“魁罡”有新的诠释：带魁罡的人，人生可能充满惊涛骇浪，命运起伏大，分化较明显，容易碰到不好的事情。若是女性，大多是美人胚子，但是在恋爱和婚姻方面感情较差。法官、教授、艺术家、裁缝、理发业人士，有很多是魁罡日出的。
        好坏参半，婚缘不佳财运不济，因在丑和戌把天乙贵人吃掉。具有独立自主精神、精明干练、模仿、组织力皆强，性情属于累积性暴发。
        `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.魁罡 = false;

        if (
          rizhu === target &&
          [JZ_60.戊戌, JZ_60.庚辰, JZ_60.庚戌, JZ_60.壬辰].includes(rizhu)
        ) {
          res = ShenshaItem.魁罡;
        }

        return res;
      },
    },
    [ShenshaItem.金神]: {
      text: `
        精评：个性刚毅，聪明多才，然人缘较差。
        （弱命喜运行火乡，便为贵命。逢水旺则做事无成，与子女缘薄，做事劳苦）
        古诀：乙丑，己巳，癸酉。
        查法：查日柱或时柱
        <<相心赋>>云: "金神贵格, 火地奇哉,有刚断明敏之才,无刻薄欺瞒之意。"柱中有火, 不行火乡难发, 原局火无力, 逢火运显贵。"金神入火乡, 富贵天下响", "金神遇火威震边疆"。
        金见水则沉,故金神不喜水乡,不利西北：金神喜见财,行财运则发：财运虽美,火乡更妙。
        金神之义是取"巳酉丑"金属而名，又为"杀"（破碎）之位。子午卯酉"的"在巳，辰戌丑未"的"在丑，寅申巳亥"的"在酉。"的杀"是破球之星、加上金的刚性，成为"具有较强破坏力"的星宿，人命带之性多威猛强烈，胆大、好胜、常使人敬而远之。
        刚金要得火炼，因此有"金神入火乡，发如猛虎"之说。也就是金神命格的人，其命中或岁运逢着丙、丁、巳、午时，能有大发展。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu, shizhu] = bazi;
        let res: false | ShenshaItem.金神 = false;

        if (
          rizhu === target &&
          [JZ_60.乙丑, JZ_60.己巳, JZ_60.癸酉].includes(rizhu)
        ) {
          res = ShenshaItem.金神;
        } else if (
          shizhu === target &&
          [JZ_60.乙丑, JZ_60.己巳, JZ_60.癸酉].includes(shizhu)
        ) {
          res = ShenshaItem.金神;
        }

        return res;
      },
    },
    [ShenshaItem.亡神]: {
      text: `
        精评：临喜用，则善于谋略，胸有城府；临死绝则遇事浮躁，气量较小，脾气阴晴不定，经常任性而为。
        寅午戌见巳, 亥卯未见寅, 巳酉丑见申, 申子辰见亥。
        查法：以年、日支查余三支, 三合局中神的前一位
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
    [ShenshaItem.华盖]: {
      text: `
        精评：文章、艺术、聪明、孤独，宗教、佛道，浪迹江湖。
        艺术之星，多有文学，音乐，设计方面的天赋，但性情较孤独，具有敏感性质。
        寅午戌见戌, 亥卯未见未,申子辰见辰, 巳酉丑见丑.
        查法：以年、日支查余支
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
    [ShenshaItem.拱禄]: {
      text: `
        精评：主勤奋积极，充满正能量的福气。
        古诀：拱禄有五日五时:癸亥日癸丑时, 癸丑日癸亥时, 拱子禄；丁巳日丁未时, 己未日己巳时, 拱午禄；戊辰日戊午时, 拱巳禄。
        查法：以日柱配合时柱
        《三命通会》云:"凡拱格, 需日时同干,贵与月令通气。运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿, 虚则能容物,实则无用。所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。"
        《古诗》云:"日时双拱禄中庭,金匮藏珠格清,至贵至高君子命,必须月令看支提,提纲有用提纲重,月令无神用此奇,所拱之位怕填实,又怕伤官在月支。羊刃重重来破格,如无此破贵无疑。"
        拱是夹、向的意思；禄是干禄、拱禄，指八字柱中无禄位，日柱和时柱相配合虚拱出禄位。命带拱禄的人，做事特别勤奋好学努力，勤奋向上，且不怕困难挫折，越挫越勇，终形成花好月圆的结果，充满了正能量，很有福分的人。
        凡拱格,需日时同干,贵与月令通气. 运行身旺及贵禄旺地方大好,印绶伤官食神财运大吉。忌行冲破害或羊刃七杀伤了日时,拱不住贵气,大忌填实空亡。譬如器皿,虚则能容物,实则无用，所以只宜虚拱。完则能盛,破则无用,所以怕见空亡,岁运同。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu, shizhu] = bazi;
        let res: false | ShenshaItem.拱禄 = false;

        if (rizhu === target) {
          if (
            (rizhu === JZ_60.癸亥 && shizhu === JZ_60.癸丑) ||
            (rizhu === JZ_60.癸丑 && shizhu === JZ_60.癸亥)
          ) {
            // 拱子禄
            res = ShenshaItem.拱禄;
          } else if (
            (rizhu === JZ_60.丁巳 && shizhu === JZ_60.丁未) ||
            (rizhu === JZ_60.己未 && shizhu === JZ_60.己巳)
          ) {
            // 拱午禄
            res = ShenshaItem.拱禄;
          } else if (rizhu === JZ_60.戊辰 && shizhu === JZ_60.戊午) {
            //  拱巳禄
            res = ShenshaItem.拱禄;
          }
        }

        return res;
      },
    },
    [ShenshaItem.天医]: {
      text: `
        精评：与医学有缘,少病,处死绝之地,则主人体弱，身体健康容易出问题。
        正月生见丑, 二月生见寅, 三月生见卯, 四月生见辰, 五月生见巳, 六月生见午, 七月生见未, 八月生见申, 九月生见酉, 十月生见戌, 十一月生见亥, 十二月生见子。
        查法：以月支查其他三支
        天医是掌管疾病之事的星神。四柱逢天医,如不旺,又无贵人吉神相扶,不利于身体健康，容易身弱无力。若生旺又有贵人相生助,不仅身体健壮,而且特别适合从事医学、心理学、哲学等。学习力、理解力、观察力、模仿力、好奇心、研究心、直觉观等能力皆强。
        宗教、医药、哲学、人文等学说之星。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60, yinli: number[]) {
        const [nianzhu, , rizhu, shizhu] = bazi;
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

        if (
          [nianzhu, rizhu, shizhu].includes(target) &&
          target[1] === map[mm]
        ) {
          res = ShenshaItem.天医;
        }

        return res;
      },
    },
    [ShenshaItem.金舆]: {
      text: `
        精评：财帛之星和配偶相关联，会受到配偶之资助，技术之相助。
        与车有缘，拥有私车，交通事故等。日坐金舆：能得异性之助；命带金舆：得祖荫。又称金舆禄神，此星入命能得扶助，一生能得富贵。
        甲龙乙蛇丙戊羊, 丁己猴歌庚犬方, 辛猪壬牛癸逢虎, 凡人遇此福气昌。
        查法：以日/年干查四地支
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
    [ShenshaItem.红鸾]: {
      text: `
        精评：喜事，结婚爱情喜事。
        红鸾年支: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        三地支见: 卯 寅 丑 子 亥 戌 酉 申 未 午 巳 辰。
        查法：以年支查余地支
        如子年生人见卯为红鸾，见酉为天喜。
        “桃花红鸾天喜合，岁运逢之定结亲”。
        红鸾天喜星，主喜庆之事，岁运逢之，若与桃花同见，年日柱与岁运多合者，若是结婚合适年纪，多有爱情结婚喜事。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.红鸾 = false;

        switch (nianzhi) {
          case DZ.子:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.丑:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.寅:
            if (target[1] === DZ.丑) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.卯:
            if (target[1] === DZ.子) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.辰:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.巳:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.午:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.未:
            if (target[1] === DZ.申) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.申:
            if (target[1] === DZ.未) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.酉:
            if (target[1] === DZ.午) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.戌:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.红鸾;
            }
            break;
          case DZ.亥:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.红鸾;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.天喜]: {
      text: `
        精评：喜事，结婚爱情喜事
        古诀：
        天喜年支: 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        三地支见: 酉 申 未 午 巳 辰 卯 寅 丑 子 亥 戌
        查法：以年支查余地支
        如子年生人见卯为红鸾，见酉为天喜。
        “桃花红鸾天喜合，岁运逢之定结亲”。
        红鸾天喜星，主喜庆之事，岁运逢之，若与桃花同见，年日柱与岁运多合者，若是结婚合适年纪，多有爱情结婚喜事。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.天喜 = false;

        switch (nianzhi) {
          case DZ.子:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.丑:
            if (target[1] === DZ.申) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.寅:
            if (target[1] === DZ.未) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.卯:
            if (target[1] === DZ.午) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.辰:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.巳:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.午:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.未:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.申:
            if (target[1] === DZ.丑) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.酉:
            if (target[1] === DZ.子) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.戌:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.天喜;
            }
            break;
          case DZ.亥:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.天喜;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.桃花]: {
      text: `
        精评：1、代表魅力、社交缘、风流（女人尤忌，桃花喜空亡）。2、代表鉴赏能力、装饰能力。
        申子辰在酉, 寅午戌在卯, 巳酉丑在午, 亥卯未在子。
        查法：以年、日支查余三支
        咸池是取日入之义, 指万物暗昧之时"日出扶桑, 入于咸池", 故五行沐浴之地曰咸池，又名桃花。 主要影响一个人的情感,魅力和恋爱, 婚姻生活,附带还有隐秘,阴暗,酒水之类的影响。
        命带桃花,其人性巧,有同情心,爱风流,多才艺,能艺术,如果八字出现桃花而且处于生旺之地则主其人姿容俊美,如果是男人,则慷慨好交游,喜美色;如果是女人则风情万种, 漂亮诱人。桃花并主聪明,异性缘佳。
        桃花忌见水,见之则生理欲望比较强。如申子辰人逢癸酉或亥子丑水。时支桃花,时干不宜再见伤官,因为伤官本身已伤害官星(夫星),如再坐桃花, 将导致多夫,及婚姻不美满的情形。
        桃花在年月：称为『内桃花』，夫妻恩爱。桃花在日时：称为『外桃花』，夫妻多纷争；尤岁运再逢。时上桃花：桃花强，感情丰富。桃花入命，干见杀星：为人多情、欲望强。
        桃花与禄神同柱：有异性缘。桃花与羊刃同柱：感情风波，是非多灾。桃花与空亡同柱：人缘有欠缺之忧，一生为情多苦。桃花与元辰同现或桃花逢刑冲：可能会因为钱财女人方面遇到问题。
        不易犯桃花者：桃花坐空亡；命不带桃花。男命，桃花合禄：一生多有女贵人，多见帮助。男命，桃花与禄神同柱：能得桃花之助力。女命，流年大运见桃花刑冲：不利姻缘。
        桃花喜与正官、正印同柱：表示自己有自制能力，不致于滥。喜与食神同柱：表示将欲求转为文学、艺术的才华。忌与七杀同柱：表示容易为欲望犯罪，女性则被迫，坠入风尘。
        与伤官同柱（欲望强）：表示喜新厌旧、容易自恃才貌、追求时髦，对于感情不太在乎。与劫财同柱：敢爱敢恨、横刀夺爱、争风吃醋。与偏印同柱：生理欲望较强，同性。与比肩同柱：孤芳自赏、独身主义。
        另外，《三命通会刑冲带合》中认为，“干合支刑”也是喜爱喝酒的典型标志。比如甲子见己卯，丙子见辛卯，庚申见乙巳，干合支刑，上合下刑，多犯酒色。
        看有无外遇，则看命局中有无劫夺妻或夫之象。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        let res: false | ShenshaItem.桃花 = false;

        function verify(t: DZ) {
          switch (t) {
            case DZ.寅:
            case DZ.午:
            case DZ.戌:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.桃花;
              }
              break;
            case DZ.申:
            case DZ.子:
            case DZ.辰:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.桃花;
              }
              break;
            case DZ.亥:
            case DZ.卯:
            case DZ.未:
              if (target[1] === DZ.子) {
                res = ShenshaItem.桃花;
              }
              break;
            case DZ.巳:
            case DZ.酉:
            case DZ.丑:
              if (target[1] === DZ.午) {
                res = ShenshaItem.桃花;
              }
              break;
          }
        }

        verify(nianzhu[1] as DZ);
        verify(rizhu[1] as DZ);

        return res;
      },
    },
    [ShenshaItem.元辰]: {
      text: `
        精评：耗损、人际不算太好，不懂得圆融。
        又名大耗，面凶声浊，不分良善，贪杯贪色，生理欲望较强。
        古诀：
        阳男阴女 子年未。丑年申。寅年酉。卯年戌。辰年亥。巳年子。午年丑。未年寅。申年卯。酉年辰。戌年巳。亥年午。
        阴男阳女 子年巳。丑年午。寅年未。卯年申。辰年酉。巳年戌。午年亥。未年子。申年丑。酉年寅。戌年卯。亥年辰。
        查法：以年支查余三支
        又名“毛头星”、“大耗”。元辰是相背而不合之意，若岁、运逢之，如物当风，摇动颠倒，不得安宁，没有内忧，则有外患。若大运逢之于已发之后，将交未交之际，小心意外事故。人命逢之，形貌有陷（头骨凸露、低鼻、大口、眼凶、脑凸、臀高、手脚僵硬、声音沉浊）。
        若值生旺则外表大方，容易是非不分、个性不易捉摸。死绝则求财困难、不太注意言辞、做事阻碍较大，容易自甘平庸。元辰在日，不利丈夫/妻子的健康或运势。
        元辰与官符并见，会无缘无故受到挫折。
        元辰与劫杀并见，男人做事不能注意小节，动招危辱，求财较为困难。女人声音可能比较中性，生理欲望较强，不遵礼法，生子性拗不爱听父母的话。
        元辰虽然是凶星，但逢六合则反吉。例如己丑年生阴男，元辰在午，有未合之。《洞元经》云：“元辰遇合而大亨。”八字中原有七杀，岁运再遇七杀，亦与元辰同观。`,
      rule(
        bazi: [JZ_60, JZ_60, JZ_60, JZ_60],
        target: JZ_60,
        yinli: number[],
        gender: 0 | 1,
      ) {
        const [nianzhu, , rizhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.元辰 = false;

        const isYang = [TG.甲, TG.丙, TG.戊, TG.庚, TG.壬].includes(
          rizhu[0] as TG,
        );
        const isYin = [TG.乙, TG.丁, TG.己, TG.辛, TG.癸].includes(
          rizhu[0] as TG,
        );

        if ((gender === 0 && isYang) || (gender === 1 && isYin)) {
          switch (nianzhi) {
            case DZ.子:
              if (target[1] === DZ.未) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.丑:
              if (target[1] === DZ.申) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.寅:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.卯:
              if (target[1] === DZ.戌) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.辰:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.巳:
              if (target[1] === DZ.子) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.午:
              if (target[1] === DZ.丑) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.未:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.申:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.酉:
              if (target[1] === DZ.辰) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.戌:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.亥:
              if (target[1] === DZ.午) {
                res = ShenshaItem.元辰;
              }
              break;
          }
        } else {
          switch (nianzhi) {
            case DZ.子:
              if (target[1] === DZ.巳) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.丑:
              if (target[1] === DZ.午) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.寅:
              if (target[1] === DZ.未) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.卯:
              if (target[1] === DZ.申) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.辰:
              if (target[1] === DZ.酉) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.巳:
              if (target[1] === DZ.戌) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.午:
              if (target[1] === DZ.亥) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.未:
              if (target[1] === DZ.子) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.申:
              if (target[1] === DZ.丑) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.酉:
              if (target[1] === DZ.寅) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.戌:
              if (target[1] === DZ.卯) {
                res = ShenshaItem.元辰;
              }
              break;
            case DZ.亥:
              if (target[1] === DZ.辰) {
                res = ShenshaItem.元辰;
              }
              break;
          }
        }

        return res;
      },
    },
    [ShenshaItem.流霞]: {
      text: `
        精评：男忌酒色，女子在临盆分娩的时候需要注意。
        甲日酉。乙日戌。丙日未。丁日申。戊日巳。
        己日午。庚日辰。辛日卯。壬日亥。癸日寅。
        查法：以日干查四地支
        流霞逢冲：易犯人身意外。男命：酒色。女命：分娩方面的意外。
        古人称血煞。轻者可能会有皮肉之伤，健康方面的问题，重者可能会有人身意外。
        命犯血煞，最怕八字凶神带重，大运流年又走在凶煞冲克之地，可能会因为一些事情而受伤或出现人身意外，如果八字有吉神转化，是可以化险为夷的。
        岁运走在流霞、血支、血刃的流年，不论轻重，或多或少可能会受伤。如果是在不利的流年岁月期间，外出、开车多加小心谨慎，防止意外发生的严重性增加。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.流霞 = false;

        switch (rigan) {
          case TG.甲:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.乙:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.丙:
            if (target[1] === DZ.未) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.丁:
            if (target[1] === DZ.申) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.戊:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.己:
            if (target[1] === DZ.午) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.庚:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.辛:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.壬:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.流霞;
            }
            break;
          case TG.癸:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.流霞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.孤辰]: {
      text: `
        精评：男怕孤、女怕寡。
        性格孤僻沉默不语、清心寡欲、依恋安逸。
        男命逢孤辰,平生感情多波折。女命逢寡宿，姻缘不利。孤寡与驿马并，流浪他乡，与华盖并于日时,恋情较晚，或为僧尼。与空亡并，小的时候能依靠的人较少，一生不太平稳，四处奔走。
        亥子丑人, 见寅为孤, 见戌为寡；
        寅卯辰人, 见巳为孤, 见丑为寡；
        巳午未人, 见申为孤, 见辰为寡；
        申酉戌人, 见亥为孤, 见未为寡。
        查法：以年支查余三支
        孤辰入命：生性多孤独，孤枕独眠。古人常说『男怕孤、女怕寡』，八字里面孤辰、寡宿同现：常见事与愿违。男命：为人孤独。女命：为人独立。
        男命怕孤辰落在财星之地，或日主的死绝之方。女命怕寡宿落在夫星之地，或日主的死绝之方。这现像造成缘份难偕久之憾，难免刑克，内心容易伤感，尤其是孤寡入命又见空亡的八字，一生比较孤单。八字忌孤辰、寡宿同时入命。
        如果命带孤辰或寡宿，八字又有华盖出现，则是一个非常聪明的孤独之人，往往具有特殊才华，很多艺术家、哲学家、五术家，或是修道者、牧师，多是这种命格。
        孤辰、寡宿也叫做隔角煞，又叫绝情煞。在年月柱，与六亲缘份淡薄，独立自成之命。在日柱，夫妻男女缘份淡薄。在时柱，与子孙缘分淡薄。
        命带孤辰、寡宿的人，不具交际能力与手腕，兄弟朋友情谊也显得有始无终，这就是孤寡入命终须寂的道理。所以八字有孤寡的人，其实无须汲汲追求社交或过份接近喧嚣人潮，养性独处反而显得安然自得。古来五术界得以流芳者，大都八字有孤寡、华盖空亡等神煞入命，惟能处静耐寂之人才得以花长时间研究探讨精深命理。
        凡人命犯孤寡，主形孤肉露,面无和气。生旺稍可,死绝尤甚。孤寡如有贵神相扶, 不至为害, 甚至"孤辰寡宿带官印,定做丛林领袖"。
        孤辰寡宿是印星与财星的墓、绝之位，与丧门、吊客并见，不利父母的健康和运势，做事阻碍较多，伶仃、单寒。入贵格，主入赘。
        阳命大运流年忌孤辰，阴命忌寡宿。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        let res: false | ShenshaItem.孤辰 = false;

        function verify(t: DZ) {
          switch (t) {
            case DZ.亥:
            case DZ.子:
            case DZ.丑:
              if (DZ.寅 === target[1]) {
                res = ShenshaItem.孤辰;
              }
              break;
            case DZ.寅:
            case DZ.卯:
            case DZ.辰:
              if (DZ.巳 === target[1]) {
                res = ShenshaItem.孤辰;
              }
              break;
            case DZ.巳:
            case DZ.午:
            case DZ.未:
              if (DZ.申 === target[1]) {
                res = ShenshaItem.孤辰;
              }
              break;
            case DZ.申:
            case DZ.酉:
            case DZ.戌:
              if (DZ.亥 === target[1]) {
                res = ShenshaItem.孤辰;
              }
              break;
          }
        }

        verify(nianzhu[1] as DZ);

        return res;
      },
    },
    [ShenshaItem.寡宿]: {
      text: `
        精评：异性缘浅薄，婚缘浅薄延后，夫缘浅薄，独身主义。
        男命逢孤辰，平姻缘迟来，恋情较晚。女命逢寡宿姻缘来的较晚。孤寡与驿马并，流浪他乡，与华盖并于日时，孤苦伶仃，或为僧尼。与空亡并，自幼无倚，一生可能不太平顺，容易四处奔走。
        亥子丑人, 见寅为孤, 见戌为寡；
        寅卯辰人, 见巳为孤, 见丑为寡；
        巳午未人, 见申为孤, 见辰为寡；
        申酉戌人, 见亥为孤, 见未为寡。
        查法：以年支查余三支
        寡宿入命：孤枕独眠，生性多孤独。孤辰、寡宿同现：凡事多见无所谓，乃四大皆空。男命：为人孤僻。女命：为人多孤独，老年比较孤单。
        孤辰入命：生性多孤独，孤枕独眠。古人常说『男怕孤、女怕寡』，八字里面孤辰、寡宿同现：常见事与愿违。男命：为人孤独。女命：为人独立。
        男命怕孤辰落在财星之地，或日主的死绝之方。女命怕寡宿落在夫星之地，或日主的死绝之方。这现像造成缘份难偕久之憾，难免刑克，内心容易伤感，尤其是孤寡入命又见空亡的八字，一生比较孤单。八字忌孤辰、寡宿同时入命。
        如果命带孤辰或寡宿，八字又有华盖出现，则是一个非常聪明的孤独之人，往往具有特殊才华，很多艺术家、哲学家、五术家，或是修道者、牧师，多是这种命格。
        孤辰、寡宿也叫做隔角煞，又叫绝情煞。在年月柱，与六亲缘份淡薄，独立自成之命。在日柱，夫妻男女缘份淡薄。在时柱，与子孙缘份淡薄。
        命带孤辰、寡宿的人，比较不具交际能力与手腕，兄弟朋友情谊也显得有始无终，这就是孤寡入命终须寂的道理。所以八字有孤寡的人，其实无须汲汲追求社交或过份接近喧嚣人潮，养性独处反而显得安然自得。古来五术界得以流芳者，大都八字有孤寡、华盖空亡等神煞入命，惟能处静耐寂之人才得以花长时间研究探讨精深命理。
        凡人命犯孤寡, 主形孤肉露, 面无和气。生旺稍可, 死绝尤甚.孤寡如有贵神相扶, 不至为害, 甚至"孤辰寡宿带官印, 定做丛林领袖"。
        孤辰寡宿是印星与财星的墓、绝之位，与丧门、吊客并见，不利父母的健康和运势，做事阻碍较多，伶仃、单寒。入贵格，主入赘。
        阳命大运流年忌孤辰，阴命忌寡宿。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        let res: false | ShenshaItem.寡宿 = false;

        function verify(t: DZ) {
          switch (t) {
            case DZ.亥:
            case DZ.子:
            case DZ.丑:
              if (DZ.戌 === target[1]) {
                res = ShenshaItem.寡宿;
              }
              break;
            case DZ.寅:
            case DZ.卯:
            case DZ.辰:
              if (DZ.丑 === target[1]) {
                res = ShenshaItem.寡宿;
              }
              break;
            case DZ.巳:
            case DZ.午:
            case DZ.未:
              if (DZ.辰 === target[1]) {
                res = ShenshaItem.寡宿;
              }
              break;
            case DZ.申:
            case DZ.酉:
            case DZ.戌:
              if (DZ.未 === target[1]) {
                res = ShenshaItem.寡宿;
              }
              break;
          }
        }

        verify(nianzhu[1] as DZ);

        return res;
      },
    },
    [ShenshaItem.羊刃]: {
      text: `
        精评：武职之星，主观性、好胜心、倔强、刚烈、勇猛、担当、急躁。
        甲日卯。乙日寅。丙日午。丁日巳。戊日午。己日巳。庚日酉。辛日申。壬日子。癸日亥。
        查法：以日干查四地支。
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
        精评：人身意外、争端、是非之星，出现在月时两柱最严重。（除非有贵人星化解，最忌刑冲）。
        羊刃的六冲。甲羊刃在卯，如果地支见酉，即为飞刃; 乙刃在寅, 寅申相冲, 即为飞刃。
        查法：以日干查四地支。
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
        精评：注意身体健康、意外的事故。
        寅月丑。卯月未。辰月寅。巳月申。午月卯。未月酉。申月辰。酉月戌。戌月巳。亥月亥。子月午。丑月子。
        查法：以月支查四柱干支。
        `,
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
    [ShenshaItem.天转]: {
      text: `
        精评：做事不太平顺
        古诀：
        “春兔夏马天地转，秋鸡冬鼠便为殃;行人在路须忧死，造恶未成先架丧。”
        寅卯辰月见乙卯日，巳午未月见丙午日，申酉戌月见辛酉日，亥子丑月见壬子日。
        查法：以月支查日柱
        正所谓“盛极而衰，否极泰来”，事物发展到某种程度就会发生转变。天转地转日为五行能量旺的日子，正处于盛极而衰的状态，会因为能量过盛而带来危险。
        比如官位高而显赫，几乎与君主平等，如不急流勇退，可能有意外事故；家财万贯，富裕满盈，还执着于钱财，可能会被政府、坏人盯上，家庭容易遭遇不幸。
        生于天转地转日的人，如果格局组合不好，没有它柱干支和纳音克制，很容易出现健康问题，少年体弱等情况。成人以后，一生中也往往是祸福相依，经历磨难。需要命主常怀敬畏，多行好事，方能平安顺遂。此外，天转地转日接受上司派遣出行、经商做买卖、建筑、嫁娶等，容易有意外事情发生。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu, rizhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.天转 = false;

        if (rizhu !== target) {
          return false;
        }

        switch (yuezhi) {
          case DZ.寅:
          case DZ.卯:
          case DZ.辰:
            if (JZ_60.乙卯 === rizhu) {
              res = ShenshaItem.天转;
            }
            break;
          case DZ.巳:
          case DZ.午:
          case DZ.未:
            if (JZ_60.丙午 === rizhu) {
              res = ShenshaItem.天转;
            }
            break;
          case DZ.申:
          case DZ.酉:
          case DZ.戌:
            if (JZ_60.辛酉 === rizhu) {
              res = ShenshaItem.天转;
            }
            break;
          case DZ.亥:
          case DZ.子:
          case DZ.丑:
            if (JZ_60.壬子 === rizhu) {
              res = ShenshaItem.天转;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.地转]: {
      text: `
        精评：做事不太平顺
        古诀：“春兔夏马天地转，秋鸡冬鼠便为殃;行人在路须忧死，造恶未成先架丧。”
        寅卯辰月见辛卯日，巳午未月见戊午日，申酉戌月癸酉日，亥子丑月见丙子日。
        查法：以月支查日柱
        天转有四日，分别是春季的乙卯日，夏季的丙午日，秋季的辛酉日，冬季的壬子日。
        地转也有四日，分别是春季的辛卯日，夏季的戊午日，秋季的癸酉日，冬季的丙子日。
        正所谓“盛极而衰，否极泰来”，事物发展到某种程度就会发生转变。天转地转日为五行能量旺的日子，正处于盛极而衰的状态，会因为能量过盛而带来危险。
        比如官位高而显赫，几乎与君主平等，如不急流勇退，可能有意外事故；家财万贯，富裕满盈，还执着于钱财，可能会被政府、坏人盯上，家庭容易遭遇不幸。
        生于天转地转日的人，如果格局组合不好，没有它柱干支和纳音克制，很容易出现健康问题，少年体弱等情况。成人以后，一生中也往往是祸福相依，经历磨难。需要命主常怀敬畏，多行好事，方能平安顺遂。此外，天转地转日接受上司派遣出行、经商做买卖、建筑、嫁娶等，容易有意外事情发生。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu, rizhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.地转 = false;

        if (rizhu !== target) {
          return false;
        }

        switch (yuezhi) {
          case DZ.寅:
          case DZ.卯:
          case DZ.辰:
            if (JZ_60.辛卯 === rizhu) {
              res = ShenshaItem.地转;
            }
            break;
          case DZ.巳:
          case DZ.午:
          case DZ.未:
            if (JZ_60.戊午 === rizhu) {
              res = ShenshaItem.地转;
            }
            break;
          case DZ.申:
          case DZ.酉:
          case DZ.戌:
            if (JZ_60.癸酉 === rizhu) {
              res = ShenshaItem.地转;
            }
            break;
          case DZ.亥:
          case DZ.子:
          case DZ.丑:
            if (JZ_60.丙子 === rizhu) {
              res = ShenshaItem.地转;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.天罗地网]: {
      text: `
        精评：注意健康问题、容易惹上法律纠纷。
        古诀：凡纳音火命，见戌亥日为天罗；水土命，见辰巳日为地网，金木二命无之。
        查法一：以年、日支查余三支
        戌亥为天罗，辰巳为地网；
        戌见亥, 亥见戌为天罗；辰见巳, 巳见辰为地网。
        男忌天罗, 女忌地网。
        查法二：以年纳音查日支
        凡纳音火命，见戌亥日为天罗；水土命，见辰巳日为地网，金木二命无之。
        本软件使用第二种纳音查法。
        男忌天罗, 女忌地网.
        天罗地网, 容易惹上法律纠纷, 大运流年遇之,于人不利，若天月二德解救则无忧
        大多命带罗网的人，在人生旅途上所接受的考验、打击较重大，须奋斗挣扎才能出人头地，若命格不高，意志不足就被命运之神俘虏，庸庸碌碌过其一生；有的则甘心落后，误入歧途。
        天罗地网逢三刑六害之神，再见魁罡、身强杀重、官杀混杂，伤官见官、财星在偏印皆主会触犯刑律，验率颇高。
      `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, , rizhu] = bazi;
        const nayin_nian_wuxing = NaYin.getNayinWuxing(nianzhu);
        let res:
          | false
          | ShenshaItem.天罗地网
          | ShenshaItem.天罗
          | ShenshaItem.地网 = false;

        if (target !== rizhu) {
          return res;
        }

        switch (nayin_nian_wuxing) {
          case WX.水:
          case WX.土:
            if ([DZ.辰, DZ.巳].includes(target[1] as DZ)) {
              res = ShenshaItem.地网;
            }
            break;
          case WX.火:
            if ([DZ.戌, DZ.亥].includes(target[1] as DZ)) {
              res = ShenshaItem.天罗;
            }
            break;
        }

        return res;
      },
    },
    get [ShenshaItem.天罗]() {
      return {
        text: this[ShenshaItem.天罗地网].text,
        rule: () => false,
      };
    },
    get [ShenshaItem.地网]() {
      return {
        text: this[ShenshaItem.天罗地网].text,
        rule: () => false,
      };
    },
    [ShenshaItem.丧门]: {
      text: `
        精评：年逢此星，多主丧事、伤病、难聚财。避免观丧，探病。
        古诀：
        查法：以年支查余三支
        年支：子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        丧门：寅 卯 辰 巳 午 未 申 酉 戌 亥 子 丑
        吊客：戌 亥 子 丑 寅 卯 辰 巳 午 未 申 酉
        披麻：酉 戌 亥 子 丑 寅 卯 辰 巳 午 未 申
        年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。
        披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.丧门 = false;

        const index = DZ_12.findIndex(i => i === nianzhi);
        const targetDz = [
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
        ][index];
        if (targetDz === target[1]) {
          res = ShenshaItem.丧门;
        }

        return res;
      },
    },
    [ShenshaItem.吊客]: {
      text: `
        精评：年逢此星，多主丧事、伤病、难聚财。避免观丧，探病。
        古诀：
        查法：以年支查余三支
        年支：子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        丧门：寅 卯 辰 巳 午 未 申 酉 戌 亥 子 丑
        吊客：戌 亥 子 丑 寅 卯 辰 巳 午 未 申 酉
        披麻：酉 戌 亥 子 丑 寅 卯 辰 巳 午 未 申
        年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。
        披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.吊客 = false;

        const index = DZ_12.findIndex(i => i === nianzhi);
        const targetDz = [
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
          DZ.申,
          DZ.酉,
        ][index];
        if (targetDz === target[1]) {
          res = ShenshaItem.吊客;
        }

        return res;
      },
    },
    [ShenshaItem.披麻]: {
      text: `
        精评：年逢此星，多主丧事、伤病、难聚财。避免观丧，探病。
        古诀：
        查法：以年支查余三支
        年支：子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥
        丧门：寅 卯 辰 巳 午 未 申 酉 戌 亥 子 丑
        吊客：戌 亥 子 丑 寅 卯 辰 巳 午 未 申 酉
        披麻：酉 戌 亥 子 丑 寅 卯 辰 巳 午 未 申
        年支前两位为丧门，比如巳年生人，前两位未就是丧门，后两位卯就是吊客，后三位寅就是批麻。
        披麻、吊客、丧门皆为凶星。如大运、流年遇之，多主人身意外，伤病等事出现，也不容易聚财。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.披麻 = false;

        const index = DZ_12.findIndex(i => i === nianzhi);
        const targetDz = [
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
          DZ.申,
        ][index];
        if (targetDz === target[1]) {
          res = ShenshaItem.披麻;
        }

        return res;
      },
    },
    [ShenshaItem.四废]: {
      text: `
          精评：败多成少。
          春庚申辛酉，夏壬子癸亥，秋甲寅乙卯，冬丙午丁巳。
          查法：以日柱见之即是
          四废日是在春夏秋冬四个季节中，干支与季节旺气，呈一百八十度的相反的结构。季节为王（朝廷），四废日就像被朝廷刻黜的官吏。以“刻”为“不用”之意引申，四刻日生者，是比较没有个性、事业上面作为不大的人，或者是怀才不遇的人，平凡过其一生。
          命局中带“四废”神煞的人，一生之中做事可能会有始无终，需要多注意健康问题。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, yuezhu, rizhu] = bazi;
        const [, yuezhi] = yuezhu;
        let res: false | ShenshaItem.四废 = false;

        if (rizhu !== target) return false;
        switch (yuezhi) {
          case DZ.寅:
          case DZ.卯:
          case DZ.辰:
            if ([JZ_60.庚申, JZ_60.辛酉].includes(target)) {
              res = ShenshaItem.四废;
            }
            break;
          case DZ.巳:
          case DZ.午:
          case DZ.未:
            if ([JZ_60.壬子, JZ_60.癸亥].includes(target)) {
              res = ShenshaItem.四废;
            }
            break;
          case DZ.申:
          case DZ.酉:
          case DZ.戌:
            if ([JZ_60.甲寅, JZ_60.乙卯].includes(target)) {
              res = ShenshaItem.四废;
            }
            break;
          case DZ.亥:
          case DZ.子:
          case DZ.丑:
            if ([JZ_60.丙午, JZ_60.丁巳].includes(target)) {
              res = ShenshaItem.四废;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.八专]: {
      text: `
        精评：身体好，生理欲望较强，多情。
        古诀：
        甲寅日。乙卯日。丁未日。戊戌日。 己未日。庚申日。辛酉日。癸丑日。
        查法：查日柱
        此日柱，大抵天干坐禄或冠带，通常是身体比较好的人，生理欲望强，容易因酒、色而招来困扰、失败。
        八专坐命：感情多有争端，六亲冷淡，夫妻感情多波折。男命：为忌神，多生理欲望较强，感情多波折。女命：为忌神，不择亲疏多交。
        八专入命的人，大都比较多情，很容易在平常的相处之中即让自己不知不觉而陷入感情漩涡，很多畸情的发生不见得命带桃花，八专入命的男女也经常会有情事生忧的困扰。古人论命把八专视为桃花的一种，因为命带八专的人容易发生地下恋情。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.八专 = false;

        if (
          rizhu === target &&
          [
            JZ_60.甲寅,
            JZ_60.乙卯,
            JZ_60.丁未,
            JZ_60.戊戌,
            JZ_60.己未,
            JZ_60.庚申,
            JZ_60.辛酉,
            JZ_60.癸丑,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.八专;
        }

        return res;
      },
    },
    [ShenshaItem.九丑]: {
      text: `
        精评：感情多纷争。
        古诀：
        丁酉日。戊子日。戊午日。己卯日。己酉日。 辛卯日。辛酉日。壬子日。壬午日。
        查法：查日柱
        此煞名“丑”，不是指容貌不好看，相反的，此日生者大多容貌美丽，或很有吸引人的魅力。其所以名“丑”，是指名声方面的风评，因感情的事容易出问题，严重的可能会惹上法律纠纷，名声受损。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.九丑 = false;

        if (
          rizhu === target &&
          [
            JZ_60.丁酉,
            JZ_60.戊子,
            JZ_60.戊午,
            JZ_60.己卯,
            JZ_60.己酉,
            JZ_60.辛卯,
            JZ_60.辛酉,
            JZ_60.壬子,
            JZ_60.壬午,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.九丑;
        }

        return res;
      },
    },
    [ShenshaItem.十恶大败]: {
      text: `
            精评：精评：不善理财，家运不太顺利。
            古诀：
            甲辰，乙巳，壬申，丙申，丁亥，庚辰，戊戌，癸亥，辛巳，己丑，日柱见着是。
            查法：查日柱
            十败日所生之人由于生不带禄，多数不太会持家，花钱容易大手大脚，仓库金银化为尘。犹如无源之水、无本之木，没有资本很难成事。
            在世袭的古代，表示不能承袭宜、父的官职、产业，在古代这情形多发生于犯罪被搜查并没收家产，所以名为“十恶大败”。十恶，是不赦重罪。大败，表示精光、消减 。在现代可能会表示把父辈辛苦创建留下来的产业，自己给吃喝玩乐掉。
            生于十恶大败日的人，在庭生时，家运不顺，可能影响到置产、钱财储蓄。或已走过，当然不能得其福荫。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.十恶大败 = false;

        if (
          rizhu === target &&
          [
            JZ_60.甲辰,
            JZ_60.乙巳,
            JZ_60.壬申,
            JZ_60.丙申,
            JZ_60.丁亥,
            JZ_60.庚辰,
            JZ_60.戊戌,
            JZ_60.癸亥,
            JZ_60.辛巳,
            JZ_60.己丑,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.十恶大败;
        }

        return res;
      },
    },
    [ShenshaItem.阴阳差错]: {
      text: `
        精评：女不太利于婆婆和妯娌姐妹间的亲情。男不太利于和妻子家的关系，不容易得到外家之助。
        如月日时两重或三重犯此煞，多主二婚之事，常为婚姻烦恼，应注意感情培养。
        丙子日。丙午日。丁丑日。丁未日。戊寅日。戊申日。
        辛卯日。辛酉日。壬辰日。壬戌日。癸巳日。癸亥日。
        查法：查日柱
        行事阴阳颠倒，多有事成反败之虞。好变不好，诸事多见在阴错阳差下，或完成、或结束。
        阴差阳错，是太过与不及、男女不和的意思。古说谓“女子逢之，公姑寡合，妯娌不足，夫家冷退。男子逢之，主退外家，亦与妻家是非寡合。其杀，不论男女，月日时两重或三重，犯之重，只日犯之尤重，主不得外家力，纵有妻财，亦成虚花，久后可能会与妻家有矛盾”。
        一般带阴差阳错者可能有同母异父或同父异母的兄弟姐妹，在丧期中成婚、谈亲事时发生不愉快之事，妻子与父母相处的不太融洽，和妻舅感情疏远。做事阻碍较大，容易错失良机。
        但核之事实，日柱犯的人不少，往往并没有这么严重，所以大家也要与时俱进的学习，而不是死板学习。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.阴阳差错 = false;

        if (
          rizhu === target &&
          [
            JZ_60.丙子,
            JZ_60.丙午,
            JZ_60.丁丑,
            JZ_60.丁未,
            JZ_60.戊寅,
            JZ_60.戊申,
            JZ_60.辛卯,
            JZ_60.辛酉,
            JZ_60.壬辰,
            JZ_60.壬戌,
            JZ_60.癸巳,
            JZ_60.癸亥,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.阴阳差错;
        }

        return res;
      },
    },
    [ShenshaItem.童子煞]: {
      text: `
        精评：时运不济
        古诀：
          春秋寅子贵，冬夏卯未辰；
          金木马卯合，水火鸡犬多；
          土命逢辰巳，童子定不错。
        查法：
          1、命造生在春季或秋季的（以月令算），日支或时支见寅或子的。
          2、命造生在冬季或夏季的（以月令算），日支或时支见卯、未或辰的。
          3、年柱纳音为金或木的，日支或时支见午或卯的。
          4、年柱纳音为水或火的，日支或时支见酉或戌的。
          5、年柱纳音为土命的，日支或时支见辰或巳的。
        犯童子煞的人一般时运不好事业受阻，容易遇到人格有问题的人，遭到嫉妒和排斥，自己有时已经很努力了，但是结果没有意义。前途一片光明有时自己找不到出路，就像被困在陷阱的动物渴望寻找到出路一样。
        尤其是婚姻感情方面不顺利，晚婚居多。
      `,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu, yuezhu, rizhu, shizhu] = bazi;
        const nayin_nian_wuxing = NaYin.getNayinWuxing(nianzhu);
        let res: false | ShenshaItem.童子煞 = false;

        if (target !== rizhu && target !== shizhu) {
          return res;
        }

        if (
          [DZ.寅, DZ.卯, DZ.辰, DZ.申, DZ.酉, DZ.戌].includes(yuezhu[1] as DZ)
        ) {
          if ([DZ.寅, DZ.子].includes(target[1] as DZ)) {
            return ShenshaItem.童子煞;
          }
        } else {
          if ([DZ.卯, DZ.未, DZ.辰].includes(target[1] as DZ)) {
            return ShenshaItem.童子煞;
          }
        }

        switch (nayin_nian_wuxing) {
          case WX.金:
          case WX.木:
            if ([DZ.午, DZ.卯].includes(target[1] as DZ)) {
              res = ShenshaItem.童子煞;
            }
            break;
          case WX.火:
          case WX.水:
            if ([DZ.酉, DZ.戌].includes(target[1] as DZ)) {
              res = ShenshaItem.童子煞;
            }
            break;
          case WX.土:
            if ([DZ.辰, DZ.巳].includes(target[1] as DZ)) {
              res = ShenshaItem.童子煞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.孤鸾煞]: {
      text: `
        精评：不利婚姻，或外遇。
        甲寅日。乙巳日。丙午日。丁巳日。
        戊午日。戊申日。辛亥日。壬子日。
        查法：查日柱
        又名“呻吟煞”。夫妻多纷争。
        男命：婚姻中不太懂的相处，和妻子不和睦，可能会出现外遇事件。
        女命：夫妻感情多一般，正缘来的晚，多为晚婚，注意健康问题。
        女命带孤鸾与子女缘分薄，若四柱中见官杀则不适用此条。孤鸾日生的女子不利姻缘，夫妻感情多波折，两人需要面对的问题较多。房事不太和谐，注意外遇风波。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        let res: false | ShenshaItem.孤鸾煞 = false;

        if (
          rizhu === target &&
          [
            JZ_60.甲寅,
            JZ_60.乙巳,
            JZ_60.丙午,
            JZ_60.丁巳,
            JZ_60.戊午,
            JZ_60.戊申,
            JZ_60.辛亥,
            JZ_60.壬子,
          ].includes(rizhu)
        ) {
          res = ShenshaItem.孤鸾煞;
        }

        return res;
      },
    },
    [ShenshaItem.勾绞煞]: {
      text: `
        精评：婚姻不顺
        易遭人身意外，也主容易惹上法律纠纷，难聚财。
        古诀：阳男阴女，命前三辰为勾，命后三辰为绞。
        阴男阳女，命前三辰为绞，命后三辰为勾。
        如甲子年生男，以命前三辰卯为勾，命后三辰酉为绞。
        子见卯。丑见辰。寅见巳。卯见午。辰见未。巳见申。
        午见酉。未见戌。申见亥。酉见子。戌见丑。亥见寅。
        查法：以年支查余三支（桃花的六冲地支）
        古人也称破煞，常听人说某人犯破格命，就是犯了勾绞煞的意思。命带勾绞的命，一生之中可能人际关系不太好，不善于与人相处，经常会有无礼相向的事情发生。勾绞犯命，感情方面也多有波折，争吵等现象是常有的事。不只是八字本身带勾绞煞会如此，流年岁运碰到也一样会犯。
        勾绞之义为“牵连、羁绊”，不能发挥、受阻碍。一名“爪牙杀”，亦即地支相距90度之刑。
        古歌云：“爪牙杀去命三辰，大忌金神羊刃临；夹杀克身无福救，常遭蛇虎伤其身。” 命带勾绞，并带金神、白虎者，可能会有意外危难，被坏人、蛇、虎、牛、马、狗等兽所伤。勾绞入命者，大多心思敏捷，主掌刑法之任，或为将帅，掌生杀大权，若克身，主人身意外。
        行岁运逢之，主与人不懂得圆融，所以经常的得罪人，严重会惹上法律纠纷。勾绞只带一个灾轻，带两个灾重。命中无七杀者灾轻，有七杀者灾重。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [nianzhu] = bazi;
        const [, nianzhi] = nianzhu;
        let res: false | ShenshaItem.勾绞煞 = false;

        switch (nianzhi) {
          case DZ.子:
            if (target[1] === DZ.卯) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.丑:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.寅:
            if (target[1] === DZ.巳) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.卯:
            if (target[1] === DZ.午) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.辰:
            if (target[1] === DZ.未) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.巳:
            if (target[1] === DZ.申) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.午:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.未:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.申:
            if (target[1] === DZ.亥) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.酉:
            if (target[1] === DZ.子) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.戌:
            if (target[1] === DZ.丑) {
              res = ShenshaItem.勾绞煞;
            }
            break;
          case DZ.亥:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.勾绞煞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.红艳煞]: {
      text: `
        精评：有魅力，多情，婚姻不顺。
        古诀：
        甲日午。乙日午。丙日寅。丁日未。戊日辰。
        己日辰。庚日戌。辛日酉。壬日子。癸日申。
        查法：以日干查四地支
        红艳煞是桃花的一种。命见红艳煞不见得有多漂亮，但风流多情，好美色，人命犯之，多数有外遇桃花，男女感情方面他把控的不太好，容易有纠纷。女命见之，难免私情，一谈恋爱可能就会陷入同居生活，如果地支有日干的禄，又带驿马，为生理欲望较强之人。
        女命，红艳与正官或正印同柱：乃良妇也。女命，红艳与七杀同柱：易见外遇，不利姻缘。女命，红艳逢冲：须防身体健康的问题。女命，红艳逢合：桃花不断。女命，红艳坐凶煞：多见桃花灾。
        红艳入命大都多情善交际、好花钱、一生可能会有酒色之灾。`,
      rule(bazi: [JZ_60, JZ_60, JZ_60, JZ_60], target: JZ_60) {
        const [, , rizhu] = bazi;
        const [rigan] = rizhu;
        let res: false | ShenshaItem.红艳煞 = false;

        switch (rigan) {
          case TG.甲:
          case TG.乙:
            if (target[1] === DZ.午) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.丙:
            if (target[1] === DZ.寅) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.丁:
            if (target[1] === DZ.未) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.戊:
          case TG.己:
            if (target[1] === DZ.辰) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.庚:
            if (target[1] === DZ.戌) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.辛:
            if (target[1] === DZ.酉) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.壬:
            if (target[1] === DZ.子) {
              res = ShenshaItem.红艳煞;
            }
            break;
          case TG.癸:
            if (target[1] === DZ.申) {
              res = ShenshaItem.红艳煞;
            }
            break;
        }

        return res;
      },
    },
    [ShenshaItem.灾煞]: {
      text: `
        精评：又名白虎煞，主人身意外。有天月吉神相助，多主武权之威。
        申子辰见午, 亥卯未见酉, 寅午戌见子, 巳酉丑见卯。
        查法：以年支查余三支
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
        精评：入喜用支而处生旺则才智过人，可创业绩。反之家运可能不太顺利，难聚财，严重会惹上法律纠纷，事与愿违。
        寅午戌见亥，申子辰见巳，巳酉丑见寅，亥卯未见申。
        查法：以年日支查余三支, 三合局第三个字的下一位
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
  };

  static getDetails(key: ShenshaItem) {
    return this.Map[key].text;
  }

  static getData(
    bazi: [JZ_60, JZ_60, JZ_60, JZ_60],
    target: JZ_60,
    yinli: number[],
    gender: 0 | 1, // 性别 0 男 1 女
  ) {
    const res = [];
    for (let key in this.Map) {
      const ss = this.Map[key as ShenshaItem].rule(
        bazi,
        target,
        yinli,
        gender,
      ) as false | ShenshaItem;
      ss && res.push(ss);
    }
    return res;
  }
}
