import React from "react";

class BlogVisitorsStatisticsCard extends React.Component {
  render() {
    return (
        <div className="col-xl-7 col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Visitors Statistics</h2>
                        </div>
                        <div className="body">
                            <div className="row">
                                <div className="col-6">
                                    <small>Page Views</small>
                                    <h4 className="mb-0">32,211,536</h4>
                                </div>
                                <div className="col-6">
                                    <small>Site Visitors</small>
                                    <h4 className="mb-0">23,516</h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>                
         </div>
    
    );
  }
}
export default BlogVisitorsStatisticsCard
