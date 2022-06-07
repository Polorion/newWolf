import axios from 'axios';


const MainContentUtilit = {

    GetUserProfile(id) {
        return axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + id)
            .then(response => response.data)
    },

    GetStatus(userId){
        return axios.get('https://social-network.samuraijs.com/api/1.0/profile/status/' + userId)


    },
    ChangeStatus(status){
        return  axios.put('https://social-network.samuraijs.com/api/1.0/profile/status',{
            status:status
        },{
            withCredentials: true,
            headers: {
                "API-KEY": '1fa31ee6-b610-4b4b-b27f-b82fea224749'
            }

        })
    }

}

export default MainContentUtilit