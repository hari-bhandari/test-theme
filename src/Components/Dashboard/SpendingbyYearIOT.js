import React from "react";
import ReactEcharts from "echarts-for-react";


class SpendingbyYearIOT extends React.Component {
  render() {
    return (
        <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>Spending by Year</h2>
                            <ul className="header-dropdown">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                        <ReactEcharts
                        option={{
                            color: ['rgb(89, 196, 188)','rgb(47, 170, 161)', 'rgb(99, 122, 174)'],
                            tooltip: {
                                trigger: 'axis',
                                axisPointer: {
                                    type: 'shadow'
                                }
                            },
                            toolbox: {
                                show: false,
                               
                            },
                            xAxis: [
                                {
                                    type: 'category',
                                    axisTick: {show: true,
                                        lineStyle: {
                                            color: 'rgb(89, 196, 188)'
                                          }
                                    },
                                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nav','Dec'],
                                }
                            ],
                            yAxis: [
                                {
                                    show:false,
                                    type: 'value',
                                    axisTick: {show: false},
                                }
                            ],
                            series: [
                                {
                                    name: 'Electricity',
                                    type: 'bar',
                                    barGap: 0,
                                    data: [11,8,22,18,19,12,17,22,18,32,9,12]
                                },
                                {
                                    name: 'Water',
                                    type: 'bar',
                                    data: [7,8,15,7,9,6,8,11,17,19,6,17]
                                },
                                {
                                    name: 'Gas',
                                    type: 'bar',
                                    data: [1,7,5,7,9,6,8,11,17,19,6,12]
                                },
                                
                            ]
                        }}
                          opts={{renderer: 'svg'}} // use svg to render the chart.
                            
                        />
                        </div>
                    </div>
        </div>
    );
  }
}
export default SpendingbyYearIOT
