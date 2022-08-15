import { atom } from 'recoil';
import { ListItemType } from '~/types';

export const listDataAtom = atom<null | ListItemType[]>({
  key: 'listData',
  default: null,
});

export const selectedListItemsAtom = atom<number[]>({
  key: 'selectedListItems',
  default: [],
});

export const listDetailsDataAtom = atom<null | ListItemType>({
  key: 'listDetailsData',
  default: null,
});
