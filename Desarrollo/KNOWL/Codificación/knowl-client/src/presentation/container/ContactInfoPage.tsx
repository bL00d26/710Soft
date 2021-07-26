import React from 'react'
import CardContactInfo from '../components/cardcontactinfo/CardContactInfo';
import { dashboardStyles } from "../components/dashboard/dashboard.styles";

const ContactInfoPage = () => {
    const classes = dashboardStyles();
    return (
        <div className={classes.main}>
            <CardContactInfo />
        </div>
    )
}

export default ContactInfoPage
