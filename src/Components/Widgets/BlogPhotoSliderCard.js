import React from "react";
import {Carousel} from "react-bootstrap"

class BlogPhotoSliderCard extends React.Component {
  render() {
      const {onClickRead} = this.props;
    return (
        <div className="card single_post">
        <div className="body pb-0">
            <h3 className="m-t-0 m-b-5"><a href="blog-details.html">All photographs are accurate. None of them is the truth</a></h3>
            <ul className="meta">
                <li><a href="javascript:void(0);"><i className="icon-user text-primary"></i>Posted By: Robert Hammer</a></li>
                <li><a href="javascript:void(0);"><i className="icon-tag text-success"></i>Photography</a></li>
                <li><a href="javascript:void(0);"><i className="icon-bubbles text-warning"></i>Comments: 3</a></li>
            </ul>
        </div>                    
        <div className="body">
            <div className="img-post m-b-15">
                <Carousel  className="carousel-inner" indicators={false} controls={false}>
                    <Carousel.Item className="carousel-item">
                        <img className="d-block img-fluid" src={require("../../asset/images/blog/blog-page-1.jpg")} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img className="d-block img-fluid" src={require("../../asset/images/blog/blog-page-2.jpg")} alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item">
                        <img className="d-block img-fluid" src={require("../../asset/images/blog/blog-page-3.jpg")} alt="First slide"/>
                    </Carousel.Item>
                </Carousel>
                {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img className="d-block img-fluid" src="assets/images/blog/blog-page-1.jpg" alt="First slide">
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="assets/images/blog/blog-page-2.jpg" alt="Second slide">
                        </div>
                        <div className="carousel-item">
                            <img className="d-block img-fluid" src="assets/images/blog/blog-page-3.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> */}
            </div>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
            <a href="#" title="read more" className="btn btn-info m-t-20" onClick={onClickRead}>Read More</a>                        
        </div>
    </div>
    );
  }
}
export default BlogPhotoSliderCard
