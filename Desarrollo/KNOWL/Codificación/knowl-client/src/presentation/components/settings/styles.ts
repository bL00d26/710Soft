import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const settingsStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      paddingTop: theme.spacing(8),
    },
    paper: {
      padding: theme.spacing(4),
      marginTop: theme.spacing(8),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    formContainer: {
      marginTop: theme.spacing(2),
      padding: theme.spacing(8),
      paddingTop: theme.spacing(0),
      display: "flex",
      flexDirection: "column",
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    consultForm: {
      marginTop: theme.spacing(2),
    },
  })
);
export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
