import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper } from "@material-ui/core";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { experienceStyles } from "./experience.styles";

const Experience = () => {
  const classes = experienceStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Paper className={fixedHeightPaper} style={{ textAlign: "center" }}>
      Experiencia
    </Paper>
  );
};

export default Experience;
