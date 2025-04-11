// import { useState } from "react";
import { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import GeminiResult from "../components/GeminiResult/GeminiResult";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import UserInput from "../components/UserInput/UserInput";
import { useGeminiContext } from "../Context/Context";

function ChatPage() {
  const {showResult,previousResults,setPreviousResults,setHistory } = useGeminiContext();

  useEffect(() => {
    // retrieving data 
    const storedResult = localStorage.getItem('storage');
    if (storedResult) {
      setPreviousResults(JSON.parse(storedResult)); 
      setHistory(true)
    }
  }, [setPreviousResults,setHistory]);

  useEffect(() => {
    // Save result to localStorage whenever previousResults changes
    if(previousResults.length > 0 ){
      localStorage.setItem('storage', JSON.stringify(previousResults));
    }
  }, [previousResults]);

  // console.log(previousResults)

  return (
    <>  
        <NavigationBar/>
        {showResult? <GeminiResult/>: <Cards />}
        <UserInput />
    </>
  );
}

export default ChatPage;
