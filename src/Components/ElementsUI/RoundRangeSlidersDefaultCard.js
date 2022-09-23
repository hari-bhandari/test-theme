import React from "react";
import { CircleSlider } from "react-circle-slider";
import CircularSlider from 'react-circular-slider-svg';

class RoundRangeSlidersDefaultCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: 0,
            value1:10,
            value2:49
         };
    }
 
    handleChange = value => {
        console.log(`Changed value ${value}`);
        this.setState({ value });
    };
 
    handleChangeRange = event => {
        this.setState({
            value: event.target.valueAsNumber,
        });
    };
  render() {
    const { value,value1,value2 } = this.state;
    
    return (
        <div class="card">
                        <div class="header">
                            <h2>Round Range Sliders Default</h2>
                        </div>
                        <div class="body text-center">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <h6>Default</h6>
                                    <div className="rs-ie rs-control rs-animation">
                                    <CircleSlider 
                                    value={40} 
                                    //onChange={this.handleChange}
                                    knobRadius={10}
                                    progressWidth={10}
                                    circleWidth={25}
                                    progressColor="#e9eaee"
                                    showTooltip={true}
                                     />
                                    </div>
                                    
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <h6>Min Range</h6>
                                    <CircleSlider 
                                    value={48} 
                                    //onChange={this.handleChange} 
                                    knobRadius={10}
                                    progressWidth={20}
                                    circleWidth={20}
                                    progressColor="#00ACEE"
                                    showTooltip={true}
                                     />
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <h6>Range</h6>
                                    <CircularSlider
                                    
                                    handle1={{
                                        value: value1,
                                        onChange: v => this.setState({ value1:v })
                                    }}
                                    handle2={{
                                        value: value2,
                                        onChange: v => this.setState({value2:v})
                                    }}
                                    arcColor="#690"
                                    startAngle={0}
                                    endAngle={360}
                                    />
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12">
                                    <h6>startAngle and endAngle</h6>
                                    <CircularSlider
                                    
                                    handle1={{
                                        value: value1,
                                        onChange: v => this.setState({ value1:v })
                                    }}
                                    handle2={{
                                        value: value2,
                                        onChange: v => this.setState({value2:v})
                                    }}
                                    arcColor="#690"
                                    startAngle={180}
                                    endAngle={360}
                                    />
                            </div>
                        </div>
                    </div>
                    </div>
    );
  }
}
export default RoundRangeSlidersDefaultCard
