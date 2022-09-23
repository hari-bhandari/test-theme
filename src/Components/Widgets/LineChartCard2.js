import React from "react";
import ReactEcharts from "echarts-for-react";

class LineChartCard2 extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="body">
                        <ReactEcharts
                                    option={
                                        {
                                            tooltip: {
                                                axisPointer: {
                                                    type: 'shadow',
                                                }
                                            },
                                            grid: {
                                                top:15,
                                                right:0,
                                                left:'5%',
                                                bottom: '8%',
                                            },
                                            xAxis: [
                                                {
                                                    type: 'category',
                      
                                                    axisLine: {
                                                        show:false
                                                    },
                                                    splitLine: {show:false},
                                                    axisLabel: {
                                                            show:true,
                                                    },
                                                    data:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                                                }
                                            ],
                                            yAxis: [
                                                {
                                                    type: 'value',
                                                    min:200,
                                                    max:900,
                                                    interval:100,
                                                    splitLine: {show:true,
                                                    },
                                                    axisLine: {
                                                        show:false
                                                    },
                                                    axisLabel: {
                                                      show:true,
                                                    },
                                                }
                                            ],
                                            series: [
                                                {
                                                    name: 'Mobile',
                                                    smooth:0.3,
                                                    type: 'line',
                                                    stack: 'Gedgets',
                                                    data: [200,390,350,310,410,450,580,400,570,610,770,900],
                                                    itemStyle: {
                                                        color: "#6ebdd1"
                                                    },
                                                    symbol: 'circle',
                                                    symbolSize:10,
                                                    itemStyle: {
                                                        color: '#6ebdd1'
                                                    },
                                                    lineStyle:{
                                                        width:3
                                                    }
                                                },
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                    />                
                        </div>
        </div>
    );
  }
}
export default LineChartCard2;