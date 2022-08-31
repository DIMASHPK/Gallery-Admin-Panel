import React from 'react';
import { Moment } from 'moment/moment';
import { PickersDayProps } from '@mui/x-date-pickers';
import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopDatePickerProps } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker';
import { TextFieldProps } from '@mui/material';
import useClickDay from '~/components/common/RangePicker/hooks/useClickDay';
import RangeDay from '~/components/common/RangePicker/components/RangeDay';
import useToggleRangePicker from '~/components/common/RangePicker/hooks/useToggleRangePicker';
import RangeInput from '~/components/common/RangePicker/components/RangeInput';
import {
  getSelectedDate,
  getValueForPicker,
} from '~/components/common/RangePicker/helpers';

export type RangePickerPropsType = Omit<
  DesktopDatePickerProps<Moment, Moment>,
  'onChange' | 'renderInput'
> & {
  onChange: (date: string | null) => void;
  size: TextFieldProps['size'];
};

const RangePicker: React.FC<RangePickerPropsType> = props => {
  const { onClose, onChange, value, size, ...rest } = props;

  const { handleClickDay, dates } = useClickDay(value);

  const valueForPicker = getValueForPicker(dates);

  const { open, handleOpen, handleClose } = useToggleRangePicker({
    onClose,
    onChange,
    dates,
  });

  const renderDay = (
    ...args: [Moment, Array<Moment | null>, PickersDayProps<Moment>]
  ) => {
    const [date, , pickersDayProps] = args;

    return (
      <RangeDay
        pickersDayProps={pickersDayProps}
        selected={getSelectedDate(date, dates)}
        onClickDay={handleClickDay(date)}
      />
    );
  };

  const renderInput = (params: TextFieldProps) => (
    <RangeInput {...params} value={value} onOpen={handleOpen} size={size} />
  );

  return (
    <MuiDatePicker
      {...rest}
      inputFormat="DD/MM/YY"
      value={valueForPicker}
      renderDay={renderDay}
      onClose={handleClose}
      onChange={() => null}
      closeOnSelect={false}
      disableHighlightToday
      open={open}
      renderInput={renderInput}
    />
  );
};

RangePicker.defaultProps = {
  onChange: () => null,
};

export default RangePicker;
