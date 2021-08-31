import React from "react";
import { useHistory } from "react-router";
import jwtDecode from "jwt-decode";
import { IToken } from "./token.interface";
import { useDispatch } from "react-redux";
import { logOut } from "../../api/auth.actions";
const TokenVerify = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  history.listen((location) => {
    let token = localStorage.getItem("token");
    if (token) {
      const { exp } = jwtDecode<IToken>(token);
      const expirationTime = exp * 1000 - 60000;
      if (Date.now() >= expirationTime) {
        dispatch(logOut());
        history.push("/");
        alert("Sesión terminada por inactividad");
      }
    } else {
      console.log("no hay token");
      dispatch(logOut());
    }
  });
  return <div></div>;
};

export default TokenVerify;
