import React, { Component } from 'react';
import './Style/LoginUserComponentStyle.css'
import UserService from '../../Services/UserService';



class LoginUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: []
        }
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        this.props.history.push('/add-user');
    }

    render() {
        return (

            <section id="title">
                <div className="banner_Section row col-lg-12">
                    <div className="left col-lg-6 col-md-6 col-sm-12">
                        <p>ereogiegr ergig reguirg regreig eig egiug egiug geurgregri hbc efhf ef e fgrg rg ef ge rehgerher erbascdsjbcievdbchbdhcvdjh dsjvhbdshiwec dhvdjhjdsc dsvs gueig ggirgug<br />wioeufhwiuf</p>
                    </div>
                    <div className="jumbotron right col-lg-6 col-md-6 col-sm-12 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control login-input" id="floatingInput" placeholder="name@example.com" />
                            {/* <label for="floatingInput">Email address</label> */}
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control login-input" id="floatingPassword" placeholder="Password" />
                            {/* <label for="floatingPassword">Password</label> */}
                        </div>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg login-button" href="#" role="button">Login</a>
                        </p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg login-button" href="#" onClick={this.addUser} role="button">Register</a>
                        </p>

                    </div>
                </div>
            </section>

        )
    }
}

export default LoginUserComponent;