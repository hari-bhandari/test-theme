import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class CallbackEventsCard extends React.Component {
    notify(type){
        toast.info("Please Click me",{
            position: type,
            autoClose: 5000,
            closeOnClick:true
        });
    }
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Callback Events</h2>
                        </div>
                        <div class="body">
                            <button type="button" onClick={()=>this.notify("bottom-right")} class="btn btn-default btn-toastr-callback mr-1" id="toastr-callback1" data-context="info" data-message="onShown and onHidden callback demo">onShown and onHidden</button>
                            <button type="button" onClick={()=>this.notify("bottom-right")} class="btn btn-default btn-toastr-callback mr-1" id="toastr-callback2" data-context="info" data-message="Please click me">onclick</button>
                            <button type="button" onClick={()=>this.notify("bottom-right")} class="btn btn-default btn-toastr-callback" id="toastr-callback3" data-context="info" data-message="Please click close button">onCloseClick</button>
                        </div>
                    </div>
    );
  }
}
export default CallbackEventsCard
