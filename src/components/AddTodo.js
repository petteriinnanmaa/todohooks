import React, { useState, useRef, useEffect } from "react";

const AddTodo = ({ add }) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => inputRef.current.focus(), []);

  const handleAdd = text => {
    add(text);
    setText("");
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      handleAdd(text);
    }
  };

  return (
    <div className="AddTodo">
      <input
        value={text}
        ref={inputRef}
        onChange={e => setText(e.target.value)}
        className="AddTodoInput"
        onKeyPress={handleKeyPress}
      />
      <button
        className="AddTodoButton"
        onClick={() => {
          handleAdd(text);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
