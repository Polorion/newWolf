import axios from 'axios';

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`

const UsersUtilit = {
    UnFollow(id) {

       return axios.delete(baseUrl + `follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": '1fa31ee6-b610-4b4b-b27f-b82fea224749'
                }
            }).then(respons => respons.data)

    },
    Follow(id) {
       return axios.post(baseUrl + `follow/${id}`, {},
            {
                withCredentials: true,
                headers: {
                    "API-KEY": '1fa31ee6-b610-4b4b-b27f-b82fea224749'
                }
            }).then(respons => respons.data)
    },

    GetUsers(currentPage, renderUsers) {
        return axios.get(baseUrl + `users?page=${currentPage} &count=${renderUsers}`,
            {withCredentials: true}).then(respons => respons.data)
    }

}

export default UsersUtilit