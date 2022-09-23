import React from "react";


class ListGroupWithbadges extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>With badges</h2>
                        </div>
                        <div class="body">
                            <ul class="list-group">
                                <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-primary badge-pill">14</span></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-primary badge-pill">2</span></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Morbi leo risus<span class="badge badge-primary badge-pill">1</span></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Cras justo odio<span class="badge badge-primary badge-pill">14</span></li>
                                <li class="list-group-item d-flex justify-content-between align-items-center">Dapibus ac facilisis in<span class="badge badge-primary badge-pill">2</span></li>
                            </ul>
                        </div>
                    </div>
    );
  }
}
export default ListGroupWithbadges
