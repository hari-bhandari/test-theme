import React from "react";

class CryptoCurrencyCard extends React.Component {
  render() {
      const { currency,value,icon } = this.props;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card">
                        <div className="body">
                            <div className="currency_state d-flex">
                                <div><img src={icon} width="40" /></div>
                                <div className="ml-3">
                                    <div className="name">{currency}</div>
                                    <h5 className="mb-0">{value}</h5>
                                </div>
                            </div>
                        </div>                        
                    </div>
        </div>
    );
  }
}
export default CryptoCurrencyCard
