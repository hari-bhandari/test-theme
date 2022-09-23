import React from "react";
import ReactEcharts from "echarts-for-react";

class TotalSaleCard extends React.Component {
  render() {
    return (
        <div className="col-lg-3 col-md-6">
                    <div className="card">                       
                        <div className="body text-center">
                            <h4 className="margin-0">Total Sale</h4>
                            <h6 className="m-b-20">2,45,124</h6>
                            
                            <ReactEcharts
                                    option={ {
                                        title: {
                                            text: '63',
                                            x: 'center',
                                            y: 'center',
                                            textStyle : {
                                                color : 'rgb(33, 33, 33)',
                                                fontFamily : 'Arial',
                                                fontSize : 20,
                                                fontWeight : 'bolder'
                                            }
                                        },
                                        grid: {
                                            top:0,
                                            bottom:0,
                                            right:0,
                                            left:0
                                        },
                                        tooltip : {
                                            show: true,
                                            formatter: function(params, ticket, callback) {
                                                return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#212121;"></span>63';
                                            }
                                        },
                                        series : [
                                            {
                                                type: 'pie',
                                                startAngle: 215,
                                                clockWise: 1,
                                                radius : [38, 50],
                                                itemStyle : {
                                                    normal: {
                                                        label: {show: false},
                                                        labelLine: {show: false}
                                                    }
                                                },
                                                data: [
                                                      {
                                                          value: 45,
                                                          itemStyle :  {
                                                              color: '#212121',
                                                              emphasis : {
                                                                  color: '#212121'
                                                              }
                                                          }
                                                      },
                                                      {
                                                          value: 34,
                                                          itemStyle :  {
                                                              normal: {
                                                                  color: '#EEEEEE',
                                                                  label: {show: false},
                                                                  labelLine: {show: false},
                                                                  tooltip: {show: false}
                                                              },
                                                              emphasis : {
                                                                  color: '#EEEEEE'
                                                              }
                                                          }
                                                      },
                                                      {
                                                          value: 33,
                                                          itemStyle :  {
                                                              normal : {
                                                                  color: 'rgba(0,0,0,0)',
                                                                  label: {show: false},
                                                                  labelLine: {show: false},
                                                                  tooltip: {show: false}
                                                              }
                                                          }
                                                      }
                                                  ]
                                            }
                                        ]
                                      }}
                                        opts={{renderer: 'svg'}}
                                        style={{marginTop:-80,marginBottom:-70}}
                                    />
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
                                                    data: [2,5,4,8,3,9,1,5],
                                                    itemStyle: {
                                                        color: "#9463f7"
                                                    },
                                                    barWidth: "6px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:40,width:90,marginLeft:'35%'}}
                                    />
                            <h6 className="p-b-15">Weekly Earnings</h6>
                            
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
                                                    data: [3,1,5,6,7,8,3,2,1,4,6,5,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4,2,3,1],
                                                    itemStyle: {
                                                        color: "#3e8ef7"
                                                    },
                                                    barWidth: "2px"
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{height:40,marginLeft:'15%',marginRight:'15%'}}
                                    />
                            <h6>Monthly Earnings</h6>
                        </div>
                    </div>
        </div>
    );
  }
}
export default TotalSaleCard;