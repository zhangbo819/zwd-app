enum StackPages {
  Home = 'Home',
  About = 'About',
}

type RootStackParamList = {
  [StackPages.Home]: undefined;
  [StackPages.About]: undefined;
};

enum HomeBottomTabPages {
  Home = 'HomeTab',
  WareHouse = 'WareHouseTab',
  Mine = 'MineTab',
}
type HomeBottomTabParamList = {
  [HomeBottomTabPages.Home]: undefined;
  [HomeBottomTabPages.WareHouse]: undefined;
  [HomeBottomTabPages.Mine]: undefined;
};
