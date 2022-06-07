import axios from 'axios';


const HeaderUtilit = {

    Autirizarion() {
        return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => response.data)
    },
}


export default HeaderUtilit

