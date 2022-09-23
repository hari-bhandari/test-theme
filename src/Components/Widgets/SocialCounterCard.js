import React from "react";

class SocialCounterCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Social Counter</h2>
                        </div>
                        <div className="body social_counter">                        
                            <ul className=" list-unstyled basic-list">
                                <li><i className="fa fa-facebook-square m-r-5"></i> FaceBook <span className="badge badge-primary">16,785</span></li>
                                <li><i className="fa fa-twitter-square m-r-5"></i> Twitter <span className="badge badge-default">2,365</span></li>
                                <li><i className="fa fa-linkedin-square m-r-5"></i> Linkedin<span className="badge badge-success">9,021</span></li>
                                <li><i className="fa fa-google-plus-square m-r-5"></i> Google Plus<span className="badge badge-info">725</span></li>
                                <li><i className="fa fa-behance-square m-r-5"></i> Behance<span className="badge badge-info">1,725</span></li>
                                <li><i className="fa fa-dribbble m-r-5"></i> Dribbble<span className="badge badge-info">11,725</span></li>
                            </ul>
                        </div>
                    </div>
    
    );
  }
}
export default SocialCounterCard
