import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import './Style/createMember.css';
import Navigation from '../Header/Navigation';

const initialState = {
    applicationId: "",
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
    relationshipError: ""
}

class CreateMemberComponent extends Component {

    state = initialState;
    constructor(props) {
        super(props);


        this.saveMemberInformation = this.saveMemberInformation.bind(this);
    }

    componentDidMount() {
        if (this.props.location.application) {
            this.setState({
                applicationId: this.props.location.application.applicationId,
            })
        }
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

        var name = /^[a-zA-Z]+$/;
        var date = /^[0-9]{4}[-][0-9]{2}[-][0-9]{2}/;
        var currDate = new Date().toISOString().slice(0, 10).toString();

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

        if (!this.state.gender) {
            genderError = "Gender Cannot be Empty.. Please select any one gender";
        }

        if (!this.state.dob) {
            dobError = "Date of Birth Cannot be empty.. Please fill details";
        } else if (!date.test(this.state.dob)) {
            dobError = "Please Enter Date in [yyyy-DD-MM] format";
        } else if (currDate === this.state.dob) {
            dobError = "Current Date and BirthDate Cannot be Same !";
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

        if (firstNameError || lastNameError || genderError || dobError || educationDetailsError || maritalStatusError || relationshipError) {
            this.setState({ firstNameError, lastNameError, genderError, dobError, educationDetailsError, maritalStatusError, relationshipError });
            return false;
        }
        return true;
    };

    saveMemberInformation = (e) => {
        console.log("before passing to create member api application is:" + this.state.applicationId)
        e.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            alert(`${this.state.firstName} ${this.state.lastName} Mmeber Added Successfully !!!!`)
            let member = {

                firstName: this.state.firstName,
                lastName: this.state.lastName,
                gender: this.state.gender,
                dob: this.state.dob,
                educationDetails: this.state.educationDetails,
                maritalStatus: this.state.maritalStatus,
                relationship: this.state.relationship

            };
            console.log("member infor response" + JSON.stringify(member));
            MemberService.createMember(this.state.applicationId, member)
                .then(res => {
                    this.props.history.push('/member');
                })

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
                <div className="member">
                    <h3 className="create_text-center">Add Member</h3>
                    <div className="create_member">
                        <div className="createForm">
                            <div className="createForm_body">
                                <form >
                                    <div className="form-group">
                                        <label><b>Enter First Name:</b></label>
                                        <input placeholder="First Name" name="firstName"
                                            className="form-control" value={this.state.firstName}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.firstNameError}</div>
                                    </div>

                                    <div className="form-group">
                                        <label><b>Enter Last Name:</b></label>
                                        <input placeholder="Last Name" name="lastName"
                                            className="form-control" value={this.state.lastName}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.lastNameError} </div>
                                    </div>

                                    <div className="form-group">
                                        <label><b> Select Gender:</b></label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="1" name="gender"
                                                    checked={this.state.gender === "1"}
                                                    onChange={this.handleChange} />Female
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="0" name="gender"
                                                    checked={this.state.gender === "0"}
                                                    onChange={this.handleChange} />Male
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="2" name="gender"
                                                    checked={this.state.gender === "2"}
                                                    onChange={this.handleChange} />Other
                                            </label>

                                            <div style={{ fontSize: 12, color: "red" }}> {this.state.genderError}  </div>
                                        </div>

                                    </div>


                                    <div className="form-group">
                                        <label><b>Enter BirthDate(yyyy-mm-dd):</b></label>
                                        <input placeholder="BirthDate" name="dob"
                                            className="form-control" value={this.state.dob}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.dobError}  </div>
                                    </div>



                                    <div className="form-group">
                                        <label><b>Enter Education Details:</b></label>
                                        <input placeholder="Education Details" name="educationDetails"
                                            className="form-control" value={this.state.educationDetails}
                                            onChange={this.handleChange} />
                                        <div style={{ fontSize: 12, color: "red" }}> {this.state.educationDetailsError} </div>
                                    </div>

                                    <div className="form-group">
                                        <label><b>Choose Maritial Status:</b></label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="0" name="maritalStatus"
                                                    checked={this.state.maritalStatus === "0"}
                                                    onChange={this.handleChange} />Married
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="1" name="maritalStatus"
                                                    checked={this.state.maritalStatus === "1"}
                                                    onChange={this.handleChange} />Unmarried
                                            </label>
                                            <div style={{ fontSize: 12, color: "red" }}> {this.state.maritalStatusError}  </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label><b>Choose Relationship:</b></label>

                                        <div class="radio">
                                            <label>
                                                <input type="radio" value="0" name="relationship"
                                                    checked={this.state.relationship === "0"}
                                                    onChange={this.handleChange} />Mother
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="1" name="relationship"
                                                    checked={this.state.relationship === "1"}
                                                    onChange={this.handleChange} />Father
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="2" name="relationship"
                                                    checked={this.state.relationship === "2"}
                                                    onChange={this.handleChange} />Son
                                            </label>
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="radio" value="3" name="relationship"
                                                    checked={this.state.relationship === "3"}
                                                    onChange={this.handleChange} />Daughter
                                            </label>
                                            <div style={{ fontSize: 12, color: "red" }}> {this.state.relationshipError}  </div>
                                        </div>


                                    </div>
                                    <div className="create_member_Buttons">

                                        <button className="create_btn btn-success" onClick={this.saveMemberInformation} ><i class="far fa-check-circle"></i>&nbsp;&nbsp;Save</button>
                                        <button className="create_btn btn-danger" onClick={this.cancel.bind(this)}><i class="far fa-times-circle"></i>&nbsp;&nbsp;Cancel</button>
                                    </div>
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