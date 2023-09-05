import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import EmailVerificationForm from '../../../components/Auth/EmailVerificationForm';

function EmailVerificationPage() {
  const navigate = useNavigate();

  const handleVerifyEmail = () => {
    navigate('/login');
  };

  return (
    <Layout>
      <div className={styles['verify-email-page']}>
        <EmailVerificationForm
          className={styles['verify-email-form']}
          onVerifyEmail={handleVerifyEmail}
        />
      </div>
    </Layout>
  );
}
export default EmailVerificationPage;
