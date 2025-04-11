import axiosInstance from "../utils/axiosInstance";

export const getChatsByUser = async (userId) => {
    try {
      const res = await axiosInstance.get(`/api/chat/user/${userId}`);
      return res.data;
    } catch (error) {
      console.error('Get Chats Error:', error.response?.data || error.message);
      throw error;
    }
  };
  