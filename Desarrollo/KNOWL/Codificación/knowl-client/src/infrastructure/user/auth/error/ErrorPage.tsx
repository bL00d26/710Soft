import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div>Página no existe</div>
      <Link to="/">¡IR A LA PÁGINA PRINCIPAL!</Link>
    </div>
  );
};

export default ErrorPage;
