import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";

const USER_API_BASE_URL = "http://localhost:8081/api/user";

class UserService {

    createUser(user) {
        return axios.post(USER_API_BASE_URL, user)

    }
    getUser() {
        return axios.get(USER_API_BASE_URL).then(handleResponse)
            .catch(handleError);
    }
}


export default new UserService();