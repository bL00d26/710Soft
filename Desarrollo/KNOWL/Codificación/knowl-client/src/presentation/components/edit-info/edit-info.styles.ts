import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const editInfoStyles = makeStyles((theme) =>
  createStyles({
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor: "#274A59",
    },
    oneRow: {
      //whiteSpace: "nowrap",
      textAlign: "center"
    }
    // textfield: {
    //   height: "30px",
    // }
  })
);
