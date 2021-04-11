import React, { Component } from 'react'
import MemberService from '../../Services/MemberService'


export class SearchMemberComponent extends Component 
{
    constructor(props){
        super(props)

        this.state =
        {
            memberInformation: [],
            searchInput:'',
        }
        
              
    }
    componentDidMount()
    {
        
        if (this.props.location.search) {
            this.setState({
                searchInput: this.props.location.search.searchInput,
            })
            
        }
        
      let memberId;
      let firstName;
        console.log("memberId1 "+this.state.searchInput);
        console.log("memberId2 "+memberId);

        if(Number.isInteger(this.state.searchInput))
        {
             memberId=this.state.searchInput;
        MemberService.getMemberById(memberId).then((res)=>{
             
            this.setState({
                memberInformation:res.data,
                
            })
        })
        }else{
             firstName=this.state.searchInput;
            MemberService.getMemberByFirstName(firstName).then((res)=>{
                this.setState({
                    memberInformation:res.data
                })
            })
        }
    }
   
    render() {
        return (
            <div>
                 {/* <Navigation /> */}
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
                                        
                                     </tr>  
                                )
                            }
                    </tbody>

                </table>

            </div>
             <button className="list_member_btn" onClick={this.addMemberInformation}>Add Member</button>
            </div>
        
            </div>
        )
    }
}
export default SearchMemberComponent;