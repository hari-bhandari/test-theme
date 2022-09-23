import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class PopupPositionsCard extends React.Component {
    notify(type){
        toast.info("Hi I'm here",{
            position: type,
            autoClose: 5000,
        });
    }
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Popup Positions</h2>
        </div>
        <div class="body">
            <button type="button" onClick={()=>this.notify("bottom-right")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="bottom-right">Bottom Right</button>
            <button type="button" onClick={()=>this.notify("bottom-left")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="bottom-left">Bottom Left</button>
            <button type="button" onClick={()=>this.notify("top-left")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="top-left">Top Left</button>
            <button type="button" onClick={()=>this.notify("top-right")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="top-right">Top Right</button>
            <button type="button" onClick={()=>this.notify("top-center")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="top-full-width">Top Full Width</button>
            <button type="button" onClick={()=>this.notify("bottom-center")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="bottom-full-width">Bottom Full Width</button>
            <button type="button" onClick={()=>this.notify("top-center")} class="btn btn-default btn-toastr mr-1" data-context="info" data-message="Hi, I'm here" data-position="top-center">Top Center</button>
            <button type="button" onClick={()=>this.notify("bottom-center")} class="btn btn-default btn-toastr" data-context="info" data-message="Hi, I'm here" data-position="bottom-center">Bottom Center</button>
        </div>
    </div>
    );
  }
}
export default PopupPositionsCard
