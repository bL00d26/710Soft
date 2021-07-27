import React from "react";
import CardContactInfo from "../components/cardcontactinfo/CardContactInfo";
import { contactInfoStyles } from "../components/contact-info/contact-info.styles";

const ContactInfoPage = () => {
  const classes = contactInfoStyles();
  return (
    <div className={classes.main}>
      <CardContactInfo />
    </div>
  );
};

export default ContactInfoPage;
