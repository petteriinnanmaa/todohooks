import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useTodoApp } from "../hooks/useTodoApp";

const TodoApp = () => {
  const [foo, setFoo] = useState("TodoApp");
  const { state, handleRemove, handleEdit, dispatch } = useTodoApp();

  return (
    <>
      <h1 onClick={() => setFoo("Updated TodoApp")}>{foo}</h1>
      <AddTodo add={text => dispatch({ type: "add", text })} />
      {state.todos.map(t => (
        <Todo
          key={t.id}
          todo={t}
          remove={() => handleRemove}
          edit={handleEdit}
        />
      ))}
    </>
  );
};

export default TodoApp;
