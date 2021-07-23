import { combineReducers } from "redux";
import { uiReducer } from "./ui/ui.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
});
