import {
  createNavigator,
  SwitchRouter,
} from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import SidebarView from "./Components/SidebarView";
import login from "./screens/auth/Login";
import dashboard from "./screens/Dashboard/index";
import iOT from "./screens/Dashboard/index";
import demographic from "./screens/Dashboard/index";
import projectBoard from "./screens/Dashboard/index";
import crypto from './screens/Dashboard/index';
import eCommerce from "./screens/Dashboard/index";
import inbox from "./screens/Dashboard/index";
import chat from "./screens/Dashboard/index";
import calendar from "./screens/Dashboard/index";
import contactList from "./screens/Dashboard/index";
import contactCard from "./screens/Dashboard/index";
import taskbar from "./screens/Dashboard/index";
import blogDashboard from "./screens/Dashboard/index";
import blogPost from "./screens/Dashboard/index";
import blogList from "./screens/Dashboard/index";
import blogDetails from './screens/Dashboard/index';
import fmDashboard from "./screens/Dashboard/index";
import documents from "./screens/Dashboard/index";
import fileMedia from "./screens/Dashboard/index";
import fileImages from "./screens/Dashboard/index";
import statistics from "./screens/Dashboard/index";
import dataWidgets from './screens/Dashboard/index';
import chartWidgets from './screens/Dashboard/index';
import weatherWidget from "./screens/Dashboard/index";
import socialWidget from "./screens/Dashboard/index";
import blogWidgets from "./screens/Dashboard/index";
import eCommerceWidgets from "./screens/Dashboard/index";
import typographyUI from "./screens/Dashboard/index";
import tabsUI from "./screens/Dashboard/index";
import buttonsUI from "./screens/Dashboard/index";
import bootstrapUI from './screens/Dashboard/index';
import iconsUI from "./screens/Dashboard/index";
import notificationsUI from "./screens/Dashboard/index";
import colorsUI from "./screens/Dashboard/index";
import dialogsUI from "./screens/Dashboard/index";
import listGroupUI from "./screens/Dashboard/index";
import mediaObjectUI from "./screens/Dashboard/index";
import modalsPopupsUI from "./screens/Dashboard/index";
import sortableNestableUI from "./screens/Dashboard/index";
import progressBarsUI from "./screens/Dashboard/index";
import rangeSlidersUI from "./screens/Dashboard/index";
import treeviewUI from "./screens/Dashboard/index";

window.__DEV__ = true;
const AppNavigator = createNavigator(
  SidebarView,
  SwitchRouter({
    login,
    dashboard,
    iOT,
    demographic,
    projectBoard,
    crypto,
    eCommerce,
    inbox,
    chat,
    calendar,
    contactList,
    contactCard,
    taskbar,
    blogDashboard,
    blogPost,
    blogList,
    blogDetails,
    fmDashboard,
    documents,
    fileMedia,
    fileImages,
    statistics,
    dataWidgets,
    chartWidgets,
    weatherWidget,
    socialWidget,
    blogWidgets,
    eCommerceWidgets,
    typographyUI,
    tabsUI,
    buttonsUI,
    bootstrapUI,
    iconsUI,
    notificationsUI,
    colorsUI,
    dialogsUI,
    listGroupUI,
    mediaObjectUI,
    modalsPopupsUI,
    sortableNestableUI,
    progressBarsUI,
    rangeSlidersUI,
    treeviewUI
  }),
  {
    initialRouteName: "login"
  }
);

const App = createBrowserApp(AppNavigator);

export default App;

