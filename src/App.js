import React, { useState } from "react";
import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";

const App = () => {
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <TodoProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">To-Do List</h1>
        <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
        <TodoList setEditingTodo={setEditingTodo} />
      </div>
    </TodoProvider>
  );
};

export default App;
