import React from "react";
import ReactEcharts from "echarts-for-react";

class AverageCard extends React.Component {
  render() {
      const { header,value,seriesData} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
            <div className="body text-center">
            <ReactEcharts
                            option={{
                                tooltip: {
                                    axisPointer: {
                                        type: 'shadow'
                                    },
                                },

                                grid: {
                                    top:1,
                                    bottom:-10,
                                    right:'15%',
                                    left:'15%'
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
                                        },
                                        axisTick: {show: false},
                                    }
                                ],
                                series: seriesData
                            }}
                                opts={{renderer: 'svg'}} // use svg to render the chart.
                                style={{height:40,marginRight:0}}
                                />
                <h3 className="mb-0">{value}</h3>
                <small className="displayblock">{header} <i className="zmdi zmdi-trending-up"></i></small>
            </div>
        </div>
    </div>
    );
  }
}
export default AverageCard;
