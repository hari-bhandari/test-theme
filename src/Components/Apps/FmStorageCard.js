import React from "react";
import {ProgressBar} from "react-bootstrap";

class FmStorageCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="body">
                            <h4>1TB <i className="fa fa-server float-right"></i></h4>
                            <p className="mb-0">Storage <small className="text-muted float-right">of 1Tb</small></p>                            
                            
                                <ProgressBar striped variant="warning" now={43} label={'43%'} />
                            
                        </div>
        </div>
    );
  }
}
export default FmStorageCard;
