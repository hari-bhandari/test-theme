import React from "react";

class Paymentform1Card extends React.Component {
  render() {
    return (
        <div className="card">
        <div className="header">
            <h2>Payment form1</h2>
        </div>                    
        <div className="body">
            <p>
                <img src={require("../../asset/images/ecommerce/mastercard.png")} className="m-r-5"/>
                <img src={require("../../asset/images/ecommerce/visa-card.png")} className="m-r-5"/>
                <img src={require("../../asset/images/ecommerce/paypal.png")}/>
            </p>
            <p className="alert alert-success">Some text success or error</p>                            
            <form role="form">
                <div className="form-group">
                    <label htmlFor="username">Full name (on the card)</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-user"></i></span>
                        </div>
                        <input type="text" className="form-control" name="username" placeholder="" required=""/>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="cardNumber">Card number</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-credit-card"></i></span>
                        </div>
                        <input type="text" className="form-control" name="cardNumber" placeholder=""/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label><span className="hidden-xs">Expiration</span> </label>
                            <div className="form-inline">
                                <select className="form-control" >
                                    <option>MM</option>
                                    <option>01 - Janiary</option>
                                    <option>02 - February</option>
                                    <option>03 - February</option>
                                </select>
                                <span > / </span>
                                <select className="form-control">
                                    <option>YY</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
                            <input className="form-control" required="" type="text" />
                        </div>
                    </div>
                </div>
                <button className="subscribe btn btn-primary btn-block" type="button"> Confirm  </button>
            </form>
        </div>
    </div>
    );
  }
}
export default Paymentform1Card
