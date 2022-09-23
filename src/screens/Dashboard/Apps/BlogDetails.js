import React from "react";
import Header from "../../../Components/Common/Header";
import BlogDetailsMainCard from "../../../Components/Apps/BlogDetailsMainCard";
import BlogSearchCard from "../../../Components/Apps/BlogSearchCard";
import CategoriesCloudsCard from "../../../Components/Apps/CategoriesCloudsCard";
import PopularPostsCard from "../../../Components/Apps/PopularPostsCard";
import InstagramPostCard from "../../../Components/Apps/InstagramPostCard";
import EmailNewsletterCard from "../../../Components/Apps/EmailNewsletterCard";
import BlogCommentsCard from "../../../Components/Apps/BlogCommentsCard";
import BlogReplyCard from "../../../Components/Apps/BlogReplyCard";
import {blogListMainCardData} from "../../../Data/AppData";
import imageBlog1 from '../../../asset/images/blog/blog-page-1.jpg';

class BlogDetails extends React.Component {
  render() {
    return (
        <div className="container-fluid">
            <Header headerText="Blog Details" mainNavigate="App" currentPage="Blog"/>
            <div className="row clearfix">
                <div className="col-lg-8 col-md-12 left-box">
                        <BlogDetailsMainCard imageUrl={imageBlog1}/>
                        <BlogCommentsCard />
                        <BlogReplyCard />
                    
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
export default BlogDetails;
