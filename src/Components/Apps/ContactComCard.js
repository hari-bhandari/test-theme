import React from "react";

class ContactComCard extends React.Component {
  render() {
      const {name,imageUrl} = this.props;
    return (
        <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="card">
                        <div className="body text-center">
                            <div className="chart easy-pie-chart-1" data-percent="75"> <span><img src={imageUrl} alt="user" className="rounded-circle" /></span> <canvas height="100" width="100"></canvas></div>
                            <h6>{name}</h6>
                            <ul className="social-links list-unstyled">
                                <li><a title="facebook" href="javascript:void(0);"><i className="zmdi zmdi-facebook"></i></a></li>
                                <li><a title="twitter" href="javascript:void(0);"><i className="zmdi zmdi-twitter"></i></a></li>
                                <li><a title="instagram" href="javascript:void(0);"><i className="zmdi zmdi-instagram"></i></a></li>
                            </ul>
                            <small>795 Folsom Ave, Suite 600 San Francisco,<br /> CADGE 94107</small>
                        </div>
                    </div>
                </div>
    
    );
  }
}
export default ContactComCard
