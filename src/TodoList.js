import React from "react";
import { useTodoContext } from "./TodoContext";

const TodoList = ({ setEditingTodo }) => {
  const { state, dispatch } = useTodoContext();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleEditInit = (todo) => {
    setEditingTodo(todo); // Pass task to be edited
  };

  return (
    <div>
      {state.todos.length > 0 ? (
        state.todos.map((todo) => (
          <div key={todo.id} className="card mb-2">
            <div className="card-body d-flex justify-content-between align-items-center">
              <span>{todo.text}</span>
              <div>
                <button
                  onClick={() => handleEditInit(todo)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted text-center">No tasks added yet.</p>
      )}
    </div>
  );
};

export default TodoList;
