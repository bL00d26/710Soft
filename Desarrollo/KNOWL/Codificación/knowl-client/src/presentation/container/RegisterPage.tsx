import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  isRegisterDoneSelector,
  registerErrorsSelector,
} from "../../application/store/ui/ui.selectors";
import { RegisterUserDto } from "../components/register/dto/register.dto";
import {
  registerUser,
  resetRegisterErrors,
} from "../../infrastructure/api/register.actions";
import { toast } from "react-toastify";
import { registerStyles } from "../components/register/register.styles";

const RegisterPage = () => {
  const classes = registerStyles();
  const dispatch = useDispatch();
  const isRegisterDone = useSelector(isRegisterDoneSelector);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const registerErrors = useSelector(registerErrorsSelector);
  const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    history.push("/");
  };
  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    const registerUserDto: RegisterUserDto = {
      firstName,
      lastName,
      email,
      password,
      repeatedPassword,
    };
    dispatch(registerUser(registerUserDto));
  };
  useEffect(() => {
    if (isRegisterDone) {
      toast.success("Registro realizado con éxito");
      history.push("/");
    }
    return () => {
      dispatch(resetRegisterErrors());
    };
  }, [isRegisterDone]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          REGISTRO
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleRegister}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Nombres"
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Apellidos"
            autoFocus
            onChange={(e) => setLastName(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
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
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Repita Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setRepeatedPassword(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
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
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            className={classes.submit}
          >
            Volver
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default RegisterPage;
