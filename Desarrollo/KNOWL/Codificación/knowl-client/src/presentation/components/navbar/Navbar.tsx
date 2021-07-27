import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import { navbarStyles } from "./navbar.styles";
import { logOut } from "../../../infrastructure/api/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";

const Navbar = () => {
  const user = useSelector(userSelector);
  const classes = navbarStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          KNOWL APP
        </Typography>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          align="right"
          noWrap
          className={classes.name}
        >
          {user?.firstName} {user?.lastName}
        </Typography>
        <IconButton className={classes.buttons}>
          <Badge badgeContent={69} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          className={classes.buttons}
          onClick={() => dispatch(logOut())}
        >
          <Badge>
            <ExitToAppIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
