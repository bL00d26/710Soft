import React, { useEffect } from "react";
import clsx from "clsx";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import DashboardPage from "./DashboardPage";
import Copyright from "../components/copyright/Copyright";
import TokenVerify from "../../infrastructure/common-components/token-verify/TokenVerify";
import { Container, Modal } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { commonStyles } from "../../infrastructure/common-components/styles/common.style";
import ContactInfoPage from "./ContactInfoPage";
import FormationPage from "./FormationPage";
import ExperiencePage from "./ExperiencePage";
import { Routes } from "../../application/utils/enums";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../application/store/user/user.selectors";
import InformationForm from "../components/information-form/InformationForm";
import SettingsPage from "./SettingsPage";
import UserInfoPage from "./UserInfoPage";
import {
  loadExperience,
  loadFormation,
  loadTechnologiesUser,
} from "../../infrastructure/api/user.actions";
import FormationUserPage from "./FormationUserPage";
import ExperienceUserPage from "./ExperienceUserPage";

const Platform = () => {
  const classes = commonStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  useEffect(() => {
    dispatch(loadFormation(user?._id as string));
    dispatch(loadExperience(user?._id as string));
    dispatch(loadTechnologiesUser(user?._id as string));
  }, []);
  return (
    <div className="platform-container">
      <Navbar />

      <Sidebar />
      {/* <TokenVerify /> */}
      <Modal open={!user?.verified}>
        <InformationForm />
      </Modal>
      <Container className={clsx(classes.content)}>
        <Switch>
          <Route path={Routes.PRINCIPAL} exact component={DashboardPage} />
          <Route path={Routes.PROFILE} exact component={ContactInfoPage} />
          <Route
            path={Routes.PROFILE.concat("/:id")}
            exact
            component={UserInfoPage}
          />
          <Route
            path={Routes.PROFILE.concat("/formation/:id")}
            exact
            component={FormationUserPage}
          />
          <Route
            path={Routes.PROFILE.concat("/experience/:id")}
            exact
            component={ExperienceUserPage}
          />
          <Route path={Routes.FORMATION} exact component={FormationPage} />
          <Route path={Routes.EXPERIENCE} exact component={ExperiencePage} />
          <Route path={Routes.SETTINGS} exact component={SettingsPage} />
        </Switch>
      </Container>
      <Copyright />
    </div>
  );
};

export default Platform;
