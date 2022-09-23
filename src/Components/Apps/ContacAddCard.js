import React from "react";
import {Modal,Button} from "react-bootstrap";

class ContacAddCard extends React.Component {
  render() {
      const {show,onClose} =this.props;
    return (
        <Modal  show = {show}>
      
        <Modal.Body>
        <div className="modal-header">
                <h6 className="title" id="defaultModalLabel">Add Contact</h6>
            </div>
            <div className="modal-body">
                <div className="row clearfix">
                    <div className="col-6">
                        <div className="form-group">                                    
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">                                   
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">                                    
                            <input type="number" className="form-control" placeholder="Phone Number" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">                                    
                            <input type="text" className="form-control" placeholder="Enter Address" />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">                                            
                            <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp" />
                            <small id="fileHelp" className="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
                        </div>
                        <hr />
                    </div>
                    <div className="col-6">
                        <div className="form-group">                                    
                            <input type="text" className="form-control" placeholder="Facebook" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">                                   
                            <input type="text" className="form-control" placeholder="Twitter" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">                                    
                            <input type="text" className="form-control" placeholder="Linkedin" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">                                    
                            <input type="text" className="form-control" placeholder="instagram" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Add</button>
                <button type="button" className="btn" data-dismiss="modal" onClick={onClose}>CLOSE</button>
            </div>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ContacAddCard
