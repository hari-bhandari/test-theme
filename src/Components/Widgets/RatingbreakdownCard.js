import React from "react";
import {ProgressBar} from "react-bootstrap";

class RatingbreakdownCard extends React.Component {
  render() {
    return (
        <div className="card average_rating">
                                <div className="header">
                                    <h2>Rating breakdown</h2>
                                </div>
                                <div className="body clearfix">
                                    <div className="d-flex">
                                        <div className="mr-2">
                                            <div>5 <span className="icon-star"></span></div>
                                        </div>
                                        <div className="flex-grow-1 mr-2" >
                                            
                                            
                                            <ProgressBar now={100} className="mt-2" variant="success" style={{height:9}} />    
                                            
                                        </div>
                                        <div >1</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="mr-2">
                                            <div >4 <span className="icon-star"></span></div>
                                        </div>
                                        <div className="flex-grow-1 mr-2" >
                                        <ProgressBar now={80} className="mt-2"  style={{height:9}} />  
                                        </div>
                                        <div >1</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="mr-2">
                                            <div>3 <span className="icon-star"></span></div>
                                        </div>
                                        <div className="flex-grow-1 mr-2">
                                        <ProgressBar now={60} className="mt-2" variant="info" style={{height:9}} />  
                                        </div>
                                        <div >0</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="mr-2">
                                            <div>2 <span className="icon-star"></span></div>
                                        </div>
                                        <div className="flex-grow-1 mr-2" >
                                        <ProgressBar now={40} className="mt-2" variant="warning" style={{height:9}} />  
                                        </div>
                                        <div >0</div>
                                    </div>
                                    <div className="d-flex mt-2">
                                        <div className="mr-2">
                                            <div >1 <span className="icon-star"></span></div>
                                        </div>
                                        <div className="flex-grow-1 mr-2" >
                                        <ProgressBar now={20} className="mt-2" variant="danger" style={{height:9}} />  
                                        </div>
                                        <div>0</div>
                                    </div>
                                </div>
                            </div>
    );
  }
}
export default RatingbreakdownCard
