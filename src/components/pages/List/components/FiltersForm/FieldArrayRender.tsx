import React from 'react';
import { ArrayHelpers, useFormikContext } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ListItem } from '@mui/material';
import FilterItem from '~/components/pages/List/components/FilterItem';
import useFilterHandlers from '~/components/pages/List/components/FiltersForm/hooks/useFilterHandlers';
import ConditionalSelect from '~/components/pages/List/components/ConditionalSelect';
import { FILTERS } from '~/components/pages/List/constants';
import { ToolsFormType } from '~/components/pages/List/types';
import useStyles from './styles';

type FieldArrayRenderPropsType = ArrayHelpers;

const FieldArrayRender: React.FC<FieldArrayRenderPropsType> = props => {
  const formik = useFormikContext<ToolsFormType>();

  const styles = useStyles();

  const { filters } = formik.values.changeableValues;

  const { handleAddFilter, handleRemoveFilter } = useFilterHandlers(props);

  const handleMap = (_: any, index: number) => (
    <FilterItem
      index={index}
      onRemoveFilter={() => handleRemoveFilter(index)}
      key={index}
    />
  );

  const addFilterDisabled = filters.length >= Object.keys(FILTERS).length;

  return (
    <ListItem>
      <Box css={styles.filtersListItemContainer}>
        <Box>{filters.map(handleMap)}</Box>
        <ConditionalSelect />
        <Button
          size="small"
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleAddFilter}
          disabled={addFilterDisabled}
        >
          Add Filter
        </Button>
      </Box>
    </ListItem>
  );
};

export default FieldArrayRender;
