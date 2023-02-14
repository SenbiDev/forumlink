import React from 'react';
import { styled, TextField, OutlinedTextFieldProps } from '@mui/material';

interface StyledTextFieldProps extends OutlinedTextFieldProps {
  input?: 'auth input' | 'thread input' | 'text area';
}

const InputComponent = styled(TextField)<StyledTextFieldProps>(({ theme, input, error }) => {
  switch (input) {
    case 'thread input': {
      return {
        ['& .MuiFormLabel-root.MuiInputLabel-root']: {
          display: 'none',
        },
        ['& .MuiInputBase-root.MuiOutlinedInput-root']: {
          width: '100%',
          height: 40,
          border: '1px solid #D9D9D9',
          borderRadius: 4,
          ['& .MuiOutlinedInput-notchedOutline']: {
            border: 'none',
          },
          [theme.breakpoints.up('lg')]: {
            height: 45,
          },
          [theme.breakpoints.up('xl')]: {
            height: 59,
          },
        },
      };
    }   
    case 'text area': {
      return {
        ['& .MuiFormLabel-root.MuiInputLabel-root']: {
          display: 'none',
        },
        ['& .MuiInputBase-root.MuiOutlinedInput-root']: {
          width: '100%',
          minHeight: 97,
          border: '1px solid #D9D9D9', 
          borderRadius: 4,
          alignItems: 'flex-start',
          ['& .MuiOutlinedInput-notchedOutline']: {
            border: 'none',
          },
          [theme.breakpoints.up('lg')]: {
            height: 112,
            border: '2px solid #D9D9D9',
          },
        },
      };
    }
    default:
      return {
        ['& .MuiFormLabel-root.MuiInputLabel-root']: {
          display: 'none',
        },
        ['& .MuiInputBase-root.MuiOutlinedInput-root']: {
          width: 318,
          height: 40,
          border: `1px solid ${error ? 'red' : '#D9D9D9'}`,
          borderRadius: 4,
          ['& .MuiOutlinedInput-notchedOutline']: {
            border: 'none',
          },
          [theme.breakpoints.up('md')]: {
            width: 500,
            height: 59,
            border: `3px solid ${error ? 'red' : '#D9D9D9'}`,
            borderRadius: 8,
          },
          [theme.breakpoints.up('lg')]: {
            width: 500,
            height: 59,
            border: `3px solid ${error ? 'red' : '#D9D9D9'}`,
            borderRadius: 8,
          },
        },
      };   
  }
});

type InputType = {
  error: boolean,
  helperText: string,
  input: 'auth input' | 'thread input' | 'text area',
  label?: string, 
  name:  'name' | 'email' | 'password' | 'title' | 'body' | 'category' | 'comment',
  contentType?: React.HTMLInputTypeAttribute,
  value?: string,
  onChange?: any,
  defaultValue?: string, 
  maxRows?: number,
  multiline?: boolean
};

function Input({ error, helperText, input, label, name, contentType, value, onChange, defaultValue, maxRows, multiline }: InputType) {
  return (
    <InputComponent error={error} helperText={helperText} variant='outlined' input={input} label={label} name={name} type={contentType}  value={value} onChange={onChange} defaultValue={defaultValue} maxRows={maxRows} multiline={multiline} />
  );
}

export default Input;

