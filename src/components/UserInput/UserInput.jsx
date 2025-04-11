// import { Button, Input, Textarea } from "@nextui-org/react";

import SearchBar from "../SearchBar/SearchBar";

function UserInput() {
 

  

  return (
    <>
      <div className="fixed left-[50%] bottom-10 w-1/2 max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] -translate-x-[50%] flex items-center">
        {/* <Textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          label="Search"
          placeholder="Enter your description"
          className="w-full"
        /> */}
        <SearchBar 
        /> 
        {/* <Button
          onClick={() => Response()}
          radius="md"
          className="h-14 min-w-24 relative right-4 z-10"
        >
          Find
        </Button> */}
      </div>
    </>
  );
}

export default UserInput;
