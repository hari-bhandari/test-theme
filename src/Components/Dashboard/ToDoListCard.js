import React from "react";
import ReactEcharts from "echarts-for-react";

class ToDoListCard extends React.Component {
  render() {
    return (
        <div className="card">
                        <div className="header">
                            <h2>ToDo List <small>This Month task list</small></h2>
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
                        <div className="body todo_list">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter here..."/>
                                <input type="text" className="form-control" placeholder="Enter label"/>
                                <div className="input-group-append">
                                  <button className="btn btn-primary" type="button" id="button-addon2">Add ToDo</button>
                                </div>
                              </div>
                            <div className="dd nestable-with-handle m-b-15">
                                <ol className="dd-list">
                                    <li className="dd-item dd3-item" data-id="1"><button data-action="collapse" type="button">Collapse</button><button data-action="expand" type="button" style={{display:'none'}}>Expand</button>
                                        <div className="dd-handle dd3-handle"></div>
                                        <div className="dd3-content">
                                            <label className="fancy-checkbox mb-0">
                                                <input type="checkbox" name="checkbox" checked=""/>
                                                <span><i className=" icon-calendar m-r-5"></i> Report Panel Usag</span>
                                            </label>
                                        </div>
                                        <ol className="dd-list">
                                            <li className="dd-item dd3-item" data-id="1">
                                                <div className="dd-handle dd3-handle"></div>
                                                <div className="dd3-content">
                                                    <label className="fancy-checkbox mb-0">
                                                        <input type="checkbox" name="checkbox"/>
                                                        <span>Report Panel Usag</span>
                                                    </label>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                    <li className="dd-item dd3-item" data-id="1">
                                        <div className="dd-handle dd3-handle"></div>
                                        <div className="dd3-content">
                                            <label className="fancy-checkbox mb-0">
                                                <input type="checkbox" name="checkbox" />
                                                <span><i className="icon-bell m-r-5"></i> New logo design for InfiniO</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dd-item dd3-item" data-id="1">
                                        <div className="dd-handle dd3-handle"></div>
                                        <div className="dd3-content">
                                            <label className="fancy-checkbox mb-0">
                                                <input type="checkbox" name="checkbox" />
                                                <span>Design PSD files for InfiniO <span className="badge badge-warning">1 Week</span></span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dd-item dd3-item" data-id="1">
                                        <div className="dd-handle dd3-handle"></div>
                                        <div className="dd3-content">
                                            <label className="fancy-checkbox mb-0">
                                                <input type="checkbox" name="checkbox"/>
                                                <span>Deploy existing code to example.com</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dd-item dd3-item" data-id="1">
                                        <div className="dd-handle dd3-handle"></div>
                                        <div className="dd3-content">
                                            <label className="fancy-checkbox mb-0">
                                                <input type="checkbox" name="checkbox" checked="" />
                                                <span><i className=" icon-calendar m-r-5"></i> Report Panel Usag</span>
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            
                        </div>
                    </div>
    );
  }
}
export default ToDoListCard
