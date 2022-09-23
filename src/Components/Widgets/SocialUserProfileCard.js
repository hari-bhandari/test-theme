import React from "react";

class SocialUserProfileCard extends React.Component {
  render() {
    return (
        <div className="col-lg-8 col-md-12">
                    <div className="card w_profile">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="profile-image float-md-right"> <img src={require("../../asset/images/user.png")} alt=""/> </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h4 className="m-t-0 mb-0"><strong>Alizee</strong> Thomas</h4>
                                    <span className="job_post">Ui UX Designer</span>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <p className="social-icon">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p>
                                    <div className="row">
                                        <div className="col-4">
                                            <h5>18K</h5>
                                            <small>Followers</small>
                                        </div>
                                        <div className="col-4">
                                            <h5>532</h5>
                                            <small>Following</small>
                                        </div>
                                        <div className="col-4">
                                            <h5>656</h5>
                                            <small>Tweets</small>
                                        </div>
                                    </div>
                                    <div className="m-t-15">
                                        <button className="btn btn-primary mr-1">Follow</button>
                                        <button className="btn btn-secondary">Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default SocialUserProfileCard
