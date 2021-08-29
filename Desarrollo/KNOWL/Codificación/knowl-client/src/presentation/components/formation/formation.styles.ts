import { makeStyles } from "@material-ui/core/styles";

export const formationStyles = makeStyles((theme) => ({
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
    marginTop: "100px",
  },
}));
