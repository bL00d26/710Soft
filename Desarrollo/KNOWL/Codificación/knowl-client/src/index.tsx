import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./application/store/store";
import AuthPage from "./presentation/container/AuthPage";

ReactDOM.render(
  <Provider store={store}>
    <AuthPage />
  </Provider>,
  document.getElementById("root")
);
