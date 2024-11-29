import {atom, DefaultValue, selector} from 'recoil';
import {fetchToCheckVersionRes} from '../util';
import textJSON from '../util/textJSON';

export const versionState = atom<fetchToCheckVersionRes | null>({
  key: 'versionState',
  default: null,
});

const baziModalState = atom({
  key: 'baziModalState',
  default: {
    isShow: false,
    title: '',
    text: '',
  },
});

export const baziModalSelector = selector({
  key: 'baziModalSelector',
  get: ({get}) => ({...get(baziModalState)}),
  set: ({set}, newValue) => {
    if (!(newValue instanceof DefaultValue)) {
      if (newValue.text === '' || typeof newValue.text === 'undefined') {
        set(baziModalState, {...newValue, isShow: false});
        return;
      } else if (textJSON[newValue.text]) {
        set(baziModalState, {
          ...newValue,
          title: newValue.title || newValue.text,
          text: textJSON[newValue.text],
        });
        return;
      }
    }

    set(baziModalState, newValue);
  },
});
