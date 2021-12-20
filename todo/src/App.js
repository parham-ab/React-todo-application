import React, { useState } from "react";
// components
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";

const App = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <AddToDo todos={todos} setTodos={setTodos} />
      {todos.map((item) => (
        <TodoList
          key={item.id}
          id={item.id}
          todos={todos}
          setTodos={setTodos}
          title={item.title}
          setTitle={setTitle}
        />
      ))}
    </div>
  );
};

export default App;
