import React from "react";
import CKEditor from 'ckeditor4-react';

class ComposeMailCard extends React.Component {
  render() {
      const {navigation,onCancel} = this.props;
    return (
        <div className="col-lg-12">
                    <div className="card">
                        <div className="body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="To" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="CC" />
                                </div>
                            </form>
                            <hr />
                            <CKEditor 
                            data="  Hello there,<br /><p>The toolbar can be customized and it also supports various callbacks such as <code>oninit</code>, <code>onfocus</code> <code>onpaste</code> and many more.</p><p> Please try <b>paste some texts</b> here </p>"
                            
                             />
                            <div className="m-t-30">
                                <button type="button" className="btn btn-primary mr-1">Send Message</button>
                                <button type="button" className="btn btn-secondary mr-1">Draft</button>
                                <a href="" className="btn btn-outline-secondary" onClick={onCancel}>Cancel</a>
                            </div>
                        </div>
                    </div>
        </div>
    );
  }
}
export default ComposeMailCard
