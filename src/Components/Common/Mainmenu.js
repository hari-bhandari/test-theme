import React from "react";

class Mainmenu extends React.Component {
    constructor(props){
        super(props)
        this.state={
            mainActive:[true,false,false,false,false,false,false,false,false,false],
            blogActive:false,
            fMActive:false
        }
    }

  componentDidMount(){
    const { navigation } = this.props;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    console.log(activeKey);
      if(activeKey === 'dashboard' || activeKey === 'iOT' || activeKey === 'demographic'|| activeKey === 'projectBoard' || activeKey === 'crypto' || activeKey === 'eCommerce'){
        var mA = [true,false,false,false,false,false,false,false,false,false]
        this.setState({
            mainActive:mA,
            blogActive:false,
            fMActive:false
        })
      } else if(activeKey === 'inbox' || activeKey === 'chat' || activeKey === 'calendar' || activeKey === 'contactList' || activeKey === 'contactCard' || activeKey === 'taskbar') {
        var mA = [false,true,false,false,false,false,false,false,false,false]
        this.setState({
            mainActive:mA,
            blogActive:false,
            fMActive:false
        })
        console.log(this.state.blogActive);
      } else if(activeKey === 'statistics' || activeKey === 'dataWidgets' || activeKey === 'chartWidgets' || activeKey === 'weatherWidget' || activeKey === 'socialWidget' || activeKey === 'blogWidgets' || activeKey === 'eCommerceWidgets'){
        var mA = [false,false,true,false,false,false,false,false,false,false]
        this.setState({
            mainActive:mA,
            blogActive:false,
            fMActive:false
        })
      } else if(activeKey === 'typographyUI' || activeKey === 'tabsUI' || activeKey === 'buttonsUI' || activeKey === 'bootstrapUI' || activeKey === 'iconsUI' || activeKey === 'notificationsUI' || activeKey === 'colorsUI' || activeKey === 'dialogsUI' || activeKey === 'listGroupUI' || activeKey === 'mediaObjectUI' || activeKey === 'modalsPopupsUI' || activeKey === 'sortableNestableUI' || activeKey === 'progressBarsUI' || activeKey === 'rangeSlidersUI' || activeKey === 'treeviewUI'){
        var mA = [false,false,false,true,false,false,false,false,false,false]
        this.setState({
            mainActive:mA,
            blogActive:false,
            fMActive:false
        })
      }


      if(activeKey === 'blogDashboard' || activeKey === 'blogPost' || activeKey === 'blogList'|| activeKey === 'blogDetails'){
        var mA = [false,true,false,false,false,false,false,false,false,false]
        this.setState({
            blogActive:true,
            mainActive:mA,
            fMActive:false
        })
      }
      
      if(activeKey === 'fmDashboard'|| activeKey === 'documents' || activeKey === 'fileMedia' || activeKey === 'fileImages'){
        var mA = [false,true,false,false,false,false,false,false,false,false]
      this.setState({
          blogActive:false,
          mainActive:mA,
          fMActive:true
      })
    }
  } 
  
