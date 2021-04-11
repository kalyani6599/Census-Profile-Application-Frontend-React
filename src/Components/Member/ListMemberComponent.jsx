import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import { createBrowserHistory } from 'history';
import './Style/listMember.css';
import Navigation from '../Header/Navigation';
export const history = createBrowserHistory();


class ListMemberComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memberInformation: [],
            applicationId: ''
        }
        this.addMemberInformation = this.addMemberInformation.bind(this);
        this.editMemberInformation = this.addMemberInformation.bind(this);
        this.deleteMemberInformation = this.deleteMemberInformation.bind(this);
        this.viewMemberInformation = this.viewMemberInformation.bind(this);
       // this.searchByInput=this.searchByInput.bind(this);
    }
    componentDidMount() {
        MemberService.getMember()
            .then((res) => {
                this.setState({ memberInformation: res.data });

            });

        if (this.props.location.user) {
            this.setState({
                applicationId: this.props.location.user.userId,
            })

        }

    }


    addMemberInformation() {

        this.props.history.push({
            pathname: '/add-member',
            application: { applicationId: this.state.applicationId }

        });
        console.log(this.state.applicationId);
    }

    editMemberInformation() {
        // this.props.history.push(`/update-member/${memberId}`)
        // this.props.history.push(`/update-member/:id`)
        this.props.history.push({
            pathname: '/update-member',
            member: { memberId: this.state.memberId }
            
        });

    }

    deleteMemberInformation(memberId) {
        MemberService.deleteMember(memberId).then((res) => {
            this.setState({ memberInformation: this.state.memberInformation.filter(member => member.memberId !== memberId) });

        });
    }

    viewMemberInformation(memberId) {
        this.props.history.push(`/view-member/${memberId}`);
    }
    showStatistics = () => {
        let path = '/statistics';
        this.props.history.push(path);
    }

    goToGallery = () => {
        let path = '/gallery-page';
        this.props.history.push(path);
    }
    searchByInput=()=>
    {
        
        this.props.history.push({
            pathname:'/search',
            search:{searchInput:this.state.searchInput}       
        });
        console.log("member object search by id: "+this.state.searchInput);       
    }
    render() {
        return (
            <div>
                <Navigation />
                <div className="list_member">
                    <div className="list_member_heading">
                        <h2 className="h3" >Member List</h2>
                    </div>
                    <div className="list_member_tableB">

                        <table className="list_member_tRow" >
                            <thead>
                                <tr>
                                    <th>Member Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    {/* <th>Date of Birth</th> */}
                                    <th>Educational Details</th>
                                    <th>Marital Status</th>
                                    <th>Relationship</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.memberInformation.map(
                                        member =>
                                            <tr key={member.memberId}>
                                                <td>{member.memberId}</td>
                                                <td>{member.firstName}</td>
                                                <td>{member.lastName}</td>
                                                <td>{member.age}</td>
                                                <td>{member.gender}</td>
                                                {/* <td>{member.dob}</td> */}
                                                <td>{member.educationDetails}</td>
                                                <td>{member.maritalStatus}</td>
                                                <td>{member.relationship}</td>
                                                <td>
                                                    <button onClick={() => this.editMemberInformation()} className="btn btn-info"><i class="fas fa-pencil-alt"></i></button>
                                                </td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteMemberInformation(member.memberId)} className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                                                </td>

                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.viewMemberInformation(member.memberId)} className="btn btn-info"><i class="fas fa-eye"></i></button>
                                                </td>
                                            </tr>
                                    )
                                }
                            </tbody>

                        </table>

                    </div>
                    <button className="list_member_btn" onClick={this.addMemberInformation}><i class="fas fa-user-plus">Add Member</i></button>
                    <button className="list_member_btn" onClick={this.showStatistics}>Statistics</button>
                    <button className="list_member_btn" onClick={this.goToGallery}>Gallery</button>
                    
                    <form class="form-inline my-2 my-lg-0">
                                    <input 
                                    class="form-control mr-sm-2" 
                                    type="search" 
                                    placeholder="Search" 
                                    value={this.state.searchInput}
                                    aria-label="Search" />
                                   <button className="list_member_btn" onClick={this.searchByInput}>Search</button>
                    
                                </form>

                </div>
            </div>
        );
    }
}

export default ListMemberComponent;