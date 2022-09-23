import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => toast.info("This is general theme info",{
    position: "bottom-right",
    autoClose: 5000,
});
const notifySuccess = () => toast.success("This is success info",{
  position: "bottom-right",
  autoClose: 5000,
});
const notifyWarning = () => toast.warning("This is warning info",{
  position: "bottom-right",
  autoClose: 5000,
});
const notifyDanger = () => toast.error("This is error info",{
  position: "bottom-right",
  autoClose: 5000,
});

class MessageContextCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="header">
                            <h2>Message Context</h2>
                        </div>
                        <div class="body">
                        <ToastContainer
                        //className="toast toast-info"
                        hideProgressBar={true}
                         >
                         </ToastContainer>
                            <button type="button" onClick={notify} class="btn btn-primary btn-toastr mr-1" data-context="info" data-message="This is general theme info" data-position="bottom-right">General Info</button>
                            <button type="button" onClick={notifySuccess} class="btn btn-success btn-toastr mr-1" data-context="success" data-message="This is success info" data-position="bottom-right">Success Info</button>
                            <button type="button" onClick={notifyWarning} class="btn btn-warning btn-toastr mr-1" data-context="warning" data-message="This is warning info" data-position="bottom-right">Warning Info</button>
                            <button type="button" onClick={notifyDanger} class="btn btn-danger btn-toastr" data-context="error" data-message="This is error info" data-position="bottom-right">Error Info</button>
                        </div>
                    </div>
    );
  }
}
export default MessageContextCard
