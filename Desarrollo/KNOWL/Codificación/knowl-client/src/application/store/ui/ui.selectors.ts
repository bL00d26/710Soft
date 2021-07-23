// import { createSelector } from "reselect";
import { RootStore } from "../store";

export const loginErrorsSelector = (state: RootStore) => state.ui.loginErrors;
export const registerErrorsSelector = (state: RootStore) =>
  state.ui.registerErrors;
export const isRegisterDoneSelector = (state: RootStore) =>
  state.ui.isRegisterDone;
export const selectedTabSelector = (state: RootStore) => state.ui.selectedTab;
