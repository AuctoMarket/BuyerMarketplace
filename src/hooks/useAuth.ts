// Hooks/useAuth.ts
import { useState } from 'react';
import axios from 'axios';
import api from '../configs/api';

export function useAuth() {
  // Retrieve user data from localStorage or set to null if not found
  const initialUserData = JSON.parse(
    localStorage.getItem('userData') || 'null',
  );
  const [user, setUser] = useState<string | null>(initialUserData);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${api.baseUrl}/buyers/login`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 200) {
        const userData = response.data;
        setUser(userData);
        return response.status;
      } else {
        // throw new Error('Invalid email or password.');
        return response.status;
      }
    } catch (error) {
      throw new Error('Error during login.');
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        `${api.baseUrl}/buyers/signup`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status === 201) {
        const userData = response.data;
        setUser(userData);
        return response.status;
      } else if (response.status === 400) {
        console.log('Email is already in use');
        return response.status;
      } else {
        // throw new Error('Invalid email or password.');
        return response.status;
      }
    } catch (error) {
      throw new Error('Error during signup.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  return { user, login, signup, logout };
}
