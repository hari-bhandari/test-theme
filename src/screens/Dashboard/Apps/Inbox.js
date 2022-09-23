import React from "react";
import Header from "../../../Components/Common/Header";
import InboxCard from "../../../Components/Apps/InboxCard";
import ComposeMailCard from "../../../Components/Apps/ComposeMailCard";
import "../../../asset/css/inbox.css"

class Inbox extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isCompose:false
        }
    }
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Inbox" mainNavigate="App" currentPage="Inbox" childNav={this.state.isCompose?"Compose":""} />
            <div className="row clearfix ">
              {this.state.isCompose? <ComposeMailCard onCancel={()=>{ this.setState({isCompose:false}) }} /> :<InboxCard onCompose={()=>{ this.setState({isCompose:true}) }} />}
              
            </div>
        </div>
    
    );
  }
}
export default Inbox
