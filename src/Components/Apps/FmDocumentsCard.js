import React from "react";

class FmDocumentsCard extends React.Component {
  render() {
      const {name,size,icon,date} = this.props;
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
                    <div className="card file_manager">
                        <div className="file">
                            <a href="javascript:void(0);">
                                <div className="hover">
                                    <button type="button" className="btn btn-icon btn-danger"><i className="fa fa-trash"></i></button>
                                </div>
                                <div className="icon">
                                    <i className={icon}></i>
                                </div>
                                <div className="file-name">
                                    <p className="m-b-5 text-muted">{name}</p>
                                    <small>Size: {size}KB <span className="date text-muted">{date}</span></small>
                                </div>
                            </a>
                        </div>
                    </div>
        </div>
    );
  }
}
export default FmDocumentsCard;
