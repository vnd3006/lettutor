import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'

export async function reFreshToken(refreshToken, timezone) {
    try {
        const res = await axios.post(url_base + 'auth/refresh-token', {
            refreshToken,
            timezone
        }, {
            headers: { 'Authorization': 'Bearer ' + refreshToken }
        })
        console.log('Refresh token success');
        return res.data;
    } catch (error) {
        errorHandle(error);
        return null;
    }
}

export async function checkToken(accessToken) {
    try {
        const res = await axios.get(url_base + 'user/info', {
            headers: { 'Authorization': 'Bearer ' + accessToken }
        })
        console.log('Check token success');
        return res.data;
    } catch (error) {
        // errorHandle(error)
        console.log('Check token fail: ' + error.response.data.message);
        return null;
    }
}