import React from 'react';
import { Formik } from 'formik';
import { ChildrenType, ToolsFormType } from '~/types';

type ToolsFormPropsType = ChildrenType;

const ToolsForm: React.FC<ToolsFormPropsType> = props => {
  const { children } = props;

  const initialValues: ToolsFormType = {
    changeableValues: {
      sorting: {
        order: '',
        value: '',
      },
      filters: [],
    },
    currentValues: {
      sorting: {
        order: '',
        value: '',
      },
      filters: [],
    },
  };

  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {children}
    </Formik>
  );
};

export default ToolsForm;
