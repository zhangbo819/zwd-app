import React, { Component } from 'react';

import { createMaterialTopTabNavigator } from 'react-navigation';

import { HOC_NAV_TAB, getTabNavigatorConfig, tabOptions } from './config';

// 账单列表
import WarehouseList from '../../pages/warehouse/WarehouseList';
import WarehouseInput from '../../pages/warehouse/WarehouseInput';

import { viewportWidth, NAV_COMMON_HEIGHT } from '../../constant/UI';

// billList
export const billListTopTab = HOC_NAV_TAB(
    createMaterialTopTabNavigator(
        {
            列表: { screen: WarehouseList },
            录入: { screen: WarehouseInput },
        }, getTabNavigatorConfig({
            tabBarOptions: {
                ...tabOptions,
                tabStyle: {
                    width: viewportWidth / 2,
                    padding: 0,
                    height: NAV_COMMON_HEIGHT
                },
                labelStyle: {
                    fontSize: 14,
                },
                style: {
                    backgroundColor: '#fff'
                }
            }
        }, true)
    ), {}
);
