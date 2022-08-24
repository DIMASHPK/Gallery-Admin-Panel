import { atom } from 'recoil';
import { ListItemType, PhotoFullViewType } from '~/types';

export const listDataAtom = atom<null | ListItemType[]>({
  key: 'listData',
  default: null,
});

export const selectedListItemsAtom = atom<number[]>({
  key: 'selectedListItems',
  default: [],
});

export const listDetailsDataAtom = atom({
  key: 'listDetailsData',
  default: null as unknown as ListItemType,
});

export const detailsHasPreviousAtom = atom({
  key: 'detailsHasPrevious',
  default: false,
});

export const detailsHasNextAtom = atom({
  key: 'detailsHasNext',
  default: false,
});

export const photoFullViewDataAtom = atom<PhotoFullViewType>({
  key: 'photoFullViewData',
  default: {
    images: [],
    isOpen: false,
    photoIndex: 0,
  },
});
