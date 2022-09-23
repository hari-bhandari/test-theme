import React from "react";

class EmailNewsletterCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Email Newsletter <small>Get our products/news earlier than others, let’s get in touch.</small></h2>
                        </div>
                        <div className="body widget newsletter">                        
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter Email"/>
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="icon-paper-plane"></i></span>
                                </div>
                            </div>
                        </div>
        </div>
    
    );
  }
}
export default EmailNewsletterCard
