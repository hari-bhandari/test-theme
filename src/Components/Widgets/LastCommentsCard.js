import React from "react";

class LastCommentsCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Last comments</h2>
                        </div>
                        <div className="body">                           
                            <ul className="right_chat list-unstyled li_animation_delay">
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar4.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">Chris Fox <small className="float-right">Just now</small></span>
                                                <span className="message">Lorem ipsum Veniam aliquip culpa laboris minim tempor</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="online">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar5.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">Joge Lucky <small className="float-right">38 minutes ago</small></span>
                                                <span className="message">Many desktop publishing packages and web page editors</span>
                                                <span className="badge badge-outline status"></span>
                                            </div>
                                        </div>
                                    </a>                            
                                </li>
                                <li className="offline">
                                    <a href="javascript:void(0);">
                                        <div className="media">
                                            <img className="media-object " src={require("../../asset/images/xs/avatar2.jpg")} alt=""/>
                                            <div className="media-body">
                                                <span className="name">Isabella <small className="float-right">2 hours ago</small></span>
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
                                                <span className="name">Folisise Chosielie <small className="float-right">32 hours ago</small></span>
                                                <span className="message">There are many variations of passages of Lorem Ipsum available, but the majority</span>
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
                                                <span className="name">Alexander <small className="float-right">1 day ago</small></span>
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
export default LastCommentsCard;