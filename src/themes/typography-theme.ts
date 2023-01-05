import { createTheme } from '@mui/material';
import { Poppins } from '@next/font/google';
import breakpointsTheme from './breakpoints-theme';

const poppinsFont = Poppins({
  weight: '600',
  style: 'normal',
});

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ['text']: true;
    ['content-type']: true;

  }
}

const typographyTheme = createTheme({
  breakpoints: breakpointsTheme.breakpoints,
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'text', className: 'connected' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 18,
            lineHeight: '130%',
            color: '#0E15BE',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 24,
              lineHeight: '31.2px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 36,
              lineHeight: '46.8px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 38,
              lineHeight: '49.4px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'with' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 300,
            fontSize: 24,
            lineHeight: '130%',
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 32,
              lineHeight: '41.6px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 40,
              lineHeight: '52px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 42,
              lineHeight: '54.6px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'the world' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 32,
            lineHeight: '48px',
            color: '#0E15BE',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 36,
              lineHeight: '54px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 48,
              lineHeight: '72px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 50,
              lineHeight: '75px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'exchange' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 13,
            lineHeight: '20px',
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 13,
              lineHeight: '19.5px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 16,
              lineHeight: '36px',
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 20,
              lineHeight: '30px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'hey,hello' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 14,
            lineHeight: '21px',
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 20,
              lineHeight: '30px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 24,
              lineHeight: '36px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'enter the information' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 12,
            lineHeight: '18px',
            color: '#0E15BE',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 16,
              lineHeight: '24px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 18,
              lineHeight: '27px',
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'auth-form-label' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 12,
            lineHeight: '18px',
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 16,
              lineHeight: '24px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 18,
              lineHeight: '27px',
            },
          },
        },
        {
          props: { variant: 'text', className: 'already' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 12,
            lineHeight: '18px',
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              fontSize: 16,
              lineHeight: '24px',
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 18,
              lineHeight: '27px',
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'user-profile' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 10,
            color: '#080818',
            lineBreak: 'anywhere',
            padding: '0 2px',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'thread-created-date' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 8,
            color: '#CA0BEA',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 10,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'category-name' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 10,
            color: '#CA0BEA',
            border: '2px solid #CA0BEA',
            borderRadius: 4,
            padding: 5,
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12,
              padding: 7,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'thread-title' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 15,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 17,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'thread-body-slice' },
          style: {
            minHeight: 44,
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 400,
            whiteSpace: 'normal',
            overflow: 'hidden',
            textOverflow : 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            fontSize: 10,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('md')]: {
              minWidth: 249,
            },
            [breakpointsTheme.breakpoints.up('lg')]: {
              minWidth: 445,
              minHeight: 53,
              fontSize: 12,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              minWidth: 'min-content',
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'number' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight,
            fontSize: 10,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12,
            },
          },
        },
        {
          props: { variant: 'text', className: 'add a thread' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 12,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 14,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 16,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'thread-form-label' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 10,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12,
            },
            [breakpointsTheme.breakpoints.up('xl')]: {
              fontSize: 14,
            },
          },
        },
        {
          props: { variant: 'content-type', className: 'thread-body-full' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 400,
            fontSize: 10,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12,
            },
          },
        },
        {
          props: { variant: 'text', className: 'add a comment' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 10,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 12, 
            },
          },
        },
        {
          props: { variant: 'text', className: 'comments' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 500,
            fontSize: 12,
            color: '#080818',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 14, 
            },
          },
        },
        {
          props: { variant: 'text', className: 'category' },
          style: {
            fontFamily: poppinsFont.style.fontFamily,
            fontStyle: poppinsFont.style.fontStyle,
            fontWeight: poppinsFont.style.fontWeight = 600,
            fontSize: 12,
            color: '#CA0BEA',
            [breakpointsTheme.breakpoints.up('lg')]: {
              fontSize: 14, 
            },
          },
        },
      ],
    },
  },
});

export default typographyTheme;