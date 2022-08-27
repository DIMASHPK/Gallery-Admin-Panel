import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import { ToolsFormType } from '~/types';
import cloneDeep from 'lodash/cloneDeep';

export default () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { setValues, values } = useFormikContext<ToolsFormType>();

  const handleOpenPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleCancelPopover = () => {
    setValues({
      ...values,
      changeableValues: cloneDeep(values.currentValues),
    });

    handleClosePopover();
  };

  const handleSavePopover = () => {
    setValues({ ...values, currentValues: cloneDeep(values.changeableValues) });

    handleClosePopover();
  };

  return {
    handleOpenPopover,
    handleSavePopover,
    handleCancelPopover,
    anchorEl,
  };
};
