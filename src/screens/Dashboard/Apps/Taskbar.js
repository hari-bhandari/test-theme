import React from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';
import Header from "../../../Components/Common/Header";
import {constacCardData} from "../../../Data/AppData";

class Taskbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dropable: [
                {
                  type: "drophere",
                  Data: "#L1011"
                },
                {
                    type: "drophere",
                    Data: "#L1008"
                  }
              ],
              progress: [
                {
                  type: "drophere",
                  Data: "#L1010"
                },
          
              ],
              copmplete: [
                {
                  type: "drophere",
                  Data: "#L1005"
                },
               
              ]
        }
    }
    onDropPlanned(data) {
        const {dropable,progress,copmplete} = this.state;
        var dropab = dropable.filter(
            item => item.Data !== data.drophere
          );
        dropab.push({
            type: "drophere",
            Data: data.drophere
            });
        console.log(data)

        const filteredprogress = progress.filter(
            item => item.Data !== data.drophere
          );
        
          const filteredcopmplete = copmplete.filter(
            item => item.Data !== data.drophere
          );


        this.setState({
            dropable:[...dropab],
            progress:[...filteredprogress],
            copmplete:[...filteredcopmplete]
        })
        // => banana 
    }
    onDropProgress(data){
        const {dropable,progress,copmplete} = this.state;
        var dropab = progress.filter(
            item => item.Data !== data.drophere
          );
        dropab.push({
            type: "drophere",
            Data: data.drophere
            });
        console.log(data)

        const filteredprogress = dropable.filter(
            item => item.Data !== data.drophere
          );
        
          const filteredcopmplete = copmplete.filter(
            item => item.Data !== data.drophere
          );


        this.setState({
            progress:[...dropab],
            dropable:[...filteredprogress],
            copmplete:[...filteredcopmplete]
        })
    }

    onDropCompleted(data){
        const {dropable,progress,copmplete} = this.state;
        var dropab = copmplete.filter(
            item => item.Data !== data.drophere
          );
        dropab.push({
            type: "drophere",
            Data: data.drophere
            });
        console.log(data)

        const filteredprogress = dropable.filter(
            item => item.Data !== data.drophere
          );
        
          const filteredcopmplete = progress.filter(
            item => item.Data !== data.drophere
          );


        this.setState({
            copmplete:[...dropab],
            dropable:[...filteredprogress],
            progress:[...filteredcopmplete]
        })
    }

  render() {
      const { dropable,progress,copmplete} = this.state;
    return (
        <div className="container-fluid">
            <Header headerText="Taskbar" mainNavigate="App" currentPage="Taskbar" />
            <div className="row clearfix row-deck">
                <div className="col-lg-4 col-md-12">
                        <div className="card planned_task">
                            <div className="header">
                                <h2>Planned</h2>
                            </div>
                            <Droppable
                                key={"1"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <ul className="body taskboard">
                                        {
                                            dropable.map((data,i)=>{
                                                return (
                                                    <Draggable key={i} type={data.type} data={data.Data}>
                                                        <li>
                                                            {
                                                            data.Data === "#L1011"? this.oneTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1008"? this.twoTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1010"? this.threeTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1005"? this.fourTabel() :null
                                                            }
                                                        </li>
                                                    </Draggable> 
                                                )
                                            })
                                        }
                                        {
                                            dropable.length === 0?<div className="dd" data-plugin="nestable">
                                
                                            <div className="dd-empty"></div></div>:null
                                        }
                                    </ul>
                                                                               
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card progress_task">
                            <div className="header">
                                <h2>In progress</h2>
                            </div>
                            <Droppable
                                key={"2"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropProgress.bind(this)}
                                >
                                    <ul className="body taskboard">
                                        {
                                            progress.map((data,i)=>{

                                                return (
                                                    <Draggable key={i} type={data.type} data={data.Data}>
                                                        <li>
                                                            {
                                                            data.Data === "#L1011"? this.oneTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1008"? this.twoTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1010"? this.threeTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1005"? this.fourTabel() :null
                                                            }
                                                        </li>
                                                    </Draggable> 
                                                )
                                            })
                                        }
                                         {
                                            progress.length === 0?<div className="dd" data-plugin="nestable">
                                
                                            <div className="dd-empty"></div></div>:null
                                        }
                                        </ul> 
                                        <ul className="Smoothie"></ul>  
                            </Droppable>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="card completed_task">
                            <div className="header">
                                <h2>Completed</h2>
                            </div>
                            <Droppable
                                key={"3"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropCompleted.bind(this)}
                                >
                                        <ul className="body taskboard">
                                        {
                                            copmplete.map((data,i)=>{
                                                return (
                                                    <Draggable key={i} type={data.type} data={data.Data}>
                                                        <li>
                                                            {
                                                            data.Data === "#L1011"? this.oneTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1008"? this.twoTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1010"? this.threeTabel() :null
                                                            }
                                                            {
                                                                data.Data === "#L1005"? this.fourTabel() :null
                                                            }
                                                        </li>
                                                    </Draggable> 
                                                )
                                            })
                                        }
                                        {
                                            copmplete.length === 0?<div className="dd" data-plugin="nestable">
                                
                                            <div className="dd-empty"></div></div>:null
                                        }
                                        </ul>  
                                        <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
            </div>
        </div>
    
    );
  }
  oneTabel(){
    return(
        <li className="dd-item" data-id="1">
                                        <div className="dd-handle">#L1011</div>
                                        <div className="dd-content p-15">
                                            <h5>Job title</h5>
                                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero</p>
                                            <ul className="list-unstyled team-info m-t-20 m-b-20">
                                                <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                <li><img src={require("../../../asset/images/xs/avatar7.jpg")} title="Avatar" alt="Avatar" /></li>
                                                <li><img src={require("../../../asset/images/xs/avatar9.jpg")} title="Avatar" alt="Avatar" /></li>
                                            </ul>
                                            <hr />
                                            <div className="action">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                                                <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                                            </div>
                                        </div>
         </li>
    )
  }
  twoTabel(){
      return (
        <li className="dd-item" data-id="1">
        <div className="dd-handle">#L1008</div>
        <div className="dd-content p-15">
            <h5>Job title</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <ul className="list-unstyled team-info m-t-20 m-b-20">
                <li className="m-r-15"><small className="text-muted">Team</small></li>
                <li><img src={require("../../../asset/images/xs/avatar1.jpg")} title="Avatar" alt="Avatar"/></li>
                <li><img src={require("../../../asset/images/xs/avatar2.jpg")} title="Avatar" alt="Avatar"/></li>
                <li><img src={require("../../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar"/></li>
            </ul>
            <hr />
            <div className="action">
                <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
            </div>
        </div>
    </li>
      )
  }
  threeTabel(){
        return (
            <li className="dd-item" data-id="1">
            <div className="dd-handle">#L1010</div>
            <div className="dd-content p-15">
                <h5>Job title</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <hr />
                <div className="action">
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                    <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                    <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                </div>
            </div>
        </li>
        )
    }

    fourTabel(){
        return (
            <li className="dd-item" data-id="1">
                                        <div className="dd-handle">#L1005</div>
                                        <div className="dd-content p-15">
                                            <h5>Job title</h5>
                                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                            <ul className="list-unstyled team-info m-t-20 m-b-20">
                                                <li className="m-r-15"><small className="text-muted">Team</small></li>
                                                <li><img src={require("../../../asset/images/xs/avatar4.jpg")} title="Avatar" alt="Avatar"/></li>
                                                <li><img src={require("../../../asset/images/xs/avatar5.jpg")} title="Avatar" alt="Avatar"/></li>
                                                <li><img src={require("../../../asset/images/xs/avatar6.jpg")} title="Avatar" alt="Avatar"/></li>
                                                <li><img src={require("../../../asset/images/xs/avatar8.jpg")} title="Avatar" alt="Avatar"/></li>
                                            </ul>
                                            <hr/>
                                            <div className="action">
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Edit"><i className="icon-note"></i></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Time"><i className="icon-clock"></i></button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary" title="Comment"><i className="icon-bubbles"></i></button>
                                                <button type="button" data-type="confirm" className="btn btn-sm btn-outline-danger float-right js-sweetalert" title="Delete"><i className="icon-trash"></i></button>
                                            </div>
                                        </div>
                                    </li>
        )
    }
}

   
export default Taskbar;
