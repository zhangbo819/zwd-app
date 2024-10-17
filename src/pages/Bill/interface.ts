import React from 'react';
import {KeyboardTypeOptions, StyleProp, TextStyle} from 'react-native';

export type typeRenderItems = {
  title: string;
  value: string;
  set: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  warn?: string | null;
  inputStyle?: StyleProp<TextStyle>;
  maxLength?: number;
  multiline?: boolean;
};

export enum billScreenName {
    input = 'input',
    list = 'list'
}

export const StorageBillKey = 'billData';
