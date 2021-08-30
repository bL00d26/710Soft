import { Technology } from "./interfaces/technology.interface";
import { TechnologyUser } from "./interfaces/technology-user.interface";

import {
  TECHNOLOGIES_LOAD,
  TECHNOLOGIES_USER_ADD,
  TECHNOLOGIES_USER_LOAD,
  TechnologyDefaultState,
  TechnologyDispatchTypes,
} from "./technology.types";

const defaultState: TechnologyDefaultState = {
  technologies: [] as Technology[],
  technologiesUser: [] as TechnologyUser[],
};

export const technologyReducer = (
  state: TechnologyDefaultState = defaultState,
  action: TechnologyDispatchTypes
): TechnologyDefaultState => {
  switch (action.type) {
    case TECHNOLOGIES_LOAD:
      return { ...state, technologies: action.payload };
    case TECHNOLOGIES_USER_ADD:
    case TECHNOLOGIES_USER_LOAD:
      return { ...state, technologiesUser: action.payload };
    default:
      return state;
  }
};
