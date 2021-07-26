import React from "react";
import { settingsStyles } from "./styles";
import Grid from "@material-ui/core/Grid";
import SettingsForm from "./SettingsForm";
import SettingsPasswordForm from "./SettingsPasswordForm";
const SettingsPage = () => {
  const classes = settingsStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SettingsForm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SettingsPasswordForm />
        </Grid>
      </Grid>
    </div>
  );
};

export default SettingsPage;
