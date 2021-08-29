import { Grid } from "@material-ui/core";
import React from "react";
import EditActivity from "../components/edit-activity/EditActivity";
import EditInfo from "../components/edit-info/EditInfo";
import EditTechnologies from "../components/edit-technologies/EditTechnologies";

const SettingsPage = () => {
  return (
    <>
      <Grid container spacing={4} style={{ textAlign: "center" }}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <EditActivity />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <EditInfo />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <EditTechnologies />
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsPage;
