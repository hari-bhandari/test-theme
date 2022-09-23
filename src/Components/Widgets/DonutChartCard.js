import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class DonutChartCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>Donut Chart</h2>
                        </div>
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                <ReactEcharts
                                option={{
                                    color: ['#f9ab6c','#afc979','#AB7DF6', '#5cc196','#6ebdd1'],
                                    tooltip: {
                                        show:false,
                                        trigger: 'item',
                                        formatter: '{b}: {d}%'
                                    },
                                    legend: {
                                        show:false,
                                        top:220,
                                        data: ['online','offline']
                                    },
                                    series: [
                                        {
                                            name: '',
                                            type: 'pie',
                                            top:-15,
                                            radius: ['55%', '75%'],
                                            avoidLabelOverlap: true,
                                            label: {
                                                show: true,
                                                fontSize: '14',
                                                position: 'inner',
                                                formatter: '{d}',
                                                color:'rgba(0,0,0,.4)'
                                            },
                                            emphasis: {
                                                label: {
                                                    show: false,
                                                    fontSize: '30',
                                                    fontWeight: 'bold'
                                                }
                                            },
                                            labelLine: {
                                                show: true
                                            },
                                            data: [
                                                {value:10},
                                                {value: 25},
                                                {value: 40},
                                                {value: 5},
                                                {value: 20},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    />
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="progress-container m-b-20">
                                        <span className="progress-badge">visitor from America</span>
                                        <ProgressBar now={86} style={{height:5}} />
                                    </div>
                                    <div className="progress-container m-b-20">
                                        <span className="progress-badge">visitor from Canada</span>
                                        <ProgressBar now={36} style={{height:5}} />
                                    </div>
                                    <div className="progress-container m-b-20">
                                        <span className="progress-badge">visitor from UK</span>
                                        <ProgressBar now={23} style={{height:5}} />
                                    </div>
                                    <div className="progress-container m-b-20">
                                        <span className="progress-badge">visitor from India</span>
                                        <ProgressBar now={57} style={{height:5}} />
                                    </div>
                                    <div className="progress-container m-b-20">
                                        <span className="progress-badge">visitor from Australia</span>
                                        <ProgressBar now={42} style={{height:5}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default DonutChartCard;