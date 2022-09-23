import React from "react";
import Header from "../../../Components/Common/Header";
import BlogListMainCard from "../../../Components/Apps/BlogListMainCard";
import BlogReplyCard from "../../../Components/Apps/BlogReplyCard";
import SocialNewPostCard from "../../../Components/Widgets/SocialNewPostCard";
import BlogPhotographCard from "../../../Components/Widgets/BlogPhotographCard";
import BlogCommentsCard from "../../../Components/Apps/BlogCommentsCard";
import CategoriesCloudsCard from "../../../Components/Apps/CategoriesCloudsCard";
import EmailNewsletterCard from "../../../Components/Apps/EmailNewsletterCard";
import InstagramPostCard from "../../../Components/Apps/InstagramPostCard";
import SocialCounterCard from "../../../Components/Widgets/SocialCounterCard";
import BlogSearchCard from "../../../Components/Apps/BlogSearchCard";
import BlogAboutMe from "../../../Components/Widgets/BlogAboutMe";
import BlogPhotoSliderCard from "../../../Components/Widgets/BlogPhotoSliderCard";

import imge1 from "../../../asset/images/blog/blog-page-1.jpg";

class BlogWidgets extends React.Component {
  render() {
      const { navigation} = this.props;
    return (
        <div className="container-fluid">
            <Header headerText="Blog Widgets" mainNavigate="Widgets" currentPage="Blog"/>
            <div className="row clearfix">
               <div className="col-lg-6 col-md-12">
                    <BlogListMainCard imageUrl={imge1}/>
                    <BlogReplyCard />
               </div>
               <div className="col-lg-6 col-md-12">
                    <SocialNewPostCard />
                    <BlogPhotographCard />
               </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-8 col-md-12">
                    <BlogCommentsCard /> 
                </div>
                <div className="col-lg-4 col-md-12">
                    <CategoriesCloudsCard />
                    <EmailNewsletterCard />
                </div>
            </div>
            <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                    <SocialCounterCard />
                    <InstagramPostCard />
                    <BlogAboutMe />
                </div>
                <div className="col-lg-8 col-md-12">
                    <BlogSearchCard />
                    <BlogPhotoSliderCard onClickRead={()=>{ navigation.navigate("blogDetails") }} />
                </div>
            </div>
        </div>
    
    );
  }
}
export default BlogWidgets;
