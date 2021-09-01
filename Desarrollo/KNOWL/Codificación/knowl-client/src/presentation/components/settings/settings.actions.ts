import axios from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  UserDispatchTypes,
  usersURL,
  USER_EDIT,
  USER_PASSWORD_CHANGE,
} from "../../../application/store/user/user.types";
// import { getTokenHeader } from "../../utils/methods";
import { ChangePasswordDto } from "./dto/change-password.dto";
import { EditUserDto } from "./dto/user-edit.dto";

export const editUser =
  (editUserDto: EditUserDto, userId: string) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.put(
        usersURL.concat(`edit/${userId}`),
        editUserDto,
        
      );
      if (res.data.success) {
        toast.success("Usuario editado con éxito");
        dispatch({
          type: USER_EDIT,
          payload: res.data.user,
        });
      }
    } catch (error) {
      toast.error("Error al cargar las lecturas");
    }
  };
export const changePassword =
  (changePasswordDto: ChangePasswordDto) =>
  async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.put(
        usersURL.concat("edit/password"),
        changePasswordDto,
        
      );
      if (res.data.success) {
        toast.success("Contraseña cambiada con éxito");
        dispatch({
          type: USER_PASSWORD_CHANGE,
          payload: true,
        });
      }
    } catch (error) {
      toast.error("Error al cargar las lecturas");
      dispatch({
        type: USER_PASSWORD_CHANGE,
        payload: false,
      });
    }
  };
