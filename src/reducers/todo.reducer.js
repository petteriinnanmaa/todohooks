import produce from "immer";

export const initialState = {
  isLoading: false,
  todos: []
};

let idCounter = 0;

const findIndex = (state, { id }) =>
  id ? state.todos.findIndex(t => t.id === id) : null;

export const reducer = (state, action) => {
  const currentIndex = findIndex(state, action);
  switch (action.type) {
    case "add": {
      idCounter++;
      const newTodo = {
        id: idCounter,
        text: action.text
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    }
    case "edit": {
      const todo = Object.assign({}, state.todos[currentIndex]);
      todo.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(currentIndex, 1, todo);
      return {
        ...state,
        todos
      };
    }
    case "remove": {
      const todos = Object.assign([], state.todos);
      todos.splice(currentIndex, 1);
      return {
        ...state,
        todos
      };
    }
    default:
      return state;
  }
};

/*


















*/

export const immerReducer = (state, action) =>
  produce(state, draft => {
    const currentIndex = findIndex(state, action);
    switch (action.type) {
      case "add": {
        idCounter++;
        draft.todos.push({
          id: idCounter,
          text: action.text
        });
        return draft;
      }
      case "edit": {
        draft.todos[currentIndex].text = action.text;
        return draft;
      }
      case "remove": {
        draft.todos.splice(currentIndex, 1);
        return draft;
      }
      default:
        return draft;
    }
  });
