import React from "react";


class GredientsProgressBarsCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Gredients Progress Bars</h2>
        </div>
        <div class="body">
            <div class="progress">
                <div class="progress-bar l-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '87%'}}>
                    <span class="sr-only">60% Complete</span>
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '46%'}}>
                    <span class="sr-only">60% Complete (warning)</span>
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar l-blue" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                    <span class="sr-only">60% Complete (success)</span>
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar l-blush" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '12%'}}>
                    <span class="sr-only">60% Complete (danger)</span>
                </div>
            </div>
            <hr/>
            <h6>Sizes</h6>
            <div class="progress progress-xs">
                <div class="progress-bar l-parpl" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '89%'}}>
                    <span class="sr-only">60% Complete</span>
                </div>
            </div>
            <div class="progress progress-sm">
                <div class="progress-bar l-slategray" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '12%'}}>
                    <span class="sr-only">60% Complete (warning)</span>
                </div>
            </div>
            <div class="progress">
                <div class="progress-bar l-amber" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '78%'}}>
                    <span class="sr-only">60% Complete (success)</span>
                </div>
            </div>
            <div class="progress progress-lg">
                <div class="progress-bar l-blush" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '55%'}}>
                    <span class="sr-only">60% Complete (danger)</span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default GredientsProgressBarsCard
