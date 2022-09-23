import React from "react";
import {ProgressBar} from "react-bootstrap";

class StatisticsServerCard extends React.Component {
  render() {
      const { header,value,per,outOff,barValue,barType} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <div className="row">
                                <div className="col-7">
                                    <h5 className="m-t-0">{header}</h5>
                                    <small className="text-small">{per}</small>
                                </div>
                                <div className="col-5 text-right">
                                    <h2 className="mb-0">{value}</h2>
                                    <small className="info">of {outOff}</small>
                                </div>
                                <div className="col-12">
                                    <div className=" m-t-20">
                                    <ProgressBar variant={barType} now={barValue} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default StatisticsServerCard;
