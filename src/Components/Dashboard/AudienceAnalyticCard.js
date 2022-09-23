import React from "react";
import ReactEcharts from "echarts-for-react";


class AudienceAnalyticCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="card">
                <div className="header">
                            <h2>Use by Audience</h2>
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
                            color: ['rgb(121, 84, 173)', 'rgb(231, 104, 134)','rgb(120, 47, 223)'],
                            tooltip: {
                                trigger: 'item',
                                formatter: '{b}: {d}%'
                            },
                            legend: {
                                top:250,
                                data: ['Male','Female','Other']
                            },
                            series: [
                                {
                                    name: '',
                                    type: 'pie',
                                    radius: ['50%', '90%'],
                                    avoidLabelOverlap: true,
                                    label: {
                                        show: true,
                                        position: 'inner',
                                        formatter: '{d}%'
                                    },
                                    emphasis: {
                                        label: {
                                            show: false,
                                            fontSize: '30',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: true,
                                        position: 'center'
                                    
                                    },
                                    data: [
                                        {value: 52.4, name: 'Male'},
                                        {value: 28.6, name: 'Female'},
                                        {value: 19, name: 'Other'},
                                    ]
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
export default AudienceAnalyticCard
