import React from "react";

class Tab3Card extends React.Component {
  constructor(props){
        super(props);
        this.state={
            tab:[true,false,false]
        }
  }  
  render() {
    const {tab} = this.state;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Example Tab 3 <small><code class="highlighter-rouge">.nav-tabs-new2</code></small></h2>
                        </div>
                        <div class="body">
                            <ul class="nav nav-tabs-new2">
                                <li class="nav-item mr-1"><a class={`nav-link ${tab[0]&&'active'}`} onClick={()=>{ this.setState({ tab:[true,false,false] }) }} data-toggle="tab" href="#Home-new">Home</a></li>
                                <li class="nav-item mr-1"><a class={`nav-link ${tab[1]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,true,false] }) }} data-toggle="tab" href="#Profile-new">Profile</a></li>
                                <li class="nav-item"><a class={`nav-link ${tab[2]&&'active'}`} onClick={()=>{ this.setState({ tab:[false,false,true] }) }} data-toggle="tab" href="#Contact-new">Contact</a></li>
                            </ul>
                            <div class="tab-content">
                                <div class={`tab-pane ${tab[0]&&'active'}`} id="Home-new">
                                    <h6>Home</h6>
                                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                                </div>
                                <div class={`tab-pane ${tab[1]&&'active'}`} id="Profile-new">
                                    <h6>Profile</h6>
                                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel </p>
                                </div>
                                <div class={`tab-pane ${tab[2]&&'active'}`} id="Contact-new">
                                    <h6>Contact</h6>
                                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica</p>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default Tab3Card
