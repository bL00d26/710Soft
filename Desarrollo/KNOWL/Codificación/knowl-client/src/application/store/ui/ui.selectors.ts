// import { createSelector } from "reselect";
import { RootStore } from "../store";

export const loginErrorsSelector = (state: RootStore) => state.ui.loginErrors;
export const registerErrorsSelector = (state: RootStore) =>
  state.ui.registerErrors;
export const editErrorsSelector = (state: RootStore) => state.ui.editErrors;
export const isRegisterDoneSelector = (state: RootStore) =>
  state.ui.isRegisterDone;
export const isEditDoneSelector = (state: RootStore) => state.ui.isEditDone;
export const selectedTabSelector = (state: RootStore) => state.ui.selectedTab;
