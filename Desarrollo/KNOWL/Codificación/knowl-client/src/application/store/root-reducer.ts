import { combineReducers } from "redux";
import { technologyReducer } from "./technology/technology.reducer";
import { uiReducer } from "./ui/ui.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  technology: technologyReducer,
  ui: uiReducer,
});
