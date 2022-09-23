import React from "react";
import Header from "../../../Components/Common/Header";
import HeaderCard from "../../../Components/ElementsUI/HeaderCard";
import ParagraphCard from "../../../Components/ElementsUI/ParagraphCard";
import TextStyleCard from "../../../Components/ElementsUI/TextStyleCard";
import OtherStyleCard from "../../../Components/ElementsUI/OtherStyleCard";

class TypographyUI extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Typography" mainNavigate="UI Elements" currentPage="Typography "/>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12">
                    <HeaderCard />
                </div>
                <div className="col-lg-12 col-md-12">
                    <ParagraphCard />
                </div>
                <div className="col-lg-12 col-md-12">
                    <TextStyleCard />
                </div>
                <div className="col-lg-12 col-md-12">
                    <OtherStyleCard />
                </div>
            </div>
        </div>
    
    );
  }
}
export default TypographyUI;
