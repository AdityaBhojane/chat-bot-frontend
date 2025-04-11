

import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import { useGeminiContext } from "../../Context/Context.js";
import run from "../../config/geminiConfig.js";
import { useEffect, useState } from "react";
import { addMessageToChat } from "../../../apis/addChats.js";
import { useParams } from 'react-router-dom';

export default function SearchBar() {
  const {
    userInput,
    setUserInput,
    setLoading,
    setShowResult,
    setResult,
    setError,
    setShowPreviousResult,
  } = useGeminiContext();

  const [data, setData] = useState({
    question:'',
    response:''
  });

  const { chatId } = useParams();

  const Response = async () => {
    try {
      setLoading(true);
      setShowResult(true);
      setUserInput('');
      const response = await run(userInput);
      const data = {
        prompt: userInput,
        results: response,
      };
      setResult((pre) => [...pre, data]);
      setLoading(false);
      setShowPreviousResult(false);
      setData({question:userInput, response:data.results})
    } catch {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(()=>{
    (async function () {
      try {
        if(data.question && data.response){
          const response = await addMessageToChat(chatId,data.question, data.response);
          console.log(response);
        };
        return;
      } catch (error) {
        console.log(error)
      }
    })()
  },[chatId, data.question, data.response])

  return (
    <Input
      value={userInput}
      onChange={(e) => setUserInput(e.target.value)}
      onKeyDown={(e)=>{if(e.key=="Enter"){Response()}}}
      classNames={{
        // base: "max-w-full sm:max-w-[10rem] h-10",
        mainWrapper: "h-12  ",
        input: "text-small px-2",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-100/100 dark:bg-default-100/100",
      }}
      className="w-full"
      placeholder="Type to search..."
      size="sm"
      endContent={<SearchIcon 
        onClick={() => {Response()}} 
        size={18} 
        />}
      type="search"
    />
  );
}
