import React from "react";

import Header from "../../../Components/Common/Header";
import MessageContextCard from "../../../Components/ElementsUI/MessageContextCard";
import PopupPositionsCard from "../../../Components/ElementsUI/PopupPositionsCard";
import CallbackEventsCard from "../../../Components/ElementsUI/CallbackEventsCard";

class NotificationsUI extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Notifications" mainNavigate="UI Elements" currentPage="Notifications"/>
            <div className="row clearfix">
               <div className="col-lg-12">
                    <MessageContextCard />
               </div>
            </div>
            <div className="row clearfix">
               <div className="col-lg-12">
                    <PopupPositionsCard />
               </div>
            </div>
            <div className="row clearfix">
               <div className="col-lg-12">
                    <CallbackEventsCard />
               </div>
            </div>
            
        </div>
    
    );
  }
}
export default NotificationsUI;
