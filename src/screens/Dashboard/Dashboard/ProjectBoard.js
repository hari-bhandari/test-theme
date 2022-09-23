import React from "react";
import Header from "../../../Components/Common/Header";
import SparkleCard2 from "../../../Components/Dashboard/SparkleCard2";
import WorkReportCard from "../../../Components/Dashboard/WorkReportCard";
import SectorReportCard from "../../../Components/Dashboard/SectorReportCard";
import ToDoListCard from "../../../Components/Dashboard/ToDoListCard";
import WorkloadbyTeam from "../../../Components/Dashboard/WorkloadbyTeam";
import ProjectBoardPieCard from "../../../Components/Dashboard/ProjectBoardPieCard";
import ProjectListCard from "../../../Components/Dashboard/ProjectListCard";
import {splarkelDataProjectBoard,projectListData} from "../../../Data/AnalyticalData";

class ProjectBoard extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Project Board" mainNavigate="Dashboard" currentPage="Project Board" />
            <div className="row clearfix row-deck">
              <div className="col-lg-6 col-md-12">
                <div className="row clearfix row-deck">
                  {
                     splarkelDataProjectBoard.map((data,i)=>{
                      return <SparkleCard2 key={i} seriesData={data.sparklineData} height={data.height} heading = {data.heading} money={data.money} perText={data.perText} />
                      })
                  }
                  <div className="col-lg-6 col-md-12">
                  <WorkReportCard />
                  </div>
                  
                  <SectorReportCard />
                  </div>  
              </div>
              <div className="col-lg-6 col-md-12">
                <ToDoListCard />
              </div>
            </div>
            <div className="row clearfix row-deck">
                  <WorkloadbyTeam />
                  <ProjectBoardPieCard header="Design" TeamLeader="Barbara Kelly" price="29,012" graphColor='rgb(23, 162, 184)' graphValue={73} />
                  <ProjectBoardPieCard header="Development" TeamLeader="Orlando Lentz" price="1,29,201" graphColor='rgb(255, 193, 7)' graphValue={46}/>
            </div>
            <div className="row clearfix">
                  <ProjectListCard  projectData={projectListData}/>
            </div>
            
        </div>
    
    );
  }
}
export default ProjectBoard
