import React from "react";
import { Link } from "react-router-dom";
import Timer from "./Calculator";
import "flexboxgrid2";

export default () => {
  return (
    <div className="container">
      <nav>
        <Link to="/">Go home</Link>
      </nav>
      <Timer />
    </div>
  );
};
