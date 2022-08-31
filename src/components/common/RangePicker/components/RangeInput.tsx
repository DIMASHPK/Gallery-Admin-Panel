import Input, { InputPropsType } from '~/components/common/Input';
import React from 'react';

type RangeInputPropsType = InputPropsType & {
  onOpen: () => void;
};

const RangeInput: React.FC<RangeInputPropsType> = props => {
  const { inputProps: inputPropsProp, onOpen, value, ...restProps } = props;

  const inputProps = {
    ...inputPropsProp,
    readOnly: true,
    disableUnderline: true,
    value,
  };

  return <Input {...restProps} inputProps={inputProps} onClick={onOpen} />;
};

export default RangeInput;
