import React from "react";
import ReactEcharts from "echarts-for-react";
import {Carousel} from "react-bootstrap";

class SocialAddCard extends React.Component {
  render() {
    const {data,back} = this.props;
    return (
        <div className="card">
                        <div className={`carousel slide ${back}`}  data-ride="carousel">
                        <Carousel  className="carousel-inner" indicators={false} controls={false}>
                            {
                              data.map((d,i)=>{
                                return <Carousel.Item className="carousel-item">
                                                <i className={d.icon}></i>
                                                <p>{d.date}</p>
                                                <h4>Now Get <span>Up to {d.offer}% Off</span><br/>on buy</h4>
                                                <div className="m-t-20"><i>- {d.postBy}</i></div>
                                            
                                        </Carousel.Item>
                              })
                            }
                            
                            {/* <Carousel.Item className="carousel-item">
                            <i className="fa fa-google-plus fa-2x"></i>
                                    <p>28th Mar</p>
                                    <h4>Now Get <span>50% Off</span><br/>on buy</h4>
                                    <div className="m-t-20"><i>- post form ThemeMakker</i></div>
                            </Carousel.Item> */}
                            </Carousel>
                            <div role="listbox">
                                <div >
                                    
                                </div>
                                <div className="carousel-item active">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default SocialAddCard
