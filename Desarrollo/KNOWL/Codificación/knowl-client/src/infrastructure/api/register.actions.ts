import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  UiDispatchTypes,
  UI_REGISTER_DONE,
  UI_REGISTER_ERROR,
} from "../../application/store/ui/ui.types";
import {
  UserDispatchTypes,
  usersURL,
} from "../../application/store/user/user.types";
import { RegisterUserDto } from "../../presentation/components/register/dto/register.dto";

export const registerUser =
  (registerUserDto: RegisterUserDto) =>
  async (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    try {
      const res = await axios.post(
        usersURL.concat("register"),
        registerUserDto
      );
      if (res.data.success) {
        dispatch({
          type: UI_REGISTER_ERROR,
          payload: null,
        });
        dispatch({
          type: UI_REGISTER_DONE,
          payload: true,
        });
        toast.success("Usuario registrado con éxito");
        toast.info("Confirme su correo para usar la plataforma");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      dispatch({
        type: UI_REGISTER_DONE,
        payload: false,
      });
      dispatch({
        type: UI_REGISTER_ERROR,
        payload: errorAxios.response?.data.message,
      });
      toast.error("Error al registrar usuario");
    }
  };

export const changeRegisterStatus =
  (done: boolean) => (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_REGISTER_DONE,
      payload: done,
    });
  };

export const resetRegisterErrors =
  () => (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_REGISTER_ERROR,
      payload: null,
    });
  };
