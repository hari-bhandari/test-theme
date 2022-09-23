import React from "react";

class ToDoListCardWigets extends React.Component {
  render() {
    return (
        <div className="card">
        <div className="header">
            <h2>ToDo List <small>This Month task list</small></h2>
        </div>
        <div className="body todo_list">
            <ul className="list-unstyled mb-0">
                <li>
                    <label className="fancy-checkbox mb-0">
                        <input type="checkbox" name="checkbox" checked=""/>
                        <span>Report Panel Usag</span>
                    </label>
                    <hr/>
                </li>
                <li>
                    <label className="fancy-checkbox mb-0">
                        <input type="checkbox" name="checkbox"/>
                        <span>Report Panel Usag</span>
                    </label>
                    <hr/>
                </li>
                <li>
                    <label className="fancy-checkbox mb-0">
                        <input type="checkbox" name="checkbox" />
                        <span>New logo design for InfiniO</span>
                    </label>
                    <hr/>
                </li>
                <li>
                    <label className="fancy-checkbox mb-0">
                        <input type="checkbox" name="checkbox" />
                        <span>Design PSD files for InfiniO</span>
                    </label>
                </li>
            </ul>
        </div>
    </div>
    );
  }
}
export default ToDoListCardWigets;