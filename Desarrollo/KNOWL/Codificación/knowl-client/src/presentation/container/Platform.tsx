import React from "react";
import clsx from "clsx";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DashboardPage from "./DashboardPage";
import Copyright from "../components/copyright/Copyright";

import TokenVerify from "../../infrastructure/common-components/token-verify/TokenVerify";
import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { commonStyles } from "../../infrastructure/common-components/styles/common.style";
import ContactInfoPage from "./ContactInfoPage";
import FormationPage from "./FormationPage";
import ExperiencePage from "./ExperiencePage";

const Platform = () => {
  const classes = commonStyles();
  return (
    <>
      <Navbar />
      <Sidebar />
      <TokenVerify />
      <div>
        <Container className={clsx(classes.content, classes.appBarSpacer)}>
          <Switch>
            <Route path="/home/dashboard" exact component={DashboardPage} />
            <Route path="/home/contactinfo" exact component={ContactInfoPage} />
            <Route path="/home/formation" exact component={FormationPage} />
            <Route path="/home/experience" exact component={ExperiencePage} />
            {/* <Route path="/home/records" exact component={RecordsPage} />
            <Route path="/home/settings" exact component={SettingsPage} /> */}
          </Switch>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default Platform;
