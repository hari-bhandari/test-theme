import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class WorkReportCard extends React.Component {
  render() {
      const{header}=this.props
    return (
                            <div className="card">
                                <div className="header">
                                    <h2>{header?header:'Work report'}</h2>
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
                                    <ul className="list-unstyled">
                                        <li>
                                            <h6 className="d-flex justify-content-between align-items-center">
                                                <span>54</span>
                                                <span className="text-muted font-14">Today Works</span>
                                            </h6>
                                            <div className="mb-3">
                                            <ProgressBar now={87} className="progress-xs progress-transparent custom-color-blue" />
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="d-flex justify-content-between align-items-center">
                                                <span>27</span>
                                                <span className="text-muted font-14">Open Tasks</span>
                                            </h6>
                                            <div className="mb-3">
                                            <ProgressBar now={34} className="progress-xs progress-transparent custom-color-purple" />
                                            </div>
                                        </li>                                
                                        <li>
                                            <h6 className="d-flex justify-content-between align-items-center">
                                                <span>102</span>
                                                <span className="text-muted font-14">Closed Tasks</span>
                                            </h6>
                                            <div className="mb-3">
                                            <ProgressBar now={54} className="progress-xs progress-transparent custom-color-yellow" />
                                            </div>
                                        </li>
                                        <li>
                                            <h6 className="d-flex justify-content-between align-items-center">
                                                <span>1024 h</span>
                                                <span className="text-muted font-14">Total spent time</span>
                                            </h6>
                                            <div className="mb-3">
                                            <ProgressBar now={67} className="progress-xs progress-transparent custom-color-green" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    );
  }
}
export default WorkReportCard
