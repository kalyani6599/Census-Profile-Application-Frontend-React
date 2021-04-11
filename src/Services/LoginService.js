import axios from 'axios';

const LOGIN_API_BASE_URL = "http://localhost:8081/api/login";

class LoginService {

    login = (user) => {
        return axios.post(LOGIN_API_BASE_URL, user)

    }

}

export default new LoginService();