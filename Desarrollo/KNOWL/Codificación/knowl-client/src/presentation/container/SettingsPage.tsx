import { Grid } from "@material-ui/core";
import React from "react";
import EditPhoto from "../components/edit-photo/EditPhoto";
import EditInfo from "../components/edit-info/EditInfo";
import "../../application/assets/css/general.css";
import EditStatus from "../components/edit-status/EditStatus";
const SettingsPage = () => {
  return (
    <div className="settings-container">
      <EditPhoto />
      <EditInfo />
      <EditStatus />
    </div>
  );
};

export default SettingsPage;
