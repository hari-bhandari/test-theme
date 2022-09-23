import React from "react";
import Header from "../../../Components/Common/Header";
import AlertMessagesCard from "../../../Components/ElementsUI/AlertMessagesCard";
import AlertMessageswithLinkCard from "../../../Components/ElementsUI/AlertMessageswithLinkCard";
import AlertMessageswithIconCard from "../../../Components/ElementsUI/AlertMessageswithIconCard";
import LabelsCard from "../../../Components/ElementsUI/LabelsCard";
import ModalsCard from "../../../Components/ElementsUI/ModalsCard";
import AccordionCard from "../../../Components/ElementsUI/AccordionCard";
import PaginationCard from "../../../Components/ElementsUI/PaginationCard";
import TooltipsCard from "../../../Components/ElementsUI/TooltipsCard";
import PopoversCard from "../../../Components/ElementsUI/PopoversCard";
import PositionCard from '../../../Components/ElementsUI/PositionCard';
import BordersCard from "../../../Components/ElementsUI/BordersCard";

class BootstrapUI extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Bootstrap UI" mainNavigate="UI Elements" currentPage="Bootstrap UI"/>
            <div className="row clearfix">
               <div className="col-lg-6 col-md-12">
                    <AlertMessagesCard />
               </div>
               <div className="col-lg-6 col-md-12">
                    <AlertMessageswithLinkCard />
               </div>
               <div className="col-lg-12">
                    <AlertMessageswithIconCard />
               </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <LabelsCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <ModalsCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <AccordionCard/>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <PaginationCard/>
                </div>
                <div className="col-lg-12">
                    <TooltipsCard />
                </div>
                <div className="col-lg-12">
                    <PopoversCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <PositionCard/>
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <BordersCard/>
                </div>
            </div>
        </div>
    
    );
  }
}
export default BootstrapUI;
