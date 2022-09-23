import React from "react";

class BlogSearchCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="body search">
                            <div className="input-group mb-0">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="icon-magnifier"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Search..." />
                            </div>
                        </div>
        </div>
    
    );
  }
}
export default BlogSearchCard
