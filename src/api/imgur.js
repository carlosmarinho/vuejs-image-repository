import qs from 'qs';
import axios from 'axios';

//const CLIENT_ID = '048c86660206bc9';
const CLIENT_ID = '57ee1a023162f21';
//SECRECT = 0abc1b774a4c588c61b311486ada9625d0c42280
const ROOT_URL = 'https://api.imgur.com'


export default {
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
    },

    fetchImages() {
        console.log("token aqui: ", token)
        let token =  window.localStorage.getItem('imgur_token')
        return axios.get(`${ROOT_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    uploadImages(images, token) {
        const promises = Array.from(images).map(image => {
            const formData = new FormData();
            formData.append('image', image);

            return axios.post(`${ROOT_URL}/3/image`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        })

        return Promise.all(promises);
    }
}