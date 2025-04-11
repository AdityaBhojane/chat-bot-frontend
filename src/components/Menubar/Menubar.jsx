import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Chip,
} from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";

export default function Menubar() {
  const {
    previousResults,
    setPreviousResults,
    history,
    setHistory,
    result,
    setResult,
    showPreviousResult,
    setShowPreviousResult,
    preIndex,
    setPreIndex,
    setShowResult,
  } = useGeminiContext();
  // console.log(result[0].prompt.slice(0,10))
  // console.log(previousResults);
  // console.log(preIndex)
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="capitalize border border-[#ccc] light:text-black"
        >
          Recent Chats
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        className=""
      >
        <DropdownItem
          onClick={() => {
            if (result.length !== 0 && !showPreviousResult) {
              if (preIndex == 0 || preIndex) {
                previousResults[preIndex] = result;
                setResult([]);
                setHistory(true);
                setPreIndex(null)
                console.log("wrong block")
              } else {
                setPreviousResults((pre) => [
                  ...pre,
                  result.length ? result : previousResults,
                ]);
                setResult([]);
                setHistory(true);
                
                console.log("right block")
              }
            } else {
              alert("Please Start Chat");
            }
          }}
          key="text"
          className="mb-1"
        >
          New Chat
        </DropdownItem>
        {history &&
          previousResults.map((items, index) => {
            return (
              <DropdownItem
                key={index}
                textValue="title"
                color="warning"
                variant="dot"
              >
                <Chip
                  onClick={() => {
                    if (preIndex == 0 || preIndex) {
                      /* this checking verify that if user click on new chat and came back again 
                       to history tab in that case since he open a new chat then there is not 
                       content so to prevent error of map function i added new extra check 
                    */
                      if (result.length !== 0) {
                        previousResults[preIndex] = result;
                        setResult([]);
                        setHistory(true);
                      }
                    }
                    setShowPreviousResult(false);
                    setResult(items);
                    setPreIndex(index);
                    setShowResult(true);
                  }}
                  className="min-w-[200px]"
                  color="warning"
                  variant="dot"
                >
                  {items[0].prompt.slice(0, 20)}
                </Chip>
              </DropdownItem>
            );
          })}
        <DropdownItem
          onClick={() => {
            setPreviousResults([]);
            setResult([]), setShowResult(false);
            localStorage.clear();
          }}
          key="delete"
          color="danger"
          className="border border-red-700 mt-3"
        >
          Clear All Chat
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
