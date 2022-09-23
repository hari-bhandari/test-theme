import React from "react";
import { CircleSlider } from "react-circle-slider";

class RoundRangeSlidersCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Round Range Sliders <small>Different Theming and Appearances</small></h2>
                        </div>
                        <div class="body text-center">
                            <div class="row">                                
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <CircleSlider 
                                        value={28} 
                                        //onChange={this.handleChange}
                                        knobRadius={10}
                                        progressWidth={15}
                                        circleWidth={15}
                                        progressColor="#637AAE"
                                        knobColor="#000"
                                        showTooltip={true}
                                        />
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <CircleSlider 
                                        value={80} 
                                        //onChange={this.handleChange}
                                        knobRadius={21}
                                        progressWidth={15}
                                        circleWidth={15}
                                        progressColor="#fd7e14"
                                        knobColor="#fff"
                                        showTooltip={true}
                                        />
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <CircleSlider 
                                        value={47} 
                                        //onChange={this.handleChange}
                                        knobRadius={8}
                                        progressWidth={8}
                                        circleWidth={8}
                                        progressColor="#000"
                                        knobColor="#fff"
                                        showTooltip={true}
                                        />
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <CircleSlider 
                                        value={40} 
                                        //onChange={this.handleChange}
                                        knobRadius={8}
                                        progressWidth={8}
                                        circleWidth={8}
                                        progressColor="#00ACEE"
                                        knobColor="#e9eaee"
                                        showTooltip={true}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default RoundRangeSlidersCard
