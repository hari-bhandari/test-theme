import React from "react";
import ReactEcharts from "echarts-for-react";

class CategoryCard extends React.Component {
  render() {
      const {header,value,per,icon,data,background} = this.props;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="header">
                            <h2>Sales by Category <small>Description text here...</small></h2>
                            <ul className="header-dropdown">
                                <li><a href="#" title=""><i className="fa fa-envelope"></i></a></li>
                                <li><a href="#" title=""><i className="fa fa-download"></i></a></li>
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another Action</a></li>
                                        <li><a href="javascript:void(0);">Something else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <div className="d-flex justify-content-start">
                                <div className="mr-3">
                                    <p className="mb-0">Online <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 8.2%</span></p>
                                    <h5>$ 9,011</h5>
                                </div>
                                <div className="ml-3">
                                    <p className="mb-0">Offline <span className="font-12 text-muted"><i className="fa fa-level-up"></i> 16%</span></p>
                                    <h5>$ 14,012</h5>
                                </div>
                            </div>
                            <ReactEcharts
                                option={{
                                    color: ['rgb(89, 196, 188)', 'rgb(99, 122, 174)','rgb(47, 170, 161)'],
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: '{b}: {d}%'
                                    },
                                    legend: {
                                        top:250,
                                        data: ['online','offline']
                                    },
                                    series: [
                                        {
                                            name: '',
                                            type: 'pie',
                                            top:-15,
                                            radius: ['55%', '90%'],
                                            avoidLabelOverlap: true,
                                            label: {
                                                show: true,
                                                fontSize: '12',
                                                position: 'inner',
                                                formatter: '{d}%',
                                                color:'#fff  '
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
                                                {value: 63.0, name: 'online'},
                                                {value: 37.0, name: 'offline'},
                                            ]
                                        }
                                    ]
                                }}
                                    opts={{renderer: 'svg'}}
                                    />
                        </div>
                    </div>
                </div>
    );
  }
}
export default CategoryCard;
