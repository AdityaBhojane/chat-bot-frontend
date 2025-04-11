
import axiosInstance from '../utils/axiosInstance';

export const signUpUser = async (username, email, password) => {
  try {
    const res = await axiosInstance.post('/api/auth/signup', {
      username,
      email,
      password
    });
    return res.data;
  } catch (error) {
    console.error('Sign Up Error:', error.response?.data || error.message);
    throw error;
  }
};
