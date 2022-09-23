import React from "react";

import Header from "../../../Components/Common/Header";
import ContactComCard from "../../../Components/Apps/ContactComCard";
import ContacAddCard from "../../../Components/Apps/ContacAddCard";
import {constacCardData} from "../../../Data/AppData";

class ContactCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            addModal:false
        }
    }
  render() {
      const { addModal} = this.state;
    return (
        <div className="container-fluid">
            <Header headerText="Contact List" mainNavigate="App" currentPage="Contact List" hideDownload hideSend showGrid showAdd onAdd={()=>{ this.setState({ addModal:true }) }}/>
            <div className="row clearfix row-deck">
                {
                    constacCardData.map((data,i)=>{
                        return < ContactComCard
                                    key={i}
                                    name={data.name}
                                    imageUrl={data.imageUrl}
                                 />
                    })
                }
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body text-center">
                            <div className="p-t-65 p-b-65">
                                <h6>Add New Contact</h6>                                
                                <button type="button" className="btn btn-outline-primary" onClick={()=>{ this.setState({ addModal:true }) }} data-toggle="modal" data-target="#addcontact"><i className="fa fa-plus-circle"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContacAddCard show={this.state.addModal} onClose={()=>{ this.setState({ addModal:false }) }} />
        </div>
    
    );
  }
}
export default ContactCard
