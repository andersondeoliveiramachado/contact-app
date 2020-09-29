import axios from 'axios';

class UserService {

    fetchUsers

    getUserInfo(callback) {
        axios.get(`/user/info`)
            .then(callback);
    }

    getUserContactList(callback) {
        axios.get(`/user/contact/list`)
            .then(callback);
    }
}

export default new UserService();
