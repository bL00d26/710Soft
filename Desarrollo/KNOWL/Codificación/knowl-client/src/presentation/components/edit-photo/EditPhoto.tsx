import { Button, Container, Typography } from "@material-ui/core";
import React, { FormEvent, useEffect, useState } from "react";
import { editPhotoStyles } from "./edit-photo.styles";
import "./edit-photo.css";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../../application/store/user/user.selectors";
import { updateProfileImage } from "../../../infrastructure/api/user.actions";
import imgUser from "../../../application/assets/images/user.png";
const EditPhoto = () => {
  const classes = editPhotoStyles();
  type UploadEvent = React.ChangeEvent<HTMLInputElement>;
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [profileImage, setprofileImage] = useState<any>(
    user?.profileImage === "default" ? imgUser : user?.profileImage
  );
  const [imgFile, setImgFile] = useState<File | null>(null);
  const handleImgUpload = (e: FormEvent) => {
    e.preventDefault();
    if (imgFile) {
      dispatch(updateProfileImage(imgFile, user?._id as string));
    }
  };

  useEffect(() => {}, [user?.profileImage]);
  const handleImgSelection = (e: UploadEvent) => {
    e.preventDefault();
    if (e.target.files!.length > 0) {
      const reader = new FileReader();
      setImgFile(e.target.files![0]);
      reader.onload = (event) => {
        setprofileImage(event.target?.result);
      };
      reader.readAsDataURL(e.target.files![0]);
    } else {
      setprofileImage(
        user?.profileImage === "default" ? imgUser : user?.profileImage
      );
    }
  };
  useEffect(() => {}, [profileImage]);
  return (
    <div className="edit-photo-container">
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          EDITAR FOTO DE PERFIL
        </Typography>
        <form onSubmit={handleImgUpload}>
          <div>
            <img
              className={classes.imagecontainer}
              src={profileImage}
              alt="user-img"
            />
          </div>
          <input
            type="file"
            className="inputUploadFile"
            accept="image/*"
            onChange={handleImgSelection}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Guardar Foto
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default EditPhoto;
