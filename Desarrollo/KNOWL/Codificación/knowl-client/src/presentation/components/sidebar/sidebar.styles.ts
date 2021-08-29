import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
export const sidebarStyles = makeStyles((theme) => ({
  toolbarIcon: {
    backgroundColor: "#F2C685 !important",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    heigth: "100%",
    ...theme.mixins.toolbar,
  },

  // from template method
  drawerPaper: {
    gridArea: "sidebar",
    backgroundColor: "#748183 !important",
    color: "white",
    position: "absolute",
    whiteSpace: "nowrap",
    width: drawerWidth,

    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  // from template method
  drawerPaperClose: {
    overflowX: "hidden",
    height: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },

  data: {
    textAlign: "center",
    maxWidth: 240,
  },
}));
