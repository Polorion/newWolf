import axios from 'axios';


const LoginUtilit = {

    LoginPage(email,password,remeberMe) {
        return axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
            email,password,remeberMe
        },{withCredentials: true})
            .then(response => response.data)
    },
    LogoutPage() {
        return axios.delete('https://social-network.samuraijs.com/api/1.0/auth/login',{withCredentials: true})
            .then(response => response.data)
    },
}


export default LoginUtilit

