import React from "react";

class ButtonsTypeCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Buttons</h2>
                        </div>
                        <div class="body">
                            <button type="button" class="btn btn-primary mr-1">Primary</button>
                            <button type="button" class="btn btn-secondary mr-1">Secondary</button>
                            <button type="button" class="btn btn-success mr-1">Success</button>
                            <button type="button" class="btn btn-danger mr-1">Danger</button>
                            <button type="button" class="btn btn-warning mr-1">Warning</button>
                            <button type="button" class="btn btn-info mr-1">Info</button>
                            <button type="button" class="btn btn-light mr-1">Light</button>
                            <button type="button" class="btn btn-dark mr-1">Dark</button>                            
                            <button type="button" class="btn btn-link">Link</button>
                        </div>
                        <div class="body">
                            <h6>Disabled State</h6>
                            <button type="button" class="btn btn-primary disabled mr-1">Primary</button>
                            <button type="button" class="btn btn-secondary disabled mr-1">Secondary</button>
                            <button type="button" class="btn btn-success disabled mr-1">Success</button>
                            <button type="button" class="btn btn-danger disabled mr-1">Danger</button>
                            <button type="button" class="btn btn-warning disabled mr-1">Warning</button>
                            <button type="button" class="btn btn-info disabled mr-1">Info</button>
                            <button type="button" class="btn btn-light disabled mr-1">Light</button>
                            <button type="button" class="btn btn-dark disabled mr-1">Dark</button>                            
                            <button type="button" class="btn btn-link disabled">Link</button>
                        </div>
        </div>
    );
  }
}
export default ButtonsTypeCard
