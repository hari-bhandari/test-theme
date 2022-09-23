import React from "react";
import Header from "../../../Components/Common/Header";
import SimpleLineIconsCard from "../../../Components/ElementsUI/SimpleLineIconsCard";
import FontAwesomeIconCard from "../../../Components/ElementsUI/FontAwesomeIconCard";
import WeatherIconsCard from "../../../Components/ElementsUI/WeatherIconsCard";

class IconsUI extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Icons UI" mainNavigate="UI Elements" currentPage="Icons UI"/>
            <div className="row clearfix">
              <div className="col-md-12">
                <SimpleLineIconsCard />
                <FontAwesomeIconCard />
                <WeatherIconsCard />
              </div>
            </div>
          
        </div>
    
    );
  }
}
export default IconsUI;
