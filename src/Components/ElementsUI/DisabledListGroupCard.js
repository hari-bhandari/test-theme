import React from "react";


class DisabledListGroupCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Disabled items</h2>
        </div>
        <div class="body">
            <ul class="list-group">
                <li class="list-group-item disabled">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    </div>
    );
  }
}
export default DisabledListGroupCard
