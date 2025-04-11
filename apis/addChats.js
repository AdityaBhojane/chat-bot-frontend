import axiosInstance from "../utils/axiosInstance";

export const addMessageToChat = async (chatId, question, response) => {
    try {
      const res = await axiosInstance.post(`/api/chat/${chatId}/message`, {
        question,
        response
      });
      return res.data;
    } catch (error) {
      console.error('Add Message Error:', error.response?.data || error.message);
      throw error;
    }
  };
  