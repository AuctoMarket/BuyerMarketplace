import React from 'react';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import LoginForm from '../../../components/LoginForm';
import useAuth from '../../../hooks/useAuth';

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <Layout>
      <div className={styles['login-page']}>
        <div className={styles['login']}>
          <LoginForm onLogin={login}></LoginForm>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
