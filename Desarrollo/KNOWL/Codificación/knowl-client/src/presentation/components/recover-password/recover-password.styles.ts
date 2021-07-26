import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const recoverPasswordStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      // backgroundColor: theme.palette.primary.main,
      backgroundColor: "#274A59",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor: "#274A59",
    },
  })
);
