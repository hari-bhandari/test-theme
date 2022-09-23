import React from "react";

class RecentTransactionsCard extends React.Component {
  render() {
    return (
        <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="card">
            <div className="header">
                <h2>Recent Transactions</h2>
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
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Item</th>
                                <th>Address</th>
                                <th>Quantity</th>                                    
                                <th>Status</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="http://via.placeholder.com/60x50" alt="Product img" /></td>
                                <td>Hossein</td>
                                <td>IPONE-7</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>3</td>
                                <td><span className="badge badge-success">DONE</span></td>
                                <td>$ 356</td>
                            </tr>
                            <tr>
                                <td><img src="http://via.placeholder.com/60x50" alt="Product img" /></td>
                                <td>Camara</td>
                                <td>NOKIA-8</td>
                                <td>2595 Pearlman Avenue Sudbury, MA 01776 </td>
                                <td>3</td>
                                <td><span className="badge badge-default">Delivered</span></td>
                                <td>$ 542</td>
                            </tr>
                            <tr>
                                <td><img src="http://via.placeholder.com/60x50" alt="Product img" /></td>
                                <td>Maryam</td>
                                <td>NOKIA-456</td>
                                <td>Porterfield 508 Virginia Street Chicago, IL 60653</td>
                                <td>4</td>
                                <td><span className="badge badge-success">DONE</span></td>
                                <td>$ 231</td>
                            </tr>
                            <tr>
                                <td><img src="http://via.placeholder.com/60x50" alt="Product img" /></td>
                                <td>Micheal</td>
                                <td>SAMSANG PRO</td>
                                <td>508 Virginia Street Chicago, IL 60653</td>
                                <td>1</td>
                                <td><span className="badge badge-success">DONE</span></td>
                                <td>$ 601</td>
                            </tr>
                            <tr>
                                <td><img src="http://via.placeholder.com/60x50" alt="Product img" /></td>
                                <td>Frank</td>
                                <td>NOKIA-456</td>
                                <td>1516 Holt Street West Palm Beach, FL 33401</td>
                                <td>13</td>
                                <td><span className="badge badge-warning">PENDING</span></td>
                                <td>$ 128</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default RecentTransactionsCard
