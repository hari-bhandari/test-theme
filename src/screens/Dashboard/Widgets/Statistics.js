import React from "react";
import Header from "../../../Components/Common/Header";
import {StatisticsItemCardData,sparkleCardData,MultiChartCardData,ProgressCardData,AverageCardData,PropertiesDetailsCardData,StatisticsPieCardData,StatisticsSparkleCardData,StatisticsServerCardData} from "../../../Data/WidgetsData";
import StatisticsItemCard from "../../../Components/Widgets/StatisticsItemCard";
import WidgetsSparkleCard from "../../../Components/Widgets/WidgetsSparkleCard";
import MultiChartCard from "../../../Components/Widgets/MultiChartCard";
import ProgressCard from "../../../Components/Widgets/ProgressCard";
import AverageCard from "../../../Components/Widgets/AverageCard";
import PropertiesDetailsCard from "../../../Components/Widgets/PropertiesDetailsCard";
import StatisticsPieCard from '../../../Components/Widgets/StatisticsPieCard';
import StatisticsSparkleCard from '../../../Components/Widgets/StatisticsSparkleCard';
import StatisticsServerCard from "../../../Components/Widgets/StatisticsServerCard";


class Statistics extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Statistics Widgets" mainNavigate="Widgets" currentPage="Statistics"/>
            <div className="row clearfix">
                {
                    StatisticsItemCardData.map((data,i)=>{
                        return <StatisticsItemCard
                                    key={i+'item'}
                                    header={data.header}
                                    value={data.value}
                                    back={data.back}
                                />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    sparkleCardData.map((data,i)=>{
                       return <WidgetsSparkleCard
                                heading={data.heading}
                                money={data.money}
                                perText={data.perText}
                                seriesData={data.sparklineData}
                                height={50}
                                />
                    })
                }
            </div>
            <div className="row clearfix">
                {
                    MultiChartCardData.map((data,i)=>{
                        return <MultiChartCard
                                heading={data.heading}
                                paddingRight={data.paddingRight}
                                marginBottom={data.marginBottom}
                                value={data.value}
                                seriesData={data.sparklineData}
                                icon={data.icon}
                                height={50}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    ProgressCardData.map((data,i)=>{
                       return <ProgressCard
                         seriesData={data.seriesData}
                         header={data.header}
                         value={data.value}
                         />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    AverageCardData.map((data,i)=>{
                        return <AverageCard
                                    key={i}
                                    seriesData={data.seriesData}
                                    value={data.value}
                                    header={data.header}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    PropertiesDetailsCardData.map((data,i)=>{
                        return <PropertiesDetailsCard
                                    key={i}
                                    header={data.header}
                                    value={data.value}
                                    icon={data.icon}
                                 />
                    })
                }
                    
            </div>
            <div className="row clearfix">
                {
                    StatisticsPieCardData.map((data,i)=>{
                        return <StatisticsPieCard
                                    key={i}
                                    graphColor={data.graphColor}
                                    graphValue={data.graphValue}
                                    header={data.header}
                                    per={data.per}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    StatisticsSparkleCardData.map((data,i)=>{
                        return <StatisticsSparkleCard
                                    key={i}
                                    heading={data.heading}
                                    money={data.money}
                                    seriesData={data.sparklineData}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix">
                {
                    StatisticsServerCardData.map((data,i)=>{
                        return <StatisticsServerCard
                                    key={i}
                                    header={data.header}
                                    value={data.value}
                                    per={data.per}
                                    outOff={data.outOff}
                                    barValue={data.barValue}
                                    barType={data.barType}
                                 />
                    })
                }
                
            </div>
            <div className="row clearfix">
                <div className="col-lg-12">
                    <div className="card text-center">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="fa fa-eye fa-2x"></i>
                                        <h4>2,365</h4>
                                        <span>Post View</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="fa fa-thumbs-o-up fa-2x"></i>
                                        <h4>365</h4>
                                        <span>Likes</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="fa fa-comments fa-2x"></i>
                                        <h4>65</h4>
                                        <span>Comments</span>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-6">
                                    <div className="body">
                                        <i className="fa fa-user fa-2x"></i>
                                        <h4>2,055</h4>
                                        <span>Profile Views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    
    );
  }
}
export default Statistics;
