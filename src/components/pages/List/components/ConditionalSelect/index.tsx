import React from 'react';
import { Field, FieldProps, useFormikContext } from 'formik';
import { ToolsFormType } from '~/types';
import Typography from '@mui/material/Typography';
import Select from '~/components/common/Select';
import Box from '@mui/material/Box';
import { FILTERS_CONDITION_OPTIONS } from '~/data/constants';
import useStyles from './styles';

const ConditionalSelect: React.FC = () => {
  const formik = useFormikContext<ToolsFormType>();

  const styles = useStyles();

  const { filters } = formik.values.changeableValues;

  const conditionalOptions = Object.values(FILTERS_CONDITION_OPTIONS);

  if (filters.length < 2) {
    return null;
  }

  return (
    <Box css={styles.filtersConditionWrapper}>
      <Typography>Filters Condition</Typography>
      <Field name="filtersCondition">
        {({ field }: FieldProps) => (
          <Select
            options={conditionalOptions}
            {...field}
            label="Filters condition"
            size="small"
            css={styles.filtersCondition}
          />
        )}
      </Field>
    </Box>
  );
};

export default ConditionalSelect;
