//ACTIONS NAMES

export const UI_REGISTER_DONE = "[ui] register done";
export const UI_EDIT_DONE = "[ui] edit done";
export const UI_EDIT_ERROR = "[ui] edit error";
export const UI_LOGIN_ERROR = "[ui] login error";
export const UI_REGISTER_ERROR = "[ui] register error";
export const UI_CONSULT_ERROR = "[ui] consult error";
export const UI_TAB_ITEM_SELECTION = "[ui] tab item selection";
export const UI_STATE_RESET = "[ui] reset";
//DEFAULT STATE
export interface UiDefaultState {
  selectedTab: string;
  isRegisterDone: boolean;
  isEditDone: boolean;
  loginErrors?: string[] | string | null;
  registerErrors?: string[] | string | null;
  editErrors?: string[] | string | null;
}

//INTERFACES

export interface UiRegisterDone {
  type: typeof UI_REGISTER_DONE;
  payload: boolean;
}

export interface UiEditDone {
  type: typeof UI_EDIT_DONE;
  payload: boolean;
}

export interface UiLoginError {
  type: typeof UI_LOGIN_ERROR;
  payload: string[] | string | null;
}

export interface UiRegisterError {
  type: typeof UI_REGISTER_ERROR;
  payload: string[] | string | null;
}
export interface UiEditError {
  type: typeof UI_EDIT_ERROR;
  payload: string[] | string | null;
}
export interface UiConsultError {
  type: typeof UI_REGISTER_ERROR;
  payload: string[] | string | null;
}

export interface UiSidebarItemSelection {
  type: typeof UI_TAB_ITEM_SELECTION;
  payload: string;
}

export interface UiStateReset {
  type: typeof UI_STATE_RESET;
}

//TYPES
export type UiDispatchTypes =
  | UiRegisterDone
  | UiLoginError
  | UiRegisterError
  | UiSidebarItemSelection
  | UiStateReset
  | UiEditDone
  | UiEditError;
