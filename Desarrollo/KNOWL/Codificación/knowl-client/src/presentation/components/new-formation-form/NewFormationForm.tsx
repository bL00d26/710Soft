import { Button, TextField, Typography } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import { newFormation } from "../../../infrastructure/api/user.actions";
import { FormationDto } from "./dto/formation.dto";
import { newFormationFormStyles } from "./new-experience-form.styles";
interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
const NewFormationForm: React.FC<IProps> = ({ setModalOpen }) => {
  const classes = newFormationFormStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isEditDone = useSelector(isEditDoneSelector);
  const editErrors = useSelector(editErrorsSelector);
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [description, setDescription] = useState("");
  const handleNewFormation = (e: FormEvent) => {
    e.preventDefault();
    const formationDto: FormationDto = {
      degree,
      institution,
      description,
      user: user?._id as string,
    };
    dispatch(newFormation(formationDto));
    setModalOpen(false);
  };
  // useEffect(() => {
  //   if (isEditDone) {
  //     toast.success("Registro realizado con éxito");
  //   }
  //   return () => {
  //     dispatch(resetVerifyErrors());
  //   };
  // }, [isEditDone]);
  return (
    <div className={classes.paper}>
      <Typography className={classes.modalTitle}>
        <span>Agrega parte de tu experiencia</span>
        <span className="span-cursor" onClick={(e) => setModalOpen(false)}>
          X
        </span>
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleNewFormation}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="degree"
          label="Grado Académico"
          name="degree"
          required
          autoFocus
          onChange={(e) => setDegree(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="institution"
          label="Institución"
          name="institution"
          required
          onChange={(e) => setInstitution(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label="Descripción"
          name="description"
          required
          onChange={(e) => setDescription(e.target.value)}
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
          Agregar
        </Button>
      </form>
    </div>
  );
};

export default NewFormationForm;
