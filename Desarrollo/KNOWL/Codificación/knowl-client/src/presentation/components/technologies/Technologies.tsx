import React from "react";

import { Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import clsx from "clsx";
import { technologiesStyles } from "./technologies.styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";
import CardTechInfo from "../card-technology-info/CardTechInfo";
import EditIcon from "@material-ui/icons/Edit";

const Technologies = () => {
  const classes = technologiesStyles();
  const user = useSelector(userSelector);
  return (
    <div>
      <Card>
        <CardHeader className={classes.title} title="TECNOLOGÍAS"></CardHeader>
        <CardContent>
          <Grid container spacing={2}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12} style={{ textAlign: "right" }}>
              <div className={classes.labelcontainer}>
                <span>
                  <EditIcon
                    style={{
                      textAlign: "right",
                      fontSize: "20px",
                      fontFamily: "Roboto",
                      color: "#748183",
                      marginRight: "4px",
                    }}
                  />
                </span>
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
