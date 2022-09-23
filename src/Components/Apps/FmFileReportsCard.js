import React from "react";
import ReactEcharts from "echarts-for-react";

class FmFileReportsCard extends React.Component {
  render() {
    return (
        <div className="col-lg-9 col-md-7 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>File Reports</h2>                            
                        </div>
                        <div className="body">
                        <ReactEcharts
                        option={
                            {
                                tooltip: {
                                    trigger: 'axis',
                                },
                                grid: {
                                    top:"4%",
                                    left: '1%',
                                    right: '2%',
                                    bottom: '3%',
                                    containLabel: true
                                },

                                xAxis: [
                                    {
                                        type: 'category',
                                         boundaryGap: false,
                                        data: [2011,2012,2013,2014,2015,2016,2017],
                                        axisLine: {
                                          show:false,
                                        },
                                        axisTick:{show:false},
                                          axisLabel: {
                                              textStyle: {
                                                  color: "#a9a9a9",
                                              },
                                          }
                                    }
                                ],
                                yAxis: [
                                    {
                                        type: 'value',
                                        splitLine: {show:false},
                                        splitLine: {
                                            show:true,
                                            lineStyle:{
                                                opacity:0.3
                                            }
                                        },
                                        interval:15,
                                        axisTick:{show:false},
                                        axisLine: {
                                          show:false,},
                                          axisLabel: {
                                              formatter: function (value, index) {
                                                  if (value > 0) {
                                                      return (value);
                                                  } else {
                                                      return 0;
                                                  }
                                              },
                                              textStyle: {
                                                  color: "#a9a9a9",
                                              }
                                          }
                              
                              
                                    }
                                ],
                                series: [
                                    {
                                        type: 'line',
                                        name:"Documents",
                                        data: [0,22,10,27,17,39,20],
                                        itemStyle: {
                                          color: "#38ade8",
                                        },
                                        lineStyle:{
                                            width:1.2
                                        },
                                        symbolSize: 4 ,
                                        smooth: true,
                                        areaStyle: {
                                          opacity:0.2
                                        }
                              
                              
                                    },
                                    {
                                        type: 'line',
                                        name:'Media',
                                        data: [0,12,1,12,9,51,9],
                                        itemStyle: {
                                            color: "#d9c5f8",
                                        },
                                        symbolSize: 4,
                                        smooth: true,
                                        areaStyle: {
                              
                                          opacity:0.2
                                        },
                                        lineStyle:{
                                            width:1.2
                                        },
                                    },
                                    {
                                        type: 'line',
                                        name:'Images',
                                        data: [7,5,23,2,26,9,21],
                                        itemStyle: {
                                            color: "#92c635",
                                        },
                                        lineStyle:{
                                            width:1.2
                                        },
                                        symbolSize: 4 ,
                                        smooth: true,
                                        areaStyle: {
                              
                                          opacity:0.2
                                        }
                                    },
                                ]
                              }
                        }
                        opts={{renderer: 'svg'}} // use svg to render the chart.
                        style={{height:"350px"}}
                       />
                        </div>
                    </div>
        </div>
    );
  }
}
export default FmFileReportsCard;
