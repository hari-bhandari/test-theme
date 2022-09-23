import React from "react";
import Header from "../../../Components/Common/Header";
import ChatCard from "../../../Components/Apps/ChatCard";
import "../../../asset/css/chatapp.css"

class Chat extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Inbox" mainNavigate="App" currentPage="Chat" />
            <div className="row clearfix ">
              <ChatCard />
              
            </div>
        </div>
    
    );
  }
}
export default Chat
