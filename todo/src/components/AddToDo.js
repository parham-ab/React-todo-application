import React, { useState } from "react";
// uuid
import { v4 as uuidv4 } from "uuid";
// react toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";

const AddToDo = ({ setTodos, todos }) => {
  const [newTodo, setNewTodo] = useState({
    title: "",
  });
  // clear input after submit
  const submitHandler = () => {
    if (newTodo.title) {
      setTodos([...todos, newTodo]);
      setNewTodo({ title: "" });
      notify();
    } else {
      notify("Add something todo !", "warning");
    }
  };

  return (
    <div className="addtodo-container">
      <h1>Todo Application</h1>
      <div className="addtodo-box">
        <input
          type="text"
          placeholder="Type todo..."
          value={newTodo.title}
          onChange={(e) =>
            setNewTodo({ ...newTodo, title: e.target.value, id: uuidv4() })
          }
        />
        <button type="submit" onClick={submitHandler}>
          ADD
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddToDo;
