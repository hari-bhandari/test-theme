import React from "react";

class ButtonGroupCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Button group</h2>
                        </div>
                        <div class="body">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-secondary">Left</button>
                                <button type="button" class="btn btn-secondary">Middle</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                            </div>
                            <hr/>
                            <h6>Button toolbar</h6>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-secondary">1</button>
                                    <button type="button" class="btn btn-secondary">2</button>
                                    <button type="button" class="btn btn-secondary">3</button>
                                    <button type="button" class="btn btn-secondary">4</button>
                                </div>
                                <div class="btn-group mr-2" role="group" aria-label="Second group">
                                    <button type="button" class="btn btn-secondary">5</button>
                                    <button type="button" class="btn btn-secondary">6</button>
                                    <button type="button" class="btn btn-secondary">7</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                    <button type="button" class="btn btn-secondary">8</button>
                                </div>
                            </div>
                            <hr/>
                            <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-secondary">1</button>
                                    <button type="button" class="btn btn-secondary">2</button>
                                    <button type="button" class="btn btn-secondary">3</button>
                                    <button type="button" class="btn btn-secondary">4</button>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text" id="btnGroupAddon">@</div>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="btnGroupAddon"/>
                                </div>
                            </div>
                            <hr/>
                            <h6>Sizing</h6>
                            <div class="btn-group btn-group-lg" role="group" aria-label="Large button group">
                                <button type="button" class="btn btn-secondary">Left</button>
                                <button type="button" class="btn btn-secondary">Middle</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                            </div>
                            <br/><br/>
                            <div class="btn-group" role="group" aria-label="Default button group">
                                <button type="button" class="btn btn-secondary">Left</button>
                                <button type="button" class="btn btn-secondary">Middle</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                            </div>
                            <br/><br/>
                            <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
                                <button type="button" class="btn btn-secondary">Left</button>
                                <button type="button" class="btn btn-secondary">Middle</button>
                                <button type="button" class="btn btn-secondary">Right</button>
                            </div>
                            <hr/>
                            <h6>Nesting</h6>
                            <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                                <button type="button" class="btn btn-secondary">1</button>
                                <button type="button" class="btn btn-secondary">2</button>
                                
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Dropdown link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default ButtonGroupCard
