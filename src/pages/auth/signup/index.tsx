import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import SignupForm from '../../../components/Auth/SignupForm';
import useQueryParams from '../../../hooks/useQueryParams';

const SignupPage = () => {
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const redirectUrl = queryParams.get('redirectUrl');

  const handleSignup = () => {
    const emailVerificationUrl = '/auth/email-verification';

    if (redirectUrl) {
      window.location.href = `${emailVerificationUrl}?redirectUrl=${encodeURIComponent(
        redirectUrl,
      )}`;
    } else {
      navigate(emailVerificationUrl);
    }
  };

  return (
    <Layout>
      <div className={styles['signup-page']}>
        <SignupForm className={styles['signup-form']} onSignup={handleSignup} />
      </div>
    </Layout>
  );
};

export default SignupPage;
