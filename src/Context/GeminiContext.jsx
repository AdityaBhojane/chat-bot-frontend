/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GeminiContext = createContext();

function ContextProvider({ children }) {
  // Prompt for gemini API
  const [userInput, setUserInput] = useState("");
  // result stored in array
  const [result, setResult] = useState([]);
  // previous data for history
  const [previousResults, setPreviousResults] = useState([]);
  // loading state for skeleton effect
  const [loading, setLoading] = useState(false);
  // error state to show user en error if api not works
  const [error, setError] = useState(false)
  // toggle hide of an default a welcome container 
  const [showResult, setShowResult] = useState(false);
  // store an history 
  const [history,setHistory] = useState(false)
  // show history
  const [showPreviousResult,setShowPreviousResult] = useState(true);
  // update history chat using index
  const [preIndex,setPreIndex] = useState(null)

  const ContextStore = {
    userInput,
    setUserInput,
    previousResults,
    setPreviousResults,
    loading,
    setLoading,
    showResult,
    setShowResult,
    result,
    setResult,
    error, 
    setError,
    history,
    setHistory,
    showPreviousResult,
    setShowPreviousResult,
    setPreIndex,
    preIndex
  };

  return (
    <GeminiContext.Provider value={ContextStore}>
      {children}
    </GeminiContext.Provider>
  );
}

export default ContextProvider;
