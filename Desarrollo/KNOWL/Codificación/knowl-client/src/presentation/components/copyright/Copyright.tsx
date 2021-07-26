import { Link, Typography } from "@material-ui/core";
import React from "react";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos los derechos reservados © "}
      <Link color="inherit" href="https://material-ui.com/">
        Knowl App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
