import { makeStyles } from "@material-ui/core/styles";

export const modalStyles = makeStyles((theme) => ({
  modalContainer: {
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 99999,
  },
}));
