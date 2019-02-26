import produce from "immer";

export const initialState = {
  isLoading: false,
  todos: []
};

let idCounter = 0;

const findIndex = (state, id) => state.todos.findIndex(t => t.id === id);

export const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      idCounter++;
      const newTodo = {
        id: idCounter,
        text: action.text
      };
      return {
        todos: [...state.todos, newTodo]
      };
    }
    case "edit": {
      const idx = state.todos.findIndex(t => t.id === action.id);
      const todo = Object.assign({}, state.todos[idx]);
      todo.text = action.text;
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1, todo);
      return {
        todos: todos
      };
    }
    case "remove": {
      const idx = state.todos.findIndex(t => t.id === action.id);
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1);
      return {
        todos: todos
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
        const idx = findIndex(draft, action.id);
        draft.todos[idx].text = action.text;
        return draft;
      }
      case "remove": {
        const idx = findIndex(draft, action.id);
        draft.todos.splice(idx, 1);
        return draft;
      }
      default:
        return draft;
    }
  });
