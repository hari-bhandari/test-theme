import React from "react";


class DefaultProgressBarsCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Default Progress Bars</h2>
                        </div>
                        <div class="body">
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}} >
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (warning)</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (success)</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (danger)</span>
                                </div>
                            </div>
                            <hr/>
                            <h6>Sizes</h6>
                            <div class="progress progress-xs">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="progress progress-sm">
                                <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (warning)</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (success)</span>
                                </div>
                            </div>
                            <div class="progress progress-lg">
                                <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:'60%'}}>
                                    <span class="sr-only">60% Complete (danger)</span>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default DefaultProgressBarsCard
