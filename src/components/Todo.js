import React from "react";



const Todo = ({ onClick, completed, text }) => (
  <li
    className="todo"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    <label >

     <span className="blue-text text-darken-2">{text}</span>

    </label>
  </li>
);



export default Todo;
