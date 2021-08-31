import { RootStore } from "../store";

export const userSelector = (state: RootStore) => state.user.user;
export const changedPasswordSelector = (state: RootStore) =>
  state.user.changedPassword;
