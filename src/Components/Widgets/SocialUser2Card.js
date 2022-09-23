import React from "react";
import ReactEcharts from "echarts-for-react";

class SocialUser2Card extends React.Component {
  render() {
    return (
        <div className="card member-card">
                        <div className="header primary-bg">
                            <h4 className="m-t-10 text-light">Eliana Smith</h4>
                        </div>
                        <div className="member-img">
                            <a href="javascript:void(0);"><img src={require("../../asset/images/lg/avatar2.jpg")} className="rounded-circle" alt="profile-image" /></a>
                        </div>
                        <div className="body">
                            <div className="col-12">
                                <ul className="social-links list-unstyled">
                                    <li><a title="facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a></li>
                                    <li><a title="twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a></li>
                                    <li><a title="instagram" href="javascript:void(0);"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                                <p className="text-muted">795 Folsom Ave, Suite 600 San Francisco,<br/> CADGE 94107</p>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-4">
                                    <h5>418</h5>
                                    <small>Followers</small>
                                </div>
                                <div className="col-4">
                                    <h5>205</h5>
                                    <small>Comments</small>
                                </div>
                                <div className="col-4">
                                    <h5>656</h5>
                                    <small>Tweets</small>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default SocialUser2Card
