import React from "react";

class ProductOrderListCard extends React.Component {
  render() {
    return (
        <div className="card product_item_list product-order-list">
                        <div className="header">
                            <h2>Product Order List</h2>
                        </div>
                        <div className="body">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Name</th>
                                            <th data-breakpoints="sm xs">Order ID</th>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th data-breakpoints="xs">Amount</th>
                                            <th>Date</th>
                                            <th data-breakpoints="xs md">Status</th>
                                            <th data-breakpoints="sm xs md">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Robert Hammer</td>
                                            <td>#291989</td>
                                            <td><img src={require("../../asset/images/ecommerce/1.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Simple Black Clock</h5></td>
                                            <td>$16.00</td>
                                            <td>01-05-2018</td>
                                            <td><span className="badge badge-success bg-success text-white">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Orlando Lentz</td>
                                            <td>#291990</td>
                                            <td><img src={require("../../asset/images/ecommerce/10.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Brone Candle</h5></td>
                                            <td>$15.00</td>
                                            <td>7-05-2018</td>
                                            <td><span className="badge badge-danger bg-danger text-white">Failed</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Barbara Kelly</td>
                                            <td>#291991</td>
                                            <td><img src={require("../../asset/images/ecommerce/11.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Wood Simple Clock</h5></td>
                                            <td>$16.00</td>
                                            <td>09-05-2018</td>
                                            <td><span className="badge badge-success bg-success text-white">Paid</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-trash"></i></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Brian Swader</td>
                                            <td>#291992</td>
                                            <td><img src={require("../../asset/images/ecommerce/5.png")} width="48" alt="Product img"/></td>
                                            <td><h5>Unero Small Bag</h5></td>
                                            <td>$23.00</td>
                                            <td>14-05-2018</td>
                                            <td><span className="badge badge-warning bg-warning text-white">Pending</span></td>
                                            <td>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-pencil"></i></a>
                                                <a href="javascript:void(0);" className="btn btn-outline-secondary mr-1"><i className="icon-trash"></i></a>
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
export default ProductOrderListCard
