import axios from 'axios';


const USER_API_BASE_URL = "http://localhost:8081/api/user";

class UserService {

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user)

    }
    getUser() {
        return axios.get(USER_API_BASE_URL)
    }
}


export default new UserService();