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

  const resendOtp = async (email: string) => {
    await authApi.resendOtp({ email });
  };

  const verifyEmail = async (email: string, otp: string) => {
    await authApi.verifyEmail({ email, otp });
  };

  return { user, login, signup, resendOtp, verifyEmail };
}

export default useAuth;
