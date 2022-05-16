import { AuthReducer, userInitialState } from "./AuthReducer";
import { combineReducers } from "redux";

/*const rootReducer = combineReducers({
  AuthReducer,
});*/
const rootReducer = AuthReducer;

export { rootReducer, userInitialState };
