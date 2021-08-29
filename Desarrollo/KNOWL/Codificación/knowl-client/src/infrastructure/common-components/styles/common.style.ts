import { makeStyles } from "@material-ui/core/styles";

export const commonStyles = makeStyles((theme) => ({
  toolbarIcon: {
    backgroundColor: "#F2C685 !important",
    display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    padding: "0 8px",
    heigth: "100%",
    ...theme.mixins.toolbar,
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    gridArea: "platform",

    height: "100%",
    width: "100%",
  },

  paper: {
    backgroundColor: "#F1F1F1",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  data: {
    textAlign: "center",
    maxWidth: 240,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // paddingLeft: "20%",
  },
  fixedHeight: {
    // height: 240,
  },
}));
