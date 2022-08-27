import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select, { SelectProps } from '@mui/material/Select/Select';
import React from 'react';
import { SelectOptionType } from '~/types';
import MenuItem from '@mui/material/MenuItem';
import useStyles from './styles';

type CommonSelectPropsType = SelectProps & {
  options: SelectOptionType[];
  label?: string;
  nullable?: boolean;
};

const CommonSelect: React.FC<CommonSelectPropsType> = props => {
  const {
    options,
    label,
    nullable,
    id,
    labelId,
    size,
    className,
    ...restProps
  } = props;

  const styles = useStyles();

  const handleMap = ({ value, label: OptionLabel }: SelectOptionType) => (
    <MenuItem css={styles.option} value={value} key={value}>
      {OptionLabel}
    </MenuItem>
  );

  return (
    <FormControl variant="outlined" size={size} className={className}>
      {label && <InputLabel id={labelId}>{label}</InputLabel>}
      <Select
        labelId={labelId}
        id={id}
        label={label}
        variant="outlined"
        {...restProps}
      >
        {nullable && (
          <MenuItem css={styles.option} value="">
            None
          </MenuItem>
        )}
        {options.map(handleMap)}
      </Select>
    </FormControl>
  );
};

CommonSelect.defaultProps = {
  nullable: true,
};

export default CommonSelect;
