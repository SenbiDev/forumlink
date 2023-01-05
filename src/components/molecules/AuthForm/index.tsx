import React from 'react';
import Form from './Form';

type AuthFormType = { type: 'signup' | 'login' };

function AuthForm({ type }: AuthFormType) {
  return (
    <>
        { type === 'signup' && <Form type={type} /> }
        { type === 'login' && <Form type={type} /> }
    </>
  );
}

export default AuthForm;