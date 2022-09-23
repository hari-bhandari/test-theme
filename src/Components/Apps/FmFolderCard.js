import React from "react";

class FmFolderCard extends React.Component {
  render() {
      const {name} = this.props;
    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card">
                <a href="javascript:void(0);" className="folder">
                    <h6><i className="fa fa-folder m-r-10"></i>{name}</h6>
                </a>
            </div>
        </div>
    );
  }
}
export default FmFolderCard;
