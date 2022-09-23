import React from "react";
import ReactEcharts from "echarts-for-react";

class SocialUserCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="body w_user">
                            <img className="rounded-circle" src={require("../../asset/images/sm/avatar4.jpg")} alt="" />
                            <div className="wid-u-info">
                                <h5>Richard Foos</h5>
                                <p className="text-muted mb-0">123 6th St. Melbourne, <br/>FL 32904</p>                            
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-4">
                                    <h5 className="mb-0">270</h5>
                                    <small>Followers</small>
                                </div>
                                <div className="col-4">
                                    <h5 className="mb-0">310</h5>
                                    <small>Following</small>
                                </div>
                                <div className="col-4">
                                    <h5 className="mb-0">908</h5>
                                    <small>Liks</small>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default SocialUserCard
