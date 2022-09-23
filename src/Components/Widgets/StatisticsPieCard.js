import React from "react";
import ReactEcharts from "echarts-for-react";

class StatisticsPieCard extends React.Component {
  render() {
      const { graphColor,graphValue,header,per} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                    <div className="card tasks_report">
                        <div className="body">
                        <ReactEcharts
                                    option={ {
                                        color:[graphColor,'rgb(232, 227, 227)'],
                                        title: {
                                            text:`${graphValue}`,
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
                                            show:false,
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
                                                radius : [43, 48],
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
                                        style={{marginTop:-70,marginBottom:-70}}
                                    />
                            
                            <h6 className="m-t-20">{header}</h6>
                                <p className="displayblock mb-0">{per}% Average <i className="zmdi zmdi-trending-up"></i></p>                        
                        </div>
                    </div>
        </div>
    );
  }
}
export default StatisticsPieCard;
