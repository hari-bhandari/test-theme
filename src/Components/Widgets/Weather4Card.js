import React from "react";
import ReactEcharts from "echarts-for-react";

class Weather4Card extends React.Component {
  render() {
    return (
        <div className="card weather4">
                        <div className="body">
                            <div className="row">
                                <div className="col-6">
                                    <i className="wi wi-day-sunny"></i>
                                    <p>City</p>
                                </div>
                                <div className="col-6 text-right">
                                    <h3 className="">27° <span>C</span> </h3>
                                    <span>Fri 20/5</span>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default Weather4Card
