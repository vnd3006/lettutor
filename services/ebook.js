import { url_base } from "../api/connect";
import axios from "axios";
import errorHandle from '../bussiness/errorHandler'

export async function getListEbook(token, params) {
    try {
        const res = await axios.get(url_base + 'e-book', {
            params,
            headers: { 'Authorization': 'Bearer ' + token }
        })
        return res.data.data.rows;
    } catch (error) {
        errorHandle(error);
        return [];
    }
}

export async function getListCategory(token) {
    try {
        const res = await axios.get(url_base + 'content-category', {
            headers: { 'Authorization': 'Bearer ' + token }
        })
        const result = res.data.rows;
        result.forEach(item => item.label = item.title)
        return result;
    } catch (error) {
        errorHandle(error);
        return [];
    }
}