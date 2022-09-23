import React from "react";
import Header from "../../../Components/Common/Header";
import BasicListGroup from "../../../Components/ElementsUI/BasicListGroup";
import ActivatedListGroup from "../../../Components/ElementsUI/ActivatedListGroup";
import DisabledListGroupCard from "../../../Components/ElementsUI/DisabledListGroupCard";
import LinksAndButtonsListCard from "../../../Components/ElementsUI/LinksAndButtonsListCard";
import FlushListGroupCard from "../../../Components/ElementsUI/FlushListGroupCard";
import ListGroupWithbadges from "../../../Components/ElementsUI/ListGroupWithbadges";
import ListGroupColor from "../../../Components/ElementsUI/ListGroupColor";
import CustomContentListGroup from "../../../Components/ElementsUI/CustomContentListGroup";

class ListGroupUI extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="List Group" mainNavigate="UI Elements" currentPage="List Group"/>
            <div className="row clearfix">
               <div className="col-md-12">
                 <BasicListGroup />
               </div>
            </div>
            <div className="row clearfix">
               <div className="col-lg-6 col-md-12">
                    <ActivatedListGroup />
               </div>
               <div className="col-lg-6 col-md-12">
                    <DisabledListGroupCard />
               </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <LinksAndButtonsListCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
                    <FlushListGroupCard />
                </div>
                <div className="col-lg-6 col-md-12">
                    <ListGroupWithbadges />
                </div>
            </div>
            <div className="row clearfix">
               <div className="col-md-12">
                 <ListGroupColor />
                 <CustomContentListGroup />
               </div>
            </div>
        </div>
    
    );
  }
}
export default ListGroupUI;
