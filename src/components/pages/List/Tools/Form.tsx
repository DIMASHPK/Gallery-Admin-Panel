import React from 'react';
import { Formik } from 'formik';
import { ChildrenType } from '~/types';

type ToolsFormPropsType = ChildrenType;

const ToolsForm: React.FC<ToolsFormPropsType> = props => {
  const { children } = props;

  const initialValues = {
    sorting: {
      order: '',
      value: '',
    },
    filters: {
      name: '',
      size: '',
      date: [],
      description: '',
      cond: '',
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
