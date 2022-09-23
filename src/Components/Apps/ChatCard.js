import React from "react";

class ChatCard extends React.Component {
  render() {
    return (
        <div className="col-lg-12">
                    <div className="card chat-app">
                        <div id="plist" className="people-list">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..."/>
                            </div>
                            <ul className="list-unstyled chat-list mt-2 mb-0">
                                <li className="clearfix">
                                    <img src={require("../../asset/images/xs/avatar1.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Vincent Porter</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 7 mins ago </div>                                            
                                    </div>
                                </li>
                                <li className="clearfix active">
                                    <img src={require("../../asset/images/xs/avatar2.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Aiden Chavez</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src={require("../../asset/images/xs/avatar3.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Mike Thomas</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>                                    
                                <li className="clearfix">
                                    <img src={require("../../asset/images/xs/avatar7.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Christian Kelly</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> left 10 hours ago </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src={require("../../asset/images/xs/avatar8.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Monica Ward</div>
                                        <div className="status"> <i className="fa fa-circle online"></i> online </div>
                                    </div>
                                </li>
                                <li className="clearfix">
                                    <img src={require("../../asset/images/xs/avatar9.jpg")} alt="avatar"/>
                                    <div className="about">
                                        <div className="name">Dean Henry</div>
                                        <div className="status"> <i className="fa fa-circle offline"></i> offline since Oct 28 </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="chat">
                            <div className="chat-header clearfix">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                                            <img src={require("../../asset/images/xs/avatar2.jpg")} alt="avatar"/>
                                        </a>
                                        <div className="chat-about">
                                            <h5 className="mb-0">Aiden Chavez</h5>
                                            <small>Last seen: 2 hours ago</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 hidden-sm text-right">
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-secondary mr-1"><i className="icon-camera"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-primary mr-1"><i className="icon-camcorder"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-info mr-1"><i className="icon-settings"></i></a>
                                        <a href="javascript:void(0);" className="btn btn-sm btn-outline-warning"><i className="icon-question"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-history">
                                <ul className="mb-0">
                                    <li className="clearfix">
                                        <div className="message-data text-right">
                                            <span className="message-data-time">10:10 AM, Today</span>
                                            <img src={require("../../asset/images/xs/avatar2.jpg")} alt="avatar" />
                                        </div>
                                        <div className="message other-message float-right"> Hi Aiden, how are you? How is the project coming along? </div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="message-data">
                                            <span className="message-data-time">10:12 AM, Today</span>
                                        </div>
                                        <div className="message my-message">Are we meeting today?</div>                                    
                                    </li>                               
                                    <li className="clearfix">
                                        <div className="message-data">
                                            <span className="message-data-time">10:15 AM, Today</span>
                                        </div>
                                        <div className="message my-message">Project has been already finished and I have results to show you.</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="chat-message clearfix">
                                <div className="input-group mb-0">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="icon-paper-plane"></i></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Enter text here..." />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default ChatCard
