import React from "react";

class AlertMessagesCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Alert Messages</h2>
                        </div>
                        <div class="body">
                            <div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>
                            <div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
                            <div class="alert alert-success" role="alert">A simple success alert—check it out!</div>
                            <div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>
                            <div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>
                            <div class="alert alert-info" role="alert">A simple info alert—check it out!</div>
                            <div class="alert alert-light" role="alert">A simple light alert—check it out!</div>
                            <div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>
                        </div>
                    </div>
    );
  }
}
export default AlertMessagesCard
