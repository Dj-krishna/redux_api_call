import axios from 'axios';

const getUserApi = () => {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employees`);
}

export {getUserApi}