import React from 'react';
import { Formik } from 'formik';
import { ChildrenType } from '~/types';
import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';
import { ToolsFormSchema } from '~/components/pages/List/components/Tools/Validation';
import { ToolsFormType } from '~/components/pages/List/types';

type ToolsFormPropsType = ChildrenType & {
  setFilters: React.Dispatch<React.SetStateAction<string>>;
};

const ToolsForm: React.FC<ToolsFormPropsType> = props => {
  const { children, setFilters } = props;

  const initialValues: ToolsFormType = {
    changeableValues: {
      [TOOLS_FORM_VALUES_KEYS.SORT]: {
        order: '',
        value: '',
      },
      [TOOLS_FORM_VALUES_KEYS.FILTER]: [],
      [TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION]: '',
    },
    currentValues: {
      [TOOLS_FORM_VALUES_KEYS.SORT]: {
        order: '',
        value: '',
      },
      [TOOLS_FORM_VALUES_KEYS.FILTER]: [],
      [TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION]: '',
    },
    chipsList: [],
  };

  const handleSubmit = ({ currentValues }: ToolsFormType) => {
    setFilters(JSON.stringify(currentValues));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ToolsFormSchema}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {children}
    </Formik>
  );
};

export default ToolsForm;
