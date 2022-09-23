import React from "react";
import {Modal,Button} from "react-bootstrap";
import Header from "../../../Components/Common/Header";
import ModalDefaultSizeCard from "../../../Components/ElementsUI/ModalDefaultSizeCard";
import ModalLargeSizeCard from "../../../Components/ElementsUI/ModalLargeSizeCard";
import ModalSmallSizeCard from "../../../Components/ElementsUI/ModalSmallSizeCard";

class ModalsPopupsUI extends React.Component {
  constructor(props){
    super(props);
    this.state={
        modal:[
            {
                show:false,
                size:''
            },
            {
                show:false,
                size:''
            },
            {
                show:false,
                size:''
            },
        ]
    }
  }
  render() {
      const {modal} = this.state;
    return (
        <div className="container-fluid">
            <Header headerText="Modals Popups" mainNavigate="UI Elements" currentPage="Modals Popups"/>
            <div className="row clearfix">
               <div className="col-lg-4 col-md-12">
                  <ModalDefaultSizeCard 
                  onClick ={()=>{
                      this.setState({
                          modal:[
                            {
                                show:true,
                                size:''
                            },
                            {
                                show:false,
                                size:'lg'
                            },
                            {
                                show:false,
                                size:'sm'
                            },
                        ]
                      })
                  }}
                   />
               </div>
               <div className="col-lg-4 col-md-12">
                  <ModalLargeSizeCard
                  onClick ={()=>{
                    this.setState({
                        modal:[
                          {
                              show:false,
                              size:''
                          },
                          {
                              show:true,
                              size:'lg'
                          },
                          {
                              show:false,
                              size:'sm'
                          },
                      ]
                    })
                }}
                  />
               </div>
               <div className="col-lg-4 col-md-12">
                  <ModalSmallSizeCard
                  onClick ={()=>{
                    this.setState({
                        modal:[
                          {
                              show:false,
                              size:''
                          },
                          {
                              show:false,
                              size:'lg'
                          },
                          {
                              show:true,
                              size:'sm'
                          },
                      ]
                    })
                }}
                   />
               </div>
            </div>
            {
                modal.map((data,i)=>{
                    return <Modal size={data.size} show={data.show} 
                                onHide ={()=>{
                                    this.setState({
                                        modal:[
                                          {
                                              show:false,
                                              size:''
                                          },
                                          {
                                              show:false,
                                              size:'lg'
                                          },
                                          {
                                              show:false,
                                              size:'sm'
                                          },
                                      ]
                                    })
                                }}
                                >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal title</Modal.Title>
                                </Modal.Header>
                
                                <Modal.Body>
                                    <p>dignissim nibh faucibus ullamcorper. Fusce pulvinar libero vel ligula iaculis ullamcorper. Integer dapibus, mi ac tempor varius, purus nibh mattis erat, vitae porta nunc nisi non tellus. Vivamus mollis ante non massa egestas fringilla. Vestibulum egestas consectetur nunc at ultricies. Morbi quis consectetur nunc.</p>
                                </Modal.Body>
                
                                <Modal.Footer>
                                <button type="button" onClick={()=>{
                                    this.setState({
                                        modal:[
                                          {
                                              show:false,
                                              size:''
                                          },
                                          {
                                              show:false,
                                              size:'lg'
                                          },
                                          {
                                              show:false,
                                              size:'sm'
                                          },
                                      ]
                                    })
                                }} class="btn btn-danger" data-dismiss="modal">CLOSE</button>
                                    
                                </Modal.Footer>
                           </Modal>
                })
            }
            
        </div>
    
    );
  }
}
export default ModalsPopupsUI;
