import React from "react";

class ButtonTagsCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Button tags</h2>
        </div>
        <div class="body">
            <a class="btn btn-primary mr-1" href="javascript:void(0);" role="button">Link</a>
            <button class="btn btn-primary mr-1" type="submit">Button</button>
            <input class="btn btn-primary mr-1" type="button" value="Input"/>
            <input class="btn btn-primary mr-1" type="submit" value="Submit"/>
            <input class="btn btn-primary" type="reset" value="Reset"/>
        </div>
    </div>
    );
  }
}
export default ButtonTagsCard
