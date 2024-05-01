import React, { useRef } from "react";
import Navbar from "./Navbar";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AddToDo(props) {
  const todoText = useRef();
  const history = useHistory();

  const addTodo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;
    const Initialtodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    Initialtodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(Initialtodo));
    history.push("/");
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="formfill">
          <h1>Add to-do:</h1>
          <form onSubmit={addTodo}>
            <input type="text" ref={todoText} />
            <button>Save to-do</button>
          </form>
        </div>
      </div>
    </>
  );
}
