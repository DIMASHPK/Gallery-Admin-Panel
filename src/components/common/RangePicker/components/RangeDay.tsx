import { Moment } from 'moment';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import React from 'react';

type RangeDayPropsType = {
  pickersDayProps: PickersDayProps<Moment>;
  selected: boolean;
  onClickDay: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const RangeDay: React.FC<RangeDayPropsType> = props => {
  const { pickersDayProps, selected, onClickDay } = props;

  return (
    <PickersDay {...pickersDayProps} onClick={onClickDay} selected={selected} />
  );
};

export default RangeDay;
