import React from "react";

class BlogListMainCard extends React.Component {
  render() {
      const {imageUrl} = this.props;
    return (
        <div className="card single_post">
        <div className="body">
            <div className="img-post">
                <img className="d-block img-fluid" src={imageUrl} alt="First slide" />
            </div>
            <h3><a href="blog-details.html">All photographs are accurate</a></h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
        </div>
        <div className="footer">
            <div className="actions">
                <a href="#" className="btn btn-outline-secondary">Continue Reading</a>
            </div>
            <ul className="stats">
                <li><a href="#">General</a></li>
                <li><a href="#" className="icon-heart">28</a></li>
                <li><a href="#" className="icon-bubbles">128</a></li>
            </ul>
        </div>
    </div>
    
    );
  }
}
export default BlogListMainCard
