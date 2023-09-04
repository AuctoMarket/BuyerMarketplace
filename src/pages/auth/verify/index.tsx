import React from 'react';
import styles from './index.module.scss';
import Layout from '../../../components/Layout';
import VerifyEmailForm from '../../../components/VerifyEmailForm';

function VerifyEmailPage() {
  return (
    <Layout>
      <div className={styles['verify-email-page']}>
        <VerifyEmailForm
          className={styles['verify-email-form']}
          data={{ email: 'abc.com', token: 'test' }}
        />
      </div>
    </Layout>
  );
}
export default VerifyEmailPage;
