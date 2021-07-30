import { Link, Typography } from "@material-ui/core";
import React from "react";
import { copyrightStyles } from "./copyright.styles";


const Copyright = () => {
  const classes = copyrightStyles();
  return (
    <div style={{}}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Todos los derechos reservados © "}
        <Link color="inherit" href="https://github.com/fLYwEEdme/710Soft">
          Knowl App
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Copyright;
