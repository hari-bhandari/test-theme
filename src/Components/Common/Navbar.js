import React from "react";


class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            leftbar:false
        }
    }
  render() {
      
    return (
        <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-brand">
                <button type="button" className="btn-toggle-offcanvas" onClick={()=>{ this.setState({ leftbar:false }); document.body.classList.remove('layout-fullwidth'); }}><i className="fa fa-bars"></i></button>
                <button type="button" className="btn-toggle-fullwidth mr-1" onClick={()=>{
                                                                                    if(this.state.leftbar){
                                                                                        this.setState({ leftbar:false }); document.body.classList.remove('layout-fullwidth'); 
                                                                                    } else {
                                                                                        this.setState({ leftbar:true }); document.body.classList.add('layout-fullwidth'); 
                                                                                    }
                                                                                    

                                                                                    }}><i className={!this.state.leftbar?`fa fa-bars`:'fa fa-arrow-right'}></i></button>
                <a href="index.html">ICONIC</a>                
            </div>
            
            <div className="navbar-right">
                <form id="navbar-search" className="navbar-form search-form">
                    <input className="form-control" placeholder="Search here..." type="text" />
                    <button type="button" className="btn btn-default"><i className="icon-magnifier"></i></button>
                </form>                

                <div id="navbar-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                                <i className="fa fa-bell"></i>
                                <span className="notification-dot"></span>
                            </a>
                            <ul className="dropdown-menu notifications">
                                <li className="header"><strong>You have 4 new Notifications</strong></li>
                                <li>
                                    <a href="#">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-info text-warning"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Campaign <strong>Holiday Sale</strong> is nearly reach budget limit.</p>
                                                <span className="timestamp">10:00 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>                               
                                <li>
                                    <a href="#">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-like text-success"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Your New Campaign <strong>Holiday Sale</strong> is approved.</p>
                                                <span className="timestamp">11:30 AM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                 <li>
                                    <a href="#">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-pie-chart text-info"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Website visits from Twitter is 27% higher than last week.</p>
                                                <span className="timestamp">04:00 PM Today</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="media">
                                            <div className="media-left">
                                                <i className="icon-info text-danger"></i>
                                            </div>
                                            <div className="media-body">
                                                <p className="text">Error on website analytics configurations</p>
                                                <span className="timestamp">Yesterday</span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="footer"><a href="#" className="more">See all notifications</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="page-login.html" className="icon-menu"><i className="fa fa-power-off"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    );
  }
}
export default Navbar
