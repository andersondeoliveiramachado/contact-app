import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Auth {
    isAuthenticated() {
        return !!cookies.get('jwt');
    }

    getRedirectUrl(callback) {
        axios.get(`/auth/redirect`)
            .then(res => callback(res));
    }
}

export default new Auth();
