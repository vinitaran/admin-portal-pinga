import axios from 'axios';


const requestApi = (options) => {
    let token = null
    try{
        token = "Bearer "+localStorage.getItem('admintoken')
    }catch{
        token = null
    }
    const client = axios.create({
        // baseURL: 'http://127.0.0.1:8080/api',
        baseURL: 'https://stagapi.pingaweb.com',
        // baseURL: 'https://api.shreejiinfashion.com/api',
        headers: {
            Authorization: token
        }
    });

    const onSuccess = (response) => {
        return response
    };

    const onError = err => {
        return err
    }

    return client(options).then(onSuccess).catch(onError);
}

export default requestApi