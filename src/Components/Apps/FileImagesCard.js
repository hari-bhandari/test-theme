import React from "react";

class FileImagesCard extends React.Component {
  render() {
      const {name,size,imageUrl} = this.props;
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="card file_manager">
                        <div className="file ">
                            <a href="javascript:void(0);">
                                <div className="hover">
                                    <button type="button" className="btn btn-icon btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                                <div className="image">
                                    <img src={imageUrl} alt="img" className="img-fluid" />
                                </div>
                                <div className="file-name">
                                    <p className="m-b-5 text-muted">img21545ds.jpg</p>
                                    <small>Size: 2MB <span className="date text-muted">Dec 11, 2017</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
        </div>
    );
  }
}
export default FileImagesCard;
