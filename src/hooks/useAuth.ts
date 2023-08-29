// Hooks/useAuth.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

import api from '../configs/api';

function useAuth() {
  const initialUserData = JSON.parse(
    localStorage.getItem('userData') || 'null',
  );
  const [user, setUser] = useState<any | null>(initialUserData);
  const [guest, setGuest] = useState(false);

  useEffect(() => {
    // Save user data to local storage whenever user state changes
    if (user) {
      localStorage.setItem('userData', JSON.stringify(user));
    } else {
      localStorage.removeItem('userData');
    }
  }, [user]);

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
        setGuest(false);
        return response.status;
      } else {
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
        setGuest(false);
        return response.status;
      } else {
        return response.status;
      }
    } catch (error) {
      throw new Error('Error during signup.');
    }
  };

  const logout = () => {
    setUser(null);
    setGuest(false);
    localStorage.removeItem('userData');
  };

  const toggleGuest = () => {
    setGuest((prevGuest) => !prevGuest);
  };

  return { user, guest, login, signup, logout, toggleGuest };
}

export default useAuth;
