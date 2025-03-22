import { combineReducers } from "redux";
import homeReducer from "@modules/home/api/slice";

export default combineReducers({
  home: homeReducer,
});