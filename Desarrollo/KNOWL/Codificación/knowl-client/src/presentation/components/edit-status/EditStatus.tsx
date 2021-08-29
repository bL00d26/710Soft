import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { editStatusStyles } from "./edit-status.styles";
import "./edit-status.css";
import { userSelector } from "../../../application/store/user/user.selectors";
import { useSelector, useDispatch } from "react-redux";
import { editStatus } from "../../../infrastructure/api/user.actions";
const EditStatus = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [status, setStatus] = useState(user?.status);
  const classes = editStatusStyles();
  const handleEditStatus = (e: FormEvent) => {
    e.preventDefault();
    dispatch(editStatus({ status: status as string }, user?._id as string));
  };
  return (
    <div className="edit-status-container">
      <Container maxWidth="sm">
        <Typography className={classes.oneRow} component="h1" variant="h5">
          EDITAR ESTADO
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleEditStatus}>
          <TextField
            className="textfield"
            value={status}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="estado"
            label="Estado"
            name="estado"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setStatus(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditStatus;
