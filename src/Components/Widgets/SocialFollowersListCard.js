import React from "react";

class SocialFollowersListCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Followers</h2>
            </div>
            <div className="body">                            
                <ul className="right_chat w_followers list-unstyled mb-0">
                    <li className="online">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar4.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Chris Fox</span>
                                    <span className="message">Designer, Blogger</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="online">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar5.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Joge Lucky</span>
                                    <span className="message">Java Developer</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="offline">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar2.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Isabella</span>
                                    <span className="message">CEO, Thememakker</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="offline">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar1.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Folisise Chosielie</span>
                                    <span className="message">Art director, Movie Cut</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="online">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar3.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Alexander</span>
                                    <span className="message">Writter, Mag Editor</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="offline">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar10.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">@Folisise Chosielie</span>
                                    <span className="message">Art director, Movie Cut</span>
                                    <span className="badge badge-outline status"></span>
                                    <button type="button" className="btn btn-outline-primary"><i className="icon-plus"></i></button>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}
export default SocialFollowersListCard
