import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  UiDispatchTypes,
  UI_EDIT_DONE,
  UI_EDIT_ERROR,
} from "../../application/store/ui/ui.types";
import {
  UserDispatchTypes,
  usersURL,
  USER_EDIT,
} from "../../application/store/user/user.types";
import { getTokenHeader } from "../../application/utils/methods";
import { UserVerifyDto } from "../../presentation/components/information-form/dto/user-verify.dto";

export const userVerifyData =
  (userId: string, userVerifyDto: UserVerifyDto) =>
  async (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    try {
      const res = await axios.put(
        usersURL.concat(`verify/${userId}`),
        userVerifyDto,
        getTokenHeader()
      );
      if (res.data.success) {
        dispatch({
          type: USER_EDIT,
          payload: res.data.user,
        });
        dispatch({
          type: UI_EDIT_ERROR,
          payload: null,
        });
        dispatch({
          type: UI_EDIT_DONE,
          payload: true,
        });
        toast.success("Datos actualizados con éxito");
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      dispatch({
        type: UI_EDIT_DONE,
        payload: false,
      });
      dispatch({
        type: UI_EDIT_ERROR,
        payload: errorAxios.response?.data.message,
      });
      toast.error("Error al actualizar los datos del usuario");
    }
  };

export const changeVerifyStatus =
  (done: boolean) => (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_EDIT_DONE,
      payload: done,
    });
  };

export const resetVerifyErrors =
  () => (dispatch: Dispatch<UiDispatchTypes>) => {
    dispatch({
      type: UI_EDIT_ERROR,
      payload: null,
    });
  };
