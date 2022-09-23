import React from "react";
import {DropdownButton,Dropdown} from "react-bootstrap";

class PillsWithDropdowns extends React.Component {
  constructor(props){
        super(props);
        this.state={
            tab:false
        }
  }  
  render() {
    const {tab} = this.state;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Pills with dropdowns</h2>
                        </div>
                        <div class="body">
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a class="nav-link active" href="javascript:void(0);">Active</a>
                                </li>
                                <li class="nav-item ">
                                <DropdownButton id="dropdown-basic-button" className="dropdown" title="Dropdown button">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                                    {/* <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div class="dropdown-menu" >
                                    <a class="dropdown-item" href="javascript:void(0);">Action</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                    <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                                    </div> */}
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="javascript:void(0);">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" href="javascript:void(0);">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
    );
  }
}
export default PillsWithDropdowns
