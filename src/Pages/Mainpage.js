import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "./Navbar";

import { GoEye } from "react-icons/go";
export default function Mainpage() {
  const gettoddo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  return (
    <div>
      <Navbar />
      <div className="todo_container">
        <h3>Your to-do:</h3>
        {gettoddo.map((value,index) => (
          <div className="todo_1"> 
            {value}
            <Link to={`/view/${index}`}>
              <GoEye size={"20px"} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
