import { Button, TextField, Typography } from "@material-ui/core";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { technologiesSelector } from "../../../application/store/technology/technology.selectors";
import {
  editErrorsSelector,
  isEditDoneSelector,
} from "../../../application/store/ui/ui.selectors";
import { userSelector } from "../../../application/store/user/user.selectors";
import {
  resetVerifyErrors,
  userVerifyData,
} from "../../../infrastructure/api/user-verify.actions";
import { newTechnologyUser } from "../../../infrastructure/api/user.actions";
import { TechnologyUserDto } from "./dto/technology-user.dto";
import { newTechnologyForm } from "./new-technology-form.styles";
interface IProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
const NewTechnologyUserForm: React.FC<IProps> = ({ setModalOpen }) => {
  const classes = newTechnologyForm();
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const technologies = useSelector(technologiesSelector);
  const isEditDone = useSelector(isEditDoneSelector);
  const editErrors = useSelector(editErrorsSelector);
  const [technology, setTechnology] = useState("");
  const [description, setDescription] = useState("");
  const handleTechnologySelection = (e: any) => {
    e.preventDefault();
    setTechnology(e.target.value);
  };
  const handleNewFormation = (e: FormEvent) => {
    e.preventDefault();
    const technologyUserDto: TechnologyUserDto = {
      technology,
      description,
      user: user?._id as string,
    };

    dispatch(newTechnologyUser(technologyUserDto));
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
        <span>Agrega una tecnología a tu perfil</span>
        <span className="span-cursor" onClick={(e) => setModalOpen(false)}>
          X
        </span>
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleNewFormation}>
        <div className="content-select">
          <select
            onChange={handleTechnologySelection}
            style={{ width: "100%" }}
          >
            {technologies.map((technologyOpt, index) => (
              <option
                key={index}
                value={technologyOpt._id}
                selected={technologyOpt._id === technology && true}
              >
                {technologyOpt.name}
              </option>
            ))}
          </select>
          <i></i>
        </div>

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

export default NewTechnologyUserForm;
