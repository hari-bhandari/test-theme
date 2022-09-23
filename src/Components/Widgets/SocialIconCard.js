import React from "react";

class SocialIconCard extends React.Component {
  render() {
      const {icon,header,value,classV} = this.props;
    return (
        <div className="col-lg-4 col-md-4 col-6">
                    <div className={`card ${classV}`}>
                        <div className="icon"><i className={icon}></i></div>
                        <div className="content">
                            <div className="text">{header}</div>
                            <div className="number">{value}</div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default SocialIconCard
