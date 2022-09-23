import React from "react";

class NewOrdersCard extends React.Component {
  render() {
    return (
        <div className="col-lg-4 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>New Orders</h2>
                        </div>
                        <div className="body">
                            <table className="table table-hover mb-0">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product</th>
                                        <th>Customers</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>IPONE-7</td>
                                        <td>
                                            <ul className="list-unstyled team-info margin-0">                                                
                                                <li><img src={require("../../asset/images/xs/avatar1.jpg")} title="Avatar" alt="Avatar"/></li>
                                                <li><img src={require("../../asset/images/xs/avatar6.jpg")} title="Avatar" alt="Avatar"/></li>
                                            </ul>
                                        </td>
                                        <td>$ 356</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>NOKIA-8</td>
                                        <td>
                                            <ul className="list-unstyled team-info margin-0">                                                
                                                <li><img src={require("../../asset/images/xs/avatar1.jpg")} title="Avatar" alt="Avatar" /></li>                                                
                                                <li><img src={require("../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar" /></li>
                                                <li><img src={require("../../asset/images/xs/avatar9.jpg")} title="Avatar" alt="Avatar" /></li>
                                            </ul>
                                        </td>
                                        <td>$ 542</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>Laptop HP</td>
                                        <td>
                                            <ul className="list-unstyled team-info margin-0">                                                
                                                <li><img src={require("../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar" /></li>
                                            </ul>
                                        </td>
                                        <td>$ 356</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>NOKIA-8</td>
                                        <td>
                                            <ul className="list-unstyled team-info margin-0">                                                
                                                <li><img src={require("../../asset/images/xs/avatar3.jpg")} title="Avatar" alt="Avatar" /></li>
                                                <li><img src={require("../../asset/images/xs/avatar2.jpg")} title="Avatar" alt="Avatar" /></li>
                                            </ul>
                                        </td>
                                        <td>$ 542</td>
                                    </tr>
                                    <tr>
                                        <td>05</td>
                                        <td>Tablet 4g</td>
                                        <td>
                                            <ul className="list-unstyled team-info margin-0">                                                
                                                <li><img src={require("../../asset/images/xs/avatar3.jpg")} title="Avatar" alt="Avatar" /></li>
                                                <li><img src={require("../../asset/images/xs/avatar2.jpg")} title="Avatar" alt="Avatar" /></li>
                                            </ul>
                                        </td>
                                        <td>$ 542</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    );
  }
}
export default NewOrdersCard
