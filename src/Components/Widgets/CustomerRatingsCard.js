import React from "react";

class CustomerRatingsCard extends React.Component {
  render() {
    const {data,back} = this.props;
    return (
        <div className="card">
        <div className="header">
            <h2>New Customer Ratings </h2>
        </div>
        <div className="body">
            <ul className="row list-unstyled c_review">
                <li className="col-12">
                    <div className="avatar">
                        <a href="javascript:void(0);"><img className="rounded" src={require("../../asset/images/sm/avatar2.jpg")} alt="user" width="60" /></a>
                    </div>                                
                    <div className="comment-action">
                        <h6 className="c_name">Orlando Lentz</h6>
                        <p className="c_msg mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                        <div className="badge badge-info">iPhone 8</div>
                        <span className="m-l-10">
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                        </span>
                        <small className="comment-date float-sm-right">Dec 21, 2017</small>
                    </div>                                
                </li>
                <li className="col-12">
                    <div className="avatar">
                        <a href="javascript:void(0);"><img className="rounded" src={require("../../asset/images/sm/avatar3.jpg")} alt="user" width="60" /></a>
                    </div>                                
                    <div className="comment-action">
                        <h6 className="c_name">Brian Swader</h6>
                        <p className="c_msg mb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        <div className="badge badge-info">Nokia 8</div>
                        <span className="m-l-10">
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                        </span>
                        <small className="comment-date float-sm-right">Dec 18, 2017</small>
                    </div>                                
                </li>
                <li className="col-12">
                    <div className="avatar">
                        <a href="javascript:void(0);"><img className="rounded" src={require("../../asset/images/sm/avatar5.jpg")} alt="user" width="60" /></a>
                    </div>                                
                    <div className="comment-action">
                        <h6 className="c_name">Rose Rivera</h6>
                        <p className="c_msg mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <div className="badge badge-info">HTC U11</div>
                        <span className="m-l-10">
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="icon-star text-warning"></i></a>
                            <a href="javascript:void(0);"><i className="zmdi zmdi-star-outline text-muted"></i></a>
                        </span>
                        <small className="comment-date float-sm-right">Dec 13, 2017</small>
                    </div>                                
                </li>
            </ul>
        </div>
    </div>
    );
  }
}
export default CustomerRatingsCard
