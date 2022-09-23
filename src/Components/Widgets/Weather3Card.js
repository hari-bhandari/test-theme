import React from "react";
import ReactEcharts from "echarts-for-react";

class Weather3Card extends React.Component {
  render() {
    return (
        <div className="card weather3">
                        <div className="top">
                            <div className="wrapper">
                                <h2 className="heading">Clear night</h2>
                                <h3 className="location">New York, USA</h3>
                                <p className="temp">
                                    <span className="temp-value">23</span>
                                    <span className="deg">0</span>
                                    <a href="javascript:void(0);"><span className="temp-type">C</span></a>
                                </p>
                            </div>
                        </div>
                        <div className="bottom">
                            <ul className="forecast">
                                <li className="active">
                                    <span className="date">Yesterday</span>
                                    <span className="wi wi-day-hail condition">
                                        <span className="temp">23<span className="deg">0</span><span className="temp-type">C</span></span>
                                    </span>
                                </li>
                                <li>
                                    <span className="date">Tomorrow</span>
                                    <span className="wi wi-day-hail condition">
                                        <span className="temp">21<span className="deg">0</span><span className="temp-type">C</span></span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
    );
  }
}
export default Weather3Card
