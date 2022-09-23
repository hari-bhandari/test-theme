import React from "react";

class TabsWithDropdowns extends React.Component {
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
            <h2>Tabs with dropdowns</h2>
        </div>
        <div class="body">
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link active show" data-toggle="tab" href="#Active">Active </a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" onClick={()=>{ this.setState({ tab:!tab }) }} href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class={`dropdown-menu ${tab&&'show'}`}>
                        <a class="dropdown-item" href="javascript:void(0);">Action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                        <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="javascript:void(0);">Separated link</a>
                    </div>
                </li>
                <li class="nav-item"><a class="nav-link" href="javascript:void(0);">Link</a></li>
                <li class="nav-item"><a class="nav-link disabled" href="javascript:void(0);">Disabled</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane show active" id="Active">
                    <h6>Home</h6>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default TabsWithDropdowns
