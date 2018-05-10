import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Timer";

export default () => {
  return (
    <div>
      <nav>
        <Link to="/">Go home</Link>
      </nav>
      <Timer />
    </div>
  );
};
