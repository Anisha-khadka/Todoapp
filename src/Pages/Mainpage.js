import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Mainpage() {
  return (
    <div>
      <h1>This is main page</h1>
      <Link to="/add">Click on the link</Link>
    </div>
  );
}
