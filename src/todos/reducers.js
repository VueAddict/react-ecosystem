import {
  CREATE_TODO,
  MARK_TODO,
  REMOVE_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: [...state.data, todo] };
    }
    case REMOVE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.filter((t) => t.id !== todo.id) };
    }
    case MARK_TODO: {
      const { todo } = payload;
      const updatedData = state.data.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });
      return { ...state, data: updatedData };
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isLoading: false, data: todos };
    }
    case LOAD_TODOS_IN_PROGRESS:
      return { ...state, isLoading: true };
    case LOAD_TODOS_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
