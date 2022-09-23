import React from "react";
import Header from "../../../Components/Common/Header";
import TopProductsCard from "../../../Components/Widgets/TopProductsCard";
import TotalSaleCard from "../../../Components/Widgets/TotalSaleCard";
import IncomeAnalysisCard from "../../../Components/Widgets/IncomeAnalysisCard";
import VisitorsStatisticsCard from "../../../Components/Widgets/VisitorsStatisticsCard";
import LineChartCard from "../../../Components/Widgets/LineChartCard";
import CommerceDepartmentCard from "../../../Components/Widgets/CommerceDepartmentCard";
import LineChartCard2 from "../../../Components/Widgets/LineChartCard2";
import SplarkelProjectCard from "../../../Components/Widgets/SplarkelProjectCard";
import VisitTrafficCard from "../../../Components/Widgets/VisitTrafficCard";
import DonutChartCard from "../../../Components/Widgets/DonutChartCard";
import DailySalesCard from "../../../Components/Widgets/DailySalesCard";
import OurLocationCard from "../../../Components/Widgets/OurLocationCard";
import BTCCard from "../../../Components/Widgets/BTCCard";

class ChartWidgets extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Chart Widgets" mainNavigate="Widgets" currentPage="Chart"/>
            <div className="row clearfix">
               <TopProductsCard />
               <TotalSaleCard />
               <IncomeAnalysisCard />
            </div>
            <div className="row clearfix">
              <VisitorsStatisticsCard />
            </div>
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <LineChartCard />
                <CommerceDepartmentCard />
              </div>
              <div className="col-lg-8 col-md-12">
                  <LineChartCard2 />
                  <div className="row clearfix">
                    <SplarkelProjectCard
                      name="A"
                      seriesData={{
                        type: 'line',
                        data:[6,1,3,3,6,3,2,2,8],
                        areaStyle:{
                          color: "#7868da",
                        },
                        itemStyle: {
                            color: "#7868da",
                        },
                        symbolSize: 1,
                      }}
                     />
                     <SplarkelProjectCard
                      name="B"
                      seriesData={{
                        type: 'line',
                        data:[6,4,7,8,4,3,2,2,5,7,4,1,5,7,9,9,8],
                        areaStyle:{
                          color: "#f55c78",
                        },
                        itemStyle: {
                            color: "#f55c78",
                        },
                        symbolSize: 1,
                      }}
                     />
                  </div>
              </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                <VisitTrafficCard />
                </div>
                <div className="col-lg-8 col-md-12">
                    <DonutChartCard />
                    <DailySalesCard />
                </div>

            </div>
            <div className="row clearfix">
                  <OurLocationCard />
                  <BTCCard />
            </div>
        </div>
    
    );
  }
}
export default ChartWidgets;
