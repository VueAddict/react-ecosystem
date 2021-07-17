export const displayAlert = (text) => () => alert(`Error: ${text}`);
import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markTodo,
} from "./actions";
export const loadTodos = () => async (dispatch, getState) => {
  dispatch(loadTodosInProgress());
  try {
    const response = await fetch("http://localhost:8080/todos-delay");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};
export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};
export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    });
    const removedTodo = await response.json();
    dispatch(removeTodo(removedTodo));
  } catch (error) {
    displayAlert(error);
  }
};

export const markTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "POST",
      }       
    );
    const markedTodo = await response.json();
    dispatch(markTodo(markedTodo));
  } catch (error) {
    displayAlert(error);
  }
};
