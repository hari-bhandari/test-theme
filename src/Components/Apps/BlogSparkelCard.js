import React from "react";
import ReactEcharts from "echarts-for-react";

class BlogSparkelCard extends React.Component {
  render() {
      const {heading,perText,money,icon,sparklineData} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card top_widget">
                        <div className="body">
                            <div className="icon"><i className={icon}></i> </div>
                            <div className="content">
                                <div className="text mb-2 text-uppercase">{heading}</div>
                                <h4 className="number mb-0">{money} <span className="font-12 text-muted"><i className="fa fa-level-up"></i> {perText}%</span></h4>
                                <small className="text-muted">Analytics for last Month</small>
                            </div>
                        </div>
                        <ReactEcharts
                                option={{
                                    tooltip: {
                                        axisPointer: {
                                            type: 'shadow'
                                        },
                                    },

                                    grid: {
                                        top:1,
                                        bottom:0,
                                        right:0,
                                        left:0
                                    },
                                    xAxis: [
                                        {
                                            type: 'category',
                                            boundaryGap: false,
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
                                    series: sparklineData
                                }}
                                    opts={{renderer: 'svg'}} // use svg to render the chart.
                                    style={{height:50,marginBottom:0}}
                                    />
                    </div>
                </div>
    
    );
  }
}
export default BlogSparkelCard
