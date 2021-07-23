import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./application/store/store";
import AuthPage from "./infrastructure/user/auth/AuthPage";
import Platform from "./presentation/container/Platform";

ReactDOM.render(
  <Provider store={store}>
    <Platform />
  </Provider>,
  document.getElementById("root")
);