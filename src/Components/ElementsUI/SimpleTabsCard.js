import React from "react";
import {Tabs,Tab} from "react-bootstrap";

class SimpleTabsCard extends React.Component {
  render() {
    return (
        <div class="card">
        <div class="header">
            <h2>Bootstrap Simple Example Tab                                
                <small>Takes the basic nav from above and adds the <code class="highlighter-rouge">.nav-tabs</code> class to generate a tabbed interface. Use them to create tabbable regions with our <a href="#javascript-behavior">tab JavaScript plugin</a>.</small>
            </h2>
        </div>
        <div class="body">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Home">
                    <div class="tab-pane show active" id="Home">
                        <h6>Home</h6>
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                    </div>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <div class="tab-pane" id="Profile">
                        <h6>Profile</h6>
                        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie.</p>
                    </div>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <div class="tab-pane" id="Contact">
                        <h6>Contact</h6>
                        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS.</p>
                    </div>
                </Tab>
            </Tabs>
        </div>
    </div>
    );
  }
}
export default SimpleTabsCard
