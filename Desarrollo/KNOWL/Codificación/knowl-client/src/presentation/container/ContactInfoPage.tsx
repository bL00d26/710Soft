import { Container, Grid } from "@material-ui/core";
import React from "react";
import CardContactInfo from "../components/cardcontactinfo/CardContactInfo";
import { contactInfoStyles } from "../components/contact-info/contact-info.styles";
import Technologies from "../components/technologies/Technologies";
import UserActivity from "../components/user-activity/UserActivity";

const ContactInfoPage = () => {
  const classes = contactInfoStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={4} style={{textAlign:"center",}}>
        {/* Chart */}
        <Grid item xs={12} md={12} lg={12}>
          <CardContactInfo />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Technologies />
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactInfoPage;
