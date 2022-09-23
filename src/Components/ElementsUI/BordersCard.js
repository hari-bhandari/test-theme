import React from "react";
import {OverlayTrigger,Tooltip,Button} from "react-bootstrap";

class BordersCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Borders</h2>
        </div>
        <div class="body bd-example-border-utils">
            <span class="border"></span>
            <span class="border-top"></span>
            <span class="border-right"></span>
            <span class="border-bottom"></span>
            <span class="border-left"></span>
            <hr/>
            <h6>Subtractive</h6>
            <span class="border border-0"></span>
            <span class="border border-top-0"></span>
            <span class="border border-right-0"></span>
            <span class="border border-bottom-0"></span>
            <span class="border border-left-0"></span>
            <hr/>
            <h6>Border color</h6>
            <span class="border border-primary"></span>
            <span class="border border-secondary"></span>
            <span class="border border-success"></span>
            <span class="border border-danger"></span>
            <span class="border border-warning"></span>
            <span class="border border-info"></span>
            <span class="border border-light"></span>
            <span class="border border-dark"></span>
            <span class="border border-white"></span>
            <hr/>
            <h6>Border-radius</h6>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-top"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-right"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-bottom"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-left"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-circle"/>
            <img src="http://via.placeholder.com/100x100" alt="..." class="rounded-0"/>
        </div>
    </div>
                
    );
  }
}

export default BordersCard
