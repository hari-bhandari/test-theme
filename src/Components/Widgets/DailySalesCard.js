import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class DailySalesCard extends React.Component {
  render() {
    return (
        <div className="card overflowhidden bg-info">
                        <div className="body">
                            <h6 className="text-light">Daily Sales</h6>
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
                                                    type: 'bar',
                                                    stack: 'Gedgets',
                                                    data: [7,5,4,6,5,5,2,3,1,8,4,2,5,6,5,2,6,7,3,5,7,6,4,5,8,2,3,6,8,2,5,6,9,5,9,8,9],
                                                    itemStyle: {
                                                        color: "#fff"
                                                    },
                                                    barWidth: "7px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'70%'}}
                                    />
                    </div>
    );
  }
}
export default DailySalesCard;