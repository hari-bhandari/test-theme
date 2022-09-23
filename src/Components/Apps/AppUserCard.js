import React from "react";

class AppUserCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="text-center">
                                <img src={require("../../asset/images/user.png")} className="rounded-circle m-b-15" alt="" />
                                <div>
                                    <h4 className="mb-0"><strong>Alizee</strong> Thomas</h4>
                                    <span>Washington, d.c.</span>
                                </div>
                                <div className="progress progress-xs m-b-25 m-t-25">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <h6>17</h6>
                                        <span>Completed</span>
                                    </div>
                                    <div className="col-4">
                                        <h6>34</h6>
                                        <span>ToDo</span>
                                    </div>
                                    <div className="col-4">
                                        <h6>78</h6>
                                        <span>All Tasks</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <span className="badge badge-default mb-2">Marketing</span>
                            <span className="badge badge-primary mb-2">Design Task</span>
                            <span className="badge badge-success mb-2">Development</span>
                            <span className="badge badge-info mb-2">Finance</span>
                            <span className="badge badge-warning mb-2">Meeting</span>
                            <span className="badge badge-danger mb-2">Conference</span>
                            <hr />
                            <h6>Team</h6>
                            <ul className="list-unstyled team-info m-t-20">                                
                                <li><img src={require("../../asset/images/xs/avatar1.jpg")} title="Avatar" alt="Avatar"/></li>
                                <li><img src={require("../../asset/images/xs/avatar2.jpg")} title="Avatar" alt="Avatar"/></li>
                                <li><img src={require("../../asset/images/xs/avatar3.jpg")} title="Avatar" alt="Avatar"/></li>
                                <li><img src={require("../../asset/images/xs/avatar4.jpg")} title="Avatar" alt="Avatar"/></li>
                                <li><img src={require("../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar"/></li>
                            </ul>
                        </div>
                    </div>
          </div>
    );
  }
}
export default AppUserCard
