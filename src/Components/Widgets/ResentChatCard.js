import React from "react";

class ResentChatCard extends React.Component {
  render() {
    return (
        <div className="card">
        <div className="header">
            <h2>Resent Chat</h2>
            <ul className="header-dropdown">
                <li className="dropdown">
                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                    <ul className="dropdown-menu dropdown-menu-right" >
                        <li><a href="javascript:void(0);">Action</a></li>
                        <li><a href="javascript:void(0);">Another Action</a></li>
                        <li><a href="javascript:void(0);">Something else</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div className="body text-center">
            <div className="cwidget-scroll">
                <ul className="chat-widget m-r-5 clearfix">
                    <li className="left float-left">
                        <img src="assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                        <div className="chat-info">       
                            <span className="message">Hello, John<br/>What is the update on Project X?</span>
                        </div>
                    </li>
                    <li className="right">
                        <img src="assets/images/xs/avatar1.jpg" className="rounded-circle" alt="" />
                        <div className="chat-info">
                            <span className="message">Hi, Alizee<br/> It is almost completed. I will send you an email later today.</span>
                        </div>
                    </li>
                    <li className="left float-left">
                        <img src="assets/images/xs/avatar2.jpg" className="rounded-circle" alt="" />
                        <div className="chat-info">
                            <span className="message">That's great. Will catch you in evening.</span>
                        </div>
                    </li>
                    <li className="right">
                        <img src="assets/images/xs/avatar1.jpg" className="rounded-circle" alt="" />
                        <div className="chat-info">
                            <span className="message">Sure we'will have a blast today.</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="input-group p-t-15">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="icon-paper-plane"></i></span>
                </div>
                <input type="text" className="form-control" placeholder="Enter text here..." />
            </div>
        </div>
    </div>
    );
  }
}
export default ResentChatCard;
