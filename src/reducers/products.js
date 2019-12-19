import * as types from "./../constants/ActionTypes";
import { remove, findIndex } from "lodash";
const initialState = [];

export default (state = initialState, { type, payload }) => {
  var index = -1;
  switch (type) {
    case types.FETCH_PRODUCTS:
      state = payload.products;
      return [...state];
    case types.REMOVE_PRODUCT:
      state = remove(state, product => product.id !== payload.id);
      return [...state];
    case types.ADD_PRODUCT:
      state.push(payload.product);
      return [...state];
    case types.UPDATE_PRODUCT:
      index = findIndex(state, payload.product);
      if (index !== -1) {
        state[index] = {
          ...payload.product
        };
      }
      return [...state];
    default:
      return state;
  }
};
