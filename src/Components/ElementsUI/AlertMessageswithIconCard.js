import React from "react";

class AlertMessageswithIconCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Alert Messages With Icon</h2>
                        </div>
                        <div class="body">
                            <div class="alert alert-info alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <i class="fa fa-info-circle"></i> The system is running well
                            </div>
                            <div class="alert alert-success alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <i class="fa fa-check-circle"></i> Your settings have been succesfully saved
                            </div>
                            <div class="alert alert-warning alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <i class="fa fa-warning"></i> Warning, check your permission settings
                            </div>
                            <div class="alert alert-danger alert-dismissible" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <i class="fa fa-times-circle"></i> Your account has been suspended
                            </div>
                        </div>
                    </div>
    );
  }
}
export default AlertMessageswithIconCard
