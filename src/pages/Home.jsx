import { Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChatsByUser } from "../../apis/allChats";
import { startNewChat } from "../../apis/chat";

export default function Home() {
  const navigate = useNavigate()
  const [chatHistory, setChatHistory] = useState([]);
  const [chatData, setChatData] = useState({
    title:'',
    botName:''
  })
  const userId = localStorage.getItem('userId');

  useEffect(()=>{
    (async function(){
      const response = await getChatsByUser(userId);
      setChatHistory(response)
    })()
  },[userId]);
  
  const handleNewChat = async()=>{
    try {
      const response = await startNewChat(userId, chatData.title);
      
      if(response){
        navigate(`/${response.chat._id}/dashboard`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex gap-5 items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black p-5">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-2xl font-semibold text-white mb-6 text-center">
          Start a New Chat
        </p>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Title of Chat"
          className="mb-4"
          value={chatData.title}
          onChange={(e)=>setChatData({...chatData,title:e.target.value})}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Chatbot Name"
          className="mb-6"
          value={chatData.botName}
          onChange={(e)=>setChatData({...chatData,botName:e.target.value})}
        />
        <Button onClick={handleNewChat} shadow color="primary" auto className="w-full">
          Start Conversation
        </Button>
      </div>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-xl text-white mb-6 text-center">
          Recent Chat History
        </p>
        <div >
          {chatHistory?.map((chats,index)=>{
            return <div
            key={index} 
            className="border my-2 p-1 pl-4 rounded-2xl cursor-pointer font-bold bg-slate-500"
            onClick={()=>{
              navigate(`/${chats._id}/dashboard`)
            }}
            >
              <p>{chats.title}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}