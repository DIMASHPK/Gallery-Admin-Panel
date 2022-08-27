import React from 'react';
import { Field, FieldProps } from 'formik';
import Input from '~/components/common/Input';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Select from '~/components/common/Select';
import { FILTERS } from '~/data/constants';
import { toCapitalize } from '~/utils/helpers';
import useStyles from './styles';

type FilterItemPropsType = {
  index: number;
  onRemoveFilter: () => void;
};

const FilterItem: React.FC<FilterItemPropsType> = props => {
  const { index, onRemoveFilter } = props;

  const styles = useStyles();

  const selectOptions = Object.values(FILTERS).map(({ NAME: name }) => ({
    value: name,
    label: toCapitalize(name),
  }));

  return (
    <Box css={styles.filterItemWrapper}>
      <Field name={`changeableValues.filters.${index}.name`}>
        {({ field }: FieldProps) => (
          <Select
            {...field}
            label="filter name"
            size="small"
            css={styles.nameField}
            options={selectOptions}
          />
        )}
      </Field>
      <Field name={`changeableValues.filters.${index}.value`}>
        {({ field }: FieldProps) => (
          <Input
            {...field}
            size="small"
            label="filter value"
            css={styles.valueField}
          />
        )}
      </Field>
      <IconButton color="error" size="small" onClick={onRemoveFilter}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default FilterItem;
