import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  isRegisterDoneSelector,
  registerErrorsSelector,
} from "../../../application/store/ui/ui.selectors";
import { informationFormStyles } from "./information-form.styles";

const InformationForm = () => {
  const classes = informationFormStyles();
  const dispatch = useDispatch();
  const isRegisterDone = useSelector(isRegisterDoneSelector);
  const [ocupation, setOcupation] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const registerErrors = useSelector(registerErrorsSelector);

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    const registerUserDto = {
      ocupation,
      country,
      city,
    };
    //   dispatch(registerUser(registerUserDto));
  };
  useEffect(() => {
    if (isRegisterDone) {
      toast.success("Registro realizado con éxito");
    }
    return () => {
      // dispatch(resetRegisterErrors());
    };
  }, [isRegisterDone]);
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate onSubmit={handleRegister}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="Nombres"
          autoFocus
          onChange={(e) => setOcupation(e.target.value)}
          helperText={
            registerErrors &&
            (Array.isArray(registerErrors) ? registerErrors[0] : registerErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Apellidos"
          onChange={(e) => setCountry(e.target.value)}
          helperText={
            registerErrors &&
            (Array.isArray(registerErrors) ? registerErrors[0] : registerErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          onChange={(e) => setCity(e.target.value)}
          helperText={
            registerErrors &&
            (Array.isArray(registerErrors) ? registerErrors[0] : registerErrors)
          }
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default InformationForm;
