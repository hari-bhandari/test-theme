import React from "react";
import Header from "../../../Components/Common/Header";
import CryptoCurrencyCard from "../../../Components/Dashboard/CryptoCurrencyCard";
import CryptoStatistics from "../../../Components/Dashboard/CryptoStatistics";
import TrendingCountryCrypto from "../../../Components/Dashboard/TrendingCountryCrypto";
import PopularCryptocurrency from "../../../Components/Dashboard/PopularCryptocurrency";
import OrderStatisticsCard from "../../../Components/Dashboard/OrderStatisticsCard";
import {CryptoCurrencyCardData} from "../../../Data/AnalyticalData";

class Crypto extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Cryptocurrency" mainNavigate="Dashboard" currentPage="Cryptocurrency" />
            <div className="row clearfix">
                {
                    CryptoCurrencyCardData.map((data,i)=>{
                        return <CryptoCurrencyCard currency={data.currency} value={data.value} icon={data.icon} />
                    })
                }
                
            </div>
            <div className="row clearfix row-deck">
               <CryptoStatistics />
            </div>
            <div className="row clearfix row-deck">
                <TrendingCountryCrypto />
                <PopularCryptocurrency />
            </div>
            <div className="row clearfix row-deck">
                <OrderStatisticsCard />
            </div>
        </div>
    
    );
  }
}
export default Crypto
