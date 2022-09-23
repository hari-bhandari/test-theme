import React from "react";
import Modal from 'react-awesome-modal';
import Header from "../../../Components/Common/Header";
import BasicDialogCard from "../../../Components/ElementsUI/BasicDialogCard";



class DialogsUI extends React.Component {
  constructor(props){
      super(props);
      this.state={
          isModal:false
      }
  }
  render() {
    const { isModal } = this.state;
    return (
        <div className="container-fluid">
            <Header headerText="Dialogs" mainNavigate="UI Elements" currentPage="Dialogs"/>
            <div className="row clearfix">
               <div className="col-lg-4 col-md-6 col-sm-12">
                 <BasicDialogCard header="A basic message" onClickButton={()=>{ this.setState({ isModal:true }) }} /> 
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                <BasicDialogCard header="A title with a text under" /> 
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                <BasicDialogCard header="A success message!" />   
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                <BasicDialogCard header="An HTML message" />   
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                <BasicDialogCard header="A message with a custom icon" />   
               </div>
               <div className="col-lg-4 col-md-6 col-sm-12">
                <BasicDialogCard header="A message with auto close timer" />   
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12">
               <BasicDialogCard header="A warning message, with a function attached to the Confirm button..." />
               <BasicDialogCard header="A replacement for the prompt function" />   
               </div>
               <div className="col-md-6 col-sm-12">
               <BasicDialogCard header="With a loader (for AJAX request for example)" />
               <BasicDialogCard header="... and by passing a parameter, you can execute something else for Cancel." /> 
               </div>
            </div>
            <Modal 
                    visible={isModal}
                    width="478"
                    effect="fadeInUp"
                    //onClickAway={() => this.closeModal()}
                >
                    <div>
                         <div class="sa-icon sa-success animate" >
                                <span class="sa-line sa-tip animateSuccessTip"></span>
                                <span class="sa-line sa-long animateSuccessLong"></span>

                                <div class="sa-placeholder"></div>
                                <div class="sa-fix"></div>
                        </div>
                        <h2>Here's a message!</h2>
                        {/* <p>Some Contents</p> */}
                        
                        <a href="javascript:void(0);" className="btn btn-secondary" onClick={() => { this.setState({ isModal:false }) }}>Ok</a>
                    </div>
                </Modal>
        </div>
    
    );
  }
}
export default DialogsUI;
