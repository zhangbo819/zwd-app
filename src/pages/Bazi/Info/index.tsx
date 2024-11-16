import React, {FC, useEffect, useMemo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Spin from '../../../components/Spin';
import {COLOR_THEME_COMMON, NAV_COMMON_HEIGHT} from '../../../constant/UI';
import {RootStackParamList, StackPages} from '../../../types/interface';
import {DZ, Ten, TG, ZhangSheng} from '../../../util/wuxing';
import paipan, {PaipanInfo} from '../../../util/paipan';
import {ShenshaItem} from '../../../util/shensha';
import {isiOS} from '../../../constant/config';

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
  const [index, setIndex] = useState(0);
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
    <View style={[styles.container, isiOS && {paddingTop: NAV_COMMON_HEIGHT}]}>
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
                style={{backgroundColor: '#fff'}}
                indicatorStyle={{
                  backgroundColor: COLOR_THEME_COMMON,
                  height: StyleSheet.hairlineWidth * 2,
                }}
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
  pagesScrollView: {
    paddingHorizontal: 8,
    // paddingBottom: 16,
  },
  topInfo: {
    padding: 8,
    backgroundColor: '#fff',
  },
  yinyangText: {
    fontSize: 16,
  },

  pillarGrid: {
    marginTop: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  subheading: {
    fontSize: 16,
    color: '#9F9F9F',
    textAlign: 'center',
  },
  tenText: {
    fontSize: 16,
    color: '#4B4B4B',
    textAlign: 'center',
  },
  shenshaText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },

  tgDzRelation: {
    marginVertical: 12,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  tgDzRelationTitle: {
    fontSize: 16,
    color: COLOR_THEME_COMMON,
    fontWeight: 'bold',
  },
  tgGxRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tgGxItem: {
    marginHorizontal: 4,
    fontSize: 16,
  },
});

export default BaziInfo;
