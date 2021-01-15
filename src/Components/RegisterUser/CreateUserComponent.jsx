import React, { Component } from 'react';
import ApplicationService from '../../Services/ApplicationService';
import UserService from '../../Services/UserService';
let userId;
class CreateUserComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
                // userId:'',
                userName:'',
                password:'',
                role:'',
                
            }
            

            this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
            this.changePasswordHandler = this.changePasswordHandler.bind(this);
            this.changeRoleHandler = this.changeRoleHandler.bind(this);
            this.saveUser = this.saveUser.bind(this);

        }
        
        saveUser = (e)=>{
            e.preventDefault();
            let user ={ 
                userName: this.state.userName, 
                password: this.state.password,
                role: this.state.role ==="admin"? 0: 1 
                
            };

            console.log(JSON.stringify(user));
            
            UserService.createUser(user).then(userResponse =>{
                this.props.history.push('/');
                console.log(JSON.stringify(userResponse))
                console.log(userResponse.data.userId)  
                userId=userResponse.data.userId;
                console.log(userId);           
                // console.log(userResponse.body);    
                }).then(response=>{
                    console.log(userId);              
                    ApplicationService.createApplication(userId).then(applicationResponse=>{
                    console.log(JSON.stringify(applicationResponse));
                    
                    })
                })
            
         }  

            
        cancel(){
            this.props.history.push('/user');
        }

        changeUserNameHandler = (event) =>{
            this.setState({userName: event.target.value});
        }
    
        changePasswordHandler = (event) =>{
            this.setState({password: event.target.value});
        }
    
        changeRoleHandler = (event) =>{
            this.setState({role: event.target.value});
        }

        render() {
            return (
                <div>               
                    <div className="container">
                        <div className="row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Registration</h3>
                                <div className = "card-body">
                                    <form className="needs-validation">
                                        <div className="form-group"> 
                                            <label>Enter User Name</label>
                                            <i class="fas fa-ad fa-5x"></i>
                                            <input 
                                            placeholder="User Name" 
                                            name="userName"
                                            className="form-control" 
                                            value = {this.state.userName} 
                                            onChange = {this.changeUserNameHandler}
                                            required/>
                                        </div>
                                        
                                        <div className="form-group"> 
                                            <label>Enter Password</label>
                                            <input 
                                            placeholder="Password" 
                                            name="password"
                                            className="form-control" 
                                            value = {this.state.password} 
                                            onChange = {this.changePasswordHandler}
                                            required/>
                                        </div>
                                        <div className="form-group"> 
                                        <label>Choose Role:</label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Admin"
                                            checked={this.state.role === "Admin"}
                                            onChange={this.changeRoleHandler}/>Admin
                                            </label>
                                    
                                            <label>
                                            <input type="radio"value="User"
                                            checked={this.state.role === "User"}
                                            onChange={this.changeRoleHandler}/>User
                                            </label>
                                         </div>
                                    </div>
                               
                                    <button className = "btn btn-success" href="#" onClick = {this.saveUser}>Register</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} style = {{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                         </div>
                    </div>
                 </div>
                );
             }
}

export default CreateUserComponent;
    