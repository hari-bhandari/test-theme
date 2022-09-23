import React from "react";
import Header from "../../../Components/Common/Header";
import FirstCardDemographic from "../../../Components/Dashboard/FirstCardDemographic";
import HouseholdIncomeCardDemographic from "../../../Components/Dashboard/HouseholdIncomeCardDemographic";
import ConversionCardDemographic from "../../../Components/Dashboard/ConversionCardDemographic";
import {DemographicFirstCardData} from "../../../Data/AnalyticalData";
import ChannelsCardDemographic from "../../../Components/Dashboard/ChannelsCardDemographic";
import ConversionGenderCardDemographic from "../../../Components/Dashboard/ConversionGenderCardDemographic";
import MapCardDemographic from "../../../Components/Dashboard/MapCardDemographic";

class Demographic extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Demographic" mainNavigate="Dashboard" currentPage="Demographic" />
            <div className="row clearfix row-deck">
                {
                    DemographicFirstCardData.map((data,i)=>{
                            return <FirstCardDemographic
                                    key={i}
                                    header={data.header}
                                    money={data.money}
                                    per={data.per}
                                    back={data.back}
                                    status={data.status}
                                     />
                    })
                }
                
            </div>
            <div className="row clearfix row-deck">
                <HouseholdIncomeCardDemographic />
                <ConversionCardDemographic />
                <ChannelsCardDemographic />
            </div>
            <div className="row clearfix row-deck">
                <ConversionGenderCardDemographic />
                <MapCardDemographic />
            </div>

        </div>
    
    );
  }
}
export default Demographic
