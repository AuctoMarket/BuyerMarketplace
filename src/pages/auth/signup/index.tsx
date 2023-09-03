import React from 'react';
import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import SignupForm from '../../../components/SignupForm';
import useAuth from '../../../hooks/useAuth';

const SignupPage = () => {
  const { signup } = useAuth();
  return (
    <Layout>
      <div className={styles['signup-page']}>
        <div className={styles['signup']}>
          <SignupForm onSignup={signup}></SignupForm>
        </div>
      </div>
    </Layout>
  );
};

export default SignupPage;
