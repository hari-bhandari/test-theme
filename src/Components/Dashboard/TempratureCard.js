import React from "react";
import AcImage from "../../asset/images/air-conditioner.png";//"../../assets/images/air-conditioner.png";
import FridgeImage from "../../asset/images/fridge.png";
import WmImage from "../../asset/images/washing-machine.png";


class TempratureCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card appliances-grp">
                        <div className="body clearfix">
                            <div className="icon"><img alt="" src={AcImage} /></div>
                            <div className="content">
                                <h6>Air Conditioner <span className="text-success">On</span></h6>
                                <p>Temprature <span className="text-warning">25° C</span></p>
                                <p>Status <span className="text-warning">Cooling On</span></p>
                            </div>
                        </div>
                        <div className="body clearfix">
                            <div className="icon"><img alt="" src={FridgeImage} /></div>
                            <div className="content">
                                <h6>Fridge <span className="text-success">On</span></h6>
                                <p>Temprature <span className="text-primary">10° C</span></p>
                                <p>Status <span className="text-success">Stand By</span></p>
                            </div>
                        </div>
                        <div className="body clearfix">
                            <div className="icon"><img alt="" src={WmImage} /></div>
                            <div className="content">
                                <h6>Washing Machine <span className="text-success">On</span></h6>
                                <p>Remaining Time <span className="text-primary">01:23:21</span></p>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default TempratureCard
