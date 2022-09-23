import React from "react";
import Header from "../../../Components/Common/Header";
import FmDocumentsCard from "../../../Components/Apps/FmDocumentsCard";
import {FmDocumentsCardData} from "../../../Data/AppData";

class Documents extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Documents" mainNavigate="App" currentPage="File Manager"/>
            <div className="row clearfix">
                {
                    FmDocumentsCardData.map((data,i)=>{
                        return <FmDocumentsCard
                                    key={i}
                                    name={data.name}
                                    size={data.size}
                                    icon={data.icon}
                                    date={data.date}

                                 />
                    })
                }
                
            </div>
        </div>
    
    );
  }
}
export default Documents;
