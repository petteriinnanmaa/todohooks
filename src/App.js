import React from "react";
import TodoApp from "./components/TodoApp";
import Users from "./components/Users";
import { TodoAppProvider } from "./hooks/useTodoApp";
import "./App.css";

const App = () => {
  return (
    <TodoAppProvider>
      <div className="App">
        <h1>Todo</h1>
        <TodoApp />
        <TodoApp />
        <Users />
      </div>
    </TodoAppProvider>
  );
};

export default App;
