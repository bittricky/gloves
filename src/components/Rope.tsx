import { FC } from "react";

import type { RopeProps } from "../types/global";

const Rope: FC<RopeProps> = ({ side }) => {
  const baseClasses = "w-[3px] h-[200px] bg-yellow-500 relative";

  const sideClasses = {
    left: "-top-[222px] -left-[4px] rotate-[8deg]",
    right: "-top-[422px] left-[40px] -rotate-[12deg]",
  };

  const afterClasses = {
    left: "left-[-4px] rotate-[2deg] shadow-[1px_2px_2px_2px_rgba(0,0,0,0.08)]",
    right:
      "left-[-4px] rotate-[2deg] shadow-[1px_2px_2px_2px_rgba(0,0,0,0.08)]",
  };

  return (
    <div className={`${baseClasses} ${sideClasses[side]} rounded-t-[20%]`}>
      <div
        className={`absolute w-[3px] h-[200px] bg-yellow-500 top-[1px] ${afterClasses[side]} rounded-t-[20%]`}
      />
    </div>
  );
};

Rope.displayName = "Rope";

export default Rope;
