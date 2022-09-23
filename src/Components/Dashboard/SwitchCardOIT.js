import React from "react";
import ReactEcharts from "echarts-for-react";


class SwitchCardOIT extends React.Component {
  render() {
    const {header,switches} = this.props;
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>{header}</h2>
                            <ul className="header-dropdown m-r--5">
                                <li className="dropdown">
                                    <a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown" role="button">
                                        <i className="zmdi zmdi-more-vert"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-right">
                                        <li><a href="javascript:void(0);">All On</a></li>
                                        <li><a href="javascript:void(0);">All Off</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="body">
                            <ul className="list-group">
                                {
                                    switches.map((data,i)=>{
                                        return <li key={i+"switch"} className="d-flex justify-content-between list-group-item align-items-center">
                                                    <h6 className="mb-0">{data.name}</h6>
                                                    {
                                                        data.type === "switch"?<label className="toggle-switch">
                                                        <input type="checkbox" />
                                                        <span className="toggle-switch-slider"></span>
                                                            </label>:null
                                                    }
                                                    {
                                                        data.type === "Not Connected"?<span className="text-danger">Not Connected</span>:null
                                                    }
                                                    {
                                                        data.type === "Fused"?<span className="text-danger">Fused</span>:null
                                                    }
                                                    
                                                    
                                                </li>
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
        </div>
    );
  }
}
export default SwitchCardOIT
