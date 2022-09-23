import React from "react";
import ReactEcharts from "echarts-for-react";

class ECommerceDisplayCard extends React.Component {
  render() {
      const {header,value,per,icon,data,background} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className={`card top_widget ${background}`}>
                        <div className="body">
                            <div className="icon bg-light"><i className={icon}></i> </div>
                            <div className="content text-light">
                                <div className="text mb-2 text-uppercase">{header}</div>
                                <h4 className="number mb-0">{value}<span className="font-12"><i className="fa fa-level-up"></i> {per}%</span></h4>
                                <small>Analytics for last month</small>
                            </div>
                            <ReactEcharts
                                                    option={{
                                                        tooltip: {
                                                            axisPointer: {
                                                                type: 'shadow'
                                                            }
                                                        },
                                                        grid: {
                                                            top:'2%',
                                                            bottom:-3,
                                                            right:0,
                                                            left:0
                                                        },
                                                        xAxis: [
                                                            {
                                                                type: 'category',
                                                                axisLine: {
                                                                    show: false
                                                                },
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
                                                        series: [
                                                            {
                                                                type: 'bar',
                                                                  stack: 'Gedgets',
                                                                data: data,
                                                                itemStyle: {
                                                                    color: "#fff"
                                                                },
                                                                barWidth: "4px"
                                                            }
                                                        ]
                                                      }}
                                                        opts={{renderer: 'svg'}} // use svg to render the chart.
                                                        style={{height:"50px", marginLeft:0,bottom:0}}
                                                        />
                        </div>
                    </div>
        </div>
    );
  }
}
export default ECommerceDisplayCard;
