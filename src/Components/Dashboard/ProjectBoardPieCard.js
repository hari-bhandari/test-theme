import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class ProjectBoardPieCard extends React.Component {
  render() {
      const {header,TeamLeader,price,graphColor,graphValue } = this.props;
    return (
        <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="header">
                            <h2>{header}</h2>
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
                        <div className="body text-center">
                            <div style={{marginTop:-90}}>
                            <ReactEcharts
                                option={ {
                                    color:[graphColor,'rgb(232, 227, 227)'],
                                    title: {
                                        text:`${graphValue}%`,
                                        x: 'center',
                                        y: 'center',
                                        textStyle : {
                                            color : graphColor,
                                            fontFamily : 'Arial',
                                            fontSize : 20,
                                            fontWeight : 'bolder'
                                        },
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
                                            radius : [53, 60],
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
                                                {value: graphValue},
                                                {value: 100-graphValue},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    />
                            </div>
                            <div style={{marginTop:-50}}>
                                <h5 style={{color:graphColor}}>$ {price}</h5>
                                <p className="mb-0">Average <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 23%</span></p>
                                <hr />
                                <div className="Team_lead">
                                    <div>Team Lead</div>
                                    <h6 className="mb-0">@{TeamLeader}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default ProjectBoardPieCard
