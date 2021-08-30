import { TechnologyUser } from "./interfaces/technology-user.interface";
import { Technology } from "./interfaces/technology.interface";

//SERVER URL
export const technologyURL = "http://localhost:4000/technology/";
//ACTIONS NAMES

export const TECHNOLOGIES_LOAD = "[technology] load";
export const TECHNOLOGIES_USER_LOAD = "[technology] user load";
export const TECHNOLOGIES_USER_ADD = "[technology] technology user add";

//DEFAULT STATE
export interface TechnologyDefaultState {
  technologies: Technology[];
  technologiesUser: TechnologyUser[];
}

//INTERFACES
export interface TechnologiesLoad {
  type: typeof TECHNOLOGIES_LOAD;
  payload: Technology[];
}
export interface TechnologiesUserLoad {
  type: typeof TECHNOLOGIES_USER_LOAD;
  payload: TechnologyUser[];
}
export interface TechnologiesUserAdd {
  type: typeof TECHNOLOGIES_USER_ADD;
  payload: TechnologyUser[];
}

//TYPES
export type TechnologyDispatchTypes =
  | TechnologiesLoad
  | TechnologiesUserLoad
  | TechnologiesUserAdd;
