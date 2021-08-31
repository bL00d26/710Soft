import { makeStyles } from "@material-ui/core/styles";

export const experienceStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "#F1F1F1",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  fixedHeight: {
    height: 240,
  },

  main: {
    marginLeft: "240px",
    marginTop: "100px",
  },
}));
