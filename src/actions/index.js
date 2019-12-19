import * as types from "./../constants/ActionTypes";
import callApi from "../utils/apiCaller";

export const actFetchProductsRequest = () => dispatch =>
  callApi("products", "GET").then(res =>
    dispatch({
      type: types.FETCH_PRODUCTS,
      payload: { products: res.data }
    })
  );

export const actRemoveProductRequest = id => dispatch =>
  callApi(`products/${id}`, "DELETE").then(res =>
    dispatch({
      type: types.REMOVE_PRODUCT,
      payload: { id }
    })
  );

export const actAddProductRequest = product => dispatch =>
  callApi("products", "POST", product).then(res =>
    dispatch({
      type: types.ADD_PRODUCT,
      payload: { product }
    })
  );

export const actGetProductRequest = id => dispatch =>
  callApi(`products/${id}`, "GET").then(res =>
    dispatch({
      type: types.EDIT_PRODUCT,
      payload: { product: res.data }
    })
  );

export const actUpdateProductReques = product => dispatch =>
  callApi(`products/${product.id}`, "PUT", product).then(res =>
    dispatch({
      type: types.UPDATE_PRODUCT,
      payload: { product: res.data }
    })
  );
