import React, { FormEvent, MouseEvent, useState } from "react";
import axios from "axios";
import { ChangeRecoverPasswordDto } from "./dto/change-recover-password.dto";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import { useStyles } from "../styles";
import { usersURL } from "../../../../application/store/user/user.types";
import { toast } from "react-toastify";

const RecoverPasswordPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [codeFlag, setCodeFlag] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSendCode = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.get(usersURL.concat(`password/${email}`));
      if (res.data.success) {
        toast.success("Código enviado a su correo electrónico");
        setCodeFlag(true);
      }
    } catch (error) {
      toast.error("Error al enviar el código");
    }
  };
  const handleChangeRecoverPassword = async (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    const changeRecoverPassworDto: ChangeRecoverPasswordDto = {
      password,
      newPassword,
    };
    try {
      const res = await axios.put(
        usersURL.concat(`password/recover`),
        changeRecoverPassworDto
      );
      if (res.data.success) {
        toast.success("Contraseña cambiada con éxito");
        history.push("/");
      }
    } catch (error) {
      toast.error("Error al cambiar la contraseña");
    }
  };
  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          RECUPERAR CONTRASEÑA
        </Typography>

        <form className={classes.form} noValidate onSubmit={handleSendCode}>
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
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Enviar Código
          </Button>
        </form>

        {codeFlag && (
          <form
            className={classes.form}
            noValidate
            onSubmit={handleChangeRecoverPassword}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Código"
              type="text"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nueva Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Nueva Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cambiar Contraseña
            </Button>
          </form>
        )}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleBack}
          className={classes.submit}
        >
          Volver
        </Button>
      </div>
    </Container>
  );
};

export default RecoverPasswordPage;
