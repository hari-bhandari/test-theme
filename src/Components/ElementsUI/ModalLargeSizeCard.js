import React from "react";


class ModalLargeSizeCard extends React.Component {
  render() {
      const {onClick} = this.props;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Modal Large Size</h2>
                        </div>
                        <div class="body">
                            <a href="#largeModal" data-toggle="modal" data-target="#largeModal" onClick={onClick}>
                                <img class="img-thumbnail img-fluid" src={require("../../asset/images/model2.jpg")} alt="User"/>
                            </a>                        
                        </div>
                    </div>
    );
  }
}
export default ModalLargeSizeCard
