import React from "react";
import ReactEcharts from "echarts-for-react";

class MapCardDemographic extends React.Component {
  render() {
    return (
        <div className="col-lg-8 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Top Country <small>Top 5 Country in the world</small></h2>
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
                            
                        </div>
                    </div>
                </div>
    );
  }
}
export default MapCardDemographic
