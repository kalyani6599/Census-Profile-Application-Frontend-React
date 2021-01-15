import React, { Component } from 'react'
import './Style/LoginUserComponentStyle.css'
import logo from '../../Images/logo.png';
import LoginService from '../../Services/LoginService';

class LoginUserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: [],
            userId: "",
            password: "",
        }
        this.addUser = this.addUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.changeUserPasswordHandler = this.changeUserPasswordHandler.bind(this);
        this.changeUserIdHandler = this.changeUserIdHandler.bind(this);

    }

    loginUser = (e) => {
        e.preventDefault();
        let user = {
            userId: null, password: this.state.password,
        }
        console.log(JSON.stringify(user));
        LoginService.login(user)
            .then(res => {
                this.props.history.push('/member');
                console.log(JSON.stringify(res))
            })
    }
    addUser = () => {
        this.props.history.push('/add-user');
    }

    /*event handlers*/

    changeUserIdHandler = (event) => {
        this.setState({
            userId: event.target.value
        });
    }
    changeUserPasswordHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }
    render() {
        return (
            <section id="title">

                <div >
                    <a class="app-name" href="">  <img className="logo-image" src={logo} alt="application-logo" /> </a>
                </div>

                <div class="row ">
                    <div class="col-lg-6 text-div">
                        <div className="h3-div"><h3>Genealogy spreadsheets to record, preserve, and archive research data</h3></div>
                    </div>

                    <div className="col-lg-6 form-div">
                        <form className="sign-in" >
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder="Enter userId"
                                    value={this.state.userId}
                                    onChange={this.changeUserIdHandler} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={this.state.password}
                                    onChange={this.changeUserPasswordHandler} />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-lg" onClick={this.loginUser}>Login</button>
                            <button type="submit" className="btn btn-dark btn-lg btn-lg register-button" onClick={this.addUser}>Register</button>

                        </form>
                    </div>
                </div>


            </section >
        )
    }
}

export default LoginUserComponent;