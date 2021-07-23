import React from "react";
import { Grid } from "@material-ui/core";

import { dashboardStyles } from "../components/dashboard/dashboard.styles";
import Knowledge from "../components/knowledge/Knowledge";
import Experience from "../components/experience/Experience";
import Technologies from "../components/technologies/Technologies";

const DashboardPage = () => {
  const classes = dashboardStyles();
  return (
    <>
      <Grid container spacing={4}>
        {/* Chart */}
        <Grid item xs={12} md={7} lg={7}>
          <Experience />
        </Grid>

        <Grid item xs={12} md={5} lg={5}>
          <Knowledge />
        </Grid>

        <Grid item xs={12}>
          <Technologies />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
