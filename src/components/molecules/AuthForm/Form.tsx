import React from 'react';
import {
  styled, Stack, Container, ContainerProps, Button, Typography, Link as MuiLink, Box,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useInput } from '../../../hooks/useInput';
import { Gap, Input } from '../../atoms';
import { useAppDispatch } from '../../../hooks/hooks';
import { asyncSetAuthUser } from '../../../states/authUser/action';
import { asyncRegisterUser } from '../../../states/users/action';
import useWidth from '../../../hooks/useWidth';

interface StyledContainerProps extends ContainerProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const ParentVerticalStack = styled(Stack)({
  alignItems: 'center',
  minHeight: '100vh',
});

const ContentContainer = styled(Container)<StyledContainerProps>(({ size }) => ({
  width: size === 'sm' ? 320 : 500,
  height: 'max-content',
  margin: size === 'sm' ? '52px 20px' : '126px 50px',
}));

function BrandButton() {
  return (
    <Button variant="navbar" LinkComponent={Link} href="/">
      FORUM
      <span style={{ color: '#CA0BEA' }}>
        link
      </span>
    </Button>
  );
}

function GreetingTypoghraphy() {
  return (
    <Typography variant="text" className="hey,hello">
      Hey,
      <br />
      hello
    </Typography>
  );
}

type CommandTypoghraphyType = { type: 'signup' | 'login' };

function CommandTypoghraphy({ type }: CommandTypoghraphyType) {
  return (
    <Typography variant="text" className="enter the information">
      Enter the information you entered while
      {' '}
      {type === 'signup' ? 'registering' : 'log in'}
    </Typography>
  );
}

type AuthInputFormType = {
  label: string,
  name: 'name' | 'email' | 'password',
  contentType: React.HTMLInputTypeAttribute,
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
};

function AuthInputForm({ label, name, contentType, value, onChange }: AuthInputFormType) {
  return (
    <Stack>
      <Typography variant="content-type" className="auth-form-label">
        {label}
      </Typography>
      <Gap height={9} />
      <Input label={label.toLowerCase()} name={name} input="auth input" contentType={contentType} value={value} onChange={onChange} />
    </Stack>
  );
}

type FormActionType = {
  type: 'signup' | 'login',
  onClick: (event: any) => void
};

function FormAction({ type, onClick }: FormActionType) {
  return (
    <Box>
      <Button variant="form" type="button" onClick={onClick}>
        {type === 'signup' ? 'Sign Up' : 'Log In'}
      </Button>
      <Gap height={16} />
      <Typography variant="text" className="already">
        {type === 'signup'
          ? (
            <>
              Already have an account?
              {' '}
              <MuiLink color="#0E15BE" component={Link} href="/login">Log In here</MuiLink>
            </>
          )
          : (
            <>
              Don&apos;t have an account?
              {' '}
              <MuiLink color="#0E15BE" component={Link} href="/register">Sign Up here</MuiLink>
            </>
          )}
      </Typography>
    </Box>
  );
}

type FormType = { type: 'signup' | 'login' };

function Form({ type }: FormType) {
  const screenWidth = useWidth();
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const [inputs, onValueChangeHandler] = useInput({ name: '', email: '', password: '' });

  const onLoginEventHandler = (event: any) => {
    event.preventDefault();
    signIn('credentials', { callbackUrl: '/threads', email: inputs.email, password: inputs.password });
    dispatch(asyncSetAuthUser);
  };

  const onRegisterEventHandler = (event: any) => {
    event.preventDefault();
    dispatch(asyncRegisterUser({ name: inputs.name, email: inputs.email, password: inputs.password }));
    push({ pathname: '/login' });
  };

  return (
    <ParentVerticalStack>
      <ContentContainer disableGutters size={screenWidth}>
        <BrandButton />
        <Gap height={12} />
        <GreetingTypoghraphy />
        <Gap height={2} />
        <CommandTypoghraphy type={type} />
        <Gap height={44} />
        {
                    type === 'signup'
                    && (
                    <>
                      <AuthInputForm label="Name" name="name" contentType="text" value={inputs.name} onChange={onValueChangeHandler} />
                      <Gap height={20} />
                    </>
                    )
                }
        <AuthInputForm label="Email" name="email" contentType="email" value={inputs.email} onChange={onValueChangeHandler} />
        <Gap height={20} />
        <AuthInputForm label="Password" name="password" contentType="password" value={inputs.password} onChange={onValueChangeHandler} />
        <Gap height={type === 'signup' ? 83 : 170} />
        <FormAction type={type} onClick={type === 'signup' ? onRegisterEventHandler : onLoginEventHandler} />
      </ContentContainer>
    </ParentVerticalStack>
  );
}

export default Form;
