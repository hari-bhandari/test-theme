import React from "react";
import ReactEcharts from "echarts-for-react";

class ProgressCard extends React.Component {
  render() {
      const { header,value,seriesData} = this.props;
    return (
        <div className="col-lg-3 col-md-6">
        <div className="card info-box-2">
            <div className="body">
                <div className="icon mr-10">
                    
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
                                style={{height:40,width:50,marginRight:10}}
                                />

                </div>
                <div className="content ml-10">
                    <div className="text">{header}</div>
                    <div className="number">{value}</div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default ProgressCard;
