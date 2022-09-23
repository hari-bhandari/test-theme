import React from "react";

class ProductCard extends React.Component {
  render() {
    return (
        <div className="card product_item">
                                <div className="body">
                                    <div className="cp_img">
                                        <img src={require("../../asset/images/ecommerce/1.png")} alt="Product" className="img-fluid" />
                                        <div className="hover">
                                            <a href="javascript:void(0);" className="btn btn-primary"><i className="icon-eye"></i></a>
                                            <a href="javascript:void(0);" className="btn btn-primary"><i className="icon-basket"></i></a>
                                        </div>
                                    </div>
                                    <div className="product_details">
                                        <h5><a href="ec-product-detail.html">Simple Black Clock</a></h5>
                                        <ul className="product_price list-unstyled">
                                            <li className="old_price">$16.00</li>
                                            <li className="new_price">$13.00</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
    );
  }
}
export default ProductCard
