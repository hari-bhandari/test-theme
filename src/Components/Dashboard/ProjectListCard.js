import React from "react";
import ReactEcharts from "echarts-for-react";
import {ProgressBar} from "react-bootstrap";

class ProjectListCard extends React.Component {
  render() {
      const { projectData } = this.props;
    return (
        <div className="col-lg-12 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Project List</h2>
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
                        <div className="body project_report">
                            <div className="table-responsive">
                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="DataTables_Table_0_length"><label>Show 
                                                <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control">
                                                    <option value="10">10</option>
                                                    <option value="25">25</option>
                                                    <option value="50">50</option>
                                                    <option value="100">100</option>
                                                </select> entries
                                                </label>
                                                </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                                        <label>Search:<input type="search" className="form-control" placeholder="" aria-controls="DataTables_Table_0"/>
                                                        </label>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                       <table className="table table-hover js-basic-example dataTable table-custom mb-0 no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                    <thead>
                                        <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Project: activate to sort column descending" >Project</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Deadline: activate to sort column ascending" >Deadline</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Prograss: activate to sort column ascending" >Prograss</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Lead: activate to sort column ascending" >Lead</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Team: activate to sort column ascending" >Team</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" >Status</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">Action</th></tr>
                                    </thead>
                                    <tbody>
                                        {
                                            projectData.map((data,i)=>{
                                               return  <tr key={i} role="row" className="odd">
                                                                <td className="project-title sorting_1">
                                                                    <h6>{data.Project}</h6>
                                                                    <small>Created {data.Created}</small>
                                                                </td>
                                                                <td>{data.Deadline}</td>
                                                                <td>
                                                                        <ProgressBar now={data.Prograss} variant={data.Status === "Closed"?"danger":''} className={`progress-xs progress-transparent ${data.Status === "Pending"?'custom-color-yellow':''}`} />
                                                                    
                                                                    <small>Completion with: {data.Prograss}%</small>
                                                                </td>
                                                                <td><img src={data.Lead} data-toggle="tooltip" data-placement="top" title="" alt="Avatar" className="width35 rounded" data-original-title="Team Lead" /></td>
                                                                <td>
                                                                    <ul className="list-unstyled team-info">    
                                                                        {
                                                                        data.Team.map((d,ind)=>{
                                                                            return <li key={'team'+i}><img src={d} data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar"/></li>
                                                                        })
                                                                        } 
                                                                        
                                                                        <li><img src="assets/images/xs/avatar3.jpg" data-toggle="tooltip" data-placement="top" title="" data-original-title="Avatar"/></li>
                                                                    </ul>
                                                                </td>
                                                                <td>
                                                                    {
                                                                        data.Status === "InActive"?<span className="badge badge-default">InActive</span>:null
                                                                    }
                                                                    {
                                                                        data.Status === "Active"?<span className="badge badge-success">Active</span>:null
                                                                    }
                                                                    {
                                                                        data.Status === "Pending"?<span className="badge badge-warning">Pending</span>:null
                                                                    }
                                                                    {
                                                                        data.Status === "Closed"?<span className="badge badge-danger">Closed</span>:null
                                                                    }
                                                                    
                                                                    
                                                                </td>

                                                                <td className="project-actions">
                                                                    <a href="javascript:void(0);" className="btn btn-sm btn-outline-primary mr-1"><i className="icon-eye"></i></a>
                                                                    <a href="javascript:void(0);" className="btn btn-sm btn-outline-success mr-1"><i className="icon-pencil"></i></a>
                                                                    <a href="javascript:void(0);" className="btn btn-sm btn-outline-danger js-sweetalert" title="Delete" data-type="confirm"><i className="icon-trash"></i></a>
                                                                </td>
                                                        </tr>
                                            })
                                        }
                                     
                                        </tbody>
                                </table>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-5">
                                        <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item next disabled" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default ProjectListCard
