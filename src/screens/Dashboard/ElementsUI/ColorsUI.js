import React from "react";

import Header from "../../../Components/Common/Header";
import ColorsCard from "../../../Components/ElementsUI/ColorsCard";
import ContextualTextColorsCard from "../../../Components/ElementsUI/ContextualTextColorsCard";
import BackgroundColorCard from "../../../Components/ElementsUI/BackgroundColorCard";
import BackgroundGradientColorCard from "../../../Components/ElementsUI/BackgroundGradientColorCard";

class ColorsUI extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Colors" mainNavigate="UI Elements" currentPage="Colors"/>
            <div className="row clearfix">
               <div className="col-lg-6 col-md-12">
                    <ColorsCard />
               </div>
               <div className="col-lg-6 col-md-12">
                    <ContextualTextColorsCard />
               </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <BackgroundColorCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <BackgroundGradientColorCard />
                </div>
            </div>
        </div>
    
    );
  }
}
export default ColorsUI;
