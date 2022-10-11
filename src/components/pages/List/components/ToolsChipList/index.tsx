import React from 'react';
import { useFormikContext } from 'formik';
import ToolsChip from '~/components/pages/List/components/ToolsChip';
import { ToolsFormType } from '~/components/pages/List/types';

const ToolsChipList: React.FC = () => {
  const {
    values: { chipsList },
  } = useFormikContext<ToolsFormType>();

  const handleMap = (
    { label, type, filterValue }: ToolsFormType['chipsList'][number],
    index: number
  ) => (
    <ToolsChip
      key={label}
      type={type}
      filterValue={filterValue}
      label={label}
      index={index}
    />
  );

  return <>{chipsList.map(handleMap)}</>;
};

export default ToolsChipList;
