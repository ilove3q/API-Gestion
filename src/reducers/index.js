import { combineReducers } from "redux";
import products from "./products";
import itemEditing from "./itemEditing";

export const appReducers = combineReducers({
  products,
  itemEditing
});
