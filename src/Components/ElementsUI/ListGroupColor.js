import React from "react";


class ListGroupColor extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Color example</h2>
        </div>
        <div class="body">
            <ul class="list-group">
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item list-group-item-primary">A simple primary list group item</li>
                <li class="list-group-item list-group-item-secondary">A simple secondary list group item</li>
                <li class="list-group-item list-group-item-success">A simple success list group item</li>
                <li class="list-group-item list-group-item-danger">A simple danger list group item</li>
                <li class="list-group-item list-group-item-warning">A simple warning list group item</li>
                <li class="list-group-item list-group-item-info">A simple info list group item</li>
                <li class="list-group-item list-group-item-light">A simple light list group item</li>
                <li class="list-group-item list-group-item-dark">A simple dark list group item</li>
            </ul>
        </div>
    </div>
    );
  }
}
export default ListGroupColor
