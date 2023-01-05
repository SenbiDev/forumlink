import { createTheme } from '@mui/material';
import breakpointsTheme from './breakpoints-theme';

declare module '@mui/material/Avatar' {
  interface AvatarPropsVariantOverrides {
    ['small']: true;
    ['medium']: true;
  }
}

const avatarTheme = createTheme({
  // change margin and gap property based custom breakpoints
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiAvatar: {
      variants: [
        {
          props: { variant: 'small' },
          style: {
            width: 30,
            height: 30,
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 50,
              height: 50,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              width: 80,
              height: 80,
            },
          },
        },
        {
          props: { variant: 'medium' },
          style: {
            width: 40,
            height: 40,
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 45,
              height: 45,
            },
          },
        },
      ],
    },
  },

});

export default avatarTheme;
