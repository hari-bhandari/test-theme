import React from "react";
import ReactEcharts from "echarts-for-react";

class ChannelsCardDemographic extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Which channels are driving engagement? <small>Top 5 cities in the world</small></h2>
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
                                option={ {
                                    color:['rgb(147, 150, 151)','rgb(99, 109, 118)'],
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {
                                            type: 'shadow'
                                        }
                                    },
                                    legend: {
                                        top:'92%',
                                        data: ['10-30 age', '30-60 age']
                                    },
                                    grid: {
                                        top:-50,
                                        left: '3%',
                                        right: '4%',
                                        bottom: '8%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'value',
                                        boundaryGap: [0, 0.01]
                                    },
                                    yAxis: {
                                        type: 'category',
                                        data: ['Americas', 'Asia', 'Africa', 'Europe', 'Australia', 'Oceania']
                                    },
                                    series: [
                                        {
                                            name: '10-30 age',
                                            type: 'bar',
                                            data: [23, 33, 8, 17, 41, 37]
                                        },
                                        {
                                            name: '30-60 age',
                                            type: 'bar',
                                            data: [17, 17, 15, 17, 29, 42]
                                        }
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
export default ChannelsCardDemographic
