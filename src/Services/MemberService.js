import axios from 'axios';


const MEMBER_API_BASE_URL = "http://localhost:8081/api/member";

class MemberService {
    getMember() {
        return axios.get(MEMBER_API_BASE_URL)
    }

    createMember(applicationId, memberInformation) {
        return axios.post(MEMBER_API_BASE_URL + '/' + applicationId, memberInformation)
    }

    getMemberById(memberId) {
        return axios.get(MEMBER_API_BASE_URL + '/' + memberId)
    }
    getMemberByFirstName(firstName) {
        return axios.get(MEMBER_API_BASE_URL + '/' + firstName)
    }
    updateMember(memberId, memberInformation) {
        return axios.put(MEMBER_API_BASE_URL + '/' + memberId, memberInformation)
    }

    deleteMember(memberId) {
        return axios.delete(MEMBER_API_BASE_URL + '/' + memberId)
    }
}


export default new MemberService();