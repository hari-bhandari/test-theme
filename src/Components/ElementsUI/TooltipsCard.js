import React from "react";
import {OverlayTrigger,Tooltip,Button} from "react-bootstrap";

class TooltipsCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Tooltips</h2>
        </div>
        <div class="body">
            <div class="demo-button">
            {[ 'right', 'left','top','bottom'].map((placement) => (
                    <OverlayTrigger
                    key={placement}
                    placement={placement}
                    overlay={
                        <Tooltip id={`tooltip-${placement}`}>
                        Tooltip on <strong>{placement}</strong>.
                        </Tooltip>
                    }
                    >
                    <button class="btn btn-default mr-1">Tooltip on {placement}</button>        
                    {/* <Button class="btn btn-default">Tooltip on {placement}</Button> */}
                    </OverlayTrigger>
                ))}
                
            </div>
        </div>
    </div>
    );
  }
}

export default TooltipsCard
