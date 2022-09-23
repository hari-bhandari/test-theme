import React from "react";
import ReactEcharts from "echarts-for-react";

class IncomeAnalysisCard extends React.Component {
  render() {
    return (
        <div className="col-lg-3 col-md-6">
           <div className="card text-center">
                        <div className="body">
                            <h6>Income Analysis</h6>
                            <span>8% High then last month</span>
                            <ReactEcharts
                                    option={
                                        {
                                            color:['#ffc107','#33BAB0','#637AAE'],
                                            tooltip: {
                                                axisPointer: {
                                                    type: 'shadow',
                                                }
                                            },
                                            grid: {
                                                top:0,
                                                right:0,
                                                left:0,
                                                bottom: '3%',
                                            },
                                            xAxis: [
                                                {
                                                    type: 'category',
                      
                                                    axisLine: {
                                                        show: false
                                                    },
                                                    axisLabel: {
                      
                                                        textStyle: {
                                                            color: "#C2C2C2",
                                                        },
                                                    }
                                                }
                                            ],
                                            yAxis: [
                                                {
                                                    type: 'value',
                                                    splitLine: {show:false},
                                                    axisLine: {
                                                        show:false
                                                    },
                                                    axisLabel: {
                                                      show:false,
                                                    }
                                                }
                                            ],
                                            series:[
                                                {
                                                    type: 'pie',
                                                    startAngle: 70,
                                                    radius: '100%',
                                                    center: ['50%', '60%'],
                                                    label:{
                                                        show:false,
                                                        fontSize: '10',
                                                        position: 'inner',
                                                        formatter: '{d}%',
                                                        color:'#fff  '
                                                    }, 
                                                    data: [
                                                        {value: 44.4, name: '8'},
                                                        {value: 33.3, name: '6'},
                                                        {value:22.2, name: '4'}
                                                    ],
                                                }
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{marginLeft:'25%',marginRight:'25%',marginTop:-70,marginBottom:-50}}
                                    />
                            <div className="stats-report m-b-30">
                                <div className="stat-item">
                                <h5>Science</h5>
                                <b className="col-black">84.60%</b></div>
                                <div className="stat-item">
                                <h5>Commerce</h5>
                                <b className="col-black">15.40%</b></div>
                                <div className="stat-item">
                                <h5>Atrs</h5>
                                <b className="col-black">5.10%</b></div>
                            </div>
                            <ReactEcharts
                                    option={
                                        {
                                            color:['#637AAE','#17a2b8','#ffc107'],
                                            tooltip: {
                                                axisPointer: {
                                                    type: 'cross',
                                                }
                                            },
                                            grid: {
                                                top:0,
                                                right:0,
                                                left:0,
                                                bottom: '3%',
                                            },
                                            xAxis: [
                                                {
                                                    type: 'category',
                      
                                                    axisLine: {
                                                        show: false
                                                    },
                                                    axisLabel: {
                      
                                                        textStyle: {
                                                            color: "#C2C2C2",
                                                        },
                                                    }
                                                }
                                            ],
                                            yAxis: [
                                                {
                                                    type: 'value',
                                                    splitLine: {show:false},
                                                    axisLine: {
                                                        show:false
                                                    },
                                                    axisLabel: {
                                                      show:false,
                                                    }
                                                }
                                            ],
                                            series:[
                                                {
                                                    type: 'line',
                                                    data: [8,4,0,0,1,1,4,4,10,10,0,0,4,6,5,9,10],
                                                },
                                                {
                                                    type: 'line',
                                                    data: [4,1,5,7,9,8,7,8,6,7,8,3,2,2,5,6,7],
                                                },
                                                {
                                                    type: 'line',
                                                    data: [6,4,7,8,3,1,2,2,6,7,1,7,9,9,8,7,6],
                                                }
                                            ]
                                        }
                                    }
                                        opts={{renderer: 'svg'}}
                                        style={{marginLeft:'15%',marginRight:'15%',height:'40%'}}
                                    />
                        </div>
                    </div>
        </div>
    );
  }
}
export default IncomeAnalysisCard;