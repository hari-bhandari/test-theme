import React from "react";
import ReactEcharts from "echarts-for-react";

class HouseholdIncomeCardDemographic extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Household Income/Value <small>Top 5 cities in the world</small></h2>
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
                                    tooltip: {
                                        trigger: 'axis',
                                        axisPointer: {  
                                            show:false,          
                                            type: 'shadow'        
                                        }
                                    },
                                    color:['rgb(147, 150, 151)','rgb(99, 109, 118)'],
                                    legend: {
                                        top:280,
                                        data: ['Income', 'Value']
                                    },
                                    grid: {
                                        top:-50,
                                        left: '1%',
                                        right: '1%',
                                        bottom: '8%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: ['London', 'Tokyo', 'paris', 'Sydney', 'Berlin']
                                        
                                    },
                                    yAxis: {
                                        type: 'value'
                                    },
                                    series: [
                                        {
                                            name: 'Income',
                                            type: 'bar',
                                            stack: '总量',
                                            
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [234, 192, 172, 201, 144]
                                        },
                                        {
                                            name: 'Value',
                                            type: 'bar',
                                            
                                            stack: '总量',
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [99, 129, 188, 117, 121]
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
export default HouseholdIncomeCardDemographic
