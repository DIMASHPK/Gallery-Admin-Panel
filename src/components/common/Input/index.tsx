import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type InputPropsType = Omit<TextFieldProps, 'variant'>;

const Input: React.FC<InputPropsType> = props => (
  <TextField {...props} variant="outlined" />
);

export default Input;
