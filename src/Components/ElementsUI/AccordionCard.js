import React from "react";

class AccordionCard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            Accordion1:[true,false,false],
            Accordion2:false,
            Accordion3:[false,false],
        }
    }
  render() {
      const {Accordion1,Accordion2,Accordion3} = this.state;
    return (
        <div class="card">
                        <div class="header">
                            <h2>Accordion</h2>
                        </div>
                        <div class="body">
                            <div class="accordion" id="accordion">
                                <div>
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                            onClick={()=>{ 
                                                var aa = [false,false,false];
                                                aa[0] = !Accordion1[0]
                                                this.setState({ Accordion1:aa }) }}
                                            >
                                            Collapsible Group Item #1
                                            </button>
                                        </h5>
                                    </div>                                
                                    <div id="collapseOne" class={`collapse ${Accordion1[0]&&'show'}`} aria-labelledby="headingOne" data-parent="#accordion" >
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                             onClick={()=>{ 
                                                var aa = [false,false,false];
                                                aa[1] = !Accordion1[1]
                                                this.setState({ Accordion1:aa }) }}
                                            >
                                            Collapsible Group Item #2
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class={`collapse ${Accordion1[1]&&'show'}`} aria-labelledby="headingTwo" data-parent="#accordion" >
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                        onClick={()=>{ 
                                            var aa = [false,false,false];
                                            aa[2] = !Accordion1[2]
                                            this.setState({ Accordion1:aa }) }}
                                        >
                                        Collapsible Group Item #3
                                        </button>
                                    </h5>
                                    </div>
                                    <div id="collapseThree" class={`collapse ${Accordion1[2]&&'show'}`} aria-labelledby="headingThree" data-parent="#accordion" >
                                    <div class="card-body">
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="col-md-12">
                                    <h6>Accordion Link</h6>
                                    <p>
                                        <a class="btn btn-primary mr-1" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample"
                                        onClick={()=>{ this.setState({Accordion2:!Accordion2}) }}
                                        >
                                            Link with href
                                        </a>
                                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample"
                                        onClick={()=>{ this.setState({Accordion2:!Accordion2}) }}
                                        >
                                            Button with data-target
                                        </button>
                                    </p>
                                    <div class={`collapse ${Accordion2&&'show'}`} id="collapseExample">
                                        <div class="card card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div>
                                        <h6>Multiple targets Accordion</h6>
                                        <p>
                                            <a class="btn btn-primary mr-1" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="true" aria-controls="multiCollapseExample1"
                                            onClick={()=>{ 
                                                var aa = [false,false,false];
                                                aa[0] = !Accordion3[0]
                                                this.setState({ Accordion3:aa }) }}
                                            >Toggle first element</a>
                                            <button class="btn btn-primary collapsed mr-1" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"
                                            onClick={()=>{ 
                                                var aa = [false,false,false];
                                                aa[1] = !Accordion3[1]
                                                this.setState({ Accordion3:aa }) }}
                                            >Toggle second element</button>
                                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="true" aria-controls="multiCollapseExample1 multiCollapseExample2"
                                            onClick={()=>{ 
                                                var aa = [false,false,false];
                                                aa[0] = !Accordion3[0]
                                                aa[1] = !Accordion3[1]
                                                this.setState({ Accordion3:aa }) }}
                                            >Toggle both elements</button>
                                        </p>
                                        <div class="row">
                                            <div class="col">
                                                <div class={`multi-collapse collapse ${Accordion3[0]&&'show'}`} id="multiCollapseExample1">
                                                <div class="card card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class={`multi-collapse collapse ${Accordion3[1]&&'show'}`} id="multiCollapseExample2">
                                                <div class="card card-body">
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
  }
}
export default AccordionCard
