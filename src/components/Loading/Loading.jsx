import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className=" w-full h-full  flex justify-center items-center mt-10">
      <div className=" w-1/2 flex items-center gap-5 max-2xl:w-[70%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-fit p-5 border border-[#2e2e2e] rounded-xl">
        <div>
          <Skeleton className="flex rounded-full w-12 h-12" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

