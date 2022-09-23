import React from "react";

class PopularPostsCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Popular Posts</h2>                        
                        </div>
                        <div className="body widget popular-post">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="single_post">
                                        <p className="mb-0">Apple Introduces Search Ads Basic</p>
                                        <span>jun 22, 2018</span>
                                        <div className="img-post">
                                            <img src={require("../../asset/images/blog/blog-page-2.jpg")} alt="Awesome Image"/>                                        
                                        </div>                                            
                                    </div>
                                    <div className="single_post">
                                        <p className="mb-0">new rules, more cars, more races</p>
                                        <span>jun 8, 2018</span>
                                        <div className="img-post">
                                            <img src={require("../../asset/images/blog/blog-page-3.jpg")} alt="Awesome Image"/>     
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
         </div>
    
    );
  }
}
export default PopularPostsCard
