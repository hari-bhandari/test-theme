import React from "react";
import ReactEcharts from "echarts-for-react";

class SectorReportCard extends React.Component {
  render() {
    return (
        <div className="col-lg-6 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Report by Sector</h2>
                <ul className="header-dropdown">
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
            <ReactEcharts
            
              option={{
                color:['rgb(89, 196, 188)','rgb(99, 122, 174)','rgb(76, 197, 188)','rgb(47, 170, 161)'],
                tooltip: {
                    trigger: 'item',
                    formatter: '{b}:{d}%'
                },
                grid:{
                    top:-250,
                    bottom:'10%'
                },
                series: [
                    {

                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        label:{
                            fontSize: '10',
                                        position: 'inner',
                                        formatter: '{d}%',
                                        color:'#fff  '
                        }, 
                        data: [
                            {value: 47.74, name: 'Realestate'},
                            {value: 31.1, name: 'Education'},
                            {value: 10.5, name: 'Finance'},
                            {value: 9.0, name: 'Healthcare'},
                        ],
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
export default SectorReportCard