  componentWillReceiveProps(){
      console.log("pef456789132");
      const { navigation } = this.props;
      const activeKey = navigation.state.routes[navigation.state.index].key;
      console.log(navigation);
        if(activeKey === 'dashboard' || activeKey === 'iOT' || activeKey === 'demographic'|| activeKey === 'projectBoard' || activeKey === 'crypto' || activeKey === 'eCommerce'){
          var mA = [true,false,false,false,false,false,false,false,false,false]
          this.setState({
              mainActive:mA,
              blogActive:false,
              fMActive:false
          })
        } else if(activeKey === 'inbox' || activeKey === 'chat' || activeKey === 'calendar' || activeKey === 'contactList' || activeKey === 'contactCard' || activeKey === 'taskbar') {
          var mA = [false,true,false,false,false,false,false,false,false,false]
          this.setState({
              mainActive:mA,
              blogActive:false,
              fMActive:false
          })
          console.log(this.state.blogActive);
        } else if(activeKey === 'statistics' || activeKey === 'dataWidgets' ||activeKey === 'chartWidgets' || activeKey === 'weatherWidget' || activeKey === 'socialWidget' || activeKey === 'blogWidgets' || activeKey === 'eCommerceWidgets'){
            var mA = [false,false,true,false,false,false,false,false,false,false]
            this.setState({
                mainActive:mA,
                blogActive:false,
                fMActive:false
            })
          } else if(activeKey === 'typographyUI' || activeKey === 'tabsUI' || activeKey === 'buttonsUI' || activeKey === 'bootstrapUI' || activeKey === 'iconsUI' || activeKey === 'notificationsUI' ||activeKey === 'colorsUI' || activeKey === 'dialogsUI' || activeKey === 'listGroupUI'||activeKey === 'mediaObjectUI' || activeKey === 'modalsPopupsUI' || activeKey === 'sortableNestableUI' || activeKey === 'progressBarsUI' || activeKey === 'rangeSlidersUI' || activeKey === 'treeviewUI'){
            var mA = [false,false,false,true,false,false,false,false,false,false]
            this.setState({
                mainActive:mA,
                blogActive:false,
                fMActive:false
            })
          }
  
  
        if(activeKey === 'blogDashboard' || activeKey === 'blogPost' || activeKey === 'blogList'|| activeKey === 'blogDetails'){
          var mA = [false,true,false,false,false,false,false,false,false,false]
          this.setState({
              blogActive:true,
              mainActive:mA,
              fMActive:false
          })
        }

        if(activeKey === 'fmDashboard' || activeKey === 'documents' || activeKey === 'fileMedia' || activeKey === 'fileImages'){
            var mA = [false,true,false,false,false,false,false,false,false,false]
          this.setState({
              blogActive:false,
              mainActive:mA,
              fMActive:true
          })
        }
  }
  render() {
    const { navigation } = this.props;
    const { routeName } = navigation.state;
    const activeKey = navigation.state.routes[navigation.state.index].key;
    const { mainActive,blogActive,fMActive } = this.state;
    //console.log(navigation);
    return (
        <div className="tab-pane active" id="menu">
        <nav id="left-sidebar-nav" className="sidebar-nav">
            <ul id="main-menu" className="metismenu li_animation_delay">
                <li className={ mainActive[0] ?`active`:'' }>
                    <a href="#Dashboard" className="has-arrow"
                    onClick={()=>{
                        var mA = [true,false,false,false,false,false,false,false,false,false]
                        mA[0] = !this.state.mainActive[0]
                        this.setState({
                            mainActive:mA
                        })
                    }}
                    ><i className="fa fa-dashboard"></i><span>Dashboard</span></a>
                    <ul aria-expanded="false" className={(activeKey === 'dashboard' || activeKey === 'iOT' || activeKey === 'demographic'|| activeKey === 'projectBoard' || activeKey === 'crypto' || activeKey === 'eCommerce') || mainActive[0] ?`collapse in`:'collapse' }>
                        <li className={activeKey === 'dashboard'?`active`:''}><a href="#" onClick={()=>{ if(activeKey !== 'dashboard'){navigation.navigate("dashboard")} }}>Analytical</a></li>
                        {/* <li className={routeName === 'dashboard'?`active`:''}><a href="#" onClick={()=>{ navigation.navigate("dashboard") }}>Analytical H-Menu</a></li> */}
                        <li className={activeKey === 'iOT'?`active`:''} onClick={()=>{ if(activeKey !== 'iOT'){ navigation.navigate("iOT");}  }}><a href="#" >IoT Dashboard</a></li>
                        <li className={activeKey === 'demographic'?`active`:''} onClick={()=>{ if(activeKey !== 'demographic'){ navigation.navigate("demographic"); } }}><a href="#">Demographic</a></li>
                        <li className={activeKey === 'projectBoard'?`active`:''} onClick={()=>{ if(activeKey !== 'projectBoard'){ navigation.navigate("projectBoard"); } }}><a href="#">Project Board</a></li>
                        <li className={activeKey === 'crypto'?`active`:''} onClick={()=>{ if(activeKey !== 'crypto'){ navigation.navigate("crypto"); } }}><a href="#">Crypto Dashboard</a></li>
                        <li className={activeKey === 'eCommerce'?`active`:''} onClick={()=>{ if(activeKey !== 'eCommerce'){ navigation.navigate("eCommerce"); } }}><a href="#">eCommerce</a></li>
                    </ul>
                </li>
                <li className={ mainActive[1] ?`active`:'' }>
                    <a href="#App" className="has-arrow"  onClick={()=>{
                    var mA = [false,false,false,false,false,false,false,false,false,false]
                    mA[1] = !this.state.mainActive[1]
                    this.setState({
                        mainActive:mA
                    })
                }}><i className="fa fa-th-large"></i><span>Ready App</span></a>
                    <ul aria-expanded="true" className={mainActive[1] ?`collapse in`:'collapse' }>
                        <li className={activeKey === 'inbox'?`active`:''} onClick={()=>{ if(activeKey !== 'inbox'){ navigation.navigate("inbox"); } }}><a href="#">Inbox</a></li>
                        <li className={activeKey === 'chat'?`active`:''} onClick={()=>{ if(activeKey !== 'chat'){ navigation.navigate("chat"); } }}><a href="#">Chat</a></li>
                        <li className={activeKey === 'calendar'?`active`:''} onClick={()=>{ if(activeKey !== 'calendar'){ navigation.navigate("calendar"); } }}><a href="#">Calendar</a></li>                                    
                        <li className={activeKey === 'contactList'?`active`:''} onClick={()=>{ if(activeKey !== 'contactList'){ navigation.navigate("contactList"); } }}><a href="#">Contact list</a></li>
                        <li className={activeKey === 'contactCard'?`active`:''} onClick={()=>{ if(activeKey !== 'contactCard'){ navigation.navigate("contactCard"); } }}><a href="#">Contact Card <span className="badge badge-warning float-right">New</span></a></li>
                        <li className={activeKey === 'taskbar'?`active`:''} onClick={()=>{ if(activeKey !== 'taskbar'){ navigation.navigate("taskbar"); } }}><a href="#">Taskboard</a></li>
                        <li className={blogActive?'active':''} ><a href="#" onClick={()=>{ this.setState({ blogActive:!blogActive }) }}><span>Blog</span></a>
                            <ul aria-expanded="false" className={`collapse ${blogActive?'in':''}`}>
                                <li className={activeKey === 'blogDashboard'?`active`:''} onClick={()=>{ if(activeKey !== 'blogDashboard'){ navigation.navigate("blogDashboard"); } }}><a href="">Dashboard</a></li>
                                <li className={activeKey === 'blogPost'?`active`:''} onClick={()=>{ if(activeKey !== 'blogPost'){ navigation.navigate("blogPost"); } }}><a href="">New Post</a></li>
                                <li className={activeKey === 'blogList'?`active`:''} onClick={()=>{ if(activeKey !== 'blogList'){ navigation.navigate("blogList"); } }}><a href="">Blog List</a></li>
                                <li className={activeKey === 'blogDetails'?`active`:''} onClick={()=>{ if(activeKey !== 'blogDetails'){ navigation.navigate("blogDetails"); } }}><a href="">Blog Detail</a></li>
                            </ul>
                        </li>
                        <li className={fMActive?'active':''}><a href="#" onClick={()=>{ this.setState({ fMActive:!fMActive }) }}><span>File Manager</span></a>
                            <ul aria-expanded="false" className={`collapse ${fMActive?'in':''}`}>
                                <li className={activeKey === 'fmDashboard'?`active`:''} onClick={()=>{ if(activeKey !== 'fmDashboard'){ navigation.navigate("fmDashboard"); } }}><a href="#">Dashboard</a></li>
                                <li className={activeKey === 'documents'?`active`:''} onClick={()=>{ if(activeKey !== 'documents'){ navigation.navigate("documents"); } }}><a href="#">Documents</a></li>
                                <li className={activeKey === 'fileMedia'?`active`:''} onClick={()=>{ if(activeKey !== 'fileMedia'){ navigation.navigate("fileMedia"); } }}><a href="#">Media</a></li>
                                <li className={activeKey === 'fileImages'?`active`:''} onClick={()=>{ if(activeKey !== 'fileImages'){ navigation.navigate("fileImages"); } }}><a href="#">Images</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className={ mainActive[2] ?`active`:'' }>
                    <a href="#Widgets" className="has-arrow"
                    onClick={()=>{
                        var mA = [false,false,false,false,false,false,false,false,false,false]
                        mA[2] = !this.state.mainActive[2]
                        this.setState({
                            mainActive:mA,
                            blogActive:false,
                            fMActive:false
                        })
                    }}
                    ><i className="fa fa-puzzle-piece"></i><span>Widgets</span></a>
                    <ul aria-expanded="false" className={mainActive[2] ?`collapse in`:'collapse' }>                                    
                        <li className={activeKey === 'statistics'?`active`:''} onClick={()=>{ if(activeKey !== 'statistics'){ navigation.navigate("statistics"); } }}><a href="#">Statistics</a></li>
                        <li className={activeKey === 'dataWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'dataWidgets'){ navigation.navigate("dataWidgets"); } }}><a href="#">Data</a></li>
                        <li className={activeKey === 'chartWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'chartWidgets'){ navigation.navigate("chartWidgets"); } }}><a href="#">Chart</a></li>
                        <li className={activeKey === 'weatherWidget'?`active`:''} onClick={()=>{ if(activeKey !== 'weatherWidget'){ navigation.navigate("weatherWidget"); } }}><a href="#">Weather</a></li>
                        <li className={activeKey === 'socialWidget'?`active`:''} onClick={()=>{ if(activeKey !== 'socialWidget'){ navigation.navigate("socialWidget"); } }}><a href="#">Social</a></li>
                        <li className={activeKey === 'blogWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'blogWidgets'){ navigation.navigate("blogWidgets"); } }}><a href="#">Blog</a></li>
                        <li className={activeKey === 'eCommerceWidgets'?`active`:''} onClick={()=>{ if(activeKey !== 'eCommerceWidgets'){ navigation.navigate("eCommerceWidgets"); } }}><a href="#">eCommerce</a></li>
                    </ul>
                </li>
                <li className={ mainActive[3] ?`active`:'' }>
                    <a href="#uiElements" className="has-arrow"
                    onClick={()=>{
                        var mA = [false,false,false,false,false,false,false,false,false,false]
                        mA[3] = !this.state.mainActive[3]
                        this.setState({
                            mainActive:mA,
                            blogActive:false,
                            fMActive:false
                        })
                    }}
                    ><i className="fa fa-diamond"></i><span>UI Elements</span></a>
                    <ul aria-expanded="false" className={mainActive[3] ?`collapse in`:'collapse' }>
                        <li className={activeKey === 'typographyUI'?`active`:''} onClick={()=>{ if(activeKey !== 'typographyUI'){ navigation.navigate("typographyUI"); } }}><a href="#">Typography</a></li>
                        <li className={activeKey === 'tabsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'tabsUI'){ navigation.navigate("tabsUI"); } }}><a href="#">Tabs</a></li>
                        <li className={activeKey === 'buttonsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'buttonsUI'){ navigation.navigate("buttonsUI"); } }}><a href="#">Buttons</a></li>
                        <li className={activeKey === 'bootstrapUI'?`active`:''} onClick={()=>{ if(activeKey !== 'bootstrapUI'){ navigation.navigate("bootstrapUI"); } }}><a href="#">Bootstrap UI</a></li>
                        <li className={activeKey === 'iconsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'iconsUI'){ navigation.navigate("iconsUI"); } }}><a href="#">Icons</a></li>
                        <li className={activeKey === 'notificationsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'notificationsUI'){ navigation.navigate("notificationsUI"); } }}><a href="#">Notifications</a></li>
                        <li className={activeKey === 'colorsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'colorsUI'){ navigation.navigate("colorsUI"); } }}><a href="#">Colors</a></li>
                        <li className={activeKey === 'dialogsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'dialogsUI'){ navigation.navigate("dialogsUI"); } }}><a href="#">Dialogs</a></li>                                    
                        <li className={activeKey === 'listGroupUI'?`active`:''} onClick={()=>{ if(activeKey !== 'listGroupUI'){ navigation.navigate("listGroupUI"); } }}><a href="#">List Group</a></li>
                        <li className={activeKey === 'mediaObjectUI'?`active`:''} onClick={()=>{ if(activeKey !== 'mediaObjectUI'){ navigation.navigate("mediaObjectUI"); } }}><a href="#">Media Object</a></li>
                        <li className={activeKey === 'modalsPopupsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'modalsPopupsUI'){ navigation.navigate("modalsPopupsUI"); } }}><a href="#">Modals</a></li>
                        <li className={activeKey === 'sortableNestableUI'?`active`:''} onClick={()=>{ if(activeKey !== 'sortableNestableUI'){ navigation.navigate("sortableNestableUI"); } }}><a href="#">Nestable</a></li>
                        <li className={activeKey === 'progressBarsUI'?`active`:''} onClick={()=>{ if(activeKey !== 'progressBarsUI'){ navigation.navigate("progressBarsUI"); } }}><a href="#">Progress Bars</a></li>
                        <li className={activeKey === 'rangeSlidersUI'?`active`:''} onClick={()=>{ if(activeKey !== 'rangeSlidersUI'){ navigation.navigate("rangeSlidersUI"); } }}><a href="#">Range Sliders</a></li>
                        <li className={activeKey === 'treeviewUI'?`active`:''} onClick={()=>{ if(activeKey !== 'treeviewUI'){ navigation.navigate("treeviewUI"); } }}><a href="#">Treeview</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#charts" className="has-arrow"><i className="fa fa-area-chart"></i><span>Charts</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="chart-apex.html">Apex</a> </li>
                        <li><a href="chart-c3.html">C3 Charts</a></li>
                        <li><a href="chart-morris.html">Morris</a> </li>
                        <li><a href="chart-flot.html">Flot</a> </li>
                        <li><a href="chart-chartjs.html">ChartJS</a> </li>                                    
                        <li><a href="chart-jquery-knob.html">Jquery Knob</a> </li>
                        <li><a href="chart-sparkline.html">Sparkline Chart</a></li>
                        <li><a href="chart-peity.html">Peity</a></li>
                        <li><a href="chart-gauges.html">Gauges</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#forms" className="has-arrow"><i className="fa fa-pencil"></i><span>Forms</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="forms-validation.html">Form Validation</a></li>
                        <li><a href="forms-advanced.html">Advanced Elements</a></li>
                        <li><a href="forms-basic.html">Basic Elements</a></li>
                        <li><a href="forms-wizard.html">Form Wizard</a></li>
                        <li><a href="forms-dragdropupload.html">Drag &amp; Drop Upload</a></li>
                        <li><a href="forms-cropping.html">Image Cropping</a></li>
                        <li><a href="forms-summernote.html">Summernote</a></li>
                        <li><a href="forms-editors.html">CKEditor</a></li>
                        <li><a href="forms-markdown.html">Markdown</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#Tables" className="has-arrow"><i className="fa fa-table"></i><span>Tables</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="table-basic.html">Tables Example<span className="badge badge-info float-right">New</span></a> </li>
                        <li><a href="table-normal.html">Normal Tables</a> </li>
                        <li><a href="table-jquery-datatable.html">Jquery Datatables</a> </li>
                        <li><a href="table-editable.html">Editable Tables</a> </li>
                        <li><a href="table-color.html">Tables Color</a> </li>
                        <li><a href="table-filter.html">Table Filter <span className="badge badge-info float-right">New</span></a> </li>
                        <li><a href="table-dragger.html">Table dragger <span className="badge badge-info float-right">New</span></a> </li>
                    </ul>
                </li>
                <li>
                    <a href="#Authentication" className="has-arrow"><i className="fa fa-lock"></i><span>Authentication</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="page-login.html">Login</a></li>
                        <li><a href="page-register.html">Register</a></li>
                        <li><a href="page-lockscreen.html">Lockscreen</a></li>
                        <li><a href="page-forgot-password.html">Forgot Password</a></li>
                        <li><a href="page-404.html">Page 404</a></li>
                        <li><a href="page-403.html">Page 403</a></li>
                        <li><a href="page-500.html">Page 500</a></li>
                        <li><a href="page-503.html">Page 503</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#Pages" className="has-arrow"><i className="fa fa-file"></i><span>Extra Pages</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="page-blank.html">Blank Page</a> </li>
                        <li><a href="page-profile.html">Profile <span className="badge badge-default float-right">v1</span></a></li>
                        <li><a href="page-profile2.html">Profile <span className="badge badge-warning float-right">v2</span></a></li>
                        <li><a href="page-gallery.html">Image Gallery <span className="badge badge-default float-right">v1</span></a> </li>
                        <li><a href="page-gallery2.html">Image Gallery <span className="badge badge-warning float-right">v2</span></a> </li>
                        <li><a href="page-timeline.html">Timeline</a></li>
                        <li><a href="page-timeline-h.html">Horizontal Timeline</a></li>
                        <li><a href="page-pricing.html">Pricing</a></li>
                        <li><a href="page-invoices.html">Invoices</a></li>
                        <li><a href="page-invoices2.html">Invoices <span className="badge badge-warning float-right">v2</span></a></li>
                        <li><a href="page-search-results.html">Search Results</a></li>
                        <li><a href="page-helper-class.html">Helper Classes</a></li>
                        <li><a href="page-teams-board.html">Teams Board</a></li>
                        <li><a href="page-projects-list.html">Projects List</a></li>
                        <li><a href="page-maintenance.html">Maintenance</a></li>
                        <li><a href="page-testimonials.html">Testimonials</a></li>
                        <li><a href="page-faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#Maps" className="has-arrow"><i className="fa fa-map"></i><span>Maps</span></a>
                    <ul aria-expanded="false" className="collapse">
                        <li><a href="map-google.html">Google Map</a></li>
                        <li><a href="map-yandex.html">Yandex Map</a></li>
                        <li><a href="map-jvectormap.html">jVector Map</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    );
  }
}
export default Mainmenu;
