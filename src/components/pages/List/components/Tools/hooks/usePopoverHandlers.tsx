import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import cloneDeep from 'lodash/cloneDeep';
import { getToolsChipList } from '~/components/pages/List/components/Tools/helpers/chipsTransformers';
import { ToolsFormType } from '~/components/pages/List/types';

export default () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { setValues, values, validateForm, handleSubmit } =
    useFormikContext<ToolsFormType>();

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

  const handleSavePopover = async () => {
    const validationErrors = await validateForm();

    if (Object.values(validationErrors).length) {
      return;
    }

    const chipsList = getToolsChipList(values.changeableValues);

    setValues({
      ...values,
      currentValues: cloneDeep(values.changeableValues),
      chipsList,
    });

    handleClosePopover();

    handleSubmit();
  };

  return {
    handleOpenPopover,
    handleSavePopover,
    handleCancelPopover,
    anchorEl,
  };
};
