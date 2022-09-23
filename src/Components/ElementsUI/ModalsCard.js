import React from "react";
import {Modal,Button} from "react-bootstrap";

class ModalsCard extends React.Component {
  constructor(props){
      super(props)
      this.state={
          modal:[false,false,false,false]
      }
  }
  render() {
      const {modal} = this.state;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Modals</h2>
                        </div>
                        <div class="body">
                            <button type="button" class="btn btn-primary mr-1" onClick={()=>{ this.setState({ modal:[true,false,false,false] }) }} data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
                            <button type="button" class="btn btn-primary mr-1" onClick={()=>{ this.setState({ modal:[false,true,false,false] }) }} data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
                            <button type="button" class="btn btn-primary mr-1" onClick={()=>{ this.setState({ modal:[false,false,true,false] }) }} data-toggle="modal" data-target="#exampleModal">modal with button</button>
                            <button type="button" class="btn btn-primary" onClick={()=>{ this.setState({ modal:[false,false,false,true] }) }} data-toggle="modal" data-target="#exampleModalCenter">Vertically centered</button>

                            {/* <Modal.Dialog>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>

                                    <Modal.Body>
                                        <p>Modal body text goes here.</p>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button variant="secondary">Close</Button>
                                        <Button variant="primary">Save changes</Button>
                                    </Modal.Footer>
                            </Modal.Dialog> */}
                            
                             <div class={`modal fade bd-example-modal-lg ${modal[0]&&'show d-block'}`} tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"      aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title h4" id="myLargeModalLabel">Large modal</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }} >
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Woohoo, you're reading this text in a modal!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class={`modal fade bd-example-modal-sm ${modal[1]&&'show d-block'}`} tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-sm">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title h4" id="mySmallModalLabel">Small modal</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }}>
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Woohoo, you're reading this text in a modal!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class={`modal fade ${modal[2]&&'show d-block'}`} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"  aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }}>
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Woohoo, you're reading this text in a modal!</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }}>Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class={`modal fade ${modal[3]&&'show d-block'}`} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }}>
                                            <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <p>Cras mattis consectetur orbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>{ this.setState({ modal:[false,false,false,false] }) }}>Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
    );
  }
}
export default ModalsCard
