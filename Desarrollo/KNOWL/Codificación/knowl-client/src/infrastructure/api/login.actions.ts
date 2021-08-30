import { Dispatch } from "redux";
import axios, { AxiosError } from "axios";
import {
  UserDispatchTypes,
  usersURL,
  authURL,
  USER_LOGIN,
  USER_LOAD,
  USERS_LOAD,
} from "../../application/store/user/user.types";
import { LoginDto } from "../../presentation/components/login/dto/login.dto";
import {
  UiDispatchTypes,
  UI_LOGIN_ERROR,
} from "../../application/store/ui/ui.types";
import {
  TECHNOLOGIES_LOAD,
  TechnologyDispatchTypes,
  technologyURL,
} from "../../application/store/technology/technology.types";
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
    } catch (error: any) {
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

export const loadUsers =
  () => async (dispatch: Dispatch<UserDispatchTypes>) => {
    try {
      const res = await axios.get(usersURL.concat("all"));
      if (res.data.success) {
        dispatch({
          type: USERS_LOAD,
          payload: res.data.users,
        });
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
    }
  };
export const loadTechnologies =
  () => async (dispatch: Dispatch<TechnologyDispatchTypes>) => {
    try {
      const res = await axios.get(technologyURL);
      if (res.data.success) {
        dispatch({
          type: TECHNOLOGIES_LOAD,
          payload: res.data.technologies,
        });
      }
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
    }
  };
export const loadUserCurrent =
  () => async (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    try {
      const res = await axios.get(usersURL.concat("current"));
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
    } catch (error: any) {
      const errorAxios: AxiosError = error;
      console.log(error.response);
      dispatch({
        type: UI_LOGIN_ERROR,
        payload: errorAxios.response?.data.message,
      });
      localStorage.clear();
    }
  };
