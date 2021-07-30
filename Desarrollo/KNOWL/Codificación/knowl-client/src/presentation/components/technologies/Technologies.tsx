import React from "react";

import { Card, CardContent, CardHeader, Grid, Paper, Typography } from "@material-ui/core";
import clsx from "clsx";
import { technologiesStyles } from "./technologies.styles";
import UserActivity from "../user-activity/UserActivity";
import { useSelector } from 'react-redux'
import { userSelector } from '../../../application/store/user/user.selectors'
import CardTechInfo from "../card-technology-info/CardTechInfo";

const Technologies = () => {
  const classes = technologiesStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const user = useSelector(userSelector);
  return (
    <div>
      <Card>
        <CardHeader className={classes.title} title="TECNOLOGÍAS" >
        </CardHeader>
        <CardContent>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={3} lg={3}>
              <div className={classes.labelcontainer}>
                <CardTechInfo />
              </div>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <div className={classes.labelcontainer}>
                <CardTechInfo />
              </div>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <div className={classes.labelcontainer}>
                <CardTechInfo />
              </div>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <div className={classes.labelcontainer}>
                <CardTechInfo />
              </div>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
    </div>
  );
};

export default Technologies;
