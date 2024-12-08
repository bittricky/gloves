import { FC } from "react";
import Hook from "./Hook";
import Rope from "./Rope";

const Wall: FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2">
      <Hook />

      <Rope side="left" />
      <Rope side="right" />

      {/* TODO Glove Component */}
    </div>
  );
};

Wall.displayName = "Wall";

export default Wall;
