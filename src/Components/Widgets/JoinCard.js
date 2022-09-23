import React from "react";

class JoinCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <ul className="pricing body">
                            <li><big>Start</big></li>
                            <li>Responsive Design</li>
                            <li>Color Customization</li>
                            <li>HTML5 &amp; CSS3</li>
                            <li>Styled elements</li>
                            <li>
                                <h3>$199</h3>
                                <span>per month</span>
                            </li>
                            <li><button className="btn btn-outline-secondary">Join Now</button></li>
                        </ul>
                    </div>
    );
  }
}
export default JoinCard;