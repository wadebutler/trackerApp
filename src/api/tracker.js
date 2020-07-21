import axios from 'axios';

// baseURL come from first forwarding when running ngrok and refreshes every 8 hours
export default axios.create({
    baseURL: 'http://a00d1e8c057e.ngrok.io'
})