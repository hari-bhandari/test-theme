import React from "react";
import ReactEcharts from "echarts-for-react";

class StatisticsSparkleCard extends React.Component {
  render() {
      const { heading,money,seriesData} = this.props;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
        <div className="card overflowhidden">
            <div className="body">
                <h2 className="m-t-0 m-b-5">{money}</h2>
                <p className="text-muted">{heading}</p>
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
                style={{height:50}}
                />
        </div>
    </div>
    );
  }
}
export default StatisticsSparkleCard;
