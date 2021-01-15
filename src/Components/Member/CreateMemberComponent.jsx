import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';

class CreateMemberComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
                id:'',
                firstName:'',
                lastName:'',
                age:'',
                gender:'',
                dob: '',
                educationDetails:'',
                maritalStatus:'',
                relationship: ''
        
        }
        this.changeMemberFirstNameHandler= this.changeMemberFirstNameHandler.bind(this);
        this.changeMemberLastNameHandler= this.changeMemberLastNameHandler.bind(this);
        this.changeAgeHandler = this.changeAgeHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeEducationDetailsHandler = this.changeEducationDetailsHandler.bind(this);
        this.changeDobHandler= this.changeDobHandler.bind(this);
        this.changeMaritalStatusHandler = this.changeMaritalStatusHandler.bind(this);
        this.changeRelationshipHandler = this.changeRelationshipHandler.bind(this);
       
        this.saveMemberInformation = this.saveMemberInformation.bind(this);
    }     

    saveMemberInformation = (e)=>{
        e.preventDefault();
        let memberInformation ={ id: null, firstName: this.state.firstName, 
            LastName: this.state.LastName,age: this.state.age,gender: this.state.gender,
            dob: this.state.dob,educationDetails: this.state.educationDetails, 
            maritalStatus: this.state.maritalStatus, relationship: this.state.relationship
        };
        console.log(JSON.stringify(memberInformation));
        MemberService.createMember(memberInformation).then(res =>{
            this.props.history.push('/member');
        })
    }  

    cancel(){
        this.props.history.push('/member');
    }

    changeMemberFirstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }

    changeMemberLastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
    }

    changeAgeHandler = (event) =>{
        this.setState({age: event.target.value});
    }

    changeGenderHandler = (event) =>{
        this.setState({gender: event.target.value});
    }

    changeDobHandler = (event) =>{
        this.setState({dob: event.target.value});
    }

    changeEducationDetailsHandler = (event) =>{
        this.setState({educationDetails: event.target.value});
    }

    changeMaritalStatusHandler = (event) =>{
        this.setState({maritalStatus: event.target.value});
    }

    changeRelationshipHandler = (event) =>{
        this.setState({relationship: event.target.value});
    }

    render() {
        return (
            <div>               
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group"> 
                                        <label>Enter First Name</label>
                                        <input 
                                        placeholder="First Name" 
                                        name="firstName"
                                        className="form-control" 
                                        value = {this.state.firstName} 
                                        onChange = {this.changeMemberFirstNameHandler} />
                                    </div>
                                    
                                    <div className="form-group"> 
                                        <label>Enter Last Name</label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" 
                                            value = {this.state.lastName} 
                                            onChange = {this.changeMemberLastNameHandler}/>
                                    </div>

                                    <div className="form-group"> 
                                        <label>Enter age</label>
                                        <input placeholder="Age" name="age"
                                            className="form-control" value = {this.state.age} 
                                            onChange = {this.changeAgeHandler}/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Select Gender:</label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Female"
                                            checked={this.state.gender === "Female"}
                                            onChange = {this.changeGenderHandler}/>Female
                                            </label>

                                            <label>
                                            <input type="radio"value="Male"
                                            checked={this.state.gender === "Male"}
                                            onChange = {this.changeGenderHandler}/>Male
                                            </label>
                                        
                                            <label>
                                            <input type="radio"value="Other"
                                            checked={this.state.gender === "Other"}
                                            onChange = {this.changeGenderHandler}/>Other
                                            </label>
                                        </div>
                                    
                                    </div> 


                                    <div className="form-group"> 
                                        <label>Enter BirthDate(yyyy-mm-dd)</label>
                                        <input placeholder="BirthDate" name="dob"
                                            className="form-control" value = {this.state.dob} 
                                            onChange = {this.changeDobHandler}/>
                                    </div>



                                    <div className="form-group"> 
                                        <label>Enter Education Details</label>
                                        <input placeholder="Education Details" name="educationDetails"
                                            className="form-control" value = {this.state.educationDetails} 
                                            onChange = {this.changeEducationDetailsHandler}/>
                                    </div>

                                    <div className="form-group"> 
                                        <label>Choose Maritial Status:</label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Married"
                                            checked={this.state.maritalStatus === "Married"}
                                            onChange={this.changeMaritalStatusHandler}/>Married
                                            </label>
                                    
                                            <label>
                                            <input type="radio"value="Unmarried"
                                            checked={this.state.maritalStatus === "Unmarried"}
                                            onChange={this.changeMaritalStatusHandler}/>Unmarried
                                            </label>
                                         </div>
                                    </div>

                                    <div className="form-group"> 
                                        <label>Choose Relationship:</label>
                                        
                                        <div class="radio">
                                            <label>
                                            <input type="radio"value="Mother"
                                            checked={this.state.relationship === "Mother"}
                                            onChange={this.changeRelationshipHandler}/>Mother
                                            </label>
                                    
                                            <label>
                                            <input type="radio"value="Father"
                                            checked={this.state.relationship === "Father"}
                                            onChange={this.changeRelationshipHandler}/>Father
                                            </label>
                                    
                                            <label>
                                            <input type="radio"value="Son"
                                            checked={this.state.relationship === "Son"}
                                            onChange={this.changeRelationshipHandler}/>Son
                                            </label>
                                    
                                            <label>
                                            <input type="radio"value="Daughter"
                                            checked={this.state.relationship === "Daughter"}
                                            onChange={this.changeRelationshipHandler}/>Daughter
                                            </label>
                                        </div>

                                    </div> 
                                    
                                    <button className = "btn btn-success" onClick = {this.saveMemberInformation}>Save</button>
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



export default CreateMemberComponent;