import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class BTCCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
        <div className="card overflowhidden w_bitcoin">
            <div className="body">
                <small>BTC</small>
                <h2>0.0115</h2>
                <h6>Bitcoin Earnings</h6>
                <p>It is a long established fact that<br/> a reader will be distracted <br/> by the readable</p>
                <button className="btn btn-primary btn-simple ">View Statements </button>
            </div>
            <ReactEcharts
                                    option={
                                        {
                                            tooltip: {
                                                axisPointer: {
                                                    type: 'shadow',
                                                }
                                            },
                                            grid: {
                                                top:0,
                                                right:0,
                                                left:0,
                                                bottom: '3%',
                                            },
                                            xAxis: [
                                                {
                                                    type: 'category',
                      
                                                    axisLine: {
                                                        show: false
                                                    },
                                                    axisLabel: {
                      
                                                        textStyle: {
                                                            color: "#C2C2C2",
                                                        },
                                                    }
                                                }
                                            ],
                                            yAxis: [
                                                {
                                                    type: 'value',
                                                    splitLine: {show:false},
                                                    axisLine: {
                                                        show:false
                                                    },
                                                    axisLabel: {
                                                      show:false,
                                                    }
                                                }
                                            ],
                                            series: [
                                                {
                                                    name: 'Mobile',
                                                    type: 'line',
                                                    stack: 'Gedgets',
                                                    data: [1,2,9,6,9,19,25,45],
                                                    itemStyle: {
                                                        color: "#8BCEC9"
                                                    },
                                                    areaStyle:{
                                                        color: "#8BCEC9",
                                                      },
                                                    barWidth: "6px"
                                                },
                                                {
                                                    name: 'Mobile',
                                                    type: 'line',
                                                    stack: 'Gedgets',
                                                    data: [1,1,3,5,7,10,24,15],
                                                    itemStyle: {
                                                        color: "#6f42c1"
                                                    },
                                                    areaStyle:{
                                                        color: "#6f42c1",
                                                      },
                                                    barWidth: "6px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{bottom:-15,marginRight:-60,marginLeft:-55,top:0}}
                                    />
        </div>
    </div>
    );
  }
}
export default BTCCard;