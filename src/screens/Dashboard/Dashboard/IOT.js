import React from "react";
import Header from "../../../Components/Common/Header";
import SparkleCard from "../../../Components/Dashboard/SparkleCard";
import SpendingbyYearIOT from "../../../Components/Dashboard/SpendingbyYearIOT";
import TempratureCard from "../../../Components/Dashboard/TempratureCard";
import UsedCardIOT from "../../../Components/Dashboard/UsedCardIOT";
import SwitchCardOIT from "../../../Components/Dashboard/SwitchCardOIT";
import {iOTSparkleCardData,OITSwitchCard} from "../../../Data/AnalyticalData";

class IOT extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="IOT Dashboard" mainNavigate="Dashboard" currentPage="IOT" />
            <div className="row clearfix row-deck">
            {
                iOTSparkleCardData.map((data,i)=>{
                    return <SparkleCard key={i} seriesData={data.sparklineData} height={data.height} heading = {data.heading} money={data.money} />
                })
            }
              <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="card">
                        <div className="body d-flex justify-content-between">
                            <div>
                                <h6 className="mb-0">Security System</h6>
                                <small className="text-success">Triggered</small><small className="text-danger d-none">Loosed</small>
                            </div>
                            <div>
                                <button className="btn btn-outline-danger" type="button">Loose</button>
                                <button className="btn btn-outline-success d-none" type="button">Trigger</button>
                            </div>
                        </div>
                        <hr />
                        <div className="body d-flex justify-content-between">
                            <div>
                                <h6 className="mb-0">Main Gate</h6>
                                <small className="text-success d-none">Closed</small><small className="text-danger">Opened</small>
                            </div>
                            <div>
                                <button className="btn btn-outline-danger d-none" type="button">Open</button>
                                <button className="btn btn-outline-success" type="button">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row clearfix row-deck">
                <SpendingbyYearIOT />
                <TempratureCard />
                <UsedCardIOT />
            </div>
            <div className="row clearfix row-deck">
                {
                    OITSwitchCard.map((data,i)=>{
                        return <SwitchCardOIT
                                    key={i}
                                    header={data.header}
                                    switches={data.switches}
                                 />
                    })
                }
                
            </div>
        </div>
    
    );
  }
}
export default IOT
