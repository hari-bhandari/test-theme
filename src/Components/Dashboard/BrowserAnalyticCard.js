import React from "react";


class BrowserAnalyticCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12">
                    <div className="card">
                        <div className="header">
                            <h2>Use by Browser</h2>
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
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                      <th>Browser</th>
                                      <th>Sessions</th>
                                      <th>Bounce rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Chrome</td>
                                        <td>23,233 <i className="fa fa-level-up"></i></td>
                                        <td>47.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Firefox</td>
                                        <td>13,901 <i className="fa fa-level-up"></i></td>
                                        <td>33.02%</td>
                                    </tr>
                                    <tr>
                                        <td>Safari</td>
                                        <td>3,015 <i className="fa fa-level-up"></i></td>
                                        <td>24.12%</td>
                                    </tr>
                                    <tr>
                                        <td>Edge</td>
                                        <td>233 <i className="fa fa-level-down"></i></td>
                                        <td>17.33%</td>
                                    </tr>
                                    <tr>
                                        <td>Opera</td>
                                        <td>821 <i className="fa fa-level-down"></i></td>
                                        <td>7.12%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    );
  }
}
export default BrowserAnalyticCard
