import { FC } from "react";
import Hook from "./Hook";

const Wall: FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2">
      <Hook />
      {/* TODO Rope Component */}
      {/* TODO Glove Component */}
    </div>
  );
};

Wall.displayName = "Wall";

export default Wall;
