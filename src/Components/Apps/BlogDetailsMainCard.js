import React from "react";

class BlogDetailsMainCard extends React.Component {
  render() {
      const {imageUrl} = this.props;
    return (
        <div className="card single_post">
                        <div className="body">
                            <div className="img-post">
                                <img className="d-block img-fluid" src={imageUrl} alt="First slide"/>
                            </div>
                            <h3><a href="blog-details.html">All photographs are accurate</a></h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>                        
                    </div>
    );
  }
}
export default BlogDetailsMainCard;
