import React, { FormEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  changedPasswordSelector,
  userSelector,
} from "../../../application/store/user/user.selectors";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { useStyles } from "./styles";
import { changePassword } from "./settings.actions";
import { useEffect } from "react";
import { USER_PASSWORD_CHANGE } from "../../../application/store/user/user.types";

const SettingsPasswordForm = () => {
  const classes = useStyles();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const changedPassword = useSelector(changedPasswordSelector);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatedNewPassword, setRepeatedNewPassword] = useState("");

  const handlePasswordChange = (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== repeatedNewPassword) {
      toast.error("Las contraseñas no coinciden");
    }
    const changePasswordDto: ChangePasswordDto = {
      oldPassword,
      newPassword,
      userId: user?._id as string,
    };
    dispatch(changePassword(changePasswordDto));
  };
  const resetFields = () => {
    setOldPassword("");
    setNewPassword("");
    setRepeatedNewPassword("");
  };
  useEffect(() => {
    dispatch({
      type: USER_PASSWORD_CHANGE,
      payload: false,
    });
    if (changedPassword === true) {
      resetFields();
    }
  }, [changePassword]);
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handlePasswordChange}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña Antigua"
          type="password"
          id="password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña Nueva"
          type="password"
          id="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Confirme Nueva Contraseña"
          type="password"
          id="password"
          onChange={(e) => setRepeatedNewPassword(e.target.value)}
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
    </>
  );
};

export default SettingsPasswordForm;
