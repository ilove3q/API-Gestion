import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useForm from "react-hook-form";
import { actGetProductRequest, actUpdateProductReques, actAddProductRequest } from "../../actions";

const ProductActionPage = props => {
  const { history, match } = props;
  const id = match ? match.params.id : null;
  const getProduct = useSelector(state => state.itemEditing);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [Values, setValues] = useState({});
  const onSubmit = data => {
    if (id) {
      dispatch(actUpdateProductReques(data));
    } else {
      dispatch(actAddProductRequest(data));
    }
    history.goBack();
  };

  useEffect(() => {
    if (id) {
      dispatch(actGetProductRequest(id));
      setValues(getProduct);
    } else {
      setValues({ name: "", price: "", status: false });
    }
  }, [getProduct.id]);

  return (
    <div className="col-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="mr-3">Product's name: </label>
          <input
            type="text"
            placeholder="name"
            name="name"
            ref={register({ required: true, maxLength: 100 })}
            defaultValue={Values.name}
          />
        </div>
        <div className="form-group">
          <label className="mr-3">Price: </label>
          <input
            type="number"
            placeholder="price"
            name="price"
            ref={register({ maxLength: 12 })}
            defaultValue={Values.price}
          />
        </div>
        <div className="form-group">
          <label className="mr-3">Status: </label>
          <input
            type="checkbox"
            placeholder="status"
            name="status"
            ref={register}
            defaultChecked={Values.status}
          />
          Stocking
        </div>
        <Link to="/products-list" className="btn btn-second mr-10">
          {" "}
          Go Back{" "}
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductActionPage;
