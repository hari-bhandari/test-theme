import React from "react";
import Header from "../../../Components/Common/Header";
import DefaultProgressBarsCard from "../../../Components/ElementsUI/DefaultProgressBarsCard";
import ProgressBarsCard from "../../../Components/ElementsUI/ProgressBarsCard";
import GredientsProgressBarsCard from "../../../Components/ElementsUI/GredientsProgressBarsCard";

import "../../../asset/vendor/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.css"
class ProgressBarsUI extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Progress Bars" mainNavigate="UI Elements" currentPage="Progress Bars"/>
            <div className="row clearfix">
               <div className="col-md-12">
                    <DefaultProgressBarsCard />
               </div>
               <div className="col-md-12">
                    <ProgressBarsCard />
               </div>
               <div className="col-md-12">
                    <GredientsProgressBarsCard />
               </div>
            </div>
           
            
        </div>
    
    );
  }
}
export default ProgressBarsUI;
