import axios from 'axios';
import { handleResponse, handleError } from "./apiUtils";

const APPLICATION_API_BASE_URL = "http://localhost:8081/api/application";

class ApplicationService {

    createApplication = (userId) => {
        return axios.post(APPLICATION_API_BASE_URL + '/' + userId)
    }
}
export default new ApplicationService();