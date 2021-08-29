import { Typography } from "@material-ui/core";
import React from "react";
import { userActivityStyles } from "./user-activity.styles";
import { User } from "../../../application/store/user/interfaces/user.interface";
import imgUser from "../../../application/assets/images/user.png";
interface IUserInfoActivity {
  user: User;
}
const UserInfoActivity: React.FC<IUserInfoActivity> = ({ user }) => {
  const classes = userActivityStyles();

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
        <Typography>{user.status}</Typography>
      </div>
    </div>
  );
};

export default UserInfoActivity;
