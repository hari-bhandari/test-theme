import React from "react";

class ButtonsOutlineCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Outline buttons</h2>
        </div>
        <div class="body">
            <button type="button" class="btn btn-outline-primary mr-1">Primary</button>
            <button type="button" class="btn btn-outline-secondary mr-1">Secondary</button>
            <button type="button" class="btn btn-outline-success mr-1">Success</button>
            <button type="button" class="btn btn-outline-danger mr-1">Danger</button>
            <button type="button" class="btn btn-outline-warning mr-1">Warning</button>
            <button type="button" class="btn btn-outline-info mr-1">Info</button>
            <button type="button" class="btn btn-outline-light mr-1">Light</button>
            <button type="button" class="btn btn-outline-dark">Dark</button>
        </div>
    </div>
    );
  }
}
export default ButtonsOutlineCard
