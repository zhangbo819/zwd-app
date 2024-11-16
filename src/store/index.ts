import {atom} from 'recoil';
import {fetchToCheckVersionRes} from '../util';

export const versionState = atom<fetchToCheckVersionRes | null>({
  key: 'versionState',
  default: null,
});
