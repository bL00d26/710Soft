import { User } from "./interfaces/user.interface";
import {
  UserDefaultState,
  UserDispatchTypes,
  USER_EDIT,
  USER_LOAD,
  USER_LOGIN,
  USER_LOGOUT,
  USER_PASSWORD_CHANGE,
} from "./user.types";

const defaultState: UserDefaultState = {
  user: undefined,
  changedPassword: false,
};

export const userReducer = (
  state: UserDefaultState = defaultState,
  action: UserDispatchTypes
): UserDefaultState => {
  switch (action.type) {
    case USER_LOGIN:
    case USER_LOAD:
    case USER_EDIT:
    case USER_LOGOUT:
      return { ...state, user: action.payload };
    case USER_PASSWORD_CHANGE:
      return { ...state, changedPassword: action.payload };
    default:
      return state;
  }
};
