import React from "react";
import ReactEcharts from "echarts-for-react";

class MultiChartCard extends React.Component {
  render() {
      const {seriesData,heading,value,height,icon,paddingRight,marginBottom} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card modal-open">
                        <div className="body">
                            <div className="number">
                                <h6><i className={icon}></i> {heading}</h6>
                                <span>{value}</span>
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
                                series: seriesData
                            }}
                                opts={{renderer: 'svg'}} // use svg to render the chart.
                                style={{height:height,marginBottom:marginBottom,Opacity:1,paddingRight:paddingRight}}
                                />
                    </div>
                </div>
    
    );
  }
}
export default MultiChartCard
