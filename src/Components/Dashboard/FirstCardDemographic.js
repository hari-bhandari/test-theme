import React from "react";


class FirstCardDemographic extends React.Component {
  render() {
      const {header,money,per,back,status } = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className={`card primary-bg ${back}`}>
                        <div className="body">
                            <div className="p-15 text-light">
                                <h3>{money}</h3>
                                <span>{header} <span className="font-12"><i className={`fa fa-level-${status}`}></i> {per}%</span></span>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default FirstCardDemographic
