import React from "react";
import ReactEcharts from "echarts-for-react";

class Weather5Card extends React.Component {
  render() {
    return (
        <div className="card weather5">
                        <div className="widget">
                            <div className="weatherIcon"><i className="wi wi wi-day-cloudy"></i></div>
                            <div className="weatherInfo">
                                <div className="temperature"><span>25°</span></div>
                                <div className="description">    
                                    <div className="weatherCondition">CLOUDY</div>    
                                    <div className="place">New York, USA</div>
                                </div>
                            </div>
                            <div className="date primary-bg">1st Jun</div>
                        </div>
                    </div>
    );
  }
}
export default Weather5Card
