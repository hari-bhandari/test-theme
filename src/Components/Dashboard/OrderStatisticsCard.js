import React from "react";

class OrderStatisticsCard extends React.Component {
  render() {
      const { currency,value,icon } = this.props;
    return (
        <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>Order Statistics</h2>
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
                            <div className="table-responsive">
                                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="DataTables_Table_0_length">
                                                <label>Show 
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
                                                <label>Search:<input type="search" className="form-control" placeholder="" aria-controls="DataTables_Table_0" />
                                            </label>
                                        </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                            <table className="table table-hover js-basic-example dataTable table-custom mb-0 no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                    <thead className="thead-dark">
                                        <tr role="row"><th className="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date: activate to sort column descending">Date</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Type: activate to sort column ascending" >Type</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Amount BTC: activate to sort column ascending" >Amount BTC</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="BTC Remaining: activate to sort column ascending" >BTC Remaining</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Price: activate to sort column ascending" >Price</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="USD: activate to sort column ascending" >USD</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Fee (%): activate to sort column ascending" >Fee (%)</th><th className="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" >Status</th></tr>
                                    </thead>
                                    <tbody>
                                        
                                        
                                    <tr role="row" className="odd">
                                            <td className="sorting_1">28-July-2018 06:49:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.45879</td>
                                            <td>
                                                0.45879</td>
                                            <td>11901.85</td>
                                            <td>$ 3165.44</td>
                                            <td>0.013</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-success"> Accept</button>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1">28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1">28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1">28-July-2018 06:50:50</td>
                                            <td>Sell</td>
                                            <td>
                                                1.38647</td>
                                            <td>
                                                0.38647</td>
                                            <td>11905.09</td>
                                            <td>$ 2496.36</td>
                                            <td>0.017</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 1597.78</td>
                                            <td>0.023</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.89877</td>
                                            <td>
                                                0.89877</td>
                                            <td>11899.28</td>
                                            <td>$ 25830.6</td>
                                            <td>0.011</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Sell</td>
                                            <td>
                                                0.45712</td>
                                            <td>
                                                0.45712</td>
                                            <td>11908.19</td>
                                            <td>$ 2586.34</td>
                                            <td>0.024</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.12</td>
                                            <td>$ 1597.78</td>
                                            <td>0.023</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr><tr role="row" className="odd">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.58647</td>
                                            <td>
                                                0.58647</td>
                                            <td>11900.62</td>
                                            <td>$ 5623.59</td>
                                            <td>0.019</td>
                                            <td>
                                                <button className="btn btn-sm round btn-outline-danger"> Cancel</button>
                                            </td>
                                        </tr><tr role="row" className="even">
                                            <td className="sorting_1">28-July-2018 06:51:51</td>
                                            <td>Buy</td>
                                            <td>
                                                0.89877</td>
                                            <td>
                                                0.89877</td>
                                            <td>11899.28</td>
                                            <td>$ 25830.6</td>
                                            <td>0.011</td>
                                            <td>
                                                    <button className="btn btn-sm round btn-outline-success">Accept</button>
                                            </td>
                                        </tr></tbody>
                                </table></div></div><div className="row"><div className="col-sm-12 col-md-5"><div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 12 entries</div></div><div className="col-sm-12 col-md-7"><div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul className="pagination"><li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabindex="0" className="page-link">Previous</a></li><li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabindex="0" className="page-link">1</a></li><li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabindex="0" className="page-link">2</a></li><li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabindex="0" className="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default OrderStatisticsCard
