import React, {FC, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Spin from '../../../components/Spin';
import {COLOR_THEME_COMMON} from '../../../constant/UI';
import {RootStackParamList, StackPages} from '../../../types/interface';
import {DZ, Ten, TG, ZhangSheng} from '../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../util/paipan';
import {ShenshaItem} from '../../../util/shensha';

import BaziModal from './components/BaziModal';
import BaseInfo from './BaseInfo';
import CareerList from './CareerList';

// const init_Data = paipan.GetInfo(1, Date.now());
export enum PillarTitle {
  年柱 = '年柱',
  月柱 = '月柱',
  日柱 = '日柱',
  时柱 = '时柱',
  大运 = '大运',
  流年 = '流年',
  流月 = '流月',
  流日 = '流日',
}

export type PillarItem = {
  title: string;
  isShow: boolean;
  zhuxing: Ten;
  tg: TG;
  dz: DZ;
  dzcg: string[];
  fx: number[];
  xingyun: ZhangSheng | null;
  zizuo: ZhangSheng | null;
  nayin: string;
  ss: ShenshaItem[];
};

export const Sizhu = [
  PillarTitle.年柱,
  PillarTitle.月柱,
  PillarTitle.日柱,
  PillarTitle.时柱,
];

const BaziInfo: FC<
  NativeStackScreenProps<RootStackParamList, StackPages.BaziInfo>
> = props => {
  const [index, setIndex] = useState(1);
  const [paipanInfo, setPaipanInfo] = useState<PaipanInfo | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const {gender, date} = props.route.params;

    const newPaiInfo = paipan.GetInfo(gender, date);
    setPaipanInfo(newPaiInfo);
    setTimeout(() => {
      setLoading(false);
    });
  }, [props.route.params]);

  const renderScene = useMemo(() => {
    const first = () => (
      <>
        {paipanInfo !== null && (
          <BaseInfo name={props.route.params.name} paipanInfo={paipanInfo} />
        )}
      </>
    );
    const second = () => (
      <>
        {paipanInfo !== null && (
          <CareerList name={props.route.params.name} paipanInfo={paipanInfo} />
        )}
      </>
    );
    return SceneMap({
      first: first,
      second: second,
    });
  }, [paipanInfo, props.route.params.name]);

  return (
    <View style={styles.container}>
      <Spin spinning={loading}>
        <TabView
          navigationState={{
            index,
            routes: [
              {key: 'first', title: '基本信息'},
              {key: 'second', title: '专业细盘'},
            ],
          }}
          renderScene={renderScene}
          renderTabBar={p => {
            return (
              <TabBar
                style={styles.tabBg}
                indicatorStyle={styles.tabBarIndicator}
                activeColor={COLOR_THEME_COMMON}
                inactiveColor={'#666'}
                {...p}
              />
            );
          }}
          onIndexChange={setIndex}
        />
      </Spin>
      {/* 弹窗 */}
      <BaziModal />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    // alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  tabBg: {
    backgroundColor: '#fff',
  },
  tabBarIndicator: {
    backgroundColor: COLOR_THEME_COMMON,
    height: StyleSheet.hairlineWidth * 2,
  },
});

export default BaziInfo;
