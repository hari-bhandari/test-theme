import React from "react";
import {Toast} from "react-bootstrap";
import Navbar from "../../Components/Common/Navbar";
import Rightbar from "../../Components/Common/Rightbar";
import Leftbar from "../../Components/Common/Leftbar";
import Analytical from "./Dashboard/Analytical";
import IOT from "./Dashboard/IOT";
import Demographic from "./Dashboard/Demographic";
import ProjectBoard from "./Dashboard/ProjectBoard";
import Crypto from "./Dashboard/Crypto";
import ECommerce from "./Dashboard/ECommerce";
import Inbox from "./Apps/Inbox";
import Chat from "./Apps/Chat";
import Calendar from "./Apps/Calendar";
import ContactList from "./Apps/ContactList";
import ContactCard from "./Apps/ContactCard";
import Taskbar from "./Apps/Taskbar";
import BlogDashboard from "./Apps/BlogDashboard";
import BlogPost from "./Apps/BlogPost";
import BlogList from "./Apps/BlogList";
import BlogDetails from "./Apps/BlogDetails";
import FmDashboard from "./Apps/FmDashboard";
import Documents from "./Apps/Documents";
import FileMedia from "./Apps/FileMedia";
import FileImages from "./Apps/FileImages";
import Statistics from "./Widgets/Statistics";
import DataWidgets from "./Widgets/DataWidgets";
import ChartWidgets from "./Widgets/ChartWidgets";
import WeatherWidget from "./Widgets/WeatherWidget";
import SocialWidget from "./Widgets/SocialWidget";
import BlogWidgets from "./Widgets/BlogWidgets";
import ECommerceWidgets from "./Widgets/ECommerceWidgets";
import TypographyUI from "./ElementsUI/TypographyUI";
import TabsUI from "./ElementsUI/TabsUI";
import ButtonsUI from "./ElementsUI/ButtonsUI";
import BootstrapUI from './ElementsUI/BootstrapUI';
import IconsUI from "./ElementsUI/IconsUI";
import NotificationsUI from "./ElementsUI/NotificationsUI";
import ColorsUI from "./ElementsUI/ColorsUI";
import DialogsUI from "./ElementsUI/DialogsUI";
import ListGroupUI from "./ElementsUI/ListGroupUI";
import MediaObjectUI from './ElementsUI/MediaObjectUI';
import ModalsPopupsUI from "./ElementsUI/ModalsPopupsUI";
import SortableNestableUI from "./ElementsUI/SortableNestableUI";
import ProgressBarsUI from "./ElementsUI/ProgressBarsUI";
import RangeSlidersUI from "./ElementsUI/RangeSlidersUI";
import TreeviewUI from "./ElementsUI/TreeviewUI";

class index extends React.Component {
  componentDidMount(){
    const { navigation } = this.props;
    const { routeName } = navigation.state;
    document.title = ":: Iconic :: " + navigation.state.routes[navigation.state.index].key;
  }
  renderBody() {
    const { navigation } = this.props;
    const { routeName } = navigation.state;
    const activeKey = navigation.state.routes[navigation.state.index].key;
      switch (activeKey) {
        case "dashboard": {
          return <Analytical navigation={navigation} />;
        }

        case "iOT": {
          return <IOT navigation={navigation} />;
        }

        case "demographic":{
          return <Demographic navigation={navigation} />
        }

        case "projectBoard":{
          return <ProjectBoard navigation={navigation} />
        }

        case "crypto":{
          return <Crypto navigation={navigation} />
        }

        case "eCommerce":{
          return <ECommerce navigation={navigation} />
        }

        case "inbox":{
          return <Inbox navigation={navigation} />
        }

        case "chat":{
          return <Chat navigation={navigation} />
        }

        case "calendar":{
          return <Calendar navigation={navigation} />
        }

        case "contactList":{
          return <ContactList navigation={navigation} />
        }

        case "contactCard":{
          return <ContactCard navigation={navigation} />
        }

        case "taskbar":{
          return <Taskbar navigation={navigation} />
        }

        case "blogDashboard":{
          return <BlogDashboard navigation={navigation} />
        }

        case "blogPost":{
          return <BlogPost navigation={navigation} />
        }

        case "blogList":{
          return <BlogList navigation={navigation} />
        }

        case "blogDetails":{
          return <BlogDetails navigation={navigation} />
        }

        case "fmDashboard":{
          return <FmDashboard navigation={navigation} />
        }

        case "documents":{
          return <Documents navigation={navigation} />
        }

        case "fileMedia":{
          return <FileMedia navigation={navigation} />
        }

        case "fileImages":{
          return <FileImages navigation={navigation} />
        }

        case "statistics":{
          return <Statistics navigation={navigation} />
        }

        case "dataWidgets":{
          return <DataWidgets navigation={navigation} />
        }

        case "chartWidgets":{
          return <ChartWidgets navigation={navigation} />
        }

        case "weatherWidget":{
          return <WeatherWidget navigation={navigation} />
        }

        case "socialWidget":{
          return <SocialWidget navigation={navigation} />
        }

        case "blogWidgets":{
          return <BlogWidgets navigation={navigation} />
        }

        case "eCommerceWidgets":{
          return <ECommerceWidgets navigation={navigation} />
        }

        case "typographyUI":{
          return <TypographyUI navigation={navigation} />
        }

        case "tabsUI":{
          return <TabsUI navigation={navigation} />
        }

        case "buttonsUI":{
          return <ButtonsUI navigation={navigation} />
        }

        case "bootstrapUI":{
          return <BootstrapUI navigation={navigation} />
        }

        case "iconsUI":{
          return <IconsUI navigation={navigation} />
        }

        case "notificationsUI":{
          return <NotificationsUI navigation={navigation} />
        }

        case "colorsUI":{
          return <ColorsUI navigation={navigation} />
        }

        case "dialogsUI":{
          return <DialogsUI navigation={navigation} />
        }

        case "listGroupUI":{
          return <ListGroupUI navigation={navigation} />
        }

        case "mediaObjectUI":{
          return <MediaObjectUI navigation={navigation} />
        }

        case "modalsPopupsUI":{
          return <ModalsPopupsUI navigation={navigation} />
        }

        case "sortableNestableUI":{
          return <SortableNestableUI navigation={navigation} />
        }

        case "progressBarsUI":{
          return <ProgressBarsUI navigation={navigation} />
        }

        case "rangeSlidersUI":{
          return <RangeSlidersUI navigation={navigation} />
        }

        case "treeviewUI":{
          return <TreeviewUI navigation={navigation} />
        }

        default:
          return null;
        
      }
  }
  render() {
    const { navigation } = this.props;
    //console.log(navigation);
    return (
     <div id="wrapper" className="theme-cyan">
         <Navbar />
         <Rightbar />
         <Leftbar navigation={navigation} />
         <div id="main-content">
            {this.renderBody()}
         </div>
                       {/* <Toast className="toast-bottom-right">
                        <Toast.Header>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                        </Toast> */}
     </div>
    );
  }
}
export default index
