import React from "react";
import { hot, setConfig } from "react-hot-loader";
import styled from "styled-components";
setConfig({
  showReactDomPatchNotification: false,
});

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
`;
import TodoList from "./todos/TodoList";
function App() {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
}

export default hot(module)(App);
