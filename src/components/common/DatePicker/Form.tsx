import React from 'react';
import moment, { Moment } from 'moment';
import { useFormikContext } from 'formik';
import DatePicker, { DatePickerPropsType } from './index';

export type DatePickerFormPropsType = DatePickerPropsType & {
  name: string;
};

const DatePickerForm: React.FC<DatePickerFormPropsType> = props => {
  const { name } = props;

  const { setFieldValue } = useFormikContext();

  const handleChange = (date: Moment | null) => {
    if (date) {
      setFieldValue(name, moment(date).format());
    }
  };

  return <DatePicker {...props} onChange={handleChange} />;
};

export default DatePickerForm;
