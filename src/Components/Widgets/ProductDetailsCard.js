import React from "react";

class ProductDetailsCard extends React.Component {
constructor(props){
    super(props)
    this.state={
        tab:[true,false,false,false,false]
    }
}
  render() {
      const {tab} = this.state;
    return (
        <div className="card">
                        <div className="body">
                            <div className="row">
                                <div className="preview col-lg-4 col-md-12">
                                    <div className="preview-pic tab-content">
                                        <div className={`tab-pane ${tab[0]&&'active'}`} id="product_1"><img src={require("../../asset/images/ecommerce/1.png")} className="img-fluid"/></div>
                                        <div className={`tab-pane ${tab[1]&&'active'}`} id="product_2"><img src={require("../../asset/images/ecommerce/2.png")} className="img-fluid"/></div>
                                        <div className={`tab-pane ${tab[2]&&'active'}`} id="product_3"><img src={require("../../asset/images/ecommerce/3.png")} className="img-fluid"/></div>
                                        <div className={`tab-pane ${tab[3]&&'active'}`} id="product_4"><img src={require("../../asset/images/ecommerce/4.png")} className="img-fluid"/></div>
                                        <div className={`tab-pane ${tab[4]&&'active'}`} id="product_5"><img src={require("../../asset/images/ecommerce/5.png")} className="img-fluid"/></div>
                                    </div>
                                    <ul className="preview-thumbnail nav nav-tabs">
                                        <li className="nav-item"><a className={`nav-link ${tab[0]&&'active'}`} onClick={()=>{ this.setState({ tab:[true,false,false,false,false] }) }} data-toggle="tab" href="#product_1"><img src={require("../../asset/images/ecommerce/1.png")} className="img-fluid"/></a></li>
                                        <li className="nav-item"><a className={`nav-link ${tab[1]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,true,false,false,false] }) }} data-toggle="tab" href="#product_2"><img src={require("../../asset/images/ecommerce/2.png")} className="img-fluid"/></a></li>
                                        <li className="nav-item"><a className={`nav-link ${tab[2]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,false,true,false,false] }) }} data-toggle="tab" href="#product_3"><img src={require("../../asset/images/ecommerce/3.png")} className="img-fluid"/></a></li>
                                        <li className="nav-item"><a className={`nav-link ${tab[3]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,false,false,true,false] }) }} data-toggle="tab" href="#product_4"><img src={require("../../asset/images/ecommerce/4.png")} className="img-fluid"/></a></li>
                                        <li className="nav-item"><a className={`nav-link ${tab[4]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,false,false,false,true] }) }} data-toggle="tab" href="#product_5"><img src={require("../../asset/images/ecommerce/5.png")} className="img-fluid" /></a></li>                                    
                                    </ul>                
                                </div>
                                <div className="details col-lg-8 col-md-12">
                                    <h3 className="product-title mb-0">Simple Black Clock</h3>                                    
                                    <div className="rating">
                                        <div className="stars">
                                            <span className="icon-star text-warning"></span>
                                            <span className="icon-star text-warning"></span>
                                            <span className="icon-star text-warning"></span>
                                            <span className="icon-star text-warning"></span>
                                            <span className="icon-star text-muted"></span>
                                        </div>
                                        <span className="m-l-10">41 reviews</span>
                                    </div>
                                    <hr/>
                                    <h5 className="price m-t-0">Current Price: <span className="text-warning">$180</span></h5>
                                    <p className="product-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p className="vote"><strong>78%</strong> of buyers enjoyed this product! <strong>(23 votes)</strong></p>
                                    <h5 className="sizes">sizes:
                                        <span className="size" title="small">s</span>
                                        <span className="size" title="medium">m</span>
                                        <span className="size" title="large">l</span>
                                        <span className="size" title="xtra large">xl</span>
                                    </h5>
                                    <h5 className="colors">colors:
                                        <span className="color bg-warning not-available" title="Not In store"></span>
                                        <span className="color bg-success"></span>
                                        <span className="color bg-primary"></span>
                                    </h5>
                                    <hr/>
                                    <div className="action">
                                        <button className="btn btn-primary mr-1" type="button">Add to Cart</button>
                                        <button className="btn btn-danger" type="button"><span className="icon-heart"></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default ProductDetailsCard
