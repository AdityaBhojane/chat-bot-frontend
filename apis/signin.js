import axiosInstance from "../utils/axiosInstance";

export const signInUser = async (email, password) => {
    try {
      const res = await axiosInstance.post('/api/auth/signin', {
        email,
        password
      });
      return res.data;
    } catch (error) {
      console.error('Sign In Error:', error.response?.data || error.message);
      throw error;
    }
  };
  