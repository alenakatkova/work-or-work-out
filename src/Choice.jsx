import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Link to="/work">Work</Link> or <Link to="/workout">Work out</Link>?
    </div>
  );
};
