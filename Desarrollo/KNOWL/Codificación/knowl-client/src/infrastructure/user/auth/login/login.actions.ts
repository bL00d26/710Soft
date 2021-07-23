import { Dispatch } from "redux";
import axios, { AxiosError } from "axios";
import {
  UserDispatchTypes,
  usersURL,
  authURL,
  USER_LOGIN,
  USER_LOAD,
} from "../../../../application/store/user/user.types";
import { LoginDto } from "./dto/login.dto";
import { UiDispatchTypes, UI_LOGIN_ERROR } from "../../../../application/store/ui/ui.types";
// import { getTokenHeader } from "../../../utils/methods";

export const loginUser =
  (loginDto: LoginDto) =>
  async (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    try {
      const res = await axios.post(authURL.concat("login"), loginDto);
      if (res.data.success) {
        // window.location.reload();
        // localStorage.setItem("token", res.data.accessToken);
        dispatch({
          type: UI_LOGIN_ERROR,
          payload: null,
        });
        dispatch({
          type: USER_LOGIN,
          payload: res.data.user,
        });

        localStorage.setItem("token", res.data.accessToken);
      }
    } catch (error:any) {
      const errorAxios: AxiosError = error;

      dispatch({
        type: UI_LOGIN_ERROR,
        payload: errorAxios.response?.data.message,
      });
      localStorage.clear();
    }
  };

export const resetLoginErrors = () => (dispatch: Dispatch<UiDispatchTypes>) => {
  dispatch({
    type: UI_LOGIN_ERROR,
    payload: null,
  });
};

export const loadUserCurrent =
  () => async (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    try {
      const res = await axios.get(usersURL.concat("current"),);
      if (res.data.success) {
        dispatch({
          type: UI_LOGIN_ERROR,
          payload: null,
        });
        dispatch({
          type: USER_LOAD,
          payload: res.data.user,
        });
      }
    } catch (error:any) {
      const errorAxios: AxiosError = error;
      console.log("holaaa");
      console.log(error.response);
      dispatch({
        type: UI_LOGIN_ERROR,
        payload: errorAxios.response?.data.message,
      });
      localStorage.clear();
    }
  };
