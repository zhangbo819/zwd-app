// TODO use .d.ts

// 主 stack
export enum StackPages {
  Home = 'Home',
  About = 'About',
  BaziInfo = 'BaziInfo',
  BaziBook = 'BaziBook',
}

export type RootStackParamList = {
  [StackPages.Home]: undefined;
  [StackPages.About]: undefined;
  [StackPages.BaziInfo]: PaipanItem;
  [StackPages.BaziBook]: undefined;
};

// 底部 Tab
export enum HomeBottomTabPages {
  Home = 'HomeTab',
  WareHouse = 'WareHouseTab',
  Bazi = 'Bazi',
  Mine = 'MineTab',
}
export type HomeBottomTabParamList = {
  [HomeBottomTabPages.Home]: undefined;
  [HomeBottomTabPages.WareHouse]: undefined;
  [HomeBottomTabPages.Bazi]: undefined;
  [HomeBottomTabPages.Mine]: undefined;
};

// bazi 页面顶部 Tab
export enum BaziScreenName {
  Paipan = 'Paipan',
  List = 'List',
}

export type BaziMaterialTopTabParamList = {
  [BaziScreenName.Paipan]: undefined;
  [BaziScreenName.List]: undefined;
};

// 存储到本地数据中的数据类型
export type PaipanItem = {
  name: string;
  gender: 1 | 0;
  date: number;
  id: number | string;
};
