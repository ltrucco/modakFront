import axios from 'axios'

export default axios.create({
    baseURL: 'https://modak-api.herokuapp.com',
    timeout: 10000000,
    responseType: "json",
    withCredentials: false,
    headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})