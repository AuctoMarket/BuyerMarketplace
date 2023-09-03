import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import LoginForm from '../../../components/LoginForm';
import useQueryParams from '../../../hooks/useQueryParams';

const LoginPage = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const continueAsGuest = queryParams.get('continueAsGuest');
  const redirectUrl = queryParams.get('redirectUrl');

  const handleLogin = () => {
    if (redirectUrl) {
      navigate(decodeURIComponent(redirectUrl));
    } else {
      navigate('/');
    }
  };

  const handleContinueAsGuest = () => {
    if (redirectUrl) {
      navigate(decodeURIComponent(redirectUrl));
    }
  };

  return (
    <Layout>
      <div className={styles['login-page']}>
        <LoginForm
          className={styles['login-form']}
          onLogin={handleLogin}
          onContinueAsGuest={
            continueAsGuest ? handleContinueAsGuest : undefined
          }
        />
      </div>
    </Layout>
  );
};

export default LoginPage;
