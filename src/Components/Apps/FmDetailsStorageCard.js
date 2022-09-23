import React from "react";
import {ProgressBar} from "react-bootstrap";

class FmDetailsStorageCard extends React.Component {
  render() {
      const {usedSpace,name,per,color} = this.props
    return (
        <div className="card modal-open m-b-5">
                        <div className="body">
                            <h6>{usedSpace}GB</h6>
                            <p className="mb-0">{name} <small className="text-muted float-right">of 1Tb</small></p>
                        </div>
                        <ProgressBar now={per} className={`progress progress-xs progress-transparent custom-color-${color}`} />
        </div>
    );
  }
}
export default FmDetailsStorageCard;
