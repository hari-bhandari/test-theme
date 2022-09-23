import React from "react";

class FollowersCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Followers</h2>
                        </div>
                        <div className="body">
                            <form>
                                <div className="input-group m-b-20">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Search..." />
                                </div>
                            </form>
                            <ul className="right_chat list-unstyled li_animation_delay">
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar4.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">Chris Fox</span>
                                                <span className="message">Designer, Blogger</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar5.jpg")} alt="" />
                                            <div className="media-body">
                                                <span className="name">Joge Lucky</span>
                                                <span className="message">Java Developer</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="offline">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar2.jpg")} alt="" />
                                            <div className="media-body">
                                                <span className="name">Isabella</span>
                                                <span className="message">CEO, Thememakker</span>
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
                                                <span className="name">Folisise Chosielie</span>
                                                <span className="message">Art director, Movie Cut</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar3.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">Alexander</span>
                                                <span className="message">Writter, Mag Editor</span>
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
export default FollowersCard;
