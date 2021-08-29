import { Container, Grid } from "@material-ui/core";
import React from "react";
import CardContactInfo from "../components/card-contact-info/CardContactInfo";
import { contactInfoStyles } from "../components/contact-info/contact-info.styles";
import EditActivity from "../components/edit-activity/EditActivity";
import EditInfo from "../components/edit-info/EditInfo";
import EditTechnologies from "../components/edit-technologies/EditTechnologies";
import Technologies from "../components/technologies/Technologies";
import UserActivity from "../components/user-activity/UserActivity";

const ContactInfoPage = () => {
  const classes = contactInfoStyles();
  return (
    <div className={classes.main}>
      <Grid container spacing={4} style={{ textAlign: "center" }}>
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
