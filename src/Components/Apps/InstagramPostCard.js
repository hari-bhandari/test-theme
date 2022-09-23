import React from "react";

class InstagramPostCard extends React.Component {
  render() {
    return (
        <div className="card right-box">
                        <div className="header">
                            <h2>Instagram Post</h2>
                        </div>
                        <div className="body widget">
                            <ul className="list-unstyled instagram-plugin mb-0">
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/05-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/06-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/07-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/08-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/09-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/10-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/11-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/12-img.jpg")} alt="image description"/></a></li>
                                <li><a href="javascript:void(0);"><img src={require("../../asset/images/blog/13-img.jpg")} alt="image description"/></a></li>
                            </ul>
                        </div>
        </div>
    
    );
  }
}
export default InstagramPostCard
