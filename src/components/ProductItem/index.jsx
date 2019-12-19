import React from "react";
import {Link} from "react-router-dom";

const ProductItem = props => {
  let { product, index, onRemove } = props;
  let status = product.status ? "Stocking" : "Out of Stocking";
  let statusClass = product.status ? "primary" : "warning";

  const Remove = (id) => {
    if (confirm("Do you want to remove it?")){ // eslint-disable-line
      onRemove(id);
    }
  }

  return (
    <tr>
      <th scope="row">{index}</th>
      <td> {product.id} </td>
      <td> {product.name} </td>
      <td> {product.price} </td>
      <td>
        <div className={`badge badge-${statusClass}`}> {status} </div>
      </td>
      <td>
        <div className="btn-group btn-group-sm" role="group">
          <Link to={`/product/${product.id}/edit`} className="btn btn-primary">
            Edit
          </Link>
          <button type="button" className="btn btn-danger" onClick={()=>Remove(product.id)}>
            Remove
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
