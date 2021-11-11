import axios from 'axios';

const requestApi = (options) => {
    const client = axios.create({
        baseURL: 'http://localhost:8080/api',
        headers: {
            authorization: "bearer "
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