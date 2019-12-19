import * as types from "./../constants/ActionTypes";
const initialState = {id:null, name: "", price: "", status: false };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.EDIT_PRODUCT:
      state = payload.product;
      return { ...state };
    default:
      return state;
  }
};
