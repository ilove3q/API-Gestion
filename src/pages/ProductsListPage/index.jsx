import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ProductsList from "../../components/ProductsList";
import ProductItem from "../../components/ProductItem";

import {
  actFetchProductsRequest,
  actRemoveProductRequest
} from "../../actions";

const ProductsListPage = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchProductsRequest());
  }, []);

  const ShowProducts = ListProducts => {
    let result =
      ListProducts.length === 0
        ? null
        : ListProducts.map((product, key) => (
              <ProductItem
                key={key}
                product={product}
                index={key + 1}
                onRemove={onRemove}
              />
          ));
    return result;
  };

  const onRemove = id => {
    dispatch(actRemoveProductRequest(id));
  };

  return (
    <div className="col">
      <Link to="/product/add" className="btn btn-primary">
        Add product
      </Link>
      <ProductsList>{ShowProducts(products)}</ProductsList>
    </div>
  );
};

export default ProductsListPage;
