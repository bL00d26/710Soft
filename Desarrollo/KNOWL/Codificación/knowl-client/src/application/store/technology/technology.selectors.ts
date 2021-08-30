import { RootStore } from "../store";

export const technologiesSelector = (state: RootStore) =>
  state.technology.technologies;
export const technologiesUserSelector = (state: RootStore) =>
  state.technology.technologiesUser;
