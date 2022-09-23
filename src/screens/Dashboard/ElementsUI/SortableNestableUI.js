import React from "react";
import { Draggable, Droppable } from 'react-drag-and-drop';
import Header from "../../../Components/Common/Header";

import "../../../asset/vendor/nestable/jquery-nestable.css"

class SortableNestableUI extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dropable: [
                {
                  type: "drophere",
                  Data: "Founder & Director",
                  class:"dd-handle bg-primary"
                },
                {
                    type: "drophere",
                    Data: "Sales Lead",
                    class:"dd-handle bg-secondary"
                },
                {
                    type: "drophere",
                    Data: "- Project Lead",
                    class:"dd-handle bg-success"
                },
                {
                    type: "drophere",
                    Data: "UI UX Designer",
                    class:"dd-handle bg-danger"
                },
                {
                    type: "drophere",
                    Data: "FrontEnd Developer",
                    class:"dd-handle bg-warning"
                },
                {
                    type: "drophere",
                    Data: "Mobile Lead",
                    class:"dd-handle bg-primary"
                },
              ],
              progress: [
                {
                    type: "drophere",
                    Data: "Founder & Director"
                  },
                  {
                      type: "drophere",
                      Data: "Sales Lead"
                  },
                  {
                      type: "drophere",
                      Data: "- Project Lead"
                  },
                  {
                      type: "drophere",
                      Data: "UI UX Designer"
                  },
                  {
                      type: "drophere",
                      Data: "FrontEnd Developer"
                  },
                  {
                      type: "drophere",
                      Data: "Mobile Lead"
                  },
          
              ],
              copmplete: [
                {
                  type: "drophere",
                  Data: "UI UX Designer"
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
  render() {
    const {dropable} = this.state;
    return (
        <div className="container-fluid">
            <Header headerText="Sortable Nestable" mainNavigate="UI Elements" currentPage="Sortable Nestable"/>
            <div class="row clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Nestable Handle</h2>
                        </div>
                        <div class="body">
                        <Droppable
                                key={"1"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.oneTabel(data.Data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Nestable Handle with Badge</h2>
                        </div>
                        <div class="body">
                        <Droppable
                                key={"2"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.oneTabel(data.Data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Sortable with Background</h2>
                        </div>
                        <div class="body">
                        <Droppable
                                key={"3"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.twoTabel(data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <div class="header">
                            <h2>Sortable With Task List</h2>
                        </div>
                        <div class="body todo_list">
                        <Droppable
                                key={"4"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.threeTabel(data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
            <div class="col-lg-12 col-md-12">
                    <div class="card">
                        <div class="header">
                            <h2>With Project List</h2>
                        </div>
                        <div class="body team_list">
                            <div class="dd" data-plugin="nestable">
                            <Droppable
                                key={"5"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.fourTabel(data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                <div class="card">
                        <div class="header">
                            <h2>Default Example <small>Drag &amp; drop hierarchical list with mouse and touch compatibility</small> </h2>
                        </div>
                        <div class="body">
                            <div class="clearfix m-b-20">
                                <div class="dd">
                                <Droppable
                                key={"6"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.fiveTabel(data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                                </div>
                            </div>
                            <b>Output JSON</b>
                            <textarea className="form-control no-resize">
                            {'[{"id":1},{"id":2,"children":[{"id":3},{"id":4},{"id":5,"children":[{"id":6},{"id":7},{"id":8}]},{"id":9},{"id":10}]},{"id":11},{"id":12}]'}
                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                <div class="card">
                        <div class="header">
                            <h2>Default Example with Dark<small>Drag &amp; drop hierarchical list with mouse and touch compatibility</small> </h2>
                        </div>
                        <div class="body">
                            <div class="clearfix m-b-20">
                                <div class="dd nestable-dark-theme">
                                <Droppable
                                key={"6"}
                                className="dd-list"
                                types={['drophere']}
                                onDrop={this.onDropPlanned.bind(this)}
                                >
                                    <div className="dd nestable-with-handle">
                                        <ol className="dd-list">
                                            {
                                                dropable.map((data,i)=>{
                                                    return (
                                                        <Draggable key={i} type={data.type} data={data.Data}>
                                                            
                                                                {
                                                                data.Data? this.sexTabel(data) :null
                                                                }
                                                            
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {
                                                dropable.length === 0?<div className="dd" data-plugin="nestable">
                                    
                                                <div className="dd-empty"></div></div>:null
                                            }
                                        </ol>
                                    </div>                                           
                                    <ul className="Smoothie"></ul>
                            </Droppable>
                                </div>
                            </div>
                            <b>Output JSON</b>
                            <textarea className="form-control no-resize">
                            {'[{"id":1},{"id":2,"children":[{"id":3},{"id":4},{"id":5,"children":[{"id":6},{"id":7},{"id":8}]},{"id":9},{"id":10}]},{"id":11},{"id":12}]'}
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
  }
  oneTabel(data){
      //console.log(data);
    return(
        <li class="dd-item dd3-item" data-id="2">
                                        <div class="dd-handle dd3-handle"></div>
                                        <div class="dd3-content">{data}</div>
        </li>
    )
  }
  twoTabel(data){
    //console.log(data);
  return(
    <li class="dd-item m-1" data-id="1">
        <div class={data.class+" p-1"}>{data.Data}</div>
    </li>
    )
    }

    threeTabel(data){
        //console.log(data);
      return(
        <li class="dd-item dd3-item" data-id="1">
                                        <div class="dd-handle dd3-handle"></div>
                                        <div class="dd3-content">
                                            <label class="fancy-checkbox">
                                                <input type="checkbox" name="checkbox" checked=""/>
                                                <span><i class=" icon-calendar m-r-5"></i> {data.Data}</span>
                                            </label>
                                        </div>
                                    </li>
        )
        }
   fourTabel(data){
            //console.log(data);
          return(
            <li class="dd-item m-1" data-id="1">
                                        <div class="dd-handle p-1">Sales</div>
                                        <div class="dd-content top_counter p-1">
                                            <div class="icon">
                                                <img src={require("../../../asset/images/xs/avatar2.jpg")} class="rounded-circle" alt="" />
                                            </div>
                                            <div class="content m-t-5">
                                                <div>{data.Data}</div>
                                                <h6>Rose Rivera</h6>
                                            </div>
                                        </div>
                                    </li>
         )
        }
 fiveTabel(data){
            //console.log(data);
          return(
            <li class="dd-item p-1 m-1"  data-id="1">
                                            <div class="dd-handle">Item 1</div>
                                        </li>
         )
        }
sexTabel(data){
            //console.log(data);
          return(
            <li class="dd-item" data-id="1">
                                            <div class="dd-handle">Item 1</div>
                                        </li>
         )
        }
}
export default SortableNestableUI;
