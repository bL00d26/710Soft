import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./error/ErrorPage";
import Platform from "../../../presentation/container/Platform";
import LoginPage from "./login/LoginPage";
import RecoverPasswordPage from "./recover-password/RecoverPasswordPage";
import ProtectedRoute from "./protected-route/ProtectedRoute";
import RegisterPage from "./register/RegisterPage";
const AuthPage = () => {
  return (
    <BrowserRouter>
      <ToastContainer limit={1} autoClose={3000} />
      <Switch>
        <ProtectedRoute
          path="/"
          component={LoginPage}
          exact={true}
          protectedRoute={false}
        />
        <ProtectedRoute
          path="/register"
          component={RegisterPage}
          protectedRoute={false}
        />
        <ProtectedRoute
          path="/password/recover"
          component={RecoverPasswordPage}
          protectedRoute={false}
        />

        <ProtectedRoute
          path="/home"
          protectedRoute={true}
          component={Platform}
        />

        <ProtectedRoute component={ErrorPage} protectedRoute={false} />
      </Switch>
    </BrowserRouter>
  );
};

export default AuthPage;
