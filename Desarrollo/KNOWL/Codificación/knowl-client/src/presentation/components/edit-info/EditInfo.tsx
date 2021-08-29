import {
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editInfoStyles } from "./edit-info.styles";
import { userSelector } from "../../../application/store/user/user.selectors";
import moment from "moment";
import { TimeFormat } from "../../../application/utils/enums";
import "./edit-info.css";
import { editUser } from "../../../infrastructure/api/user.actions";
const EditInfo = () => {
  const classes = editInfoStyles();
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [ocupation, setOcupation] = useState(user?.ocupation);
  const [birthday, setBirthday] = useState(user?.birthday);
  const [country, setCountry] = useState(user?.country);
  const [city, setCity] = useState(user?.city);
  // const [email, setEmail] = useState(user?.email);
  const handleEditInfo = (e: FormEvent) => {
    e.preventDefault();
    const editUserDto = {
      firstName,
      lastName,
      ocupation,
      birthday,
      country,
      city,
    };
    dispatch(editUser(editUserDto, user?._id as string));
  };
  return (
    <div className="edit-info-container">
      <Container maxWidth="xs">
        <Typography className={classes.oneRow} component="h1" variant="h5">
          EDITAR INFORMACIÓN DE CONTACTO
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleEditInfo}>
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombres"
            label="Nombres"
            name="nombres"
            value={firstName}
            autoFocus
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="apellidos"
            label="Apellidos"
            name="apellidos"
            value={lastName}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ocupacion"
            label="Ocupación"
            name="ocupacion"
            value={ocupation}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setOcupation(e.target.value)}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="date"
            id="fechaNacimiento"
            label="Fecha de nacimiento"
            name="fechaNacimiento"
            defaultValue={moment(birthday).format(TimeFormat.BIRTHDAY)}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pais"
            label="País"
            name="pais"
            value={country}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="ciudad"
            label="Ciudad"
            name="ciudad"
            value={city}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setCity(e.target.value)}
          />
          {/* <TextField
            className="textfield"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="correo"
            label="Correo electrónico"
            name="correo"
            value={email}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setEmail(e.target.value)}
          /> */}

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

export default EditInfo;
