import React from "react";
import ReactEcharts from "echarts-for-react";

class SocialGraphCard extends React.Component {
  render() {
      const {name,per,graphColor,graphValue} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body text-center">
                            <h5>{name}</h5>
                            <small>{per}% Increase</small>
                            <hr />
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
                                            radius : [48, 60],
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
                                    style={{marginTop:-90, marginBottom:-90}}
                                    />
                        </div>
                    </div>
                </div>
    );
  }
}
export default SocialGraphCard
