import {DZ, JZ_60} from './wuxing';

// 袁天罡称骨
export default class Ytgcg {
  static weight = {
    year: {
      [JZ_60.甲子]: 1.2,
      [JZ_60.丙子]: 1.6,
      [JZ_60.戊子]: 1.5,
      [JZ_60.庚子]: 0.7,
      [JZ_60.壬子]: 0.5,
      [JZ_60.乙丑]: 0.9,
      [JZ_60.丁丑]: 0.8,
      [JZ_60.己丑]: 0.7,
      [JZ_60.辛丑]: 0.7,
      [JZ_60.癸丑]: 0.7,
      [JZ_60.丙寅]: 0.6,
      [JZ_60.戊寅]: 0.8,
      [JZ_60.庚寅]: 0.9,
      [JZ_60.壬寅]: 0.9,
      [JZ_60.甲寅]: 1.2,
      [JZ_60.丁卯]: 0.7,
      [JZ_60.己卯]: 1.9,
      [JZ_60.辛卯]: 1.2,
      [JZ_60.癸卯]: 1.2,
      [JZ_60.乙卯]: 0.8,
      [JZ_60.戊辰]: 1.2,
      [JZ_60.庚辰]: 1.2,
      [JZ_60.壬辰]: 0.1,
      [JZ_60.甲辰]: 0.8,
      [JZ_60.丙辰]: 0.8,
      [JZ_60.己巳]: 0.5,
      [JZ_60.辛巳]: 0.6,
      [JZ_60.癸巳]: 0.7,
      [JZ_60.乙巳]: 0.7,
      [JZ_60.丁巳]: 0.6,
      [JZ_60.庚午]: 0.9,
      [JZ_60.壬午]: 0.8,
      [JZ_60.甲午]: 1.5,
      [JZ_60.丙午]: 1.3,
      [JZ_60.戊午]: 1.9,
      [JZ_60.辛未]: 0.8,
      [JZ_60.癸未]: 0.7,
      [JZ_60.乙未]: 0.6,
      [JZ_60.丁未]: 0.5,
      [JZ_60.己未]: 0.6,
      [JZ_60.壬申]: 0.7,
      [JZ_60.甲申]: 0.5,
      [JZ_60.丙申]: 0.5,
      [JZ_60.戊申]: 1.4,
      [JZ_60.庚申]: 0.8,
      [JZ_60.癸酉]: 0.8,
      [JZ_60.乙酉]: 1.5,
      [JZ_60.丁酉]: 1.4,
      [JZ_60.己酉]: 0.5,
      [JZ_60.辛酉]: 1.6,
      [JZ_60.甲戌]: 1.5,
      [JZ_60.丙戌]: 0.6,
      [JZ_60.戊戌]: 1.4,
      [JZ_60.庚戌]: 0.9,
      [JZ_60.壬戌]: 0.1,
      [JZ_60.乙亥]: 0.9,
      [JZ_60.丁亥]: 1.6,
      [JZ_60.己亥]: 0.9,
      [JZ_60.辛亥]: 1.7,
      [JZ_60.癸亥]: 0.7,
    },
    mouth: {
      1: 0.6,
      2: 0.7,
      3: 1.8,
      4: 0.9,
      5: 0.5,
      6: 1.6,
      7: 0.9,
      8: 1.5,
      9: 1.8,
      10: 0.8,
      11: 0.9,
      12: 0.5,
    },
    day: {
      1: 0.5,
      2: 1.0,
      3: 0.8,
      4: 1.5,
      5: 1.6,
      6: 1.5,
      7: 0.8,
      8: 1.6,
      9: 0.8,
      10: 1.6,
      11: 0.9,
      12: 1.7,
      13: 0.8,
      14: 1.7,
      15: 0.1,
      16: 0.8,
      17: 0.9,
      18: 1.8,
      19: 0.5,
      20: 1.5,
      21: 0.1,
      22: 0.9,
      23: 0.8,
      24: 0.9,
      25: 1.5,
      26: 1.8,
      27: 0.7,
      28: 0.8,
      29: 1.6,
      30: 0.6,
    },
    hour: {
      [DZ.子]: 1.6,
      [DZ.丑]: 0.6,
      [DZ.寅]: 0.7,
      [DZ.卯]: 1.0,
      [DZ.辰]: 0.9,
      [DZ.巳]: 1.6,
      [DZ.午]: 1.0,
      [DZ.未]: 0.8,
      [DZ.申]: 0.8,
      [DZ.酉]: 0.9,
      [DZ.戌]: 0.6,
      [DZ.亥]: 0.6,
    },
  };
  static comment = {
    2.1: `终身行乞孤苦之命。
      短命非业谓大空，平生灾难事重重，凶祸频临陷逆境，终世困苦事不成。
      《注解》身寒骨冷苦伶仃，此命推来行乞人，碌碌苦苦无乐日，终生孤单过一生。`,

    2.2: `此命劳碌一生穷，每逢困难事重重，凶祸频临陷苦境，终身大事谋不成。
      【男】一生劳碌之命。身寒骨冷苦伶仃，此命推来行乞人，劳劳碌碌无度日，终年打拱过平生。
      【女】此命孤冷有凄伶，此命推来路乞人，操心烦脑度平日，一生育苦度光阴。
      《注解》此命劳碌一生穷，每逢困难事重重，凶祸频临陷苦境，终身大事谋不成。`,

    2.3: `终身困苦之命
      【男】此命推来骨肉轻，求谋做事事难成，妻儿兄弟实难靠，外出他乡做散人。
      《注解》此命推来骨肉轻，求谋做事事难成，妻儿兄弟实难靠，外出他乡做善人。
      【女】此命推来骨肉轻，求财谋事事难成。弟妹六亲无有靠，繁绱家事难以持。`,

    2.4: `一生薄福之命
      【男】此命推来福禄无，门庭困苦总难荣，六亲骨肉皆无靠，流浪他乡作老翁。
      【女】此命推来福禄无，家务辛苦难以扶。丈夫儿女皆无靠，流落他乡作游孤。`,

    2.5: ` 六亲无靠，自立更生之命
      【男】此命推来祖业微，门庭营度似稀奇，六亲骨肉如冰炭，一世勤劳自把持。
      【女】此命推来八字轻，六庭艰辛多苦凄。娘家六友冷如灰，一生操劳多忧心。`,

    2.6: `【男】平生衣禄苦中求，独自营谋事不休，离祖出门宜早计，晚来衣禄自无休。
      《注解》此命为人刚强，劳心劳力，移祖居住，有能自力得安然，知轻识重，坏事不做，老来贪心口无毒，但一生不足，子息难靠。初限之中小发达，早年家计得安康，四十八九岁，交来末运渐渐谋事而成，事业而就，财源茂盛，老来荣华。妻宫有克，两妻无刑，子息四个只一子送终，寿元七十九，过此七十九岁，死于十二月中。
      【女】平生衣禄苦寻求，女命生来带忧愁。辛酸苦辣他尝过，晚年衣钵本无忧。此命推业机灵性巧，为人善 良心性聪明。年轻少刚六亲无靠，中限三十六至五十一岁离乡自立，末年安宁，但生疾皆有，衣食无忧，安然终老，二子送终。寿元六十九岁，卒于风光之中。`,

    2.7: `一生多谋少成之命
      【男】一生作事少商量，难靠祖宗作主张，独马单枪空做去，早年晚岁总无长。
      《注解》此命为人性纯不刚不柔，心中无毒，做事有始有终，池塘鸳鸯寻食吃，易聚易散，骨肉六亲不得力，财物风云，操心劳力，极早恨奋寒窗，原来破尽，重新白手起家，且过三十五六，方可成家立业，四十外行船顺风，五十安稳，末限滔滔事业兴，妻宫硬配，子女送终，寿元七十，死于五月中。
      【女】 竹平做事少间量，难靠夫君做主张。心问口来口问心，自做主张过光阴。此命为人性情温和，不刚不柔心无所毒自成自立，乃女当男权之命。办事有先难后易，含糊鸳鸯寻衣，时集时散，儿女无力，财锦风云，烦悯力匀，直到三十四五换运，四十开外如船遇顺风，五十三岁晚运衣禄丰足，夫君远配有儿女两个伴嫁送终，，寿元七十三岁。`,

    2.8: `【男】一生行事似飘蓬，祖宗产业在梦中，
      若不过房改名姓，也当移徒二三通。
      《注解》此命为人多才能，心机灵巧，祖业飘零，离乡别井可成事业，兄弟多力，驳杂多端，为静处安然，出外有人敬重，可进四方之财，有贵人扶持，逢凶化吉，勤俭一生，无大难，只是救人无功，恩中招怨，重义轻才，易聚易散，早年不能聚财，三十三岁方知劳苦，凡事顺意，三十八九，四十岁称心如意，末限福如东海，寿比南山。只是妻宫有克，三子送终，寿元六十九，闯过八十一，死于三月中。
      【女】女命生来八字经，得善做事一无情。你把别人当亲生，别人对你假殷情。此命为人多贤惠，心机灵巧 便宜人，性情下爽遇事有心，谋可有财源茂。实比男命强三分，逢凶化吉无刑克，只是细人无功，恩中召祸。三十五六岁称心如意，早年烦恼甚佳，易集易散，末运康宁衣禄无忧，只是夫君有克，儿女难成长，子方好，二子送终。寿元七十三岁，过此八十四岁。`,

    2.9: `【男】初年运限未曾亨，纵有功名在后成，须过四旬才可立，移居改姓始为良。
      《注解》此命为人性爆，心直口快，有才能，见善不欺，逢恶不怕，事有始终，量能宽大，但不能聚财，兄弟六亲无力，自立家计，出外方好，初限二十三四五不遂，二十七八有好运到，犹如枯木逢春，中限四十九之命有险，四十多来古镜重磨，明月再圆。五十六七八九末限明月又被云侵，交七十方走大运，妻小配怕刑，克子，寿元七十七，死于春光中。
      【女】花枝要来性情硬，自奔自立不求人。若向求财方可止，有苦有甜度光阴。女命贤惠受人钦，心机灵便，六亲无靠，求财问喜有意爱做事不顺意，东不成西不正，牢心费力难以养财，中限三十五六换运，遇事有贵人助力。逢凶化吉无灾难，一生勤俭操劳，老来衣禄不缺，终身难少，四十九之年注意口角，警防小人害，夫君大配无刑克，长子送终，寿元七十一岁，过此七十七岁。`,

    3: `【男】劳劳碌碌苦中求，东奔西走何日休，若使终身勤与俭，老来稍可免忧愁。
      《注解》此命为人多才多能，心机为巧，祖业凋零，离乡别井可成家业，兄弟少力，驳杂多端，出外有贵人扶持，一生无刑克，无大难，只是救人无功，恩中招怨，重义轻才，易聚易散，早年不能聚财，三十三岁方知劳苦，凡事顺意，三十八九，四十岁称心如意，三子送终，寿元六十九，死于三月中。
      【女】此命推来比郎强，婚姻大事碍无防。中年走过坎坷运，末年渐比先前强。此命为人性躁，心直口快，有才识，博学渊涯，善不欺恶不怕，做事有始有终。但财运不佳，姊妹六亲少力。自作主张有外财，初限二十五六起有四五年不顺，三十一二有好运交，如铁树开花，中限三十八岁有一险，四十外方古，镜重现，明月再圆，五十四五未隔明月又被乌云侵，七十岁运有好转，福禄同放光，夫君天配方可，寿元八十二岁。`,

    3.1: `忙忙碌碌苦中求，何日云开见日头，难得祖基家可立，中年衣食渐无忧。
      交友谨慎，老年衣食足用之命
      【男】忙忙碌碌苦中求，何日云开见日头，难得祖基家可立，中年衣食渐能周。
      《注解》此命推来敬重双亲，有福有禄，六亲和睦，义气高强，少年勤学有功名，忠孝双 全，心中无毒，不贵则福，出外受人钦佩，四海闻名，老来荣华，限上无忧，一生安康 ，年轻欠利，末限安享福禄，白鹤先生云：此命三限，有子孙旺相局，初限早成家计， 辛勤劳苦，中限渐渐生财重奔江山，夫妻少配无刑，末限荣华富贵，寿元八十三岁，死 于冬月之中。
      【女】早年行运在忙碌，劳碌奔波苦中求。自奔自愁把家立，后来晚景无忧愁。女命推业性情柔顺，一要忧转，劳碌奔波，敬重双亲，须自居自立，劳心费力如燕含巢，此命三中限孙旺相之局，初限二十四五至三十一二家运不安，辛勤劳苦，中限渐渐添喜生财如枯木逢春，渐渐顺意，一生安然无大难，一生勤劳致富，夫君大配无刑克，有二男一女送终，寿八十岁。`,

    3.2: `【男】初年运蹇事难谋，渐有财源如水流，到得中年衣食旺，那时名利一齐收。
      《注解》中限交来渐渐称心，求谋顺利，出外有人恭敬，一生受贵，若要问其消息，事业 兴，家业旺，其年运到滔滔财源至，滚滚利丰盈，春光花自发，微风细雨生，四十六七 八交末运，移花接子桂花香，夫妻偕老，寿元八十之外，子孙福禄荣昌，死于腊月中。
      【女】 时逢吉神在运中，纵有凶处不为凶。真变假来假变真，结拜弟妹当亲生。此命为人灵性干强，初限顺事，性情柔和，人才貌出众，一生有福禄，中处二十八九渐有顺意，出外谋事骨肉弟妹相助，家顺事通百事如意，温存如至，春光花百发，微风细雨生，四十五六交末运，移花接木桂花香，夫到皆老，子孙重振，福禄荣昌，寿元六十三岁，过此八十一岁，卒于腊月中。`,

    3.3: `【男】性直多情，交友带劫之命
      早年作事事难成，百计徒劳枉费心，半世自如流水去，后来运到得黄金。
      《注解》此命生人性巧心灵，弄假成真，口快无心，恩中招怨，君子敬佩，小人气恨，骨肉无援，志在四方，身心健康，前运乘阴少种树，中限轻财，大运交来，声名可望，万事更新，名利振建，此后小事宜注意，才有子息，寿元八十三，死于三月中。
      【女】八字命来张张薄，勤俭持家皆可过。年华巴如流水过，末年运至受福禄。人心巧人灵，善良待人，无心口直，恩中招怨，夫君争敬，姐妹妒嫉，骨肉少亲，夫君大配方可，前都平平，凡事须谨慎交接自然和，女命生来八字轻，末年交运随夫君，方有后发，寿元六十岁。`,

    3.4: `【男】此命福气果如何，僧道门中衣禄多，离祖出家方为妙，朝晚拜佛念弥陀。
      《注解》此命推来为人性躁，与人做事反为不美，离祖成家，三番四次自成自立安享福，直自三十六至四十六，财不谋而自至，福不求而自得，有贵人助，家庭安宁，妻宫若要无刑，猴、猪、羊、蛇不可配，龙、虎、马、牛方得安，虽有二子，终生带暗方可。兄弟六亲如冰碳，在家不得安然，初限驳杂多端，劳碌奔波不能聚钱，常有忧愁，寿元七十八岁，死于三月中。
      【女】矮巴勾枣难捞枝，好人寻命不投机。谋望献身最费力，婚姻同移总是虚。此命为人性情急躁，心高气傲，初限与人办事总不成，劳碌奔波，自成自立，婚姻太好，行人来找。谋望成全凑不巧，家庭安宁，夫君若要无刑，猴猪羊蛇不可配，龙虎牛马方得实，常常忧虑，中限平平，末限称怀，寿元七十七岁。`,

    3.5: `【男】生平福量不周全，祖业根基觉少传，营事生涯宜守旧，时来衣食胜从前。
      《注解》此命为人品性纯和，做事忠直，志气高傲，与人做事恩中招怨，六亲兄弟不得力，祖业全无，早年驳杂多端，独马单枪，初限命运甚来，二十八九三十来岁末曾交运都说好，三十五六到四十犹如金秋菊迎秋放，心机用尽方逢春，末限交来始称怀，祖业有破后重兴，犹如枯木逢春再开花，妻宫忧虚无刑，寿元五十七，限至六十九，三子送终，寿元八十一，死于十月中。
      【女】女子走冰怕冰薄，交易出行犯琢磨。婚姻周郎休此意，官司口舌须要知。女命推业心性高顺，为人心直品行佳，为人办事总有小人之害，驳杂多端，六亲弟妹不能得力，薄兴甚是险，女子却难禁二十七，八三十岁，心事须小心，还至交运苦哀哉，好人总有好来报，四十岁上交好运，夫和子随家业兴起，勉强孤子送终，寿元五十八岁，过此八十三岁，卒于九月。`,

    3.6: `【男】少年命运不通，老享清福之命
      此命终身运不通，劳劳作事尽皆空，苦心竭力成家计，到得那时在梦中。
      《注解》此命为人品性刚直，做事公开有才能，有机变不肯休息，六亲兄弟不得力，祖业无靠，白手成家立业，末运多驳杂，不能聚财，好一双抓钱手，没有一个赚钱斗，此命蜘蛛结网，朝圆夜不圆，做几番败几番，只能稳步成家计，谁知又被狂风吹，初限二十三四，犹如明月被云侵，三十外来恰是日头又重开，二子送终，寿元五十七岁，过此八十八，死于秋天中
      【女】忧愁常锁两眉间，女命万绪挂心头。从今以后防口角，任意行而不相天。此命为人善良贤惠，老少无欺，家业呻小六亲姊妹无力但有贵人相助，女命推业带六合，夫君和顺偕老，子媳二人可送终，寿元五十九岁过此八十四岁，卒秋天中。`,

    3.7: `【男】此命般般事不成、弟兄少力自孤行。虽然祖业须微有，来得明时去不明。
      一生财来复去，难得大富之命
      《注解》此命为人品性刚直，做事公开有才能，不肯休息，六亲兄弟不得力，祖业无靠，白手成家立业，末运多驳杂，不能聚财，不欺负人，有义气，心神不定，易成喜怒，初限奔波劳苦，离别他境可成家计，改换门庭，中限未得如意，末限环环妻宫，方可刑克，子息虽有不得力，只好真假送终，寿元七十七，死于七月中。
      【女】此命来时运费多，此作推车受折磨。山路崎岖吊下耳，左插右安安不着。女命为人性心太直，有口无心，心神不足，易成喜怒，顺夫君还好，也无刑克，虽说子媳还有，不得其实，真假送终，寿元五十八岁至六十三岁，过此七十九岁。`,

    3.8: `【男】一身骨肉最清高，早入簧门姓氏标。待到年将三十六，蓝衫脱去换红袍。
      《注解》此命为人品性刚直，做事公开有才能，不肯休息，六亲兄弟不得力，祖业无靠，白手成家立业，末运多驳杂，不能聚财，好一双抓钱手，没有一个赚钱斗，此命蜘蛛结网，朝圆夜不圆，做几番败几番，只能稳步成家计，谁知又被狂风吹，初限二十三四，犹如明月被云侵，三十外来恰是日头又重开，终交末运方为贵，渐渐荣昌盛。
      【女】凤鸣岐山闻四方，女命逢之大吉昌。走失夫君音有信，晚年衣禄人财多。此命推为性情刚强，有一大志，遇事有始有终，不须姊妹相助，早运驳杂多端，财政十二三有危疾，宣阅书文，中年转运如明月高照，丈夫和谐谁能到老，疾病皆除谈事平稳，子媳多人可送终，寿元五十七岁过此六十八岁。`,

    3.9: `少年多波折，老来安逸之命
      【男】不须劳碌过平生，独自成家福不轻，早有福星常照命，任君行去百般成。
      《注解》此命为人灵机性巧，胸襟通达，志气高，少年勤学有功名之格，青年欠利，腹中多谋，有礼有义，有才能，做事勤俭，一生福禄无亏，与人干事，反为不美，六亲骨肉可靠，交朋友，四海春风，中限光耀门庭，见善不欺，逢恶不怕，事有始终，量能宽大，义利分明，吉人天相，四海闻名，末限成家立业，安然到老，高楼大厦，妻宫无刑，子息三人，只一子送终，寿元七十七，卒于春光中。
      【女】此命推来运不通，劳碌奔波一场空。好似俊鸟关笼中，中年末限起秋风。此命为人灵机性巧，胸襟通达，少年时勤学有功，青年欠佳，持家勤俭，一生衣禄虽有，但事不称心，六亲骨肉交朋结友，做事有始有终，但事事难成，中限允杂，如蜂蛛结网，朝圆夜不圆。末限振治家业，安然到老，子媳三人，一子送终，寿元七十一岁。`,

    4: `【男】平生衣禄是绵长，件件心中自主张。前面风霜多受过，后来必定享安康。
      《注解》此命为人性躁，心直口快，有才能，逢善不欺，逢恶不怕，事有始终，量能宽大，不能聚财，祖业破败，兄弟六亲不得力，自立家计出外方好，初限二十五六连年不遂，二十七八九有好运，犹如枯木逢春，中限四十九岁有灾，铁镜重磨，明月正圆，五十六七交大运，寿元七十七，卒于春光中。
      【女】目上月令如运关，千心万苦受煎熬。女子苦难受过来，晚年福康比花艳。此命推业性情刚强，为人慈善，善不欺恶不怕，遇事定有计划，骨肉少助无力，婚姻最好夫君平早，谋望成全诸事，初限出嫁为好，三十五六因不遂，二十八九交好运。五十五岁才交大运，夫君小配无刑克，一子送终，寿元七十九岁，卒春光之中。`,

    4.1: `【男】聪明超群，老来逍遥享福之命
      此命推来事不同，为人能干异凡庸，中年还有逍遥福，不比前时运未通。
      《注解》此命性重气高，有口无心，祖业未交，离别他境，事事可成，六亲骨肉不得力，自成家计，学习经营，四方闻名，当把外方之时，丰隆初限奔波驳杂，不能聚财，交过三十八九方可成家，四十五六方能顺意，末限犹如三月杨柳，枝枝生细叶，晚景处处红 ，妻宫无克破，子息假送老，寿元四十七，闯过可到六十六，卒于九月中。
      【女】此命推来一般般，女子为人很非凡。中年逍遥多自在，晚年更比中年强。此命比男性更强烈，聪明伶俐，家业少助，早限出嫁百业可成，自成自立过房入赘，四方前程皆好，可进外财，起初驳杂多端，婚嫁以后掌家财，三十岁到四十五六岁方顺意，夫君和顺方能硬配，晚年更比中年强，一子一媳真假送终，寿元四十八岁，过此六十七岁。`,

    4.2: `【男】自力更生，老运名利双收之命
      得宽怀处且宽怀，何用双眉皱不开，若使中年命运济，那时名利一齐来。
      《注解》此命为人操劳，自成自立，与人出力事不成，离祖之命，成家三番四次，用尽心机不得开怀，若要安乐享福，要到三十六到四十六时不谋自待，福不求自至，有贵人助力，家庭安然，妻宫若要无刑，猴、猪、羊、蛇不可配，龙、虎、马、牛方得安，兄弟六亲如冰碳，在家不得安然，初限驳杂多端，不能聚钱，常有忧愁，寿元七十八岁，死于三月中。
      【女】枯井破废已多年，一朝泉水出来鲜。资生济竭人称美，来运转喜自然时。女命推业心善良，敬重老人受君重，屡番自作主张，费尽心因不称怀，六亲骨肉无情，劳碌奔波，中运三十四岁，精神风爽福禄日增，此人皆吉，百事通泰，女君是非龙虎牛马配才开刑克，二自一女当中，有一身患暗病方可，寿年七十九岁，卒三月中。`,

    4.3: `【男】福禄厚重，白手成家之命
      为人心性最聪明，作事轩昂近贵人，衣禄一生天数定，不须劳碌过平生。
      《注解》此命为人性躁刚强，平生不受亏，多技多能，祖业冰碳，能聚财，交过三十开外，方得开怀，中限之命能进四方之财，出外逢贵人之力，艺术精，善经营，方能兴旺，上业迟，有一疾相侵，直至末限方得享福，妻宫匹配，龙虎马牛可配，二子送终，寿元八十，卒于四月之中。
      【女】推车靠涯道路赶，女命求财也费难。婚姻出行无阴碍，疾病口舌多安宁。此命推业性情躁苦极生荣喜气通，一切做不离形，福禄两全，香花多枝，善不欺恶不怕。到老安康，限上无克早成家计，门庭振业，子相旺，夫君重配，寿元八十岁。`,

    4.4: `【男】初年无财，老年自得享福之命
      万事由天莫苦求，须知福禄命里收，少壮名利难如意，晚景欣然更不忧。
      《注解》此命为人忠直敬重，心慈性躁，深谋远虑，心中多劳，贵人钦敬，六亲冰碳，初限行运，美中不足，中限渐入佳境，名利可佳，刚柔有济，二十九交佳运，可通花甲，天赐麒麟送老，寿元八十五岁，卒于冬月之中。
      【女】夜梦金银醒来空，女子谋事运不能。婚姻难成交易获，夫君走失不见踪。此命为人性表柔和，心无所毒，早年成婚，自成自立劳苦奔波，遇事有始有终，六亲父母都无靠月令不合，事做不关，凡事要耐，休要琢磨，初限画饼充饥，中年名利有望，东北遇佳音，后天赐一子送终，寿元八十五岁，卒冬月中。`,

    4.5: `【男】少年辛苦，老来福禄双全之命
      名利推来竟若何，前番辛苦后奔波。命中难养男与女，骨肉扶持也不多。
      《注解》此命为人品性不刚不柔，心中无毒，自当自担，离祖之命，做事有始有终，池塘鸳鸯觅食，或聚或散，骨肉六亲不得力，如嗥如风，劳心费力多成败，初限运寒多驳杂，祖业破败，重新白手成家，至三十五六方能成家立业，四十开外，如船遇顺风，五十多岁安稳，末限滔滔事业兴，妻宫硬配，子息伴架送终，寿元七十五岁，卒于五月之中。
      【女】此命终身驳杂多，六亲骨肉不相助。命中男妇都难养，劳碌辛苦还奔波。此命推为品貌宜，安分守己，遇事可行，六亲姊妹无靠，初限驳杂多端，门庭不顺，夫君白手成空，女子命从，三十四换家运，四十开外如行船遇顺风，方到五十才安稳，夫君能硬配，寿元七十三岁。`,

    4.6: `【男】改姓移居，自得福寿双全之命
      东西南北尽皆通，出姓移居更觉隆，衣禄无亏天数定，中年晚景一般同。
      《注解》此命为人心慈性躁，有口无心，有粗有细，一生奔波，六亲无靠，无大难，妻宫无刑，祖业凋零，自立家计，早业如同败落萍，劳心用下一半生，交三十五六七八九岁，又平平度过几春秋，六十前后花开日，花开又招雨来淋，必定小人加暗害，平日之中要小心，早子招维，只一子送终，寿元七十三，卒于冬月之中
      【女】孤舟得水离沙滩，女命出外早远家。是非口舌皆无碍，婚姻合伙更不差。此命推来性情躁，六亲无靠，遇事称心如意，交易可成疾病痊愈，初限如同败花落叶，三十五以上如日头高照，十几年大运方可好，五十左右有虚惊，单不危险，六十前后谨防小人害，遇事小心，命中一子送终，寿元七十三岁，卒于冬月。`,

    4.7: `【男】早年多波折，晚年享福之命
      此命推为旺末年，妻荣子贵自怡然，平生原有滔滔福，财源滚滚似水流。
      《注解》此命为人品性纯和，做事公道，忠心待人气质高，与人干事恩仇报，兄弟不力祖业微，早年驳杂多端，时来骨肉精，财源是归命，匹马单枪，初限运来二十八九三十岁，末限交运都好，反到交时苦衰，三十六至四十来岁，犹如金秋菊遇秋开放，心机用尽方为贵，末运交来怡称怀，祖业有破，家业重注，好似枯木逢春再开花，孤子送老，五十九岁有一限到六十九岁，寿元八十二卒于冬月之中。
      【女】时来运转吉气发，多年枯木又开花。枝叶重生多茂盛，凡人见了凡人夸。此命为人做事公平，待人慈祥，走失可失俱，早限少国驳驳杂杂，只到三十六岁以上金菊遇秋花盛开，枯木逢春，末运交来方秋怀，夫君大配至五十九有一险，二子送终，卒于十月中。`,

    4.8: `【男】初年大志难伸，晚年发展之命
      初年运道未曾亨，若是蹉跎再不兴，兄弟六亲皆无靠，一身事业晚年成。
      《注解》此命为人性躁，能随机应变，常近贵人，祖业无成，骨肉六亲少义，一个自立家计，初限交来财运如霜雪，中限略可成家，大运突来能立家业，妻有克，小配无刑，子息三人，寿元七十七岁，卒于七月之中。
      【女】一朵鲜花镜中开，看着极好取不来。劝你休把镜花想，女命推业主可怪。此命性躁悠怕夫君，大胆卓识，能随机应变，出行不遇，谋事不宜，初限财来如春雨，蜘蛛网一生劳碌奔波，末运晚年富贵成，夫君大配无刑克，子媳二个只一个送终，寿元七十三岁，卒于七月中。`,

    4.9: `【男】交友多情有损，小心防之再发之命
      此命推来福不轻，自成自立显门庭，从来富贵人钦敬，使婢差奴过一生。
      《注解》此命为人品性纯和，做事勤俭，恩中招怨，兄弟有克，亲朋相援，赔酒赔饭，反说不美，初限贫愁，交过二十六七岁，如逆水行舟，不能聚财，中限驳杂多端，刑妻克子，交过四十岁，方可成家立业，般般遂意，件件称心，至四十七八岁有一灾，宁可损财交过，后有十年好运来，家中钱财聚，三子送老，寿元七十三岁，卒于九月之中。
      【女】此命推来福不轻，女子随君显门庭。容貌美满热人爱，银钱富足过一生。此命为人慈善，有福星照应，贵人扶持，财利不少，只是有人恩中招怨，恩反成仇，亲朋待至如宾，反说恶称，四十七八有一灾，又要损败，就能方可，后过十年好运，门庭万贯俱备，三真一假上天台，寿元七十七。`,

    5: `【男】衣食无亏，一生富贵之命。
      为利为名终日劳，中年福禄也多遭，老来是有财星照，不比前番目下高。
      《注解》此命为人正直，伶俐灵巧，有机变，平生无大难，祖业无靠，自成自立，白手成家，亲朋冷落，兄弟少力，可得四方之财，好一双挣钱手，没有一个聚钱斗，满面春风人道好，一生不足自爱知，妻迟子晚，初限奔波，中限四十岁方交大运，犹如枯木逢春，四十九岁有一灾，其年福星高照，有十年大运，财禄丰盈大吉昌，妻宫铁硬同偕老，子息一双可送终，寿元六十九岁，卒于冬月之中。
      【女】马氏太公不相和，好命逢之尤凝多。恩人无义反成怨，是非平地起风波。此命女人心善良，性直伶俐，无大难，见难相助，婚姻合伙，姊妹无力，一双手很能干，夫反目不顺情，若问家宅不安宁，夫迟子晚，初限奔波，中运四十七八，方交大运，四十六灾刑，过此有十年大运，福禄丰盈，夫君同老，子媳一双送终，寿七十岁。`,

    5.1: `【男】勤俭成家，老年自得福禄之命。
      一世荣华事事通，不须劳碌自亨通，弟兄叔侄皆如意，家业成时福禄宏。
      《注解》此命为人做事有能力，且能随机应变，性燥能知其轻重，交朋结友如兄弟，气量宽宏，见善不欺，逢恶不怕，平生正直，无大难刑险，只是少招祖业，初限衣禄无亏，子息晚招可实得，四十至五十，末限通达昌吉，福禄无亏，财源稳定，丰衣足食，高堂大厦，妻宫友好，二子两女送终，寿元八十岁，卒于九月中。
      【女】肥羊失群入山岗，饿虎逢之把口张。适口充肠心欢喜，女名八安大吉昌。此瞑为人心直口快，性情爽朗，慈善敬重双亲，喜交结朋友和姐妹，平生正直，凶险皆无，出门吉利行人到，是非口舌不相干，夫君见迟方可好，夫媳二招方得实，夫君到白头，儿子三女可送终，寿元八十岁。`,

    5.2: `【男】聪明能干，老来财禄丰足之命
      一世荣华事事能，不须劳思自然宁，宗族欣然心皆好，家业丰亨自称心。
      《注解》此命为人多才多能，心机灵变，祖业飘零，离乡可成家计，兄弟少力，驳杂多端，为人只是救人无功，重义轻财，财禄易聚易散，早年聚财凡事顺意，三十八九四十岁如意称心，末限福如东海，寿比南山，只是妻克两硬无刑，有三子二女送终，寿元八十三，卒于冬月之中。
      【女】顺风行舟扯起棚，上天又助一顺风。不用费力逍遥去，任意而行大亨通。此命为人心机灵巧，勤俭持家，出外有钦敬，四方有财，嫁娶离乡成家。交易成财大得利，一切谋望事有成，中限艰苦一段路，年过四十便如意，一生无大难，只是夫君有克，子孙难收，长子方好，二子送终，寿元七十五岁。`,

    5.3: `自己兴家立业之命
      【男】此格推为气量真，兴家发达在其中，一生福禄安排定，却是人间一富翁。
      《注解》此命推来敬重双亲，有福有禄，气质高昂，少年勤学有功名，忠孝两全，心善无毒，非富则贵，出外有人钦佩，四海名扬，到老荣华，限上无忧，一世健康，青年欠利，末限安享福禄，白鹤先生云：此骨三限之骨，子孙王相之局，初限早成家计，辛勤劳苦，中限渐渐生财，重整门庭，末限荣华富贵，妻宫小配无刑，有三子二女送终，寿元八十二，卒于冬月之中。
      【女】此命相貌眉活秀，文武双全功名成。一生衣禄皆无愁，可算世上有福人。此命推业性直爽快，敬重双亲，福禄皆有，慈善心无毒，早限末年都安乐，只是夫君早克，晚年子名相旺之局，二男一女送终，寿元八十五岁。`,

    5.4: `一生清闲之命
      【男】此命推来厚且清，诗书满腹看功成，丰衣足食自然稳，正是人间有福人。
      《注解》此命为人灵巧，胸襟通达，志气高强，少年勤学有功名，年轻欠利，腹中多谋，有礼有义，有才有能，做事勤俭，一生福禄无亏，与人干事反为不美，亲朋戚友，四海春风。中限光辉门庭，逢善不欺，逢恶不怕，事有始终，吉人天相，四海扬名，成家立业，安然到老，高楼大厦，妻宫硬无刑，子息三人，只一子送终，寿元七十七，卒于春光中。
      【女】学问满腹运气强，谋望求财大吉祥。交易出行大得意，是非口舌皆无妨。八字虽说是女命，便比男强十分，移居他乡功名在，后有福光照中堂，敬老贤惠为人，婚姻慢成行人即至，走时可寻诸般称意。出限之中小发达，中限平平，四十七八交末运，一生衣禄不缺，夫君皆趁两硬刑有克，该有三子，只有一子送终，寿元五十五岁，过此六十七岁，腊月一去不回。`,

    5.5: `少年奋斗，晚年富贵之命
      【男】走马扬鞭争利名，少年作事费筹论，一朝福禄源源至，富贵荣华显六亲。
      《注解》此命为人灵巧机巧，初限尚不聚财，只是虚名虚利，财来财去，一生勤于学，自有功名，有衣禄，福星照命，中限交来可称心，求谋如意，出外有人恭敬，一生受贵，要问其他消息，事后兴家发达，壮年滔滔财源旺，滚滚利顺来，迎春花正发，微风细雨生，四十九交来末运，移花接木桂花香，夫妻百年同偕老，寿元八十之外，福禄荣昌，卒于春光之中。
      【女】吉祥平安志量高，女命求财任逍遥。交易婚姻大有意，夫君在外有音耗。此命推为心机灵巧，能说会讲，吃喝让人，性情急躁则限图虚利，财来财去一场空，口舌称意家宅平安，春光花正发，微风细雨生，四十七交末运，移花接木桂花香，夫君同偕老，寿元六十岁，子孙重振。`,

    5.6: `仁义之人，老来富贵之命
      【男】此格推来礼义通，一身福禄用无穷，甜酸苦辣皆尝过，滚滚财源稳且丰。
      《注解》此命为人性巧心灵，有口无心，事不保密，少年劳碌难免，志在四方，身心健康，前运乘阴少种树，怀才不遇，中限轻财，大举随行，移动得安然终日成，名声可望，旧业换新，名利享通，五人盆石皆白发，倾自心田此后昆，此命小事宜放松，方有子息，寿元八十二岁，卒于冬月之中。
      【女】明珠书士离埃来，女命口角消散开。走失郎君当两归，交易有成水无灾。此命为人贤惠善良，心直口快，遇事不藏机，以假成真有成，婚姻最和求财如意，也喜描红。初限劳碌奔波，中限福禄自然显露，末限换新，德高望重，方有子媳，切记寿八十三岁。`,

    5.7: `人人钦敬，离祖成家之命
      【男】福禄丰盈万事全，一身荣耀乐天年。名扬威震人争羡，此世逍遥宛似仙。福禄丰盈万事全，一身荣耀显双亲，名扬威振人钦敬，处世逍遥似遇春。
      《注解》此命为人心灵性巧，做事细致，足智多谋，志气高昂，少年勤学，名利成就，逍遥快乐，气量宽宏，财禄有余，犹如锦上添花，中限以来，自成自立，渐渐荣昌，招人进财，妻子晚配为美，四十至四十五六岁，看子成名，末限多得意，家中财产甚丰隆，妻宫无克，二子送终，寿元七十三岁，卒于正月中。
      【女】游鱼戏水被网惊，跳过龙门秧化龙。三根杨柳垂金线，万朵桃花显价能。女命推来八字轻，办事细致心灵巧，才貌双全皆事通，郎君一见称心怀，乃中由玉石，鲤鱼化喜事重得，能望到手，做事有成，早限如锦上添花，中运交来自成自立，渐渐荣昌，命限要早夫晚子，四十八九看子成龙，夫妻皆老，子媳二人送终，寿元七十六岁，卒于正月。`,

    5.8: `独创名利，晚年享福之命
      【男】平生福禄自然来，名利兼全福寿偕，金榜（雁塔）题名为贵客，紫袍玉带走金阶。
      《注解》此命为人忠直，做事有头有尾，身清气高，六亲有旺，兄弟少帮，妻宫并重，子息二三，他乡创业，官臣之命，只是与人干事，恩中招怨，反为不美，早限财来财去，中限兴旺，一子送终，寿元八十三岁，卒于四月之中。
      【女】此命推来转悠悠，时运未来莫强求。幸得今日重反点，自有好运在后头。此命推业心直口快，品德纯洁，女命非凡，骨肉姊妹少力，早限时运不佳，但中限劳碌奔波谋事有成，出门方可行，夫君来信疾病安宁，末限顺意，一生衣禄无亏，遇事恩中招怨，二女假子一人送终，寿元六十五岁。`,

    5.9: `宜安分守己，福禄自足之命
      【男】细推此格妙且清，必定才高礼义通，甲第之中应有分，扬鞭走马显威荣。
      《注解》此命为人性情暴躁，刚强，平生不受亏，所谓量大多智多能，受人尊敬，祖业凋零，兄弟只可画饼冲饥，亲戚则是望梅止渴，劳心见早，发福见迟，独立成家，只是早聚财，逢凶化吉，驳杂交过二十开外，方得顺利开怀，中限之命可进四方之财，出外有贵人助力，可精手艺营业，方能兴家立业，此间或有小疾相侵，再交限方得安然，坐享福禄，妻宫之配龙虎马牛，一子送老，寿元八十岁，卒于六月之中。
      【女】雨雪载途泥泞至，交易不定难出行。疾病还拉慢婚姻，谋望求财事不成。此命推来心灵巧，遇事细致，有始有终，为人慈善，贤惠皆老，早年劳碌成业，自成自立，姐妹无力，夫君未至投向不准，南向缠求名不准，早限交运，二十二方顺意，中限交运有贵人助，此间有疾相侵，末限安然到老，夫配龙虎牛马方可皆老，寿元八十六岁。`,

    6: `鹤立鸡群，显祖扬宗之命
      【男】一朝金榜快题名，显祖荣宗大器成，衣禄定然原裕足，田园财帛更丰盈。
      《注解》此命为人灵机性巧，胸襟发达，志气高强，少年勤学，有功名之格，青年欠利，腹中多谋，有礼有仪，有才能，做事勤俭，一生福禄无亏，与人做事，有力无功，兄弟骨肉中多谋，交朋友，四海名扬，中限光辉门户，早能发达，义利分明，末限成家立业安然到老，高楼大厦，妻宫两硬无刑，子息三人，只有一人送终，寿元七十七岁，卒于春光之中。
      【女】女命八字喜气和，谋望求财吉庆多。口舌渐消疾病少，夫君走失归老窝。此命为人善良，机灵聪明，年幼勤学有功名之格，一生福禄无亏，喜结干亲姊妹，四海春光，婚姻求意出地得地，交易同伙也无吉利，中限过四十七岁和方顺意，末限家宅安宁，仄然到老，夫配两硬无刑克，子媳二人方难一子送终，寿元七十三岁。`,

    6.1: `名利双收，一生富贵之命
      【男】不作朝中金榜客，定为世上大财翁，聪明天赋经书熟，名显高科自是荣。
      《注解》此命为人心秉直，聪明利达，心善口快，有才能。见善不欺，逢恶不怕，刚柔有济，事有始终，早能宽大，而能聚财，祖业如旧，六亲兄弟有靠，自立家计出外更好，二十至二十五六七八九岁有险，三十开外古镜重磨，明月再圆，六十六至七十方交大运妻宫小配，寿元七十七岁，卒于春光之中。
      【女】缘木求鱼事多端，虽不得鱼无后害。若是行险弄巧地，事不遂心枉安排。此命鹪为性情急躁，善不欺恶不怕，遇事有始有终，早限运不待，六亲骨肉无靠，时令不做好事颠倒，打算的多遂心的不佳，驳杂多端，中限交运运好，，三十出头有一险，六十开外大运，无妻小配无刑克，寿元七十九岁。`,

    6.2: `读书聪明，特任高官，大振家风之命
      【男】此命生来福不穷，读书必定显亲宗，紫衣金带为卿相，富贵荣华熟与同。
      《注解》此命为人忠直敦厚，心无所毒，性巧灵敏，深谋远虑，吉人天相，心中多劳，受人钦叹，美中不足，中限渐入佳境，名利可佳，刚济有情，二十九交来阳春暖，东北佳音，天津四通，花甲一二岁大顺，天赐麒麟送老，寿元八十五岁，卒于冬月之中。
      【女】指日升高气象新，走失待人有音信。好命遇事遂心好，伺病口舌皆除根。此命有男女貌，性情温存，吉人天相之美，心无所毒，憨厚近君但有小人无情，六亲骨肉冷落，早限美中不足，晚年顺泰到老，求财得手。天赐创建人送终，寿元八十六岁，卒于冬月之中。`,

    6.3: `长寿，高官显耀，上格之命
      【男】命主为官福禄长，得来富贵实丰常，名题雁塔传金榜，大显门庭天下扬。
      《注解》此命为人聪明利达，近知识，远小人，自觉性强，改悔及时，君子量大，福禄寿三星拱照，富贵名扬天下，荣宗显祖之格，可是美中欠佳，妻宫有硬，操劳心重，先天下之忧而忧，后天下之乐而乐，寿元七十有八，享于荣绵归期，二子二女送终。
      【女】五官脱运难抬头，女命须当把财求。交易少行有人助，疾病口舌不须愁。此命推业心地聪明，有入公门之福，一生衣禄无亏，初限平隐，二十六七八九遇事有损，恐要伤财，如不走善门，还要克夫克子，四十三四又有一灾，过了五十岁方成大运，家已安宁，二真一假上到台，寿元七十四岁。`,

    6.4: `【男】此格威权不可当，紫袍金带尘高堂。荣华富贵谁能及？万古留名姓氏扬。
      权威大官，万古留名之富贵命
      此格威权不可当，紫袍金带坐高堂，荣华富贵谁能及，积玉堆金满储仓。
      《注解》此格威权不可当，紫袍金带坐高堂，荣华富贵谁能及，积玉堆金满储仓。
      【女】俊鸟曾得出笼中，脱离灾难显威风。一朝得意福立至，东南西北任意行。此命为人心性伶俐机变，性直刚强，劳碌奔波，自成自立，此格男命灵官，子命为大，命为至商，艺术超人，合伙如意，便宜如心，买卖兴隆，求财十分，人口皆好，出门皆可贵，早限辛苦奔波小康，中年才交好运，四十六上有一灾，有福至照应，晚年财运丰盈，夫君无克同偕老，子媳一双可送终，寿元六十九岁。`,

    6.5: `【男】细推此命福非轻，富贵荣华孰与争？
      定国安邦人极品，威声显赫震寰瀛。
      【女】此命推来福不轻，慈善为事受人敬。天降文王开基业，富贵荣华八百年。此命为人慈善憨厚，孝敬双亲，骨肉姊妹和气生财，福禄双全，心无所毒，所得富贵，出行有益，求财比准，疾病皆除，做事平稳，中限大运兴旺，但防小人所害，夫人无刑克，寿元六十四岁，过此八十五岁。`,

    6.6: `大富大贵，堆金积玉之福命
      【男】此格人间一福人，堆金积玉满堂春，从来富贵由天定，金榜题名更显亲。
      《注解》此格人间一福人，堆金积玉满堂春，从来富贵由天定，正笏垂绅谒圣君。
      【女】时来运转锐气周，贤惠淑女君子求。钏鼓乐之大吉庆，女名逢之吉悠悠。此命女为性直刚强，心性慈善皆无毒，勤俭持家能到手，家庭安宁，时逢吉日在运中，纵有凶处不为凶，婚姻合伙渐渐好，生意财源日日增，但子媳迟招，夫人方才无克，子媳四人只一人送终，寿元四十八岁，过此可到花甲。`,

    6.7: `一世荣华，享福无边之命
      【男】此命生来福自宏，田园家业最高隆，平生衣禄盈丰足，一世荣华万事通。
      《注解》此命生来福自宏，田园家业最高隆，平生衣禄盈丰足，一世荣华万事通。
      【女】乱丝无头定有头，碰着闲磨且暂推。交易出有无好处，谋事求财心不遂。此命为人贤惠，善良心直口快，遇事不顺，心待人憨厚，交姊妹骨肉皆如意，手足有情，中限运不佳，疾病未好，婚姻不巧，口舌琐碎，做事颠倒，中限运不佳，家宅安宁，末限衣禄丰盈，家业一新，口刎必防，寿元八十岁。`,

    6.8: `【男】享受天赐之福，近贵显达之命
      富贵由天莫苦求，万金家计不须谋，如今不比前翻事，祖业根基千古留。
      《注解》富贵由天莫苦求，万金家计不须谋，如今不比前翻事，祖业根基千古留。
      【女】水庭明月不可捞，女命早限命不高。交易出行难获得，末限命运渐渐好。此命推来聪明伶俐，举止文雅，礼貌待人，衣禄皆主命，早限运坎坷，自奔自立，劳碌奔波，求名不遂，疾病未愈，婚姻无成，合伙不到，中年运不平，遇事见灾，一身受恭敬，四十五六交末运，如同火苗逢柴渐渐高，夫君白发同偕老，寿元七十九岁，家宅大吉昌。`,

    6.9: `【男】祖业虽多，若不紧守也会落空。
      君是人间衣禄星，一生富贵众人钦，总然福禄由天定，安享荣华过一生。
      《注解》君是人间衣禄星，一生富贵众人钦，纵然福禄由天定，安享荣华过一生。
      【女】太公封祖不非凡，女子求财稳如山。交易合伙大吉庆，疾病口角消除安。`,

    7: `一生清荣，富贵双全之命。
      【男】此命推来福禄宏，不须愁虑苦劳心，荣华富贵已天定，正笏垂绅拜紫宸。
      《注解》此命推来福禄宏，不须愁虑苦劳心，一生天定衣与禄，富贵荣华主一生。
      【女】此命推来喜气新，郎君遇着多遂心。女命交了顺当运，富贵衣禄平乐生。`,

    7.1: `【男】此命生成大不同，公侯卿相在其中。
      一生自有逍遥福，富贵荣华极品隆。
      【女】此命推来鸿运交，再不需愁来苦劳。一生身有衣禄福，按享荣华在其中。`,

    7.2: `此格世界罕有生，十代积善产此人。
      天上紫微来照命，统治万民乐太平。`,
  };

  static chineseDigits = [
    '零',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
  ];

  // 获取评语和重量
  static getData(bazi: any[], yinMouth: any, yinDay: any) {
    const [yy, , , hh] = bazi;
    // this.weight.year;
    // console.log('this.weight', this.weight)
    const [weight_y, weight_m, weight_d, weight_h] = [
      this.weight.year[yy as JZ_60],
      this.weight.mouth[yinMouth as keyof Ytgcg],
      this.weight.day[yinDay as keyof Ytgcg],
      this.weight.hour[hh[1] as DZ],
    ];
    const weight = Math.round((weight_y + weight_m + weight_d + weight_h) * 10) / 10;

    const weight_text =
      this.chineseDigits[+String(weight * 10)[0]] +
      '两' +
      this.chineseDigits[+String(weight * 10)[1]] +
      '钱';

    return {
      weight_text,
      comment: this.comment[weight as keyof Ytgcg],
      weight,
      weight_y,
      weight_m,
      weight_d,
      weight_h,
    };
  }
}
