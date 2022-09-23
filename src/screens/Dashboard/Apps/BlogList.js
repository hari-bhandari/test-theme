import React from "react";
import Header from "../../../Components/Common/Header";
import BlogListMainCard from "../../../Components/Apps/BlogListMainCard";
import BlogSearchCard from "../../../Components/Apps/BlogSearchCard";
import CategoriesCloudsCard from "../../../Components/Apps/CategoriesCloudsCard";
import PopularPostsCard from "../../../Components/Apps/PopularPostsCard";
import InstagramPostCard from "../../../Components/Apps/InstagramPostCard";
import EmailNewsletterCard from "../../../Components/Apps/EmailNewsletterCard";
import {blogListMainCardData} from "../../../Data/AppData";

class BlogList extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Blog List" mainNavigate="App" currentPage="Blog"/>
            <div className="row clearfix">
                <div className="col-lg-8 col-md-12 left-box">
                    {
                        blogListMainCardData.map((data,i)=>{
                            return <BlogListMainCard
                                        imageUrl={data.imageUrl}
                                     />
                        })
                    }
                    <ul className="pagination pagination-primary">
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                        <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                    </ul>
                    
                </div>
                <div className="col-lg-4 col-md-12 right-box">
                    <BlogSearchCard />
                    <CategoriesCloudsCard />
                    <PopularPostsCard />
                    <InstagramPostCard />
                    <EmailNewsletterCard />
                </div>
            </div>
        </div>
    
    );
  }
}
export default BlogList;
