import React from "react";

class AlertMessageswithLinkCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Alert Messages with Link</h2>
                        </div>
                        <div class="body">
                            <div class="alert alert-primary" role="alert">
                                A simple primary alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-secondary" role="alert">
                                A simple secondary alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-success" role="alert">
                                A simple success alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-danger" role="alert">
                                A simple danger alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-warning" role="alert">
                                A simple warning alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-info" role="alert">
                                A simple info alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-light" role="alert">
                                A simple light alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                              <div class="alert alert-dark" role="alert">
                                A simple dark alert with <a href="javascript:void(0);" class="alert-link">an example link</a>. Give it a click if you like.
                              </div>
                        </div>
                    </div>
    );
  }
}
export default AlertMessageswithLinkCard
