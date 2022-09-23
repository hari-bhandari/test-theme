import React from "react";


class BasicDialogCard extends React.Component {
  render() {
    const {header,onClickButton} = this.props;
    return (
        <div class="card">
                        <div class="body">
                            <p>{header}</p>
                            <button class="btn btn-primary js-sweetalert" onClick={onClickButton} data-type="basic">CLICK ME</button>
                        </div>
                    </div>
    );
  }
}
export default BasicDialogCard
