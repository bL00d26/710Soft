import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { RootStore } from "../../application/store/store";
import {
  TECHNOLOGIES_USER_ADD,
  TECHNOLOGIES_USER_LOAD,
  TechnologyDispatchTypes,
  technologyURL,
} from "../../application/store/technology/technology.types";
import {
  UserDispatchTypes,
  usersURL,
  USER_CHANGE_PROFILE_IMAGE,
  USER_EDIT,
  USER_EDIT_STATUS,
  USER_LOAD_EXPERIENCE,
  USER_LOAD_FORMATION,
  USER_NEW_EXPERIENCE,
  USER_NEW_FORMATION,
} from "../../application/store/user/user.types";
import { ExperienceDto } from "../../presentation/components/new-experience-form/dto/experience.dto";
import { FormationDto } from "../../presentation/components/new-formation-form/dto/formation.dto";
import { TechnologyUserDto } from "../../presentation/components/new-technology-user-form/dto/technology-user.dto";
import { EditUserDto } from "../../presentation/components/settings/dto/user-edit.dto";

export const updateProfileImage =
  (profileImage: any, userId: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    const formData = new FormData();
    formData.append("profileImage", profileImage);
    try {
      const res = await axios.post(
        usersURL.concat(`profile/${userId}`),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.data.success) {
        dispatch({
          type: USER_CHANGE_PROFILE_IMAGE,
          payload: usersURL.concat(`profile/${userId}`),
        });
        document.location.reload();
        toast.success("Foto de perfil cambiada con éxito");
      }
    } catch (error) {
      toast.error("Error al cambiar la foto de perfil");
    }
  };

export const editStatus =
  (status: { status: string }, userId: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.put(usersURL.concat(`status/${userId}`), status);
      if (res.data.success) {
        dispatch({
          type: USER_EDIT_STATUS,
          payload: res.data.user,
        });
        toast.success("Estado cambiado con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      toast.error("Error al cambiar el estado");
    }
  };
export const editUser =
  (editUserDto: EditUserDto, userId: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.put(
        usersURL.concat(`edit/${userId}`),
        editUserDto
      );
      if (res.data.success) {
        dispatch({
          type: USER_EDIT,
          payload: res.data.user,
        });
        toast.success("Usuario editado con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      toast.error("Error al editar usuario");
    }
  };

export const loadFormation =
  (userId: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.get(usersURL.concat(`formation/${userId}`));
      if (res.data.success) {
        dispatch({
          type: USER_LOAD_FORMATION,
          payload: res.data.formation,
        });
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      // toast.error("Error al cargar la formación");
    }
  };

export const loadTechnologiesUser =
  (userId: string) => async (dispatch: Dispatch<TechnologyDispatchTypes>) => {
    try {
      const res = await axios.get(technologyURL.concat(userId));
      if (res.data.success) {
        dispatch({
          type: TECHNOLOGIES_USER_LOAD,
          payload: res.data.technologiesUser,
        });
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
    }
  };
export const newTechnologyUser =
  (technologyUserDto: TechnologyUserDto) =>
  async (
    dispatch: Dispatch<TechnologyDispatchTypes>,
    getState: () => RootStore
  ) => {
    try {
      const technologiesUser = getState().technology.technologiesUser;
      const res = await axios.post(
        technologyURL.concat(`user/new`),
        technologyUserDto
      );
      if (res.data.success) {
        dispatch({
          type: TECHNOLOGIES_USER_ADD,
          payload: [...technologiesUser, res.data.technologyUser],
        });
        toast.success("Nueva tecnología agregada con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      toast.error("Error al agregar tecnología");
    }
  };
export const newFormation =
  (formationDto: FormationDto) =>
  async (dispatch: Dispatch<UserDispatchTypes>, getState: () => RootStore) => {
    try {
      const formations = getState().user.formation;
      const res = await axios.post(
        usersURL.concat(`formation/new`),
        formationDto
      );
      if (res.data.success) {
        dispatch({
          type: USER_NEW_FORMATION,
          payload: [...formations, res.data.formation],
        });
        toast.success("Nueva formación agregada con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      toast.error("Error al agregar formación");
    }
  };
export const newExperience =
  (experienceDto: ExperienceDto) =>
  async (dispatch: Dispatch<UserDispatchTypes>, getState: () => RootStore) => {
    try {
      const experiences = getState().user.experience;
      const res = await axios.post(
        usersURL.concat(`experience/new`),
        experienceDto
      );
      if (res.data.success) {
        dispatch({
          type: USER_NEW_EXPERIENCE,
          payload: [...experiences, res.data.experience],
        });
        toast.success("Nueva experiencia agregada con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      toast.error("Error al agregar la experiencia");
    }
  };
export const loadExperience =
  (userId: string) => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.get(usersURL.concat(`experience/${userId}`));
      if (res.data.success) {
        dispatch({
          type: USER_LOAD_EXPERIENCE,
          payload: res.data.experience,
        });
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      // toast.error("Error al cargar la formación");
    }
  };
