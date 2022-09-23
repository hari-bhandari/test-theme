import React from "react";
import ReactEcharts from "echarts-for-react";

class PopularCryptocurrency extends React.Component {
  render() {
      const { currency,value,icon } = this.props;
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Popular Cryptocurrency <small>15% High then last month</small></h2>
                        </div>
                        <div className="body text-center">                            
                            <div className="Popular_Cryptocurrency">
                            <ReactEcharts
            
                                    option={{
                                    color:['rgb(89, 196, 188)','rgb(99, 122, 174)','rgb(76, 197, 188)','rgb(47, 170, 161)'],
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{b}:{d}%'
                                    },
                                    grid:{
                                        top:-250,
                                        bottom:'10%'
                                    },
                                    series: [
                                        {
                                            type: 'pie',
                                            radius: '55%',
                                            center: ['50%', '60%'],
                                            label:{
                                                fontSize: '10',
                                                            position: 'inner',
                                                            formatter: '{d}%',
                                                            color:'#fff  '
                                            }, 
                                            data: [
                                                {value: 44.4, name: '8'},
                                                {value: 33.3, name: '6'},
                                                {value: 22.2, name: '4'}
                                            ],
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}} 
                                    />
                            </div>                            
                        </div>
                        <div className="body">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={require("../../asset/images/coin/BTC.svg")} width="35" />
                                            </td>
                                            <td>
                                                <small>Bitcoin BTC</small>
                                                <h5 className="mb-0">0.00015434</h5>
                                            </td>
                                            <td>
                                                
                                            <ReactEcharts
                                                    option={{
                                                        tooltip: {
                                                            axisPointer: {
                                                                type: 'shadow'
                                                            }
                                                        },
                                                        grid: {
                                                            top:-5,
                                                            bottom:0,
                                                            right:0,
                                                            left:0
                                                        },
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                axisLine: {
                                                                    show: false
                                                                },
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
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [0,3,5,6,7,0,7,4,6,0],
                                                                itemStyle: {
                                                                    color: "#393c3e"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                            {
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [-2,0,0,0,0,-8,0,0,0,-5],
                                                                itemStyle: {
                                                                    color: "#db2a0b"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                        ]
                                                      }}
                                                        opts={{renderer: 'svg'}} // use svg to render the chart.
                                                        style={{height:"30px", width:"100px", marginLeft:0,bottom:0}}
                                                        />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={require("../../asset/images/coin/neo.svg")} width="35" />
                                            </td>
                                            <td>
                                                <small>Neo NEO</small>
                                                <h5 className="mb-0">0.00000015</h5>
                                            </td>
                                            <td>
                                            <ReactEcharts
                                                    option={{
                                                        tooltip: {
                                                            axisPointer: {
                                                                type: 'shadow'
                                                            }
                                                        },
                                                        grid: {
                                                            top:-5,
                                                            bottom:0,
                                                            right:0,
                                                            left:0
                                                        },
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                axisLine: {
                                                                    show: false
                                                                },
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
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [8,5,0,2,2,3,0,0,0,5],
                                                                itemStyle: {
                                                                    color: "#393c3e"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                            {
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [0,0,-3,0,0,0,-5,-6,-7,0],
                                                                itemStyle: {
                                                                    color: "#db2a0b"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                        ]
                                                      }}
                                                        opts={{renderer: 'svg'}} // use svg to render the chart.
                                                        style={{height:"30px", width:"100px", marginLeft:0,bottom:0}}
                                                        />

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={require("../../asset/images/coin/DASH.svg")} width="35" />
                                            </td>
                                            <td>
                                                <small>Dash DASH</small>
                                                <h5 className="mb-0">0.00000952</h5>
                                            </td>
                                            <td>
                                            <ReactEcharts
                                                    option={{
                                                        tooltip: {
                                                            axisPointer: {
                                                                type: 'shadow'
                                                            }
                                                        },
                                                        grid: {
                                                            top:-5,
                                                            bottom:0,
                                                            right:0,
                                                            left:0
                                                        },
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                axisLine: {
                                                                    show: false
                                                                },
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
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [0,0,4,6,5,5,0,3,4,0],
                                                                itemStyle: {
                                                                    color: "#393c3e"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                            {
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: [-6,-5,0,0,0,0,-2,0,0,-3],
                                                                itemStyle: {
                                                                    color: "#db2a0b"
                                                                },
                                                                barWidth: "4px"
                                                            },
                                                        ]
                                                      }}
                                                        opts={{renderer: 'svg'}} // use svg to render the chart.
                                                        style={{height:"30px", width:"100px", marginLeft:0,bottom:0}}
                                                        />


                                            </td>
                                        </tr>                                 
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default PopularCryptocurrency
