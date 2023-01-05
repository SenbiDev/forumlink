import { createTheme } from '@mui/material';

const breakpointsTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 360,
      md: 600,
      lg: 744,
      xl: 1024,
    },
  },
});

export default breakpointsTheme;