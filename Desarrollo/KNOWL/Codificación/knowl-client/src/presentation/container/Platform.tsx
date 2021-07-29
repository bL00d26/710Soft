import React from "react";
import clsx from "clsx";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DashboardPage from "./DashboardPage";
import Copyright from "../components/copyright/Copyright";
import TokenVerify from "../../infrastructure/common-components/token-verify/TokenVerify";
import { Container, Typography, Modal } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { commonStyles } from "../../infrastructure/common-components/styles/common.style";
import ContactInfoPage from "./ContactInfoPage";
import FormationPage from "./FormationPage";
import ExperiencePage from "./ExperiencePage";
import { Routes } from "../../application/utils/enums";
import { useSelector } from "react-redux";
import { userSelector } from "../../application/store/user/user.selectors";
import InformationForm from "../components/information-form/InformationForm";
import { modalStyles } from "../../infrastructure/common-components/modal/modal.styles";

const Platform = () => {
  const classes = commonStyles();
  const user = useSelector(userSelector);
  return (
    <>
      <Navbar />
      <Sidebar />
      <TokenVerify />
      <Modal open={!user?.verified}>
        <InformationForm />
      </Modal>
      <div>
        <Container className={clsx(classes.content, classes.appBarSpacer)}>
          <Switch>
            <Route path={Routes.PRINCIPAL} exact component={DashboardPage} />
            <Route
              path={Routes.CONTACT_INFO}
              exact
              component={ContactInfoPage}
            />
            <Route path={Routes.FORMATION} exact component={FormationPage} />
            <Route path={Routes.EXPERIENCE} exact component={ExperiencePage} />
          </Switch>
        </Container>
      </div>
      <Copyright />
    </>
  );
};

export default Platform;
