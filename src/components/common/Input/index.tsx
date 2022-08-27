import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { FieldProps } from 'formik';

type InputPropsType = Omit<TextFieldProps, 'variant'> & FieldProps['field'];

const Input: React.FC<InputPropsType> = props => (
  <TextField {...props} variant="outlined" />
);

export default Input;
