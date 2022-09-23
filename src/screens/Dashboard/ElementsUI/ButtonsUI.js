import React from "react";
import Header from "../../../Components/Common/Header";
import ButtonsTypeCard from "../../../Components/ElementsUI/ButtonsTypeCard";
import ButtonTagsCard from "../../../Components/ElementsUI/ButtonTagsCard";
import ButtonsOutlineCard from "../../../Components/ElementsUI/ButtonsOutlineCard";
import ButtonGroupCard from "../../../Components/ElementsUI/ButtonGroupCard";
import ButtonListCard from "../../../Components/ElementsUI/ButtonListCard";

class ButtonsUI extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Buttons" mainNavigate="UI Elements" currentPage="Buttons "/>
            <div className="row clearfix">
               <div className="col-lg-12">
                    <ButtonsTypeCard />
               </div>
               <div className="col-lg-12">
                    <ButtonTagsCard />
               </div>
               <div className="col-lg-12">
                    <ButtonsOutlineCard />
               </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <ButtonGroupCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <ButtonListCard />
                </div>
            </div>
        </div>
    
    );
  }
}
export default ButtonsUI;
