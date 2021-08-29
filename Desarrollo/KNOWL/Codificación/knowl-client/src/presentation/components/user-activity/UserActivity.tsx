import { Typography } from "@material-ui/core";
import React from "react";
import { userActivityStyles } from "./user-activity.styles";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";
import imgUser from "../../../application/assets/images/user.png";
const UserActivity = () => {
  const classes = userActivityStyles();
  const user = useSelector(userSelector);
  return (
    <div>
      <div>
        <div className={classes.imagecontainer}>
          <img
            className={classes.imagecontainer}
            src={
              user?.profileImage === "default" ? imgUser : user?.profileImage
            }
            alt="user-img"
          />
        </div>
        <Typography>{user?.status}</Typography>
      </div>
    </div>
  );
};

export default UserActivity;
