import { Button, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  editErrorsSelector,
  isEditDoneSelector,
} from "../../../application/store/ui/ui.selectors";
import { userSelector } from "../../../application/store/user/user.selectors";
import {
  resetVerifyErrors,
  userVerifyData,
} from "../../../infrastructure/api/user-verify.actions";
import { UserVerifyDto } from "./dto/user-verify.dto";
import { informationFormStyles } from "./information-form.styles";

const InformationForm = () => {
  const classes = informationFormStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isEditDone = useSelector(isEditDoneSelector);
  const editErrors = useSelector(editErrorsSelector);
  const [ocupation, setOcupation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const handleEditInformation = (e: FormEvent) => {
    e.preventDefault();
    const userVerifyDto: UserVerifyDto = {
      ocupation,
      country,
      city,
    };
    dispatch(userVerifyData(user?._id as string, userVerifyDto));
  };
  useEffect(() => {
    if (isEditDone) {
      toast.success("Registro realizado con éxito");
    }
    return () => {
      dispatch(resetVerifyErrors());
    };
  }, [isEditDone]);
  return (
    <div className={classes.paper}>
      <Typography className={classes.modalTitle}>
        Agrega información a tu perfil
      </Typography>
      <form
        className={classes.form}
        noValidate
        onSubmit={handleEditInformation}
      >
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="ocupation"
          label="Ocupación"
          name="ocupation"
          required
          autoFocus
          onChange={(e) => setOcupation(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="country"
          label="País"
          name="country"
          required
          onChange={(e) => setCountry(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="city"
          label="City"
          name="city"
          required
          onChange={(e) => setCity(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
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
    </div>
  );
};

export default InformationForm;
