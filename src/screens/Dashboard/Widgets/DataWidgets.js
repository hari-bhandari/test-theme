import React from "react";
import Header from "../../../Components/Common/Header";
import FeedsCard from '../../../Components/Widgets/FeedsCard';
import SubscribeCard from '../../../Components/Widgets/SubscribeCard';
import FollowersCard from '../../../Components/Widgets/FollowersCard';
import ResentChatCard from '../../../Components/Widgets/ResentChatCard';
import TeamCard from '../../../Components/Widgets/TeamCard';
import BrowserStatsCard from "../../../Components/Widgets/BrowserStatsCard";
import TimelineCard from '../../../Components/Widgets/TimelineCard';
import MyStatsCard from "../../../Components/Widgets/MyStatsCard";
import MainMenuCard from '../../../Components/Widgets/MailMenuCard';
import TwitterFeedCard from '../../../Components/Widgets/TwitterFeedCard';
import PricingCard from '../../../Components/Widgets/PricingCard';
import LastCommentsCard from '../../../Components/Widgets/LastCommentsCard';
import ToDoListCardWigets from '../../../Components/Widgets/ToDoListCardWigets';
import WorkReportCard from '../../../Components/Dashboard/WorkReportCard';
import JoinCard from '../../../Components/Widgets/JoinCard';
import InvoiceCard from "../../../Components/Widgets/InvoiceCard";

class DataWidgets extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Data Widgets" mainNavigate="Widgets" currentPage="Data"/>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                    <FeedsCard />
                    <SubscribeCard />
                    <FollowersCard />
                    <ResentChatCard />
                    <TeamCard />
                    <BrowserStatsCard />
                </div>
                <div className="col-lg-4 col-md-12">
                    <TimelineCard />
                    <MyStatsCard />
                    <MainMenuCard />
                    <TwitterFeedCard />
                    <PricingCard />
                </div>
                <div className="col-lg-4 col-md-12">
                    <LastCommentsCard />
                    <ToDoListCardWigets/>
                    <WorkReportCard header="Referrals" />
                    <JoinCard />
                    <InvoiceCard />
                </div>
            </div>
        </div>
    
    );
  }
}
export default DataWidgets;
