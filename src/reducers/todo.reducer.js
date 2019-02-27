import produce from "immer";

export const initialState = {
  isLoading: false,
  todos: []
};

let idCounter = 0;

const findIndex = (state, { id }) =>
  id ? state.todos.findIndex(t => t.id === id) : null;

export const reducer = (state, action) =>
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
