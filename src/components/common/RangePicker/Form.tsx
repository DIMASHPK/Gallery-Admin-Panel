import React from 'react';
import { useFormikContext } from 'formik';
import RangePicker, { RangePickerPropsType } from './index';

export type RangePickerFormPropsType = RangePickerPropsType & {
  name: string;
};

const RangePickerForm: React.FC<RangePickerFormPropsType> = props => {
  const { name } = props;

  const { setFieldValue } = useFormikContext();

  const handleChange = (date: string | null) => {
    if (date) {
      setFieldValue(name, date);
    }
  };

  return <RangePicker {...props} onChange={handleChange} />;
};

export default RangePickerForm;
