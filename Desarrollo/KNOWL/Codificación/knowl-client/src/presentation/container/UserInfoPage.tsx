import { Grid } from "@material-ui/core";
import React from "react";
import CardUserInfo from "../components/card-user-info/CardUserInfo";
import { contactInfoStyles } from "../components/contact-info/contact-info.styles";
import Technologies from "../components/technologies/Technologies";

const UserInfoPage = () => {
  const classes = contactInfoStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={4} style={{ textAlign: "center" }}>
        <Grid item xs={12} md={12} lg={12}>
          <CardUserInfo />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Technologies />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserInfoPage;
