import { makeStyles } from "@material-ui/core/styles";

export const editPhotoStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },

  label: {
    color: "#F2C685",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },

  labelcontainer: {
    marginLeft: "2%",
    marginRight: "2%",
    marginBottom: "0%",
  },

  imagecontainer: {
    display: "inline-block",
    width: "200px",
    height: "200px",
    maxWidth: "300px",
    maxHeight: "300px",
    backgroundColor: "gray",
    borderRadius: "7em",
    textAlign: "center",
    marginBottom: "8px",
    marginTop: "8px",
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
    backgroundColor: "#274A59",
  },
}));
