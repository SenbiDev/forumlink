import { createTheme } from '@mui/material';
import breakpointsTheme from './breakpoints-theme';

const dividerTheme = createTheme({
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiDivider: {
      variants: [
        {
          props: { variant: 'middle', className: 'divider-thread-list' },
          style: {
            maxWidth: 240,
            borderColor: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              maxWidth: 298,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              maxWidth: 811,
            },
          },
        },
        {
          props: { variant: 'middle', className: 'divider-thread-detail' },
          style: {
            maxWidth: 280,
            borderColor: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              maxWidth: 624,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              maxWidth: 1280,
            },
          },
        },
      ],
    },
  },
});

export default dividerTheme;