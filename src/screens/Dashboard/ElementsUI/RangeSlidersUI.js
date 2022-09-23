import React from "react";
import Header from "../../../Components/Common/Header";
import RoundRangeSlidersDefaultCard from "../../../Components/ElementsUI/RoundRangeSlidersDefaultCard";
import RoundRangeSlidersCard from "../../../Components/ElementsUI/RoundRangeSlidersCard";
import MaterialDesignStyleRangeSlidersCard from "../../../Components/ElementsUI/MaterialDesignStyleRangeSlidersCard";
import TabsWithOnlyIconTitleCard from "../../../Components/ElementsUI/TabsWithOnlyIconTitleCard";

import "../../../asset/vendor/material-rangeslider/style.css"

class RangeSlidersUI extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Range Sliders" mainNavigate="UI Elements" currentPage="Range Sliders"/>
            <div className="row clearfix">
               <div className="col-md-12">
                    <RoundRangeSlidersDefaultCard />
               </div>
               <div className="col-md-12">
                    <RoundRangeSlidersCard />
               </div>
            </div>
            <div className="row clearfix">
              <div className="col-md-12">
                  <MaterialDesignStyleRangeSlidersCard />
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-md-12">
                  <TabsWithOnlyIconTitleCard />
              </div>
            </div>
           
            
        </div>
    
    );
  }
}
export default RangeSlidersUI;
