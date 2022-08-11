import { ReadOnlySelectorOptions, selector } from 'recoil';
import { listDataAtom } from '~/recoil/atoms';
import { ListItemType } from '~/types';

export const listDetailsSelector = (id: string) => {
  const handleGet: ReadOnlySelectorOptions<
    ListItemType | undefined
  >['get'] = data => {
    const { get } = data;

    const detailsListData = get(listDataAtom);

    const handleFind = ({ id: detailsId }: typeof detailsListData[number]) =>
      detailsId === id;

    return detailsListData.find(handleFind);
  };

  return selector({
    key: 'listDetails',
    get: handleGet,
  });
};
