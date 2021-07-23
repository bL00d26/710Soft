import {
  UiDefaultState,
  UiDispatchTypes,
  UI_LOGIN_ERROR,
  UI_REGISTER_DONE,
  UI_REGISTER_ERROR,
  UI_TAB_ITEM_SELECTION,
  UI_STATE_RESET,
} from "./ui.types";
// import { InterfaceTab } from "../../utils/enums";
const defaultState: UiDefaultState = {
  selectedTab: '',
  isRegisterDone: false,
};

export const uiReducer = (
  state: UiDefaultState = defaultState,
  action: UiDispatchTypes
): UiDefaultState => {
  switch (action.type) {
    case UI_REGISTER_DONE:
      return { ...state, isRegisterDone: action.payload };
    case UI_LOGIN_ERROR:
      return { ...state, loginErrors: action.payload };
    case UI_REGISTER_ERROR:
      return { ...state, registerErrors: action.payload };
    case UI_TAB_ITEM_SELECTION:
      return { ...state, selectedTab: action.payload };

    case UI_STATE_RESET:
      return { ...defaultState };
    default:
      return state;
  }
};
