import React from "react";
import ReactEcharts from "echarts-for-react";

class VisitTrafficCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Visit By Traffic Types <small>8% High then last month</small></h2>
                        </div>
                        <div className="body text-center">                            
                        <ReactEcharts
                                    option={
                                        {
                                            color:['#6f42c1','#17a2b8','#20c997'],
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
                                            series:[
                                                {
                                                    type: 'pie',
                                                    startAngle: 70,
                                                    radius: '100%',
                                                    center: ['50%', '60%'],
                                                    label:{
                                                        show:false,
                                                        fontSize: '10',
                                                        position: 'inner',
                                                        formatter: '{d}%',
                                                        color:'#fff  '
                                                    }, 
                                                    data: [
                                                        {value: 44.4, name: '8'},
                                                        {value: 33.3, name: '6'},
                                                        {value:22.2, name: '4'}
                                                    ],
                                                }
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{marginLeft:'30%',marginRight:'30%',marginTop:-70,marginBottom:-50}}
                                    />
                        </div>
                        <div className="body">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <small>Page Views</small>
                                                <h5 className="mb-0">32,211,536</h5>
                                            </td>
                                            <td>
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
                                                    data: [2,3,5,6,9,8,7,8,7,4,6,5],
                                                    itemStyle: {
                                                        color: "#11a0f8"
                                                    },
                                                    barWidth: "4px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'30%',width:150}}
                                    />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <small>Site Visitors</small>
                                                <h5 className="mb-0">23,516</h5>
                                            </td>
                                            <td>
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
                                                    data: [8,5,3,2,2,3,5,6,4,5,7,5],
                                                    itemStyle: {
                                                        color: "#11a0f8"
                                                    },
                                                    barWidth: "4px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'30%',width:150}}
                                    />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <small>Total Clicks</small>
                                                <h5 className="mb-0">4,536</h5>
                                            </td>
                                            <td>
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
                                                    data: [6,5,4,6,5,5,2,3,1,8,4,2],
                                                    itemStyle: {
                                                        color: "#11a0f8"
                                                    },
                                                    barWidth: "4px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:'30%',width:150}}
                                    />
                                            </td>
                                        </tr>                                 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default VisitTrafficCard;