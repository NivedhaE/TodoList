import React, { useState, useEffect } from "react";
import { useTodoContext } from "./TodoContext";

const AddTodo = ({ editingTodo, setEditingTodo }) => {
  const { dispatch } = useTodoContext();
  const [input, setInput] = useState("");

  useEffect(() => {
    // Pre-fill the input field when editing a task
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch({
        type: "ADD_TODO",
        payload: { id: Date.now(), text: input },
      });
      setInput("");
    }
  };

  const handleEdit = () => {
    if (input.trim()) {
      dispatch({
        type: "EDIT_TODO",
        payload: { id: editingTodo.id, text: input },
      });
      setInput("");
      setEditingTodo(null); // Reset editing state
    }
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="form-control"
          placeholder="Enter a task"
        />
        <button
          onClick={editingTodo ? handleEdit : handleAdd}
          className={`btn ${editingTodo ? "btn-warning" : "btn-primary"}`}
        >
          {editingTodo ? "Edit" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
