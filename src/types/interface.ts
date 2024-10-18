// TODO use .d.ts

export enum StackPages {
  Home = 'Home',
  About = 'About',
}

export type RootStackParamList = {
  [StackPages.Home]: undefined;
  [StackPages.About]: undefined;
};

export enum HomeBottomTabPages {
  Home = 'HomeTab',
  WareHouse = 'WareHouseTab',
  Mine = 'MineTab',
}
export type HomeBottomTabParamList = {
  [HomeBottomTabPages.Home]: undefined;
  [HomeBottomTabPages.WareHouse]: undefined;
  [HomeBottomTabPages.Mine]: undefined;
};
