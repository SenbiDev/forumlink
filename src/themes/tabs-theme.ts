import { createTheme } from '@mui/material';
import { Poppins } from '@next/font/google';
import breakpointsTheme from './breakpoints-theme';

const poppinsFont = Poppins({
  weight: '600',
  style: 'normal',
});

const tabsTheme = createTheme({
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiTabs: {
      variants: [
        {
          props: { variant: 'standard' },
          style: {
            ['& .MuiTab-textColorPrimary']: {
              fontFamily: poppinsFont.style.fontFamily,
              fontStyle: poppinsFont.style.fontStyle,
            },
          },
        },
      ],
    },
  },
});

export default tabsTheme;