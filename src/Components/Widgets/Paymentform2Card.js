import React from "react";

class Paymentform2Card extends React.Component {
constructor(props){
    super(props)
    this.state={
        tab:[true,false,false]
    }
}
  render() {
      const {tab} = this.state
    return (
        <div className="card">
        <div className="header">
            <h2>Payment form1</h2>
        </div>                    
        <div className="body">
                <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                                <li className="nav-item"><a className={`nav-link ${tab[0]&&'show active'}`} onClick={()=>{ this.setState({ tab:[true,false,false] }) }} data-toggle="pill" href="#nav-tab-card"><i className="fa fa-credit-card"></i> Credit Card</a></li>
                                <li className="nav-item"><a className={`nav-link ${tab[1]&&'show active'}`} onClick={()=>{ this.setState({ tab:[false,true,false] }) }} data-toggle="pill" href="#nav-tab-paypal"><i className="fa fa-paypal"></i>  Paypal</a></li>
                                <li className="nav-item"><a className={`nav-link ${tab[2]&&'show active'}`} onClick={()=>{ this.setState({ tab:[false,false,true] }) }} data-toggle="pill" href="#nav-tab-bank"><i className="fa fa-university"></i>  Bank Transfer</a></li>
                </ul>
                <div className="tab-content">
                        <div className={`tab-pane fade ${tab[0]&&'show active'}`}>
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
                        <div className={`tab-pane fade ${tab[1]&&'show active'}`} id="nav-tab-paypal">
                                    <p>Paypal is easiest way to pay online</p>
                                    <p><button type="button" className="btn btn-primary"> <i className="fa fa-paypal"></i> Log in my Paypal </button></p>
                                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className={`tab-pane fade ${tab[2]&&'show active'}`} id="nav-tab-bank">
                                    <p>Bank accaunt details</p>
                                    <dl className="param">
                                        <dt>BANK: </dt>
                                        <dd> THE WORLD BANK</dd>
                                    </dl>
                                    <dl className="param">
                                        <dt>Accaunt number: </dt>
                                        <dd> 12345678912345</dd>
                                    </dl>
                                    <dl className="param">
                                        <dt>IBAN: </dt>
                                        <dd> 123456789</dd>
                                    </dl>
                                    <p><strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        
                </div>
                                        
            {/*  */}
        </div>
    </div>
    );
  }
}
export default Paymentform2Card
