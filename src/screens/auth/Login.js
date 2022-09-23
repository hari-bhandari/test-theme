import React from "react";
import Logo from "../../asset/images/logo-white.svg"


class Login extends React.Component {
  render() {
      const{navigation} = this.props;
      //console.log(navigation);
    return (
        <div id="wrapper" className="theme-cyan">
		<div className="vertical-align-wrap">
			<div className="vertical-align-middle auth-main">
				<div className="auth-box">
                    <div className="top">
                        <img src={Logo} alt="Iconic" />
                    </div>
					<div className="card">
                        <div className="header">
                            <p className="lead">Login to your account</p>
                        </div>
                        <div className="body">
                            <form className="form-auth-small" action="index.html">
                                <div className="form-group">
                                    <label for="signin-email" className="control-label sr-only">Email</label>
                                    <input type="email" className="form-control" id="signin-email" value="user@domain.com" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label for="signin-password" className="control-label sr-only">Password</label>
                                    <input type="password" className="form-control" id="signin-password" value="thisisthepassword" placeholder="Password" />
                                </div>
                                <div className="form-group clearfix">
                                    <label className="fancy-checkbox element-left">
                                        <input type="checkbox" />
                                        <span>Remember me</span>
                                    </label>								
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick = {()=>{ navigation.navigate("dashboard") }}>LOGIN</button>
                                <div className="bottom">
                                    <span className="helper-text m-b-10"><i className="fa fa-lock"></i> <a href="page-forgot-password.html">Forgot password?</a></span>
                                    <span>Don't have an account? <a href="page-register.html">Register</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
		</div>
	</div>
    );
  }
}
export default Login
