import { RootStore } from "../store";

export const userSelector = (state: RootStore) => state.user.user;
export const usersSelector = (state: RootStore) => state.user.users;
export const experienceSelector = (state: RootStore) => state.user.experience;
export const formationSelector = (state: RootStore) => state.user.formation;
export const changedPasswordSelector = (state: RootStore) =>
  state.user.changedPassword;
