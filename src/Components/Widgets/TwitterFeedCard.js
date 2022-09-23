import React from "react";

class TwitterFeedCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Twitter Feed</h2>
                        </div>
                        <div className="body">
                            <form>
                                <div className="form-group">
                                    <textarea rows="4" className="form-control no-resize" placeholder="Enter here for tweet..."></textarea>
                                </div>
                                <button className="btn btn-primary">Tweet</button>
                                <a href="javascript:void(0);" className="float-right">13K users active</a>
                            </form>
                            <hr />
                            <ul className="right_chat list-unstyled li_animation_delay">
                                <li className="offline">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar2.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">@Isabella <small className="float-right">1 hours ago</small></span>
                                                <span className="message">Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="offline">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar1.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">@Folisise Chosielie <small className="float-right">45 hours ago</small></span>
                                                <span className="message">There are many variations of passages of Lorem Ipsum available, but the majority</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar3.jpg")} alt="" />
                                            <div className="media-body">
                                                <span className="name">@Alexander <small className="float-right">1 day ago</small></span>
                                                <span className="message">It is a long established fact that a reader will be distracted</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>                        
                            </ul>                            
                        </div>
                    </div>
    );
  }
}
export default TwitterFeedCard;