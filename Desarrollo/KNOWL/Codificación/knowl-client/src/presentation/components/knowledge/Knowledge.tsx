import React from "react";

import { Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import { knowledgeStyles } from "./knowledge.styles";

const Knowledge = () => {
  const classes = knowledgeStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return <Paper className={fixedHeightPaper}>Formación Académica</Paper>;
};

export default Knowledge;
