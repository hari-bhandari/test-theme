import React from "react";

class BlogPhotographCard extends React.Component {
  render() {
    return (
        <div className="card single_post2">
                        <img className="img-fluid" src={require("../../asset/images/blog/blog-page-3.jpg")} alt="img" />
                        <div className="body">                    
                            <div className="content">
                                <div className="actions_sidebar">
                                    <a href="javascript:void(0)"><i className="icon-share"></i></a>
                                    <a href="javascript:void(0)"><i className="icon-heart"></i><span>5</span></a>
                                    <a href="javascript:void(0)"><i className="icon-bubble"></i><span>8</span></a>
                                </div>
                                <h4 className="title">All photographs are accurate</h4>
                                <p className="date">
                                    <small>Jun 15, 2018</small>
                                </p>
                                <p className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                                <a className="btn btn-primary" href="javascript:void(0)">READ MORE</a>
                            </div>
                        </div>
                        
                    </div>
    
    );
  }
}
export default BlogPhotographCard
