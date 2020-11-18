import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://africanmarket-bwdeploy.herokuapp.com/',
        headers:{
            authorization: token
        }
    })
}