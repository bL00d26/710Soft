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
import { newExperience } from "../../../infrastructure/api/user.actions";
import { ExperienceDto } from "./dto/experience.dto";
import { newExperienceFormStyles } from "./new-experience-form.styles";
interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
const NewExperienceForm: React.FC<IProps> = ({ setModalOpen }) => {
  const classes = newExperienceFormStyles();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const isEditDone = useSelector(isEditDoneSelector);
  const editErrors = useSelector(editErrorsSelector);
  const [position, setPosition] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const handleNewFormation = (e: FormEvent) => {
    e.preventDefault();
    const experienceDto: ExperienceDto = {
      position,
      organization,
      description,
      user: user?._id as string,
    };
    dispatch(newExperience(experienceDto));
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
          id="position"
          label="Posición"
          name="ocupation"
          required
          autoFocus
          onChange={(e) => setPosition(e.target.value)}
          helperText={
            editErrors &&
            (Array.isArray(editErrors) ? editErrors[0] : editErrors)
          }
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="organization"
          label="Organización"
          name="organization"
          required
          onChange={(e) => setOrganization(e.target.value)}
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

export default NewExperienceForm;
