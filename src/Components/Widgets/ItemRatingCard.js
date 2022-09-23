import React from "react";

class ItemRatingCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="body">
                            <div className="row">
                                <div className="col-sm-3">
                                    <img src={require("../../asset/images/sm/avatar4.jpg")} className="rounded" />
                                    <div className="review-block-name"><a href="javascript:void(0);">Herman</a></div>
                                    <span>Jun 22, 2018<br/>1 day ago</span>
                                </div>
                                <div className="col-sm-9">
                                    <div className="m-b-10">
                                        <button className="btn btn-warning btn-sm" type="submit"><i className="icon-star text-light"></i></button>
                                        <button className="btn btn-warning btn-sm" type="submit"><i className="icon-star text-light"></i></button>
                                        <button className="btn btn-warning btn-sm" type="submit"><i className="icon-star text-light"></i></button>
                                        <button className="btn btn-warning btn-sm" type="submit"><i className="icon-star text-light"></i></button>
                                        <button className="btn btn-warning btn-sm" type="submit"><i className="icon-star text-light"></i></button>
                                    </div>
                                    <h6>this was nice in buy</h6>
                                    <p>this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</p>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default ItemRatingCard
