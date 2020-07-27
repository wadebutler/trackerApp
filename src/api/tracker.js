import axios from 'axios';

// baseURL come from first forwarding when running ngrok and refreshes every 8 hours
export default axios.create({
    baseURL: 'http://474bfe92787d.ngrok.io'
})