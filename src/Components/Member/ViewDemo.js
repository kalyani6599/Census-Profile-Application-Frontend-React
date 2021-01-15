import React, { Component } from 'react';
import MemberService from '../../Services/MemberService';
import './Style/ViewDemo.css'
class ViewDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            memberInformation: []
        }
        this.addMemberInformation = this.addMemberInformation.bind(this);
        this.editMemberInformation = this.addMemberInformation.bind(this);
        this.deleteMemberInformation = this.deleteMemberInformation.bind(this);
        this.viewMemberInformation = this.viewMemberInformation.bind(this);
    }
    componentDidMount() {
        MemberService.getMember()
            .then((res) => {
                this.setState({ memberInformation: res.data });

            });
    }


    addMemberInformation() {
        this.props.history.push('/add-member');
    }

    editMemberInformation(id) {
        this.props.history.push(`/update-member/${id}`)
    }

    deleteMemberInformation(id) {
        MemberService.deleteMemberInformation(id).then((res) => {
            this.setState({ memberInformation: this.state.memberInformation.filter(memberInformation => memberInformation.id !== id) });
        });
    }

    viewMemberInformation(id) {
        this.props.history.push(`/view-member/${id}`);
    }


    render() {
        return (
            <div className="row">

                {/* <div className="row">
                    <button className="btn btn-primary" onClick={this.addMemberInformation}>Add Employee</button>
                </div> */}

                {
                    this.state.memberInformation.map(
                        memberInformation =>

                            <div key={memberInformation.id} className="card text-white  col-lg-2 col-md-6 col-sm-12 bg-dark mb-3" >
                                <div className="card-header icon-head"><p><i class="fas fa-user fa-3x"></i></p></div>
                                <div className="card-body">
                                    <h5 className="card-title">{memberInformation.memberId}{" "}{memberInformation.firstName}{" "}{memberInformation.lastName}</h5>
                                    <p className="card-text p-icon"><i class="fas fa-trash-alt icon"></i><i class="fas fa-user-edit icon"></i></p>
                                </div>
                            </div>

                    )
                }
            </div >

        );
    }
}

export default ViewDemo;