import React, { useEffect } from "react";
import styled from "styled-components";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import { connect } from "react-redux";
import { markTodoRequest, removeTodoRequest } from "./thunks";
import { loadTodos } from "./thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodos,
  getTodosLoading,
} from "./selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

function TodoList({
  completedTodos,
  incompleteTodos,
  onRemovePressed,
  onMarkPressed,
  isLoading,
  startLoadingTodos,
}) {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h2>Incomplete:</h2>
      {incompleteTodos.length ? (
        incompleteTodos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onMarkPressed={onMarkPressed}
          />
        ))
      ) : (
        <h4>No Incomplete Todos</h4>
      )}
      <h2>Completed:</h2>
      {completedTodos.length ? (
        completedTodos.map((todo) => (
          <TodoListItem
            key={todo.text}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onMarkPressed={onMarkPressed}
          />
        ))
      ) : (
        <h4>No Completed Todos</h4>
      )}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
}
const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkPressed: (id) => dispatch(markTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
