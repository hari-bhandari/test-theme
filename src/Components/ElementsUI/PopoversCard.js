import React from "react";
import {OverlayTrigger,Popover,Button} from "react-bootstrap";

class PopoversCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Popovers</h2>
                        </div>
                        <div class="body">
                        {['right'].map((placement) => (
                                <OverlayTrigger
                                trigger="click"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                    <Popover.Content>
                                        <strong>Holy guacamole!</strong> Check this info.
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <button className="btn btn-default btn-sm mr-1">Popover on Click</button>
                                </OverlayTrigger>
                            ))}   
                        {['right'].map((placement) => (
                                <OverlayTrigger
                                trigger="hover"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                    <Popover.Content>
                                        <strong>Holy guacamole!</strong> Check this info.
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <button className="btn btn-default btn-sm mr-1">Popover on Hover</button>
                                </OverlayTrigger>
                            ))}   
                        {['top', 'right', 'bottom', 'left'].map((placement) => (
                                <OverlayTrigger
                                trigger="hover"
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Popover id={`popover-positioned-${placement}`}>
                                    <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                                    <Popover.Content>
                                        <strong>Holy guacamole!</strong> Check this info.
                                    </Popover.Content>
                                    </Popover>
                                }
                                >
                                <button className="btn btn-default btn-sm mr-1">Popover on {placement}</button>
                                </OverlayTrigger>
                            ))}
                            {/* <div class="demo-button">
                                <button type="button" class="btn btn-sm btn-default mr-1" data-toggle="popover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Popover on Click</button>
                                <button type="button" class="btn btn-sm btn-default" data-toggle="popover" data-trigger="hover" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Popover on Hover</button>
                                <button type="button" class="btn btn-default btn-sm" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="" aria-describedby="popover653100">Popover on left</button>
                                <button type="button" class="btn btn-default btn-sm" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on right</button>
                                <button type="button" class="btn btn-default btn-sm" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on top</button>
                                <button type="button" class="btn btn-default btn-sm" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">Popover on bottom</button>                                
                            </div> */}
                        </div>
                    </div>
    );
  }
}

export default PopoversCard
