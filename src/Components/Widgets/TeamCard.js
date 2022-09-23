import React from "react";
import {ProgressBar} from 'react-bootstrap';

class TeamCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>DS - Design Team <small>Ranking 2th</small></h2>                        
                            <ul className="header-dropdown">
                                <li className="dropdown"> <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i className="fa fa-more"></i> </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <h6 className="m-b-15">Info about Design Team <span className="badge badge-success float-right">New</span></h6>                                
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <ul className="list-unstyled team-info m-t-20">
                                <li className="m-r-15"><small className="text-muted">Team</small></li>
                                <li><img src={require("../../asset/images/xs/avatar1.jpg")} title="Avatar" alt="Avatar" /></li>
                                <li><img src={require("../../asset/images/xs/avatar2.jpg")} title="Avatar" alt="Avatar" /></li>
                                <li><img src={require("../../asset/images/xs/avatar3.jpg")} title="Avatar" alt="Avatar" /></li>
                                <li><img src={require("../../asset/images/xs/avatar4.jpg")} title="Avatar" alt="Avatar" /></li>
                                <li><img src={require("../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar" /></li>
                            </ul>
                            <div className="progress-xs custom-color-blue">
                            <ProgressBar className="progress-xs custom-color-blue" now={60} />
                            </div>
                            <div className="row">
                                <div className="col-7">
                                    <small>PROJECTS: 12</small>
                                    <h6>BUDGET: 4,870 USD</h6>
                                </div>
                                <div className="col-5">

                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default TeamCard;
