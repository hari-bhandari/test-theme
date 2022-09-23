import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class WorkloadbyTeam extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Workload by team</h2>
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
                                    color:['rgb(89, 196, 188)','rgb(99, 122, 174)'],
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
                                        top:0,
                                        left: '3%',
                                        right: '4%',
                                        bottom: '8%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'value',
                                        //boundaryGap: [0, 0.01],
                                        axisLabel:{
                                            fontSize:10,
                                            color:'grey'
                                        },
                                        axisLine:{
                                            show:true,
                                            lineStyle:{
                                                color:'grey'
                                            }
                                        },
                                        splitLine:{
                                            show:false
                                        }
                                    },
                                    yAxis: {
                                        type: 'category',
                                        data: ['Finance', 'QA', 'Sales', 'Marketing', 'Dave', 'Design'],
                                        axisLabel:{
                                            fontSize:10,
                                            color:'grey'
                                        },
                                        axisLine:{
                                            show:true,
                                            lineStyle:{
                                                color:'grey'
                                            }
                                        }
                                    },
                                    series: [
                                        {
                                            name: 'Week',
                                            type: 'bar',
                                            data: [37,41,17,8,33,23],
                                            lineStyle:{
                                                color:'grey'
                                            }
                                        },
                                        {
                                            name: 'Month',
                                            type: 'bar',
                                            data: [42,29,17,15,17,17]
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
export default WorkloadbyTeam
