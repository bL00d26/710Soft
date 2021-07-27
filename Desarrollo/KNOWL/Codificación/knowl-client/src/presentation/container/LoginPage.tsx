import React, { FormEvent, MouseEvent, useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { LoginDto } from "../components/login/dto/login.dto";
import {
  loginUser,
  resetLoginErrors,
} from "../../infrastructure/api/login.actions";
import { useDispatch, useSelector } from "react-redux";
import { loginErrorsSelector } from "../../application/store/ui/ui.selectors";
import { userSelector } from "../../application/store/user/user.selectors";
import { loginStyles } from "../components/login/login.styles";
import { Routes } from "../../application/utils/enums";

const LoginPage = () => {
  const classes = loginStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginErrors = useSelector(loginErrorsSelector);
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const loginDto: LoginDto = {
      email,
      password,
    };
    dispatch(loginUser(loginDto));
  };
  const handleRegister = (e: MouseEvent) => {
    e.preventDefault();
    history.push("/register");
  };

  const handleRecoverPassword = (e: MouseEvent) => {
    e.preventDefault();
    history.push("/password/recover");
  };

  useEffect(() => {
    if (user) {
      history.push(Routes.PRINCIPAL);
    }
    return () => {
      dispatch(resetLoginErrors());
    };
  }, [user]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            className="textfield"
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
              loginErrors &&
              (Array.isArray(loginErrors) ? loginErrors[0] : loginErrors)
            }
          />
          <TextField
            className="textfield"
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
              loginErrors &&
              (Array.isArray(loginErrors) ? loginErrors[0] : loginErrors)
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
            className={classes.submit}
          >
            Registro
          </Button>
        </form>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleRecoverPassword}
          className={classes.submit}
        >
          Recuperar Contraseña
        </Button>
      </div>
    </Container>
  );
};

export default LoginPage;
