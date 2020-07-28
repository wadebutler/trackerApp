import axios from 'axios';
import {AsyncStorage} from 'react-native';

// baseURL come from first forwarding when running ngrok and refreshes every 8 hours
const instance = axios.create({
    baseURL: 'http://474bfe92787d.ngrok.io'
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
)

export default instance;