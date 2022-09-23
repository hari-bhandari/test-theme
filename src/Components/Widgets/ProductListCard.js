import React from "react";

class ProductListCard extends React.Component {
  render() {
    return (
        <div className="card product_item_list">
                        <div className="header">
                            <h2>Product List</h2>
                        </div>
                        <div className="body">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th data-breakpoints="sm xs">Detail</th>
                                            <th data-breakpoints="xs">Amount</th>
                                            <th data-breakpoints="xs md">Stock</th>
                                            <th data-breakpoints="sm xs md">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src={require("../../asset/images/ecommerce/1.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Simple Black Clock</h5></td>
                                            <td><span className="text-muted">randomised words even slightly believable</span></td>
                                            <td>$16.00</td>
                                            <td><span className="col-green">In Stock</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-danger"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={require("../../asset/images/ecommerce/10.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Brone Candle</h5></td>
                                            <td><span className="text-muted">It is a long established  will be distracted</span></td>
                                            <td>$15.00</td>
                                            <td><span className="col-amber">Low Stock</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-danger"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={require("../../asset/images/ecommerce/11.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Wood Simple Clock</h5></td>
                                            <td><span className="text-muted">There passages of Lorem Ipsum available</span></td>
                                            <td>$16.00</td>
                                            <td><span className="col-amber">Low Stock</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-danger"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><img src={require("../../asset/images/ecommerce/5.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Unero Small Bag</h5></td>
                                            <td><span className="text-muted">It is a long established fact that a distracted</span></td>
                                            <td>$23.00</td>
                                            <td><span className="col-red">Out Of Stock</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-danger"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>      
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default ProductListCard
