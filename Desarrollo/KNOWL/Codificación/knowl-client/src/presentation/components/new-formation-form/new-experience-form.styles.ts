import { makeStyles } from "@material-ui/core/styles";

export const newFormationFormStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: "#274A59",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: "38%",
    marginTop: "15%",
  },

  modalTitle: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4%",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "2%",
    textAlign: "center",
  },
}));
