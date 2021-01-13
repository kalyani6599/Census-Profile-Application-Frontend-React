import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';

class ViewMemberComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            memberInformation: {}
        }

    }

    componentDidMount(){
        MemberService.getMemberById(this.state.id).then( res => {
            this.setState({memberInformation: res.data});
        })
    }

    render() {
        return (
            <div>
               <div className= "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Member Details</h3>
                    <div className= "card-body">
                        <div className = "row">
                            <label>First Name: </label>
                            <div>{this.state.memberInformation.firstName}</div>
                        </div>

                        <div className = "row">
                            <label>Last Name: </label>
                            <div>{this.state.memberInformation.lastName}</div>
                        </div>

                        <div className = "row">
                            <label>Age: </label>
                            <div>{this.state.memberInformation.age}</div>
                        </div>
                        <div className = "row">
                            <label>Gender: </label>
                            <div>{this.state.memberInformation.gender}</div>
                        </div>
                        <div className = "row">
                            <label>BirthDate: </label>
                            <div>{this.state.memberInformation.bod}</div>
                        </div>

                        <div className = "row">
                            <label>Education Deatils: </label>
                            <div>{this.state.memberInformation.educationDetails}</div>
                        </div>

                        <div className = "row">
                            <label>Marital Status: </label>
                            <div>{this.state.memberInformation.maritalStatus}</div>
                        </div>

                        <div className = "row">
                            <label>Relationship: </label>
                            <div>{this.state.memberInformation.relationship}</div>
                        </div>
                           
                    </div>
                </div>
            </div>

        );
    }
}

export default ViewMemberComponent;
