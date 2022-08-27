import { css } from '@emotion/react';
import { useTheme } from '@mui/material';

export default () => {
  const {
    spacing,
    palette: {
      custom: {
        white: { primary },
      },
    },
  } = useTheme();

  return {
    toolsPopover: css({
      '& .MuiPopover-paper': {
        width: 500,
      },
    }),
    toolsPopoverTitle: css({
      padding: spacing(2),
      color: primary,
      paddingBottom: 0,
      fontSize: 24,
    }),
    buttonsWrapper: css({
      display: 'flex',
      gap: 15,
      padding: spacing(2),
    }),
  };
};
