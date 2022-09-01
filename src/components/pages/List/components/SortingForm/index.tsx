import React from 'react';
import Box from '@mui/material/Box';
import useSortingSelectsOptions from '~/components/pages/List/components/SortingForm/hooks/useSortingSelectsOptions';
import RemoveIconButton from '~/components/common/RemoveIconButton';
import useClearSorting from '~/components/pages/List/components/SortingForm/hooks/useClearSorting';
import RenderField from '~/components/pages/List/components/SortingForm/RenderField';
import useStyles from './styles';

const SortingForm: React.FC = () => {
  const styles = useStyles();

  const { sortingValueOptions, sortingOrderOptions } =
    useSortingSelectsOptions();

  const { handleClear } = useClearSorting();

  return (
    <Box css={styles.sortingFormWrapper}>
      <RenderField
        options={sortingOrderOptions}
        css={styles.orderField}
        label="Sorting order"
        name="changeableValues.sorting.order"
      />
      <RenderField
        options={sortingValueOptions}
        css={styles.valueField}
        label="Sorting value"
        name="changeableValues.sorting.value"
      />
      <RemoveIconButton onClick={handleClear} />
    </Box>
  );
};

export default SortingForm;
