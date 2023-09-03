import React from 'react';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import LoginForm from '../../../components/LoginForm';
import useAuth from '../../../hooks/useAuth';

const LoginPage = () => {
  const { login, toggleGuest } = useAuth();
  return (
    <Layout>
      <div className={styles['login-page']}>
        <div className={styles['login']}>
          <LoginForm
            onLogin={login}
            onContinueAsGuest={toggleGuest}
          ></LoginForm>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
