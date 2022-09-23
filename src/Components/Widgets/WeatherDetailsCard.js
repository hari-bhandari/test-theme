import React from "react";
import ReactEcharts from "echarts-for-react";
import {Carousel} from "react-bootstrap";

class WeatherDetailsCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card weather2">
                        <div className="body city-selected">
                            <div className="row">
                                <div className="col-12">
                                    <div className="city"><span>City:</span> San Francisco</div>
                                    <div className="night">Day - 12:07 PM</div>
                                </div>
                                <div className="info col-7">
                                    <div className="temp"><h2>34°</h2></div>									
                                </div>
                                <div className="icon col-5">
                                    <i className="wi wi-day-cloudy-windy"></i>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped mb-0">
                            <tbody>
                                <tr>
                                <td>Land area</td>
                                <td className="font-medium">121.4 km²</td>
                            </tr>
                            <tr>
                                <td>Humidity</td>
                                <td className="font-medium">73%</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td className="font-medium">25.56 in</td>
                            </tr>
                            <tr>
                                <td>Population</td>
                                <td className="font-medium">8.65 lakhs</td>
                            </tr>
                            <tr>
                                <td>Ceiling</td>
                                <td className="font-medium">25280 ft</td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="carousel slide" data-ride="carousel">
                        <Carousel  className="carousel-inner" indicators={false} controls={false}>
                            
                            <Carousel.Item className="carousel-item text-center carousel-item-next carousel-item-left">
                            <div className="col-12">
                                        <ul className="row days-list list-unstyled">
                                            <li className="day col-4">
                                                <p>Monday</p>
                                                <i className="wi wi-day-hail"></i>
                                            </li>
                                            <li className="day col-4">
                                                <p>Tuesday</p>
                                                <i className="wi wi-day-lightning"></i>
                                            </li>
                                            <li className="day col-4">
                                                <p>Wednesday</p>
                                                <i className="wi wi-day-storm-showers"></i>
                                            </li>
                                        </ul>
                                    </div>   
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item text-center carousel-item-next carousel-item-left">
                                    <div className="col-12">
                                        <ul className="row days-list list-unstyled">
                                            <li className="day col-4">
                                                <p>Thursday</p>
                                                <i className="wi wi-day-hail"></i>
                                            </li>
                                            <li className="day col-4">
                                                <p>Friday</p>
                                                <i className="wi wi-showers"></i>
                                            </li>
                                            <li className="day col-4">
                                                <p>Saturday</p>
                                                <i className="wi wi-day-sunny"></i>
                                            </li>
                                        </ul>
                                    </div>
                            </Carousel.Item>
                            </Carousel>
                            {/* <div className="carousel-inner" role="listbox">
                                <div className="carousel-item text-center carousel-item-next carousel-item-left">
                                                                
                                </div>
                                <div className="carousel-item text-center active carousel-item-left">
                                    
                                </div>							
                            </div> */}
                        </div>
                    </div>
        </div>
    );
  }
}
export default WeatherDetailsCard
