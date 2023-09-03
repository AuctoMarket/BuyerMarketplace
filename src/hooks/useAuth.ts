import { useState } from 'react';
import axios from 'axios';

import api from '../configs/api';

const userDataKey = 'userData';

function useAuth() {
  const [user, setUser] = useState<any>(
    JSON.parse(localStorage.getItem(userDataKey) || 'null'),
  );

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${api.baseUrl}/buyers/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setUser(response.data);
      localStorage.setItem(userDataKey, JSON.stringify(response.data));
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${api.baseUrl}/buyers/signup`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      setUser(response.data);
      localStorage.setItem(userDataKey, JSON.stringify(response.data));
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  return { user, login, signup };
}

export default useAuth;
