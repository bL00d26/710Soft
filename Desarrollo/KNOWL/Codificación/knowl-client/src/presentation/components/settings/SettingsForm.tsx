import React, { FormEvent, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { EditUserDto } from "./dto/user-edit.dto";
import { userSelector } from "../../../application/store/user/user.selectors";
import { useStyles } from "./styles";
import { editUser } from "./settings.actions";
const SettingsForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  //   const isRegisterDone = useSelector(isRegisterDoneSelector);
  //   const registerErrors = useSelector(registerErrorsSelector);
  const [firstName, setFirstName] = useState(user?.firstName as string);
  const [lastName, setLastName] = useState(user?.lastName as string);
  const [email, setEmail] = useState(user?.email as string);

  const handleEditUser = (e: FormEvent) => {
    e.preventDefault();
    const editUserDto: EditUserDto = {
      firstName,
      lastName,
      // email,
    };
    dispatch(editUser(editUserDto, user?._id as string));
  };
  return (
    <>
      <form className={classes.form} noValidate onSubmit={handleEditUser}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          value={firstName}
          label="Nombres"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          value={lastName}
          label="Apellidos"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          value={email}
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Editar Datos
        </Button>
      </form>
    </>
  );
};

export default SettingsForm;
