import React, { useState } from "react";
// react-toastify
import { notify } from "./toast";
// trash-icon
import { BsTrashFill } from "react-icons/bs";

const TodoList = ({ title, setTodos, todos, id }) => {
  const [complete, setComplete] = useState(false);
  // doneHandler (completed tasks)
  const doneHandler = () => {
    setComplete(!complete);
  };
  // Delete Handler (delete task)
  const deleteHandler = () => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
    notify("Deleted !", "error");
  };

  return (
    <div className="todolist-container">
      <li
        onClick={doneHandler}
        style={
          complete
            ? { color: "green", textDecoration: "line-through" }
            : { color: "#000" }
        }
      >
        {title}
      </li>
      <div>
        <BsTrashFill
          className="del-icon"
          type="button"
          onClick={deleteHandler}
        />
      </div>
    </div>
  );
};

export default TodoList;
