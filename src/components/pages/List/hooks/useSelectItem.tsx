import { useRecoilState } from 'recoil';
import { selectedListItemsAtom } from '~/recoil/atoms';
import { useCallback, useMemo } from 'react';

export default (id: string): [boolean, () => void] => {
  const [selectedItems, setSelectedItems] = useRecoilState(
    selectedListItemsAtom
  );

  const handleCheckboxChange = useCallback(() => {
    const handleState = (prevState: string[]) => {
      const currentData = [...prevState];
      const findingIndex = currentData.indexOf(id);

      if (findingIndex > -1) {
        currentData.splice(findingIndex, 1);
      } else {
        currentData.push(id);
      }

      return currentData;
    };

    setSelectedItems(handleState);
  }, [setSelectedItems]);

  const isSelected = useMemo(
    () => selectedItems.includes(id),
    [id, selectedItems]
  );

  return [isSelected, handleCheckboxChange];
};
