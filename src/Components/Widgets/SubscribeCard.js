import React from "react";

class SubscribeCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Subscribe</h2>
                        </div>
                        <div className="body">
                            <form>
                                <div className="form-group">
                                    <input type="text" value="" placeholder="Enter Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <input type="text" value="" placeholder="Enter Email" className="form-control" />
                                </div>
                                <button className="btn btn-primary">Subscribe</button>
                            </form>
                        </div>
                    </div>
    );
  }
}
export default SubscribeCard;
