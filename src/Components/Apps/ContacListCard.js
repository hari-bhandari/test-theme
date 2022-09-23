import React from "react";

class ContactListCard extends React.Component {
  render() {
    return (
        <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>User List</h2>
                        </div>
                        <div className="body table-responsive">
                            <table className="table table-hover mb-0 c_list">
                                <thead>
                                    <tr>
                                        <th>
                                            <label className="fancy-checkbox">
                                                <input className="select-all" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </th>
                                        <th>Name</th>                                    
                                        <th>Phone</th>                                    
                                        <th>Address</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                           <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar1.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Robert Hammer <span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-2583</span>
                                        </td>                                   
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                        </td>
                                        <td>                                            
                                            <button type="button" className="btn btn-primary " title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar3.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Orlando Lentz <span className="badge badge-info m-l-10 hidden-sm-down">Google</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-5689</span>
                                        </td>                                    
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar4.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Barbara Kelly</p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-9513</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar6.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Brian Swader<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-1212</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar7.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Richard Foos<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-2323</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>514 S. Magnolia St. Orlando, FL 32806</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar8.jpg")} className="rounded-circle avatar" alt=""/>
                                            <p className="c_name">Rose Rivera<span className="badge badge-success m-l-10 hidden-sm-down">Work</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-1005</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>44 Shirley Ave. West Chicago, IL 60185</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox"/>
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar9.jpg")} className="rounded-circle avatar" alt="" />
                                            <p className="c_name">Frank Camly</p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-9999</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>123 6th St. Melbourne, FL 32904</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className="fancy-checkbox">
                                                <input className="checkbox-tick" type="checkbox" name="checkbox" />
                                                <span></span>
                                            </label>
                                        </td>
                                        <td>
                                            <img src={require("../../asset/images/xs/avatar10.jpg")} className="rounded-circle avatar" alt="" />
                                            <p className="c_name">Brian Swader<span className="badge badge-default m-l-10 hidden-sm-down">Family</span></p>
                                        </td>
                                        <td>
                                            <span className="phone">264-625-1212</span>
                                        </td>
                                        <td>
                                            <address><i className="zmdi zmdi-pin"></i>70 Bowman St. South Windsor, CT 06074</address>
                                        </td>
                                        <td>
                                            <button type="button" className="btn btn-primary" title="Edit"><i className="fa fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger js-sweetalert" data-type="confirm" title="Delete"><i className="fa fa-trash-o"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    );
  }
}
export default ContactListCard
