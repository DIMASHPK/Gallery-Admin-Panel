import React from 'react';
import { ArrayHelpers, useFormikContext } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { ToolsFormType } from '~/types';
import Box from '@mui/material/Box';
import { ListItem } from '@mui/material';
import FilterItem from '~/components/pages/List/components/FilterItem';
import useFilterHandlers from '~/components/pages/List/components/FiltersForm/hooks/useFilterHandlers';
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

  return (
    <ListItem>
      <Box css={styles.filtersListItemContainer}>
        <Box>{filters.map(handleMap)}</Box>
        <Button
          size="small"
          startIcon={<AddIcon />}
          variant="contained"
          onClick={handleAddFilter}
        >
          Add Filter
        </Button>
      </Box>
    </ListItem>
  );
};

export default FieldArrayRender;
