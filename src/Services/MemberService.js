import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";

const MEMBER_API_BASE_URL = "http://localhost:8081/api/member";

class MemberService {
    getMember() {
        return axios.get(MEMBER_API_BASE_URL)
    }

    createMember(memberInformation) {
        return axios.post(MEMBER_API_BASE_URL, memberInformation)
    }

    getMemberById(memberId) {
        return axios.get(MEMBER_API_BASE_URL + '/' + memberId)
    }

    updateMember(memberInformation, memberId) {
        return axios.put(MEMBER_API_BASE_URL + '/' + memberId, memberInformation)
    }

    deleteMember(memberId) {
        return axios.delete(MEMBER_API_BASE_URL + '/' + memberId)
    }
}


export default new MemberService();