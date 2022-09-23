import React from "react";
import ReactEcharts from "echarts-for-react";

class SplarkelProjectCard extends React.Component {
  render() {
      const {name,seriesData} = this.props;
    return (
        <div className="col-lg-6 col-md-12">
        <div className="card overflowhidden">
            <div className="header">
                <h2><strong>Project</strong> {name}</h2>
            </div>
            <div className="body">
                <div className="row">
                    <div className="col-md-3 col-4">
                        <span>Overall<span>
                        <h6>70.40%</h6>
                    </span></span></div>
                    <div className="col-md-3 col-4">
                        <span>Montly</span>
                        <h6>25.80%</h6>
                    </div>
                    <div className="col-md-3 col-4">
                        <span>Day</span>
                        <h6>12.50%</h6>
                    </div>
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
                style={{height:50,marginBottom:-6,marginTop:15}}
                />
        </div>
    </div>
    );
  }
}
export default SplarkelProjectCard;