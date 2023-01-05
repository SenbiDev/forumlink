import { createTheme } from '@mui/material';
import { Poppins } from '@next/font/google';
import breakpointsTheme from './breakpoints-theme';

const poppinsFont = Poppins({
  weight: '600',
  style: 'normal',
});

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    ['navbar']: true;
    ['footer']: true;
    ['login']: true;
    ['signup']: true;
    ['form']: true;
    ['create-thread']: true;
    ['logout']: true;
    ['form-thread']: true;
    ['category']: true;
    ['submit']: true;
    ['footer navigation']: true;
  }
}

const buttonTheme = createTheme({
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'footer' },
          style: {
            textTransform: 'none',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            lineHeight: '18px',
            padding: 0,
            minWidth: 0,
            color: '#2A0BEA',
            ':hover': {
              backgroundColor: 'transparent',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 14,
              lineHeight: '36px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 16,
            },
          },
        },
        {
          props: { variant: 'footer navigation' },
          style: {
            textTransform: 'none',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 10,
            lineHeight: '18px',
            padding: 0,
            minWidth: 0,
            color: '#2A0BEA',
            ':hover': {
              backgroundColor: 'transparent',
            },
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 12,
              lineHeight: '36px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 14,
              lineHeight: '36px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 16,
              lineHeight: '54px',
              padding: '10px 0px 10px 0px',
            },
          },
        },
        {
          props: { variant: 'navbar' },
          style: {
            textTransform: 'none',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 14,
            lineHeight: '21px',
            padding: 0,
            minWidth: 0,
            color: '#2A0BEA',
            ':hover': {
              backgroundColor: 'transparent',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 16,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 18,
            },
          },
        },
        {
          props: { variant: 'login' },
          style: {
            textTransform: 'none',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            width: 'max-content',
            height: 24,
            lineHeight: '18px',
            padding: '3px 10px',
            margin: 0,
            minWidth: 0,
            backgroundColor: '#2A0BEA',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 'max-content',
              height: 33,
              fontSize: 16,
              lineHeight: '27px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              width: 'max-content',
              height: 35,
              fontSize: 18,
              lineHeight: '42px',
              borderRadius: 4,
            },
          },
        },
        {
          props: { variant: 'signup' },
          style: {
            textTransform: 'none',
            width: 'max-content',
            minWidth: 0,
            height: 18,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            padding: 0,
            color: '#2A0BEA',
            margin: 0,
            borderRadius: 4,
            ':hover': {
              color: '#CA0BEA',
              backgroundColor: 'initial',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 'max-content',
              height: 18,
              fontSize: 16,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              width: 'max-content',
              height: 62,
              fontSize: 18,
              padding: '10px 0',
            },
          },
        },
        {
          props: { variant: 'form' },
          style: {
            textTransform: 'none',
            width: 320,
            height: 40,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            padding: '10px 134px',
            minWidth: 0,
            margin: 0,
            backgroundColor: '#0E15BE',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('md')]: {
              width: 500,
              height: 54,
              fontSize: 16,
              padding: '15px 0',
                          
              borderRadius: 8,
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 500,
              height: 57,
              fontSize: 18,
              padding: '15px 0',
                          
              borderRadius: 8,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              width: 500,
              height: 66,
              fontSize: 18,
              padding: '15px 0',
            },
          },
        },
        {
          props: { variant: 'create-thread' },
          style: {
            textTransform: 'none',
            width: 'max-content',
            height: 40,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            lineHeight: '18px',
            padding: '8px 10px',
            minWidth: 0,
            backgroundColor: '#2A0BEA',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 'max-content',
              height: 33,
              fontSize: 12,
              padding: '0px 7px',
              lineHeight: '27px',
              borderRadius: 5,
            },
          },
        },
        {
          props: { variant: 'logout' },
          style: {
            textTransform: 'none',
            width: 'max-content',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            lineHeight: '18px',
            padding: '0 2px',
            minWidth: 0,
            backgroundColor: 'unset',
            color: '#2A0BEA',
            borderRadius: 4,
            ':hover': {
              color: '#CA0BEA',
              backgroundColor: 'unset',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 'max-content',
              height: 33,
              fontSize: 12,
              padding: '0px 7px',
              lineHeight: '27px',
              borderRadius: 5,
            },
          },
        },
        {
          props: { variant: 'form-thread' },
          style: {
            textTransform: 'none',
            width: 83,
            height: 34,
            lineHeight: 'inherit',
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 10,
            margin: 0,
            minWidth: 0,
            backgroundColor: '#2A0BEA',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width:93,
              height: 40,
              fontSize: 12,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 14,
            },
          },
        },
        {
          props: { variant: 'category' },
          style: {
            textTransform: 'none',
            width: 71,
            height: 28,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 10,
            lineHeight: '18px',
            padding: '5px',
            margin: 0,
            minWidth: 0,
            backgroundColor: '#2A0BEA',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 19,
              height: 24,
              fontSize: 16,
              fontWeight: poppinsFont.style.fontWeight = 400,
              lineHeight: '24px',
              color: '#2A0BEA',
              padding: 0,
              backgroundColor: 'transparent',
              ':hover': {
                color: '#CA0BEA',
                backgroundColor: 'transparent',
              },
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              width: 28,
              height: 36,
              fontSize: 24,
              lineHeight: '36px',
              padding: '10px 30px',
            },
          },
        },
        {
          props: { variant: 'submit' },
          style: {
            textTransform: 'none',
            width: 64,
            height: 24,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 10,
            padding: '3px 10px',
            margin: 0,
            minWidth: 0,
            backgroundColor: '#2A0BEA',
            color: '#E7E7E7',
            borderRadius: 4,
            ':hover': {
              backgroundColor: '#CA0BEA',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              width: 75,
              height: 34,
              fontSize: 12,
              padding: '10px 30px',
            },
          },
        },
      ],
    },

  },
});

export default buttonTheme;