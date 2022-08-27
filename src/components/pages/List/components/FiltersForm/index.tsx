import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { ToolsFormType } from '~/types';
import FieldArrayRender from '~/components/pages/List/components/FiltersForm/FieldArrayRender';
import { ListItem } from '@mui/material';

const FiltersForm: React.FC = () => {
  const formik = useFormikContext<ToolsFormType>();

  const { values } = formik;

  const emptyHint = !values.changeableValues.filters.length && (
    <ListItem>Filters are empty</ListItem>
  );

  return (
    <>
      {emptyHint}
      <FieldArray
        name="changeableValues.filters"
        render={arrayHelpers => <FieldArrayRender {...arrayHelpers} />}
      />
    </>
  );
};

export default FiltersForm;
