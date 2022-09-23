import React from "react";
import Header from "../../../Components/Common/Header";
import FileMediaCard from "../../../Components/Apps/FileMediaCard";
import {fileMediaCardData} from "../../../Data/AppData";

class FileMedia extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="File Media" mainNavigate="App" currentPage="File Manager"/>
            <div className="row clearfix">
                {
                    fileMediaCardData.map((data,i)=>{
                        return <FileMediaCard 
                                name={data.name}
                                icon={data.icon}
                                size={data.size}
                                date={data.date}
                                />
                    })
                }
            </div>
        </div>
    
    );
  }
}
export default FileMedia;
