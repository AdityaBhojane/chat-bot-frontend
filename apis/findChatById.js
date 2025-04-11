import axiosInstance from "../utils/axiosInstance";

export const getChatsById= async (Id) => {
    try {
      const res = await axiosInstance.get(`/api/chat/${Id}`);
      return res.data;
    } catch (error) {
      console.error('Get Chats Error:', error.response?.data || error.message);
      throw error;
    }
  };