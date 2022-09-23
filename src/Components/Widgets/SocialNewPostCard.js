import React from "react";
import ReactEcharts from "echarts-for-react";

class SocialNewPostCard extends React.Component {
  render() {
    return (
        
        <div className="card">
            <div className="header">
                <h2>New Post</h2>
            </div>
            <div className="body">
                <div className="form-group">
                    <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                </div>
                <div className="align-right">
                    <button className="btn btn-warning mr-1"><i className="icon-paper-clip text-light"></i></button>
                    <button className="btn btn-warning mr-1"><i className="icon-camera text-light"></i></button>
                    <button className="btn btn-primary">Post</button>
                </div>
            </div>
        </div>
    );
  }
}
export default SocialNewPostCard
