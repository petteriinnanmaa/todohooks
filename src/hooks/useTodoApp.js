import React from "react";
import { createContext, useCallback, useReducer, useContext } from "react";
import { initialState, reducer } from "../reducers/todo.reducer";

const TodoContext = createContext();

export const TodoAppProvider = props => {
  let [state, dispatch] = useReducer(reducer, initialState);

  const handleRemove = useCallback(id => {
    dispatch({ type: "remove", id });
  }, []);

  const handleAdd = useCallback(text => {
    dispatch({ type: "add", text });
  }, []);

  const handleEdit = useCallback((id, text) => {
    dispatch({ type: "edit", id, text });
  }, []);

  const todoApp = {
    state,
    dispatch,
    handleRemove,
    handleAdd,
    handleEdit
  };

  return (
    <TodoContext.Provider value={todoApp}>
      {props.children}
    </TodoContext.Provider>
  );
};

export const useTodoApp = () => {
  return useContext(TodoContext);
};
