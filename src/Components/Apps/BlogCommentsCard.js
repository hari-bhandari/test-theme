import React from "react";

class BlogCommentsCard extends React.Component {
  render() {
    return (
        <div className="card">
                            <div className="header">
                                <h2>Comments 3</h2>
                            </div>
                            <div className="body">
                                <ul className="comment-reply list-unstyled">
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src={require("../../asset/images/sm/avatar2.jpg")} alt="Awesome Image"/></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="mb-0">Gigi Hadid </h5>
                                            <p>Why are there so many tutorials on how to decouple WordPress? how fast and easy it is to get it running (and keep it running!) and its massive ecosystem. </p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 09 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src={require("../../asset/images/sm/avatar3.jpg")} alt="Awesome Image"/></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="mb-0">Christian Louboutin</h5>
                                            <p>Great tutorial but few issues with it? If i try open post i get following errors. Please can you help me?</p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 12 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="row clearfix">
                                        <div className="icon-box col-md-2 col-4"><img className="img-fluid img-thumbnail" src={require("../../asset/images/sm/avatar4.jpg")} alt="Awesome Image" /></div>
                                        <div className="text-box col-md-10 col-8 p-l-0 p-r0">
                                            <h5 className="mb-0">Kendall Jenner</h5>
                                            <p>Very nice and informative article. In all the years I've done small and side-projects as a freelancer, I've ran into a few problems here and there.</p>
                                            <ul className="list-inline">
                                                <li><a href="javascript:void(0);">Mar 20 2018</a></li>
                                                <li><a href="javascript:void(0);">Reply</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>                                        
                            </div>
                        </div>
    );
  }
}
export default BlogCommentsCard;
