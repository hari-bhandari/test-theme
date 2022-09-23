import React from "react";

class TabsWithIconCard extends React.Component {
  constructor(props){
        super(props);
        this.state={
            tab:[true,false,false]
        }
  }  
  render() {
    const {tab} = this.state;
    return (
        <div className="card">
        <div className="header">
            <h2>Tabs With Icon</h2>
        </div>
        <div className="body">
            <ul className="nav nav-tabs">
                <li className="nav-item"><a className={`nav-link ${tab[0]&&'active'}`} onClick={()=>{ this.setState({ tab:[true,false,false] }) }} data-toggle="tab" href="#Home-withicon"><i className="fa fa-home"></i> Home</a></li>
                <li className="nav-item"><a className={`nav-link ${tab[1]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,true,false] }) }} data-toggle="tab" href="#Profile-withicon"><i className="fa fa-user"></i> Profile</a></li>
                <li className="nav-item"><a className={`nav-link ${tab[2]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,false,true] }) }} data-toggle="tab" href="#Contact-withicon"><i className="fa fa-vcard"></i> Contact</a></li>
            </ul>
            <div className="tab-content">
                <div className={`tab-pane ${tab[0]&&'active'}`} id="Home-withicon">
                    <h6>Home</h6>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </div>
                <div className={`tab-pane ${tab[1]&&'active'}`} id="Profile-withicon">
                    <h6>Profile</h6>
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                </div>
                <div className={`tab-pane ${tab[2]&&'active'}`} id="Contact-withicon">
                    <h6>Contact</h6>
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default TabsWithIconCard
