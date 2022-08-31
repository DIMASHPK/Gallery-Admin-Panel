import { useState } from 'react';
import { transformValue } from '~/components/common/RangePicker/helpers';
import { Moment } from 'moment';

type UseToggleRangePickerArgsType = {
  onChange: (date: string | null) => void;
  onClose?: () => void;
  dates: Moment[];
};

export default (args: UseToggleRangePickerArgsType) => {
  const { onClose, onChange, dates } = args;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onChange(transformValue(dates));
    setOpen(false);
    if (onClose) onClose();
  };

  return {
    handleClose,
    handleOpen,
    open,
  };
};
