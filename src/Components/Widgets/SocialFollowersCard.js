import React from "react";

class SocialFollowersCard extends React.Component {
  render() {
    return (
        <div className="card w_social2 overflowhidden">
                            <div className="pw_img">
                            <img className="img-fluid" src={require("../../asset/images/auth_bg.jpg")} alt="About the image" />
                        </div>
                        <div className="pw_content">
                            <div className="pw_header top_counter">
                                <div className="icon bg-transparent">
                                    <img src={require("../../asset/images/xs/avatar5.jpg")} className="rounded-circle" alt="" />
                                </div>
                                <div className="content">
                                    <div>Designer</div>
                                    <h6>@Barbara Kelly</h6>
                                </div>
                            </div>
                            <div className="pw_meta">
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
                            </div>
                        </div>
                    </div>
    );
  }
}
export default SocialFollowersCard
