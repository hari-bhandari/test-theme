import React from "react";

class SocialMediaCard extends React.Component {
  render() {
    return (
        <div className="col-md-12 col-lg-8">
                    <div className="card">
                        <div className="header">
                            <h2>Social Media</h2>                            
                        </div>
                        <div className="body">
                            <div className="table-responsive social_media_table">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>Media</th>
                                            <th>Name</th>
                                            <th>Like</th>                                                                                
                                            <th>Comments</th>
                                            <th>Share</th>
                                            <th>Members</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="social_icon linkedin"><i className="fa fa-linkedin"></i></span>
                                            </td>
                                            <td><span className="list-name">Linked In</span>
                                                <span className="text-muted">Florida, United States</span>
                                            </td>
                                            <td>19K</td>
                                            <td>14K</td>
                                            <td>10K</td>
                                            <td>
                                                <span className="badge badge-success">2341</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="social_icon twitter-table"><i className="fa fa-twitter"></i></span>
                                            </td>
                                            <td><span className="list-name">Twitter</span>
                                                <span className="text-muted">Arkansas, United States</span>
                                            </td>
                                            <td>7K</td>
                                            <td>11K</td>
                                            <td>21K</td>
                                            <td>
                                                <span className="badge badge-success">952</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="social_icon facebook"><i className="fa fa-facebook"></i></span>
                                            </td>
                                            <td><span className="list-name">Facebook</span>
                                                <span className="text-muted">Illunois, United States</span>
                                            </td>
                                            <td>15K</td>
                                            <td>18K</td>
                                            <td>8K</td>
                                            <td>
                                                <span className="badge badge-success">6127</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="social_icon google"><i className="fa fa-google-plus"></i></span>
                                            </td>
                                            <td><span className="list-name">Google Plus</span>
                                                <span className="text-muted">Arizona, United States</span>
                                            </td>
                                            <td>15K</td>
                                            <td>18K</td>
                                            <td>154</td>
                                            <td>
                                                <span className="badge badge-success">325</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="social_icon youtube"><i className="fa fa-youtube-play"></i></span>
                                            </td>
                                            <td><span className="list-name">YouTube</span>
                                                <span className="text-muted">Alaska, United States</span>
                                            </td>
                                            <td>15K</td>
                                            <td>18K</td>
                                            <td>200</td>
                                            <td>
                                                <span className="badge badge-success">160</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
    );
  }
}
export default SocialMediaCard
