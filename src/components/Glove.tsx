import { FC } from "react";

import type { GloveProps } from "../types/global";

const Glove: FC<GloveProps> = ({ side }) => {
  const containerClasses = {
    left: "relative -top-[426px] -left-[66px]",
    right: "relative -top-[708px] left-[56px] -rotate-[18deg]",
  };

  const thumbClasses = {
    left: "left-[-24px] rotate-[182deg] rounded-[40%] rounded-tl-[72%]",
    right: "left-[22px] rotate-[2deg] rounded-[40%] rounded-bl-[72%]",
  };

  return (
    <div className={containerClasses[side]}>
      <div className="relative w-[80px] h-[60px] bg-red-500 rounded-t-[40%] rounded-b-[20%] rotate-[4deg] border-2 border-red-400 shadow-[2px_2px_2px_2px_rgba(0,0,0,0.2)]" />
      <div className="relative w-[134px] h-[120px] bg-red-500 rounded-t-[40%] rounded-b-[60%] rotate-[4deg] -left-[34px] -top-[12px] border-2 border-red-400 shadow-[4px_4px_4px_4px_rgba(0,0,0,0.2)]" />
      <div
        className={`relative w-[72px] h-[62px] bg-red-500 -top-[122px] ${thumbClasses[side]} border-l-2 border-t-2 border-b-2 border-red-400 shadow-[2px_-2px_2px_2px_rgba(0,0,0,0.2)]`}
      />
    </div>
  );
};

export default Glove;
