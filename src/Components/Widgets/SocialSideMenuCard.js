import React from "react";

class SocialSideMenuCard extends React.Component {
  render() {
    return (
        <div className="card overflowhidden">
                        <div className="body top_counter primary-bg">
                            <div className="icon bg-transparent">
                                <img src={require("../../asset/images/xs/avatar2.jpg")} className="rounded-circle" alt="" />
                            </div>
                            <div className="content text-light">
                                <div>Team Leader</div>
                                <h6>Barbara Kelly</h6>
                            </div>
                        </div>
                        <div className="body">
                            <div className="list-group list-widget">
                                <a href="javascript:void(0);" className="list-group-item">
                                    <span className="badge badge-success">654</span>
                                    <i className="fa fa-envelope text-muted"></i>Inbox</a>
                                <a href="javascript:void(0);" className="list-group-item">
                                    <span className="badge badge-info">364</span>
                                    <i className="fa fa-eye text-muted"></i> Profile visits</a>
                                <a href="javascript:void(0);" className="list-group-item">
                                    <span className="badge badge-warning">12</span>
                                    <i className="fa fa-phone text-muted"></i> Call</a>
                                <a href="javascript:void(0);" className="list-group-item">
                                    <span className="badge badge-danger">54</span>
                                    <i className="fa fa-comments-o text-muted"></i> Messages</a>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default SocialSideMenuCard
