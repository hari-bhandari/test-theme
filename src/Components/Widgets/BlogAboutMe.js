import React from "react";

class BlogAboutMe extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>About Me</h2>
                        </div>
                        <div className="body text-center">
                            <div className="profile-image m-b-15"> <img src={require("../../asset/images/user.png")} className="rounded-circle" alt="" /> </div>
                            <div>
                                <h4 className="mb-0"><strong>Alizee</strong> Thomas</h4>
                                <span>Washington, d.c.</span>
                            </div>
                            <div className="m-t-15">
                                <button className="btn btn-primary mr-1">Follow</button>
                                <button className="btn btn-outline-secondary">Message</button>
                            </div>                            
                        </div>
                    </div>
    );
  }
}
export default BlogAboutMe
