import { Dispatch } from "redux";
import {
  UiDispatchTypes,
  UI_STATE_RESET,
} from "../../application/store/ui/ui.types";
import {
  UserDispatchTypes,
  USER_LOGOUT,
} from "../../application/store/user/user.types";

export const logOut =
  () => (dispatch: Dispatch<UserDispatchTypes | UiDispatchTypes>) => {
    localStorage.clear();
    dispatch({
      type: USER_LOGOUT,
      payload: undefined,
    });
    dispatch({
      type: UI_STATE_RESET,
    });

    // unSubscribe();
    window.location.reload();
  };
