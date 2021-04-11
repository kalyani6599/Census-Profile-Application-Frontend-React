import React, { Component } from "react";
import "./Style/LoginUserComponentStyle.css";
import logo from "../../Images/logo.png";
import LoginService from "../../Services/LoginService";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

class LoginUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      userId: "",
      userName: "",
      password: "",
    };

    this.addUser = this.addUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
  }

  componentDidMount() {
    if (this.props.location.user) {
      this.setState({
        userId: this.props.location.user.userId,
      });
    }
  }

  loginUser = (e) => {
    e.preventDefault();
    let user = {
      userId: this.state.userId,
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log(JSON.stringify(user));
    LoginService.login(user).then((userLoginResponse) => {
      this.props.history.push({
        pathname: "/member",
        user: { userId: userLoginResponse.data.response.userId },
      });
      console.log("login reponse" + JSON.stringify(userLoginResponse));
    });
  };
  addUser = () => {
    this.props.history.push("/add-user");
  };

  /*event handlers*/

  changeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  changeUserPasswordHandler = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  render() {
    return (
      <section id="title">
        <div>
          <a class="app-name" href="">
            {" "}
            <img
              className="logo-image"
              src={logo}
              alt="application-logo"
            />{" "}
          </a>
        </div>

        <div class="main">
          <div className="intro">
            <h3 className="infoH3">
              "Get Yourself Counted" <br /> Start Here{" "}
              <i class="fas fa-angle-double-right"></i>
            </h3>
          </div>
          <div class="loginUser_main">
            <div className="col-lg-6 form-div">
              <h4
                className="login_page"
                style={{ width: "100%", color: "white" }}
              >
                Sign In
              </h4>

              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter userName"
                  value={this.state.userName}
                  onChange={this.changeUserNameHandler}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.changeUserPasswordHandler}
                />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg btn-lg"
                onClick={this.loginUser}
              >
                Login
              </button>
              <button
                type="submit"
                className="btn btn-dark btn-lg btn-lg register-button"
                onClick={this.addUser}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginUserComponent;
