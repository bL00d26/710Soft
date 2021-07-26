import React from "react";

import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import { technologiesStyles } from "./technologies.styles";

const Technologies = () => {
  const classes = technologiesStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return <Paper className={fixedHeightPaper}>Tecnologías</Paper>;
};

export default Technologies;
