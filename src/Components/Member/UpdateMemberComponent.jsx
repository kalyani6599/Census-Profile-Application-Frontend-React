import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import Navigation from '../Header/Navigation';



const initialState = {
    applicationId: "",
    memberId:"",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    educationDetails: "",
    maritalStatus: "",
    relationship: "",

    firstNameError: "",
    lastNameError: "",
    genderError: "",
    dobError: "",
    educationDetailsError: "",
    maritalStatusError: "",
    relationshipError: "",
    ageError: "",
}

class UpdateCreateComponent extends Component {
    state = initialState;
    constructor(props) {
        super(props);

      

        this.updateMemberInformation = this.updateMemberInformation.bind(this);
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
        let firstNameError = "";
        let lastNameError = "";
        let genderError = "";
        let dobError = "";
        let educationDetailsError = "";
        let maritalStatusError = "";
        let relationshipError = "";
        let ageError = "";

        var name = /^[a-zA-Z]+$/;
        var date = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}/

        if (!this.state.firstName) {
            firstNameError = "First Name Cannot be empty";
        } else if (this.state.firstName.length < 4) {
            firstNameError = "first name must be atleast 3 characters long";
        }
        else if (!name.test(this.state.firstName)) {
            firstNameError = "First Name must contain only alphabets ";
        }

        if (!this.state.lastName) {
            lastNameError = "last Name Cannot be empty";
        } else if (this.state.lastName.length < 4) {
            lastNameError = "Last name must be atleast 3 characters long";
        }
        else if (!name.test(this.state.lastName)) {
            lastNameError = "Last Name must contain only alphabets ";
        }

        if (!this.state.age) {
            ageError = "Age Cannot be Empty";
        } else if (this.state.age < 125) {
            ageError = "Age Cannot be greater than 125 yrs !";
        }

        if (!this.state.gender) {
            genderError = "Gender Cannot be Empty.. Please select any one gender";
        }

        if (!this.state.dob) {
            dobError = "Date of Birth Cannot be empty.. Please fill details";
        } else if (!date.test(this.state.dob)) {
            dobError = "Please Enter Date in [yyyy-DD-MM] format";
        }

        if (!this.state.educationDetails) {
            educationDetailsError = "Education Details Cannot be Empty.. Please fill Education Details";
        }

        if (!this.state.maritalStatus) {
            maritalStatusError = "Marital Status Cannot be Empty... Please select any one option";
        }

        if (!this.state.relationship) {
            relationshipError = "Relationship Cannot be Empty... Please select any one option";
        }

        if (firstNameError || lastNameError || genderError || ageError || dobError || educationDetailsError || maritalStatusError || relationshipError) {
            this.setState({ firstNameError, lastNameError, ageError, genderError, dobError, educationDetailsError, maritalStatusError, relationshipError });
            return false;
        }
        return true;
    };

    componentDidMount() {
        if(this.props.location.member)
        {
            this.setState({
                memberId:this.props.location.member.memberId,
            })
        }
        MemberService.getEmployeeById(this.state.memberId).then((res) => {
            let member = res.data;
            this.setState({
                memberId: member.memberId,
                firstName: member.firstName,
                lastName: member.lastName,
                age: member.age,
                gender: member.gender,
                dob: member.dob,
                educationDetails: member.educationDetails,
                maritalStatus: member.maritalStatus,
                relationship: member.relationship
            });
        });
    }

    updateMemberInformation = (e) => {
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            let member = {
                
                firstName: this.state.firstName,
                LastName: this.state.LastName,
                age: this.state.age,
                gender: this.state.gender,
                dob: this.state.dob,
                educationDetails: this.state.educationDetails,
                maritalStatus: this.state.maritalStatus,
                relationship: this.state.relationship
            };
            console.log(JSON.stringify(member));
            MemberService.updateMember(this.state.memberId,this.state.memberId).then((res) => {
                this.props.history.push('/member');
            });

            //clear the form
            this.setState(initialState);
        }
    }

    cancel() {
        this.props.history.push('/member');
    }


    render() {
        return (
            <div>
                <Navigation />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Member Information</h3>
                            <div className="card-body">
                                <form onSubmit={this.updateMemberInformation}>
                                    <div className="form-group">
                                        <label>Enter First Name</label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.firstNameError}</div>
                                    </div>

                                    <div className="form-group">
                                        <label>Enter Last Name</label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.lastNameError} </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Enter age</label>
                                        <input placeholder="Age" name="age"
                                            className="form-control" value={this.state.age}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.ageError} </div>


                                    </div>

                                    <div className="form-group">
                                        <label>Select Gender:</label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="Female"
                                                    checked={this.state.gender === "Female"}
                                                    onChange={this.handleChange} />Female
                                            </label>

                                            <label>
                                                <input type="radio" value="Male"
                                                    checked={this.state.gender === "Male"}
                                                    onChange={this.handleChange} />Male
                                            </label>

                                            <label>
                                                <input type="radio" value="Other"
                                                    checked={this.state.gender === "Other"}
                                                    onChange={this.handleChange} />Other
                                            </label>
                                            <div style={{ fontSize: 12, color: "red" }}> {this.state.genderError}  </div>

                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label>Enter BirthDate(yyyy-mm-dd)</label>
                                        <input placeholder="BirthDate" name="dob"
                                            className="form-control" value={this.state.dob}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.dobError}  </div>
                                    </div>



                                    <div className="form-group">
                                        <label>Enter Education Details</label>
                                        <input placeholder="Education Details" name="educationDetails"
                                            className="form-control" value={this.state.educationDetails}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.educationDetailsError} </div>

                                    </div>

                                    <div className="form-group">
                                        <label>Choose Maritial Status:</label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="Married"
                                                    checked={this.state.maritalStatus === "Married"}
                                                    onChange={this.handleChange} />Married
                                            </label>

                                            <label>
                                                <input type="radio" value="Unmarried"
                                                    checked={this.state.maritalStatus === "Unmarried"}
                                                    onChange={this.handleChange} />Unmarried
                                            </label>
                                            <div style={{ fontSize: 12, color: "red" }}>{this.state.maritalStatusError}  </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Choose Relationship:</label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="Mother"
                                                    checked={this.state.relationship === "Mother"}
                                                    onChange={this.handleChange} />Mother
                                            </label>

                                            <label>
                                                <input type="radio" value="Father"
                                                    checked={this.state.relationship === "Father"}
                                                    onChange={this.handleChange} />Father
                                            </label>

                                            <label>
                                                <input type="radio" value="Son"
                                                    checked={this.state.relationship === "Son"}
                                                    onChange={this.handleChange} />Son
                                            </label>

                                            <label>
                                                <input type="radio" value="Daughter"
                                                    checked={this.state.relationship === "Daughter"}
                                                    onChange={this.handleChange} />Daughter
                                            </label>
                                            <div style={{ fontSize: 12, color: "red" }}> {this.state.relationshipError}  </div>
                                        </div>

                                    </div>

                                    <button className="btn btn-success">Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UpdateCreateComponent;