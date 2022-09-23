import React from "react";


class DefaultMediaCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Default Media</h2>
                        </div>
                        <div class="body">
                            <div class="media mleft">
                                <div class="media-left">
                                    <a href="javascript:void(0);">
                                        <img class="media-object" src={require("../../asset/images/sm/avatar1.jpg")} width="64" height="64" alt=""/>
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                    in faucibus.
                                </div>
                            </div>
                            <div class="media mleft">
                                <div class="media-left">
                                    <a href="javascript:void(0);">
                                        <img class="media-object" src={require("../../asset/images/sm/avatar2.jpg")} width="64" height="64" alt=""/>
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                    turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                                    in faucibus.
                                    <div class="media m-t-20">
                                        <div class="media-left">
                                            <a href="javascript:void(0);">
                                                <img class="media-object" src={require("../../asset/images/sm/avatar3.jpg")} width="64" height="64" alt=""/>
                                            </a>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="media-heading">Nested media heading</h4>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla
                                            vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
                                            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                            fringilla. Donec lacinia congue felis in faucibus. </div>
                                    </div>
                                </div>
                            </div>
                            <div class="media mright">
                                <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </div>
                                <div class="media-right">
                                    <a href="javascript:void(0);">
                                        <img alt="" class="media-object" src={require("../../asset/images/sm/avatar4.jpg")} width="64" height="64" />
                                    </a>
                                </div>
                            </div>
                            <div class="media mleft">
                                <div class="media-left">
                                    <a href="javascript:void(0);">
                                        <img alt="" class="media-object" src={require("../../asset/images/sm/avatar1.jpg")} width="64" height="64" />
                                    </a>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">Media heading</h4>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </div>
                                <div class="media-right">
                                    <a href="javascript:void(0);">
                                        <img alt="" class="media-object" src={require("../../asset/images/sm/avatar2.jpg")} width="64" height="64"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default DefaultMediaCard
