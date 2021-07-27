import { User } from "./interfaces/user.interface";

//SERVER URL
export const usersURL = "http://localhost:4000/user/";
export const authURL = "http://localhost:4000/auth/";
//ACTIONS NAMES
export const USER_LOGIN = "[user] login";
export const USER_LOGOUT = "[user] logout";
export const USER_LOAD = "[user] load";
export const USER_EDIT = "[user] edit";
export const USER_PASSWORD_CHANGE = "[user] password change";

//DEFAULT STATE
export interface UserDefaultState {
  user?: User;
  changedPassword: boolean;
}

//INTERFACES
export interface UserLogin {
  type: typeof USER_LOGIN;
  payload: User;
}

export interface UserLogout {
  type: typeof USER_LOGOUT;
  payload: undefined;
}

export interface UserLoad {
  type: typeof USER_LOAD;
  payload: User;
}

export interface UserEdit {
  type: typeof USER_EDIT;
  payload: User;
}
export interface UserPasswordChange {
  type: typeof USER_PASSWORD_CHANGE;
  payload: boolean;
}

//TYPES
export type UserDispatchTypes =
  | UserLogin
  | UserLogout
  | UserLoad
  | UserEdit
  | UserPasswordChange;
