import React from "react";
import { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
console.log(configureStore().getState());
const store = configureStore();
const persistor = persistStore(store);
render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<h2>Loading...</h2>}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
