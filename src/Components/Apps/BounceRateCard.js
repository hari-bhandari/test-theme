import React from "react";
import ReactEcharts from "echarts-for-react";

class BounceRateCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Bounce Rate</h2>
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
                                //`<div className="apexcharts-tooltip light" style="left: 191.673px; top: 15px;">{b}<div className="apexcharts-tooltip-title" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">{a}</div><div className="apexcharts-tooltip-series-group active" style="display: flex;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(99, 122, 174);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label">New: </span><span className="apexcharts-tooltip-text-value">$ 114 thousands</span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div><div className="apexcharts-tooltip-series-group" style="display: none;"><span className="apexcharts-tooltip-marker" style="background-color: rgb(99, 122, 174);"></span><div className="apexcharts-tooltip-text" style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-label">New: </span><span className="apexcharts-tooltip-text-value">$ {c} thousands</span></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label"></span><span className="apexcharts-tooltip-text-z-value"></span></div></div></div></div>`
                            },
                            toolbox: {
                                show: false,
                               
                            },
                            grid:{
                                top:40,
                                right:'5%'
                            },
                            legend:{
                                top:'90%'
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {show: true}
                                }
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
                                        formatter: 'jan {value}',
                                        color: 'grey'
                                    },
                                    axisLine:{
                                        lineStyle:{
                                        color: '#78909c'
                                        }
                                    },
                                    axisPointer: {
                                        type: 'shadow'
                                    },
                                    data: ['01','02','03','04','05','06','07','08','09','10','11','12'],
                                }
                            ],
                            yAxis: [
                                {
                                    show:true,
                                    type: 'value',
                                    min: 0,
                                    max: 800,
                                    interval:100,
                                    axisTick: {show: false},
                                    axisLabel:{
                                        
                                        color: 'grey'
                                    },
                                },
                                {
                                    show:true,
                                    type: 'value',
                                    min: 0,
                                    max: 50,
                                    interval:10,
                                    axisTick: {show: false},
                                    axisLabel:{
                                        
                                        color: 'grey'
                                    },
                                }

                            ],
                            series: [
                                {
                                    name: 'Website Blog',
                                    type: 'bar',   
                                    data: [440,505,414,671,227,413,201,372,752,320,257,160]
                                },
                                {
                                    name: 'Scocial Media',
                                    type: 'line',
                                    yAxisIndex: 1,
                                    data: [23,42,35,27,43,22,17,31,22,22,12,16]
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
export default BounceRateCard
