import React, { useState, useEffect, useRef } from "react";
// import useWhyDidYouUpdate from "../hooks/useWhyDidYouUpdate";

const Todo = ({ todo, remove, edit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      edit(text);
      setIsEditing(false);
    }
  };

  return (
    <div className="Todo">
      {!isEditing ? (
        <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>
            Remove
          </button>
          <button className="EditTodo" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={text}
            ref={inputRef}
            onChange={e => setText(e.target.value)}
            className="EditTodoInput"
            onKeyPress={handleKeyPress}
          />
          <button
            className="EditTodoSave"
            onClick={() => {
              edit(text);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="EditTodoCancel"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      )}
      <div />
    </div>
  );
};

export default Todo;
