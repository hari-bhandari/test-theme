import React from "react";
import ReactEcharts from "echarts-for-react";

class TopProductsCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Top Products</h2>
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
                                        show:false,
                                        trigger: 'axis',
                                        axisPointer: {  
                                            show:false,          
                                            type: 'shadow'        
                                        }
                                    },
                                    color:['#6ebdd1','#f9ab6c','#afc979'],
                                    legend: {

                                        data: ['Data1', 'Data2','Data3'],
                                        right:'5%'
                                    },
                                    grid: {
                                        top:50,
                                        left: '1%',
                                        right: '1%',
                                        bottom: '8%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
                                        axisLine:{
                                            show:false
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                        
                                    },
                                    yAxis: {
                                        type: 'value',
                                        max:12.5,
                                        min:0,
                                        interval:2.5,
                                        axisLine:{
                                            show:false
                                        },
                                        axisTick:{
                                            show:false
                                        },
                                        axisLabel: {
                                            formatter: function (value, index) {
                                                if (value > 0) {
                                                    return (value)+'k';
                                                } else {
                                                    return 0;
                                                }
                                            },
                                            textStyle: {
                                                color: "#a9a9a9",
                                            }
                                        }
                                        

                                    },
                                    series: [
                                        {
                                            name: 'Data1',
                                            type: 'bar',
                                            stack: '总量',
                                            barWidth:20,
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [2, 3, 2.5, 2, 4,1.5,4]
                                        },
                                        {
                                            name: 'Data2',
                                            type: 'bar',
                                            
                                            stack: '总量',
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [2, 3, 2.5, 3.5, 1.5,1.5,3.5]
                                        },
                                        {
                                            name: 'Data3',
                                            type: 'bar',
                                            
                                            stack: '总量',
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [2, 4, 2.58, 3, 2,1.5,3.5]
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
export default TopProductsCard;