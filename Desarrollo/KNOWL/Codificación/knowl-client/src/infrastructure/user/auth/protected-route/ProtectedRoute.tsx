import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";
import { userSelector } from "../../../../application/store/user/user.selectors";

import { loadUserCurrent } from "../login/login.actions";

interface IProps {
  path?: string;
  component: React.FC;
  exact?: boolean;
  protectedRoute?: boolean;
}
const ProtectedRoute: React.FC<IProps> = ({
  component,
  exact,
  path,
  protectedRoute,
}) => {
  const user = useSelector(userSelector);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token") !== null;

  useEffect(() => {
    if (token) {
      dispatch(loadUserCurrent());
    }
  }, []);

  return protectedRoute ? (
    <>
      {user ? (
        <Route path={path} component={component} exact={exact} />
      ) : (
        <Redirect to="/" />
      )}
    </>
  ) : (
    <Route path={path} component={component} exact={exact} />
  );
};

export default ProtectedRoute;
