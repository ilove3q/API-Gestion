import React from 'react';

const ProductsList = (props) => {
    return (
        <div className="card mb-3 mt-3">
              <div className="card-header">List products</div>
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Code</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.children}
                  </tbody>
                </table>
              </div>
            </div>
    )
}

export default ProductsList
