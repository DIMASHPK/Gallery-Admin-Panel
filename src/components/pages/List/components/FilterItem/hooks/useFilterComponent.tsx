import Input from '~/components/common/Input';
import RangePicker from '~/components/common/RangePicker/Form';
import React, { useMemo } from 'react';
import { FieldProps, useFormikContext } from 'formik';
import { TextFieldProps } from '@mui/material';
import { SerializedStyles } from '@emotion/react';
import { GetOptionalType } from '~/utils/typeHelpers';
import { FILTER_NAMES } from '~/components/pages/List/constants';
import { ToolsFormType } from '~/components/pages/List/types';

type DataType = FieldProps['field'] &
  Omit<TextFieldProps, 'onError' | 'value'> & {
    value: string;
    css: SerializedStyles;
  };

export default (index: number) => {
  const {
    values: { changeableValues },
  } = useFormikContext<ToolsFormType>();

  const { name } = changeableValues.filters[index];

  return useMemo(() => {
    if (!name?.length) return (data: DataType) => <Input {...data} disabled />;

    const componentsMapper = {
      [FILTER_NAMES.NAME]: (data: DataType) => <Input {...data} />,
      [FILTER_NAMES.DESCRIPTION]: (data: DataType) => (
        <Input {...data} multiline />
      ),
      [FILTER_NAMES.DATE]: (data: DataType) => <RangePicker {...data} />,
      [FILTER_NAMES.SIZE]: (data: DataType) => (
        <Input {...data} type="number" />
      ),
    };

    return componentsMapper[name as GetOptionalType<typeof FILTER_NAMES>];
  }, [name]);
};
