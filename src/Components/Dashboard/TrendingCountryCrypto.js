import React from "react";

class TrendingCountryCrypto extends React.Component {
  render() {
      const { currency,value,icon } = this.props;
    return (
        <div className="col-lg-8 col-md-12 col-sm-12">
        <div className="card">
            <div className="header">
                <h2>Top Trending Country</h2>
                <ul className="header-dropdown">
                    <li className="dropdown">
                        <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="javascript:void(0);">Action</a></li>
                            <li><a href="javascript:void(0);">Another Action</a></li>
                            <li><a href="javascript:void(0);">Something else</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card top_widget">
                            <div className="body">
                                <div className="content">
                                    <div className="text mb-2 text-uppercase">USA</div>
                                    <h4 className="number mb-0">25K <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 11%</span></h4>
                                    <small className="text-muted">Analytics for last week</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card top_widget">
                            <div className="body">
                                <div className="content">
                                    <div className="text mb-2 text-uppercase">Canada</div>
                                    <h4 className="number mb-0">25K <span className="font-12 text-muted"><i className="fa fa-level-down"></i> 7%</span></h4>
                                    <small className="text-muted">Analytics for last week</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="card top_widget">
                            <div className="body">
                                <div className="content">
                                    <div className="text mb-2 text-uppercase">Australia</div>
                                    <h4 className="number mb-0">25K <span className="font-12 text-muted"><i className="fa fa-level-down"></i> 3%</span></h4>
                                    <small className="text-muted">Analytics for last week</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    );
  }
}
export default TrendingCountryCrypto
