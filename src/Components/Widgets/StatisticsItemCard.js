import React from "react";

class StatisticsItemCard extends React.Component {
  render() {
      const { header,value,back} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className={`card text-center ${back}`}>
                        <div className="body">
                            <div className="p-15 text-light">
                                <h3>{value}</h3>
                                <span>{header}</span>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default StatisticsItemCard;
