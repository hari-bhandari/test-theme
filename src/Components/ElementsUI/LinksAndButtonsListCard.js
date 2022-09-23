import React from "react";


class LinksAndButtonsListCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Links and buttons</h2>
                        </div>
                        <div class="body">
                           <div class="row">
                               <div class="col-lg-6 col-md-12">
                                   <h6>With Anchor</h6>
                                    <div class="list-group">
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action active">
                                            Cras justo odio
                                        </a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">Morbi leo risus</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                                    </div>
                               </div>
                               <div class="col-lg-6 col-md-12">
                                    <h6>With button</h6>
                                     <div class="list-group">
                                        <button type="button" class="list-group-item list-group-item-action active">
                                        Cras justo odio
                                        </button>
                                        <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                                        <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                                        <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                                        <button type="button" class="list-group-item list-group-item-action" disabled="">Vestibulum at eros</button>
                                     </div>
                                </div>
                           </div>

                        </div>
                    </div>
    );
  }
}
export default LinksAndButtonsListCard
