import React from "react";

import Header from "../../../Components/Common/Header";
import CalendarCard from "../../../Components/Apps/CalendarCard";
import AppUserCard from "../../../Components/Apps/AppUserCard";
import {events} from "../../../Data/AppData";

class Calendar extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Calendar" mainNavigate="App" currentPage="Calendar" />
            <div className="row clearfix row-deck">
              <CalendarCard
               />
               <AppUserCard />
            </div>
        </div>
    
    );
  }
}
export default Calendar
