import React from "react";
import ReactEcharts from "echarts-for-react";

class ConversionGenderCardDemographic extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Conversion By Gender</h2>
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
                        <div className="body d-flex justify-content-start align-items-center">
                            <div className="mr-2" style={{width:'50%',marginTop:-90,height:'30%'}}>
                            <ReactEcharts
                                option={ {
                                    color:['rgb(89, 196, 188)','rgb(232, 227, 227)'],
                                    title: {
                                        text:'65',
                                        x: 'center',
                                        y: 'center',
                                        textStyle : {
                                            color : 'rgb(89, 196, 188)',
                                            fontFamily : 'Arial',
                                            fontSize : 20,
                                            fontWeight : 'bolder'
                                        },
                                    },
                                    grid:{
                                        top:-200
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                    },
                                    legend: {
                                        orient: 'vertical',
                                        left: 10,
                                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                    },
                                    series: [
                                        {
                                            name: '访问来源',
                                            type: 'pie',
                                            clockWise: 1,
                                            startAngle: 90,
                                            radius : [45, 50],
                                            itemStyle : {
                                                  normal: {
                                                      label: {show: false},
                                                      labelLine: {show: false}
                                                  }
                                              },
                                            label: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                label: {
                                                    show: true,
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            },
                                            labelLine: {
                                                show: false
                                            },
                                            data: [
                                                {value: 65},
                                                {value: 35},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    />
                            </div>
                            <div className="ml-2">
                                <h6>Male</h6>
                                <p className="mb-0">Average <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 23%</span></p>
                            </div>
                        </div>
                        <div className="body d-flex justify-content-start align-items-center">
                            <div className="mr-2" style={{width:'50%',marginTop:-120,height:'50%'}}>
                            <ReactEcharts
                                option={ {
                                    color:['rgb(231, 104, 134)','rgb(232, 227, 227)'],
                                    title: {
                                        text:'35',
                                        x: 'center',
                                        y: 'center',
                                        textStyle : {
                                            color : 'rgb(231, 104, 134)',
                                            fontFamily : 'Arial',
                                            fontSize : 20,
                                            fontWeight : 'bolder'
                                        },
                                    },
                                    grid:{
                                        top:-200
                                    },
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                    },
                                    legend: {
                                        orient: 'vertical',
                                        left: 10,
                                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                                    },
                                    series: [
                                        {
                                            name: '访问来源',
                                            type: 'pie',
                                            clockWise: 1,
                                            startAngle: 90,
                                            radius : [45, 50],
                                            itemStyle : {
                                                  normal: {
                                                      label: {show: false},
                                                      labelLine: {show: false}
                                                  }
                                              },
                                            label: {
                                                show: false,
                                                position: 'center'
                                            },
                                            emphasis: {
                                                label: {
                                                    show: true,
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            },
                                            labelLine: {
                                                show: false
                                            },
                                            data: [
                                                {value: 35},
                                                {value: 65},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    />
                            </div>
                            <div className="ml-2">
                                <h6>Female</h6>
                                <p className="mb-0">Average <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 9%</span></p>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default ConversionGenderCardDemographic
