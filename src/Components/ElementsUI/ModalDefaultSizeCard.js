import React from "react";


class ModalDefaultSizeCard extends React.Component {
  render() {
    const {onClick} = this.props;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Modal Default Size</h2>
                        </div>
                        <div class="body">
                            <a href="#defaultModal" data-toggle="modal" data-target="#defaultModal" onClick={onClick}>
                                <img class="img-thumbnail img-fluid" src={require("../../asset/images/model1.jpg")} alt="User" />
                            </a>                        
                        </div>
                    </div>
    );
  }
}
export default ModalDefaultSizeCard
