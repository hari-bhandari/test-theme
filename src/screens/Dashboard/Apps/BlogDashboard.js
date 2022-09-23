import React from "react";

import Header from "../../../Components/Common/Header";
import BlogSparkelCard from "../../../Components/Apps/BlogSparkelCard";
import BlogPieCard from "../../../Components/Apps/BlogPieCard";
import ReturnVisitorCard from "../../../Components/Apps/ReturnVisitorCard";
import BounceRateCard from "../../../Components/Apps/BounceRateCard";
import BlogVisitorsStatisticsCard from "../../../Components/Apps/BlogVisitorsStatisticsCard";
import BlogMarketingCampaignCard from "../../../Components/Apps/BlogMarketingCampaignCard";
import {blogsparkleCardData,blogPieCardData} from "../../../Data/AppData";

class BlogDashboard extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Dashboard" mainNavigate="App" currentPage="Blog"/>
            <div className="row clearfix row-deck">
                {
                    blogsparkleCardData.map((data,i)=>{
                        return <BlogSparkelCard
                                key={i}
                                heading={data.heading}
                                perText={data.perText}
                                money={data.money}
                                icon={data.icon}
                                sparklineData={data.sparklineData}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix row-deck">
                {
                    blogPieCardData.map((data,i)=>{
                        return <BlogPieCard
                                key={"key"+i}
                                heading={data.heading}
                                per={data.per}
                                value={data.value}
                                color={data.color}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix row-deck">
                <ReturnVisitorCard />
                <BounceRateCard />
            </div>
            <div className="row clearfix row-deck">
                <BlogVisitorsStatisticsCard />
                <BlogMarketingCampaignCard />
            </div>
        </div>
    
    );
  }
}
export default BlogDashboard
