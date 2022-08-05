import { atom } from 'recoil';
import { listData } from '~/data';

export const listDataAtom = atom({
  key: 'listData',
  default: listData,
});

export const selectedListItemsAtom = atom<string[]>({
  key: 'selectedListItems',
  default: [],
});
