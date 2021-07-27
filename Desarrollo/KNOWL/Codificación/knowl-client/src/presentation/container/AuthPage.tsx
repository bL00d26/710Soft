import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ErrorPage from "../../infrastructure/common-components/error/ErrorPage";
import Platform from "./Platform";
import LoginPage from "./LoginPage";
import RecoverPasswordPage from "./RecoverPasswordPage";
import ProtectedRoute from "../../infrastructure/common-components/protected-route/ProtectedRoute";
import RegisterPage from "./RegisterPage";
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
