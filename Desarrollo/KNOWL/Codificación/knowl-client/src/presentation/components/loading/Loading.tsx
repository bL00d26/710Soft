import React, { Fragment } from "react";
import "./loading.css";
const Loading = () => {
  return (
    <Fragment>
      <div className="loader">.....</div>
      <div id="load">Cargando...</div>
    </Fragment>
  );
};

export default Loading;
