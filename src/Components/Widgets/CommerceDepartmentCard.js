import React from "react";
import ReactEcharts from "echarts-for-react";

class CommerceDepartmentCard extends React.Component {
  render() {
    return (
        <div className="card">
        <div className="header">
            <h2>Commerce Department</h2>
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
                                                    type: 'bar',
                                                    stack: 'Gedgets',
                                                    data: [2,8,3,4,6,2,3,9,7,6,5,2,8],
                                                    itemStyle: {
                                                        color: "#02b5b2"
                                                    },
                                                    barWidth: "8px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'90%',marginLeft:'15%',marginRight:'15%'}}
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
export default CommerceDepartmentCard;