import React, { Component } from 'react';
import ApplicationService from '../../Services/ApplicationService';
import UserService from '../../Services/UserService';
import { createBrowserHistory } from 'history';
import './Style/RegisterUserComponentStyle.css';
export const history = createBrowserHistory();

let userId;

const initialState = {
    userName: "",
    password: "",
    role: "",
    nameError: "",
    passwordError: "",
    roleError: "",
}
class RegisterUserComponent extends Component {

    state = initialState;
    constructor(props) {
        super(props);

        this.saveUser = this.saveUser.bind(this);

    }


    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let nameError = "";
        let passwordError = "";
        let roleError = "";

        var validateName = /^[a-zA-Z_]+$/;

        if (!this.state.userName) {
            nameError = "user name cannot be blank.. Please enter User Name";
        } else if (this.state.userName.length < 3) {
            nameError = "user name must be atleast 3 characters long";
        } else if (!validateName.test(this.state.userName)) {
            nameError = "UserName must start only with alphabets and can have only alphabet and underscore ....";
        }

        if (!this.state.password) {
            passwordError = "password cannot be blank.. Please enter password";
        } else if (this.state.password.length < 6) {
            passwordError = "password must contain atleast 6 characters";
        }

        if (!this.state.role) {
            roleError = "Role Cannot be blank ... Please select any one role";
        }


        if (passwordError || nameError || roleError) {
            this.setState({ passwordError, nameError, roleError });
            return false;
        }

        return true;
    };

    saveUser = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log("Success...");
            alert(`${this.state.userName}  Registered Successfully !!!!`)

            let user = {
                userName: this.state.userName,
                password: this.state.password,
                role: this.state.role

            };

            console.log("user object before passing to register api" + JSON.stringify(user));

            UserService.createUser(user).then(userRegisterResponse => {
                this.props.history.push(
                    {
                        pathname: '/',
                        user: { userId: userRegisterResponse.data.userId }
                    }
                );
                console.log("after user register response" + JSON.stringify(userRegisterResponse))
                console.log("after register userid" + userRegisterResponse.data.userId)
                userId = userRegisterResponse.data.userId;
                console.log("after asigning userId" + userId);

            }).then(response => {
                console.log(userId);
                ApplicationService.createApplication(userId).then(applicationResponse => {
                    console.log("after application api response" + JSON.stringify(applicationResponse));

                })
            })

            //clear the form
            this.setState(initialState);

        }


    }


    cancel() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="createUser_container">
                <div className='login'>
                    <h3 className="text-center" style={{ width: "100%", color: "white" }}><i class="fas fa-users"></i>Registration</h3>
                    <div className="card col-md-4 offset-md-3 offset-md-3">
                        <div className="card-body">
                            <form onSubmit={this.saveUser}>
                                <div className="form-group-control">
                                    <label><b>Enter User Name:</b></label>
                                    <input placeholder="User Name" name="userName"
                                        className="form-control" value={this.state.userName}
                                        onChange={this.handleChange} />
                                    <div style={{ fontSize: 12, color: "red" }}> {this.state.nameError}  </div>
                                </div>

                                <div className="form-group">
                                    <label><b>Enter Password:</b></label>
                                    <input type="password" placeholder="Password" name="password"
                                        className="form-control" value={this.state.password}
                                        onChange={this.handleChange} />
                                    <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError} </div>
                                </div>
                                <div className="form-group">
                                    <label><b>Choose Role:</b></label>

                                    <div class="radio">
                                        <label>
                                            <input type="radio" value="0" name="role"
                                                checked={this.state.role === "0"}
                                                onChange={this.handleChange} />Admin
                                    </label>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <label>
                                            <input type="radio" value="1" name="role"
                                                checked={this.state.role === "1"}
                                                onChange={this.handleChange} />User
                                    </label>

                                        <div style={{ fontSize: 12, color: "red" }}>{this.state.roleError} </div>
                                    </div>
                                </div>

                                <div className="buttons">

                                    <button className="btn btn-success"><i class="fas fa-user-plus"></i>Register</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}><i class="far fa-times-circle"></i>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default RegisterUserComponent;