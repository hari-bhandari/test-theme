import React from "react";
import ReactEcharts from "echarts-for-react";

class PropertiesDetailsCard extends React.Component {
  render() {
      const { header,value,icon} = this.props;
    return (
        <div className="col-lg-3 col-md-6">
            <div className="card top_counter">
                <div className="body">
                    <div className="icon text-info"><i className={icon}></i> </div>
                    <div className="content">
                        <div className="text">{header}</div>
                        <h5 className="number">{value}</h5>
                    </div>
                </div>                        
            </div>
        </div>
    );
  }
}
export default PropertiesDetailsCard;
