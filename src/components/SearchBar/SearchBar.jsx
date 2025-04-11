

import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import { useGeminiContext } from "../../Context/Context.js";
import run from "../../config/geminiConfig.js";

export default function SearchBar() {
  const {
    userInput,
    setUserInput,
    // previousResults,
    // setPreviousResults,
    setLoading,
    setShowResult,
    setResult,
    // result,
    setError,
    setShowPreviousResult,
    // preIndex,
    // setPreIndex,
  } = useGeminiContext();

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
      
    } catch {
      setLoading(false);
      setError(true);
    }
  };
//   console.log(result, userInput);

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
