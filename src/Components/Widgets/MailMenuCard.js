import React from "react";

class MainMenuCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="list-group list-widget">
                            <a href="app-inbox.html" className="list-group-item">
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
                            <a href="javascript:void(0);" className="list-group-item">
                                <span className="badge badge-warning">19</span>
                                <i className="fa fa-bookmark text-muted"></i> Bookmarks</a>
                            <a href="javascript:void(0);" className="list-group-item">
                                <span className="badge">56</span>
                                <i className="fa fa-bell text-muted"></i> Notifications</a>
                            <a href="javascript:void(0);" className="list-group-item">
                                <span className="badge badge-info">25</span>
                                <i className="fa fa-clock-o text-muted"></i> Watch</a>
                        </div>
        </div>
    );
  }
}
export default MainMenuCard;