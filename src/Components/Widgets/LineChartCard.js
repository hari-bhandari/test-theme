import React from "react";
import ReactEcharts from "echarts-for-react";

class LineChartCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Line Chart</h2>
                        </div>
                        <div className="body text-center">                            
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
                                                    data: [1,8,2,5,6,7,3,4,1,9,3,7,2],
                                                    itemStyle: {
                                                        color: "#b089ff"
                                                    },
                                                    areaStyle:{
                                                        color: "#ebe1ff",
                                                      },
                                                    barWidth: "6px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'80%'}}
                                    />
                            <hr/>
                            <div className="row">
                                <div className="col-4">
                                    <p className="mb-0">TYPE A</p>
                                    <h6>320</h6>
                                </div>
                                <div className="col-4">
                                    <p className="mb-0">TYPE B</p>
                                    <h6>530</h6>
                                </div>
                                <div className="col-4">
                                    <p className="mb-0">TYPE C</p>
                                    <h6>300</h6>
                                </div>
                            </div>
                        </div>
        </div>
    );
  }
}
export default LineChartCard;