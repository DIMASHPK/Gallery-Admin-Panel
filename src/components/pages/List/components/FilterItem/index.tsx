import React from 'react';
import { Field, FieldProps } from 'formik';
import Box from '@mui/material/Box';
import Select from '~/components/common/Select/';
import useFilterComponent from '~/components/pages/List/components/FilterItem/hooks/useFilterComponent';
import useSelectOptions from '~/components/pages/List/components/FilterItem/hooks/useSelectOptions';
import RemoveIconButton from '~/components/common/RemoveIconButton';
import useStyles from './styles';

type FilterItemPropsType = {
  index: number;
  onRemoveFilter: () => void;
};

const FilterItem: React.FC<FilterItemPropsType> = props => {
  const { index, onRemoveFilter } = props;

  const styles = useStyles();

  const selectOptions = useSelectOptions(index);

  const getCurrentFilterComponent = useFilterComponent(index);

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
        {({ field }: FieldProps) =>
          getCurrentFilterComponent({
            ...field,
            size: 'small',
            label: 'filter value',
            css: styles.valueField,
          })
        }
      </Field>
      <RemoveIconButton onClick={onRemoveFilter} />
    </Box>
  );
};

export default FilterItem;
