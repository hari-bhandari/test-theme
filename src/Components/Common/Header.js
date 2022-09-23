import React from "react";

class Header extends React.Component {
  render() {
      const {mainNavigate,currentPage,headerText,childNav,hideDownload,hideSend,showGrid,showAdd,onGrid,onAdd} = this.props
    return (
            <div className="block-header">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h2>{headerText}</h2>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html"><i className="fa fa-dashboard"></i></a></li>                            
                            <li className="breadcrumb-item">{mainNavigate}</li>
                            <li className="breadcrumb-item active">{currentPage}</li>
                            {
                                childNav?<li className="breadcrumb-item active">{childNav}</li>:null
                            }
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="d-flex flex-row-reverse">
                            <div className="page_action">
                                {hideDownload?null:<button type="button" className="btn btn-primary mr-1"><i className="fa fa-download"></i> Download report</button>}
                                {hideSend?null:<button type="button" className="btn btn-secondary"><i className="fa fa-send"></i> Send report</button>}
                                {showGrid?<a href="#" className="btn btn-primary mr-1" onClick={onGrid}>Grid view</a>:null}
                                {showAdd?<button type="button" className="btn btn-secondary" onClick={onAdd} data-toggle="modal" data-target="#addcontact">Add New</button>:null}
                            </div>
                            <div className="p-2 d-flex">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
export default Header
