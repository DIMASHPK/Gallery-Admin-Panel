import React from 'react';
import { SelectOptionType } from '~/types';
import { SerializedStyles } from '@emotion/react/dist/emotion-react.cjs';
import { Field, FieldProps } from 'formik';
import Select from '~/components/common/Select';

type RenderFieldPropsType = {
  options: SelectOptionType[];
  css: SerializedStyles;
  label: string;
  name: string;
};

const RenderField: React.FC<RenderFieldPropsType> = props => {
  const { name, ...restProps } = props;

  return (
    <Field name={name}>
      {({ field }: FieldProps) => (
        <Select {...field} {...restProps} size="small" />
      )}
    </Field>
  );
};

export default RenderField;
