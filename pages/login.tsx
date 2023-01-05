import React from 'react';
import { AuthForm } from '../src/components';
import styles from '../styles/Auth.module.css';

function LoginPage() {  
  return (
    <div className={styles.container}>
        <AuthForm type='login' />
    </div>
  );
}

export default LoginPage;