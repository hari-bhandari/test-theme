import React from "react";
import ReactEcharts from "echarts-for-react";


class GoogleAnalyticCard extends React.Component {
  render() {
    return (
        <div className="col-lg-12">
            <div className="card">
                <div className="header">
                <h2>Google Analytics Dashboard</h2>
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
                        <div className="d-flex justify-content-between">
                            <div>
                                    <select className="custom-select custom-select-sm">
                                        <option>Open this select menu</option>
                                        <option value="1">Sessions</option>
                                        <option value="2">Users</option>
                                        <option selected="" value="3">Page Views</option>
                                        <option value="4">Bounce Rate</option>
                                        <option value="5">Location</option>
                                        <option value="6">Pages</option>
                                        <option value="7">Referrers</option>
                                        <option value="8">Searches</option>
                                        <option value="9">Technology</option>
                                        <option value="10">404 Errors</option>
                                    </select>
                            </div>
                            <div className="d-flex">
                                    <button type="button" className="btn btn-outline-primary mr-2"><i className="fa fa-download"></i> Download report</button>
                                    <button type="button" className="btn btn-outline-secondary"><i className="fa fa-send"></i> Send report</button>
                            </div>
                        </div>
                        <ReactEcharts
                        option={{
                            color: ['rgb(89, 196, 188)', 'rgb(99, 122, 174)'],
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
                                    name: '2019',
                                    type: 'bar',
                                    barGap: 0,
                                    data: [11,8,22,18,19,12,17,22,18,32,9,17]
                                },
                                {
                                    name: '2020',
                                    type: 'bar',
                                    data: [7,7,5,7,9,6,8,11,17,19,6,12]
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
export default GoogleAnalyticCard
