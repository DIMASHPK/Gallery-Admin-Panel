import React from 'react';
import Chip from '@mui/material/Chip';
import useDeleteHandler from '~/components/pages/List/components/ToolsChip/hooks/useDeleteHandler';
import { TOOLS_FORM_VALUES_KEYS } from '~/components/pages/List/constants';
import { Tooltip } from '@mui/material';
import { ToolsFormChipsListType } from '~/components/pages/List/types';
import useStyles from './styles';

type ToolsChipPropsType = ToolsFormChipsListType & {
  index: number;
};

const ToolsChip: React.FC<ToolsChipPropsType> = props => {
  const { label, index, filterValue, type } = props;

  const { handleDelete } = useDeleteHandler({ index, filterValue, type });

  const styles = useStyles();

  const componentMapper = {
    [TOOLS_FORM_VALUES_KEYS.FILTER_CONDITION]: (
      <Chip size="small" label={label} css={styles.chip} />
    ),
    [TOOLS_FORM_VALUES_KEYS.FILTER]: (
      <Chip
        size="small"
        label={label}
        css={styles.chip}
        onDelete={handleDelete}
      />
    ),
    [TOOLS_FORM_VALUES_KEYS.SORT]: (
      <Chip
        size="small"
        label={label}
        css={styles.chip}
        onDelete={handleDelete}
      />
    ),
  };

  return <Tooltip title={label}>{componentMapper[type]}</Tooltip>;
};

export default ToolsChip;
