import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetProductRequest } from "../../actions";
import { Link } from "react-router-dom";


const ProductDetailPage = props => {
  const { history, match } = props;
  const id = match ? match.params.id : null;
  const getProduct = useSelector(state => state.itemEditing);
  const dispatch = useDispatch();
  const [Values, setValues] = useState({});

  useEffect(() => {
    if (id) {
      dispatch(actGetProductRequest(id));
      setValues(getProduct);
    }
  }, [getProduct.id]);

  return (
    <div className="container">
      <div class="card-body">
        <h5 class="card-title">{Values.name}</h5>
        <p>Price: {Values.price}</p>
        <p>Status: {Values.status ? "Stocking" : "Out of Stocking"}</p>
        <p class="card-text">{Values.detail}</p>
      </div>
      <Link to="/products-list" className="btn btn-info mr-10">
        {" "}
        Go Back{" "}
      </Link>
    </div>
  );
};

export default ProductDetailPage;
