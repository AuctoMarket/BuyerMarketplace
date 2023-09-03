import axios from 'axios';

import apiConfig from '../configs/api';

const login = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/buyers/login`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const signup = async (data: { email: string; password: string }) => {
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/buyers/signup`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

const authApi = { login, signup };

export default authApi;
