import React from "react";


class ProgressBarsCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Progress Bars <small>Progress Bars based on Bootstrap-Progressbar plugin</small></h2>
        </div>
        <div class="body">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <h6>Percentage Format</h6>
                    <div id="progress-format1" class="progress">
                        <div class="progress-bar" data-transitiongoal="27" aria-valuenow="27" style={{width: '27%'}}>27%</div>
                    </div>
                    <h6>Number Format</h6>
                    <div id="progress-format2" class="progress">
                        <div class="progress-bar" data-transitiongoal="41" aria-valuenow="41" style={{width: '41%'}}>41 / 100</div>
                    </div>
                    <h6>Custom Format</h6>
                    <div id="progress-custom-format" class="progress">
                        <div class="progress-bar" data-transitiongoal="77" aria-valuenow="77" style={{width: '77%'}}>77 of 100</div>
                    </div>
                    <hr/>
                    <h6>Other Styles</h6>
                    <div id="progress-striped" class="progress progress-striped">
                        <div class="progress-bar progress-bar-warning" data-transitiongoal="43" aria-valuenow="43" style={{width: '43%'}}>43%</div>
                    </div>
                    <div id="progress-striped-active" class="progress progress-striped active">
                        <div class="progress-bar progress-bar-danger" data-transitiongoal="67" aria-valuenow="67" style={{width: '67%'}}>67%</div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{width: '45%'}}>
                            <span class="sr-only">45% Complete</span>
                        </div>
                    </div>
                    <hr/>
                    <h6>Stacked Progress Bar</h6>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success progress-bar-striped" style={{width: '45%'}}>
                            <span class="sr-only">45% Complete (success)</span>
                        </div>
                        <div class="progress-bar progress-bar-warning" style={{width: '20%'}}>
                            <span class="sr-only">20% Complete (warning)</span>
                        </div>
                        <div class="progress-bar progress-bar-danger" style={{width: '10%'}}>
                            <span class="sr-only">10% Complete (danger)</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <h6>Vertical Progress Bars</h6>
                    <div style={{height:'400px'}}>
                        <div class="progress progress-striped vertical wide">
                            <div class="progress-bar progress-bar-info" data-transitiongoal="57" aria-valuenow="57" style={{height: '57%'}}>57%</div>
                        </div>
                        <div class="progress progress-striped vertical bottom wide">
                            <div class="progress-bar progress-bar-success" data-transitiongoal="27" aria-valuenow="27" style={{height: '27%'}}>27%</div>
                        </div>
                        <div class="progress progress-striped vertical bottom wide">
                            <div class="progress-bar progress-bar-warning" data-transitiongoal="61" aria-valuenow="61" style={{height: '61%'}}>61%</div>
                        </div>
                        <div class="progress progress-striped vertical bottom wide">
                            <div class="progress-bar progress-bar-danger" data-transitiongoal="93" aria-valuenow="93" style={{height: '93%'}}>93%</div>
                        </div>
                        <div class="progress vertical bottom">
                            <div class="progress-bar" data-transitiongoal="82" aria-valuenow="82" style={{height: '82%'}}></div>
                        </div>
                        <div class="progress vertical">
                            <div class="progress-bar" data-transitiongoal="26" aria-valuenow="26" style={{height: '26%'}}></div>
                        </div>                                        
                    </div>
                </div>
            </div>
        </div>                       
    </div>
    );
  }
}
export default ProgressBarsCard
