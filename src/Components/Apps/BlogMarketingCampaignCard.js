import React from "react";

class BlogMarketingCampaignCard extends React.Component {
  render() {
    return (
        <div className="col-xl-5 col-lg-12 col-md-12">
        <div className="card">
            <div className="header">
                <h2>Marketing Campaign <small>This Month </small></h2>                            
            </div>
            <div className="body">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <tbody>
                            <tr>
                                <td>
                                    <i className="fa fa-facebook fa-2x"></i>
                                </td>
                                <td>
                                    <h6 className="margin-0">Facebook Ads</h6>
                                    <span>1.2k Likes, 418 Shares</span>
                                </td>
                                <td>
                                    <h6 className="mb-0">$ 402</h6>
                                    <span className="text-muted">Spent</span>
                                </td>
                                <td className="text-right">
                                    <div className="text-success">
                                        23 <i className="fa fa-long-arrow-up"></i>
                                    </div>
                                    <div className="text-muted">up</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-twitter fa-2x"></i>
                                </td>
                                <td>
                                    <h6 className="margin-0">Twitter Ads</h6>
                                    <span>1k Likes, 128 Shares</span>
                                </td>
                                <td>
                                    <h6 className="mb-0">$ 489</h6>
                                    <span className="text-muted">Spent</span>
                                </td>
                                <td className="text-right">
                                    <div className="text-danger">                                                    
                                        -9 <i className="fa fa-long-arrow-down"></i>
                                    </div>
                                    <div className="text-muted">down</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-instagram fa-2x"></i>
                                </td>
                                <td>
                                    <h6 className="margin-0">Instagram Post</h6>
                                    <span>1k Follows, 228 Likes</span>
                                </td>
                                <td>
                                    <h6 className="mb-0">$ 718 </h6>
                                    <span className="text-muted">Spent</span>
                                </td>
                                <td className="text-right">
                                    <div className=" text-success">
                                        16 <i className="fa  fa-long-arrow-up"></i>
                                    </div>
                                    <div className="text-muted">up</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-linkedin fa-2x"></i>
                                </td>
                                <td>
                                    <h6 className="margin-0">LinkedIn Post</h6>
                                    <span>1k Follows, 228 Likes</span>
                                </td>
                                <td>
                                    <h6 className="mb-0">$ 768</h6>
                                    <span className="text-muted">Spent</span>
                                </td>
                                <td className="text-right">
                                    <div className=" text-success">
                                        27 <i className="fa  fa-long-arrow-up"></i>
                                    </div>
                                    <div className="text-muted">up</div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="fa fa-google-plus-circle fa-2x"></i>
                                </td>
                                <td>
                                    <h6 className="margin-0">Google +</h6>
                                    <span>1k Follows, 228 Likes</span>
                                </td>
                                <td>
                                    <h6 className="mb-0">$ 1768</h6>
                                    <span className="text-muted">Spent</span>
                                </td>
                                <td className="text-right">
                                    <div className=" text-success">
                                        27 <i className="fa fa-long-arrow-up"></i>
                                    </div>
                                    <div className="text-muted">up</div>
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
export default BlogMarketingCampaignCard
