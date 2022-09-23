import React from "react";
import ReactEcharts from "echarts-for-react";

class BlogPieCard extends React.Component {
  render() {
      const {heading,per,value,color} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
            <div className="body text-center">
            <ReactEcharts
                                option={ {
                                    color:[color,'rgb(232, 227, 227)'],
                                    title: {
                                        text:`${value}`,
                                        x: 'center',
                                        y: 'center',
                                        textStyle : {
                                            color : color,
                                            fontFamily : 'Arial',
                                            fontSize : 20,
                                            fontWeight : 'bolder'
                                        },
                                    },
                                    grid:{
                                        top:-200
                                    },
                                    tooltip: {
                                        show:false,
                                        trigger: 'item',
                                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                                    },
                                    series: [
                                        {
                                            name: '',
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
                                                {value: value},
                                                {value: 100-value},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    style={{height:100}}
                                    />
                <h5 className="mt-4 mb-0">{heading}</h5>
                <small>{per}% Increase</small>
            </div>
        </div>
    </div>
    
    );
  }
}
export default BlogPieCard
