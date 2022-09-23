import React from "react";

class ProductCard1 extends React.Component {
  render() {
      const{ ItemName,ItemType,Catagory,Item,Price,imageUrl }= this.props;
    return (
        <div className="card">
        <div className="body">
            <div className="top-bar">
                <span>${Price}</span>
                <span className="float-right icon-heart"></span>
            </div>
            <img src={imageUrl} className="img-fluid" />
            <div className="title">{ItemName} <span className="icon-basket float-right"></span></div>
            <hr/>
            <div className="footer">
                <span className="badge badge-default">{ItemType}</span>
                <span className="badge badge-default">{Catagory}</span>
                <span className="badge badge-default">{Item}</span>
            </div>
        </div>
    </div>
    );
  }
}
export default ProductCard1
