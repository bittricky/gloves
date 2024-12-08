import { FC } from "react";
import Hook from "./Hook";
import Rope from "./Rope";
import Glove from "./Glove";

const Wall: FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2">
      <Hook />

      <Rope side="left" />
      <Rope side="right" />

      <Glove side="left" />
      <Glove side="right" />
    </div>
  );
};

Wall.displayName = "Wall";

export default Wall;
