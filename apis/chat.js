import axiosInstance from "../utils/axiosInstance";


export const startNewChat = async (userId, title = 'New Chat') => {
    try {
      const res = await axiosInstance.post('/api/chat/new', {
        userId,
        title
      });
      return res.data;
    } catch (error) {
      console.error('Start Chat Error:', error.response?.data || error.message);
      throw error;
    }
  };
  