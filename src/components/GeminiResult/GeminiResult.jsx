import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";
import Loading from "../Loading/Loading";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import { getChatsById } from "../../../apis/findChatById";
import { useParams } from "react-router-dom";
// import { TextEffect } from "../TextEffect/TextEffect";

function GeminiResult() {
  const { result, loading } = useGeminiContext();
  const [historyChat, setHistoryChat] = useState([])
  const  {chatId}  = useParams();
  console.log(chatId)
  useEffect(()=>{
    (async function () {
       const response = await getChatsById(chatId);
       setHistoryChat(response[0].conversation)
      console.log(response)
    })()
  },[chatId])
  return (
    <>
      <div className="w-full min-h-screen mb-[15%]">
      {historyChat?.map((items, index) => {
          return (
            <div
              key={index}
              className=" w-full h-fit flex justify-center items-center"
            >
              <div className="w-1/2 max-2xl:w-[70%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-fit p-5 rounded-xl">
                <Card className="p-2">
                  <CardBody>
                    <div className="flex items-center gap-5">
                      <Avatar
                        icon={<AvatarIcon />}
                        classNames={{
                          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                          icon: "text-black/80",
                        }}
                        className="w-8 h-8 border-[2px] border-blue-700 mb-5"
                      />
                      <p className="mb-5 font-semibold">{items.question}</p>
                    </div>
                    <ReactMarkdown className="text-sm font-normal">
                        {items.response}               
                    </ReactMarkdown>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })}
        {result.map((items, index) => {
          return (
            <div
              key={index}
              className=" w-full h-fit flex justify-center items-center"
            >
              <div className="w-1/2 max-2xl:w-[70%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-fit p-5 rounded-xl">
                <Card className="p-2">
                  <CardBody>
                    <div className="flex items-center gap-5">
                      <Avatar
                        icon={<AvatarIcon />}
                        classNames={{
                          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                          icon: "text-black/80",
                        }}
                        className="w-8 h-8 border-[2px] border-blue-700 mb-5"
                      />
                      <p className="mb-5 font-semibold">{items.prompt}</p>
                    </div>
                    <ReactMarkdown className="text-sm font-normal">
                        {items.results}               
                    </ReactMarkdown>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })}
        {loading && <Loading />}
      </div>
    </>
  );
}

export default GeminiResult;
