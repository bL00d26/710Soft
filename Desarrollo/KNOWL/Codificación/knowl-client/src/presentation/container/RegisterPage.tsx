import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import moment from "moment";
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
import { TimeFormat } from "../../application/utils/enums";
const RegisterPage = () => {
  const classes = registerStyles();
  const dispatch = useDispatch();
  const isRegisterDone = useSelector(isRegisterDoneSelector);
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
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
      birthday,
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
            onChange={(e) => setEmail(e.target.value)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
            }
          />
          <TextField
            id="date"
            label="Fecha de Nacimiento"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="date"
            onChange={(e) => setBirthday(e.target.value)}
            defaultValue={moment(Date.now()).format(TimeFormat.BIRTHDAY)}
            helperText={
              registerErrors &&
              (Array.isArray(registerErrors)
                ? registerErrors[0]
                : registerErrors)
            }
            InputLabelProps={{
              shrink: true,
            }}
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
