import React from "react";
import ReactEcharts from "echarts-for-react";

class Weather6Card extends React.Component {
  render() {
    return (
        <div className="card weather6 l-amber">
                        <div className="body">
                            <div className="p-15">
                                <div className="temp">27°<span>C</span>
                                    <i className="wi wi-day-cloudy-windy"></i>
                                </div>
                            </div>
                            <p>Saturday 12 May</p>
                        </div>
                    </div>
    );
  }
}
export default Weather6Card
