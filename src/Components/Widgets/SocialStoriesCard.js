import React from "react";

class SocialStoriesCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Stories</h2>
            </div>
            <div className="body">                            
                <ul className="right_chat list-unstyled mb-0">
                    <li className="online">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar6.jpg")} alt="" />
                                <div className="media-body">
                                    <span className="name">Watt Mark</span>
                                    <span className="message">21 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="online">
                        <a href="javascript:void(0);">
                            <div className="media">
                                <img className="media-object " src={require("../../asset/images/xs/avatar7.jpg")} alt="" />
                                <div className="media-body">
                                    <span className="name">Jay Morgan</span>
                                    <span className="message">3 hours ago</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="offline">
                        <a href="javascript:void(0);">
                            <div className="media mb-0">
                                <img className="media-object " src={require("../../asset/images/xs/avatar8.jpg")} alt=""/>
                                <div className="media-body">
                                    <span className="name">Genelia Perkins</span>
                                    <span className="message">3 hours ago</span>
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
export default SocialStoriesCard
