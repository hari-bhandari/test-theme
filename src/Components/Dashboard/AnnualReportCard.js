import React from "react";
import ReactEcharts from "echarts-for-react";

class AnnualReportCard extends React.Component {
  render() {
      const {header,value,per,icon,data,background} = this.props;
    return (
        <div className="col-lg-8 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="header">
                            <h2>Annual Report <small>Description text here...</small></h2>
                            <ul className="header-dropdown">
                                <li><a href="#" title=""><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#" title=""><i className="fa fa-download"></i></a></li>
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
                                <div className="d-flex">
                                    <div>
                                        <span className="font-12 text-uppercase">Sales Report</span>
                                        <h4>$4,516</h4>
                                    </div>
                                    <div className="ml-4 mr-4">
                                        <span className="font-12 text-uppercase">Annual Revenue </span>
                                        <h4>$6,481</h4>
                                    </div>
                                    <div>
                                        <span className="font-12 text-uppercase">Total Profit</span>
                                        <h4>$3,915</h4>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    
                                </div>                                
                            </div>
                            <ReactEcharts
                                option={{
                                    tooltip: {
                                        show:true,
                                        trigger: 'axis',
                                        axisPointer: {  
                                            show:true,          
                                            type: 'shadow'        
                                        },
                                        data:['data1','data2']
                                    },
                                    color: ['rgb(99, 122, 174)','rgb(89, 196, 188)'],
                                    legend: {
                                        show:false,
                                        top:280,
                                        data: ['Income', 'Value']
                                    },
                                    grid: {
                                        top:'20%',
                                        left: '0%',
                                        right: '2%',
                                        bottom: '2%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        //data: ['London', 'Tokyo', 'paris', 'Sydney', 'Berlin'],
                                       
                                        axisLine: {
                                            show: false
                                        },
                                        
                                    },
                                    yAxis: {
                                        type: 'value',
                                        axisLine: {
                                            show: false
                                        },
                                        axisLabel:{
                                            show:false,
                                        },
                                        splitLine:{
                                            show:false
                                        }
                                    },
                                    series: [
                                        {
                                            name: 'Data1',
                                            type: 'bar',
                                            stack: '总量',
                                            barWidth:18,
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [7, 7, 5, 7, 9,12,8,15,18,19,7,9]
                                        },
                                        {
                                            name: 'Data2',
                                            type: 'bar',
                                            
                                            stack: '总量',
                                            label: {
                                                show: false,
                                                position: 'insideRight'
                                            },
                                            data: [11, 8, 15, 18, 19,17,7,7,5,7,17,7]
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
export default AnnualReportCard;
