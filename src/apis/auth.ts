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

const resendOtp = async (data: { buyer_id: string }) => {
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/buyers/resend-otp`,
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

const validateOtp = async (data: { buyer_id: string; otp: string }) => {
  try {
    const response = await axios.post(
      `${apiConfig.baseUrl}/buyers/validate-otp`,
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

const authApi = { login, signup, resendOtp, validateOtp };

export default authApi;
