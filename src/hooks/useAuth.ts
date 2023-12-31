import { useState } from 'react';

import authApi from '../apis/auth';

const userDataKey = 'userData';

function useAuth() {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem(userDataKey) || 'null'),
  );

  const login = async (email: string, password: string) => {
    const data = await authApi.login({ email, password });

    setUser(data);
    localStorage.setItem(userDataKey, JSON.stringify(data));
  };

  const signup = async (email: string, password: string) => {
    const data = await authApi.signup({ email, password });

    setUser(data);
    localStorage.setItem(userDataKey, JSON.stringify(data));
  };

  const resendOtp = async (buyerId: string) => {
    await authApi.resendOtp({ buyer_id: buyerId });
  };

  const validateOtp = async (buyerId: string, otp: string) => {
    await authApi.validateOtp({ buyer_id: buyerId, otp });

    const data = { ...user, verification: 'verified' };
    setUser(data);
    localStorage.setItem(userDataKey, JSON.stringify(data));
  };

  return { user, login, signup, resendOtp, validateOtp };
}

export default useAuth;
