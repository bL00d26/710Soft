import { Experience } from "./interfaces/experience.interface";
import { Formation } from "./interfaces/formation.interface";
import { User } from "./interfaces/user.interface";

//SERVER URL
export const usersURL = "http://localhost:4000/user/";
export const authURL = "http://localhost:4000/auth/";
//ACTIONS NAMES
export const USER_LOGIN = "[user] login";
export const USER_LOGOUT = "[user] logout";
export const USER_LOAD = "[user] load";
export const USERS_LOAD = "[users] load";
export const USER_LOAD_FORMATION = "[users] load formation";
export const USER_LOAD_EXPERIENCE = "[users] load experience";
export const USER_EDIT = "[user] edit";
export const USER_NEW_FORMATION = "[user] new formation";
export const USER_NEW_EXPERIENCE = "[user] new experience";
export const USER_EDIT_STATUS = "[user] edit status";
export const USER_CHANGE_PROFILE_IMAGE = "[user] profile picture change";
export const USER_PASSWORD_CHANGE = "[user] password change";

//DEFAULT STATE
export interface UserDefaultState {
  user?: User;
  users: User[];
  formation: Formation[];
  experience: Experience[];
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
export interface UserLoadFormation {
  type: typeof USER_LOAD_FORMATION;
  payload: Formation[];
}
export interface UserLoadExperience {
  type: typeof USER_LOAD_EXPERIENCE;
  payload: Experience[];
}
export interface NewFormation {
  type: typeof USER_NEW_FORMATION;
  payload: Formation[];
}
export interface NewExperience {
  type: typeof USER_NEW_EXPERIENCE;
  payload: Experience[];
}
export interface UserEditStatus {
  type: typeof USER_EDIT_STATUS;
  payload: User;
}
export interface UsersLoad {
  type: typeof USERS_LOAD;
  payload: User[];
}

export interface UserEdit {
  type: typeof USER_EDIT;
  payload: User;
}
export interface UserPasswordChange {
  type: typeof USER_PASSWORD_CHANGE;
  payload: boolean;
}

export interface UserChangeProfileImage {
  type: typeof USER_CHANGE_PROFILE_IMAGE;
  payload: string;
}
//TYPES
export type UserDispatchTypes =
  | UserLogin
  | UserLogout
  | UserLoad
  | UsersLoad
  | UserEdit
  | UserEditStatus
  | UserLoadFormation
  | UserLoadExperience
  | NewFormation
  | NewExperience
  | UserChangeProfileImage
  | UserPasswordChange;
