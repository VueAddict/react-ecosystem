import React from "react";
import styled from "styled-components";
const TodoItemContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;
export const getBorderStyle = (startingDate, currentDate) => {
  return startingDate > new Date(currentDate - 8640000 * 5)
    ? "none"
    : "2px solid red";
};
const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    getBorderStyle(new Date(props.createdAt), Date.now())};
`;
const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;
const Button = styled.button`
  display: inline-block;
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;
const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;
const RemoveButton = styled(Button)`
  background-color: #ee2222;
  color: #fff;
  margin-left: 8px;
`;
function TodoListItem({ todo, onRemovePressed, onMarkPressed }) {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {!todo.isCompleted && (
          <CompletedButton onClick={() => onMarkPressed(todo.id)}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  );
}

export default TodoListItem;
