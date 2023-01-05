import React from 'react';
import { AuthForm } from '../src/components';
import styles from '../styles/Auth.module.css';

function RegisterPage() {
  return (
    <div className={styles.container}>
        <AuthForm type='signup' />
    </div>
  );
}

export default RegisterPage;