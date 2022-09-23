import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class OurLocationCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
                    <div className="card visitors-map">
                        <div className="header">
                            <h2>Our Location</h2><ul className="header-dropdown">
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
export default OurLocationCard;