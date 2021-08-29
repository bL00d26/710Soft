import { Experience } from "./interfaces/experience.interface";
import { Formation } from "./interfaces/formation.interface";
import { User } from "./interfaces/user.interface";
import {
  UserDefaultState,
  UserDispatchTypes,
  USER_EDIT,
  USER_LOAD,
  USERS_LOAD,
  USER_LOGIN,
  USER_LOGOUT,
  USER_PASSWORD_CHANGE,
  USER_CHANGE_PROFILE_IMAGE,
  USER_EDIT_STATUS,
  USER_LOAD_FORMATION,
  USER_LOAD_EXPERIENCE,
  USER_NEW_FORMATION,
  USER_NEW_EXPERIENCE,
} from "./user.types";

const defaultState: UserDefaultState = {
  user: undefined,
  users: [] as User[],
  formation: [] as Formation[],
  experience: [] as Experience[],
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
    case USER_EDIT_STATUS:
    case USER_LOGOUT:
      return { ...state, user: action.payload };
    case USER_PASSWORD_CHANGE:
      return { ...state, changedPassword: action.payload };
    case USERS_LOAD:
      return { ...state, users: action.payload };
    case USER_LOAD_FORMATION:
    case USER_NEW_FORMATION:
      return { ...state, formation: action.payload };
    case USER_LOAD_EXPERIENCE:
    case USER_NEW_EXPERIENCE:
      return { ...state, experience: action.payload };

    case USER_CHANGE_PROFILE_IMAGE:
      return {
        ...state,
        user: {
          ...(state.user as User),
          profileImage: action.payload as string,
        },
      };
    default:
      return state;
  }
};
