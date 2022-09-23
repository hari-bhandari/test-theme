import React from "react";
import ReactEcharts from "echarts-for-react";

class WidgetsSparkleCard extends React.Component {
  render() {
      const {seriesData,heading,money,height,perText} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card number-chart">
                <div className="body">
                    <div className="number">
                        <h6>{heading}</h6>
                        <span>{money} </span>
                    </div>
                   
                        <small className="text-muted">{perText?perText:'Analytics for last week'}</small>
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
                style={{height:height,marginBottom:-6,Opacity:0.5}}
                />
            </div>
        </div>
    
    );
  }
}
export default WidgetsSparkleCard
