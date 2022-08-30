import React from 'react';
import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker';
import { Moment } from 'moment';
import Input from '~/components/common/Input';
import { TextFieldProps } from '@mui/material';

export type DatePickerPropsType = Omit<
  DesktopDatePickerProps<string, Moment>,
  'renderInput'
> & {
  size: TextFieldProps['size'];
};

const DatePicker: React.FC<DatePickerPropsType> = props => {
  const { size, ...rest } = props;

  return (
    <MuiDatePicker
      inputFormat="DD/MM/YY"
      {...rest}
      renderInput={params => <Input {...params} size={size} />}
    />
  );
};

export default DatePicker;
