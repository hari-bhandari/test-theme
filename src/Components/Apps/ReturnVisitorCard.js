import React from "react";
import ReactEcharts from "echarts-for-react";

class ReturnVisitorCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Return Visitor Information</h2>
                <ul className="header-dropdown">
                    <li><a href="#" title=""><i className="fa fa-envelope"></i></a></li>
                    <li><a href="#" title=""><i className="fa fa-download"></i></a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another Action</a></li>
                            <li><a href="#">Something else</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <ReactEcharts
                        option={{
                            color: ['rgb(89, 196, 188)','rgba(99,122,174,1)'],
                            tooltip: {
                                trigger: 'axis',
                                // axisPointer: {
                                //     type: 'shadow'
                                // },
                                formatter: '{b} <br/>{a}: ${c} thousands'
                                //`<div className="apexcharts-tooltip light" style="left: 191.673px; top: 15px;">{b}<div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">{a}</div><div className="apexcharts-tooltip-series-group active" style="display: flex;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(99, 122, 174);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label">New: </span><span className="apexcharts-tooltip-text-value">$ 114 thousands</span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="display: none;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(99, 122, 174);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label">New: </span><span className="apexcharts-tooltip-text-value">$ {c} thousands</span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div>`
                            },
                            toolbox: {
                                show: false,
                               
                            },
                            grid:{
                                top:30
                            },
                            legend:{
                                top:'90%'
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {
                                        show: true,
                                        lineStyle: {
                                            color: '#78909c'
                                          }
                                    },
                                    axisLabel:{
                                        
                                        color: 'grey'
                                    },
                                    axisLine:{
                                        lineStyle:{
                                        color: '#78909c'
                                        }
                                    },
                                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct'],
                                }
                            ],
                            yAxis: [
                                {
                                    show:true,
                                    type: 'value',
                                    axisTick: {show: false},
                                    axisLabel:{
                                        
                                        color: 'grey'
                                    },
                                }
                            ],
                            series: [
                                {
                                    name: 'Return',
                                    type: 'bar',
                                    barWidth:9,    
                                    data: [44,55,57,56,61,58,63,60,66]
                                },
                                {
                                    name: 'View',
                                    type: 'bar',
                                    barWidth:9, 
                                    data: [76,85,110,98,87,105,91,114,94]
                                },
                                
                            ]
                        }}
                          opts={{renderer: 'svg'}} // use svg to render the chart.
                            
                        />
        </div>
    </div>
    
    );
  }
}
export default ReturnVisitorCard
