import { FC } from "react";

const Hook: FC = () => {
  return (
    <div className="w-[26px] h-[26px] bg-blue-500 relative -top-[200px] rounded-[40%] border-[3px] border-white">
      <div className="absolute w-[12px] h-[12px] bg-zinc-700 top-[5px] left-[7px] rounded-[48%] border-t-[3px] border-t-yellow-500" />
    </div>
  );
};

Hook.displayName = "Hook";

export default Hook;
