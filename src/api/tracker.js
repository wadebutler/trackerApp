import axios from 'axios';

// baseURL come from first forwarding when running ngrok and refreshes every 8 hours
export default axios.create({
    baseURL: 'http://58af5dcc4c06.ngrok.io'
})