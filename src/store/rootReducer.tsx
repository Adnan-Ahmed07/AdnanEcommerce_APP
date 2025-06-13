import { combineReducers } from "redux";
import homeReducer from "@modules/home/api/slice";
import categoriesReducer from "@modules/categories/api/slice";
import cartReducer from "@modules/cart/api/slice";
export default combineReducers({
  home: homeReducer,
  categories:categoriesReducer,
  cart:cartReducer
});