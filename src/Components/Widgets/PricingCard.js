import React from "react";

class PricingCard extends React.Component {
  render() {
    return (
        <div className="card pricing2">
                        <div className="body">
                            <div className="pricing-plan">
                                <img src={require("../../asset/images/space-ship.png")} alt="" className="pricing-img" />
                                <h2 className="pricing-header">Ultima</h2>
                                <ul className="pricing-features">
                                    <li>Responsive Design</li>
                                    <li>Color Customization</li>
                                    <li>HTML5 &amp; CSS3</li>
                                    <li>Styled elements</li>
                                </ul>
                                <span className="pricing-price">$349</span>
                                <a href="javascript:void(0);" className="btn btn-outline-primary">Join Now</a>
                                </div>
                        </div>
                    </div>
    );
  }
}
export default PricingCard;