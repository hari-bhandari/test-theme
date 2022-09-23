import React from "react";

class ButtonListCard extends React.Component {
  render() {
    return (
        <div class="card">
                        <div class="body">
                            <p class="demo-button">
                                <button type="button" class="btn btn-default mr-1"><i class="fa fa-plus-square"></i> <span>Default</span></button>
                                <button type="button" class="btn btn-primary mr-1"><i class="fa fa-refresh"></i> <span>Primary</span></button>
                                <button type="button" class="btn btn-info mr-1"><i class="fa fa-info-circle"></i> <span>Info</span></button>
                                <button type="button" class="btn btn-primary" disabled="disabled"><i class="fa fa-refresh fa-spin"></i> <span>Refreshing...</span></button>
                            </p>
                            <br/>
                            <p class="demo-button">
                                <button type="button" class="btn btn-success mr-1"><i class="fa fa-check-circle"></i> <span>Success</span></button>
                                <button type="button" class="btn btn-warning mr-1"><i class="fa fa-warning"></i> <span>Warning</span></button>
                                <button type="button" class="btn btn-danger mr-1"><i class="fa fa-trash-o"></i> <span>Danger</span></button>
                                <button type="button" class="btn btn-primary" disabled="disabled"><i class="fa fa-spinner fa-spin"></i> <span>Loading...</span></button>
                            </p>
                            <br/>
                            <p class="demo-button">
                                <button type="button" class="btn btn-danger mr-1"><i class="fa fa-heart"></i> <span>Love</span></button>
                                <button type="button" class="btn btn-danger mr-1"><span>Love</span> <i class="fa fa-heart"></i></button>
                                <button type="button" class="btn btn-danger"><span class="sr-only">Love</span> <i class="fa fa-heart"></i></button>
                            </p>
                            <br/>
                            <p class="demo-button">
                                <button type="button" class="btn btn-default mr-1" title="Refresh"><span class="sr-only">Refresh</span> <i class="fa fa-refresh"></i></button>
                                <button type="button" class="btn btn-default mr-1" title="Copy"><span class="sr-only">Copy</span> <i class="fa fa-files-o"></i></button>
                                <button type="button" class="btn btn-success mr-1" title="Save"><span class="sr-only">Save</span> <i class="fa fa-save"></i></button>
                                <button type="button" class="btn btn-danger" title="Delete"><span class="sr-only">Delete</span> <i class="fa fa-trash-o"></i></button>
                            </p>
                        </div>
                    </div>
    );
  }
}
export default ButtonListCard
